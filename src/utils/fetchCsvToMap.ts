export async function fetchCsvToMap(url: string): Promise<Record<string, string>> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
  const text = await res.text();
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return {};

  const parseLine = (line: string): string[] => {
    const fields: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
          cur += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        fields.push(cur);
        cur = '';
      } else {
        cur += ch;
      }
    }
    fields.push(cur);
    return fields.map((f) => f.trim());
  };

  const header = parseLine(lines[0]);

  const nameKeys = new Set([
    'urunadi',
    'ürün adı',
    'ürün',
    'name',
    'product',
    'urun_adi',
    'urunadi',
  ].map((s) => s.toLowerCase()));
  const priceKeys = new Set(['fiyat', 'price'].map((s) => s.toLowerCase()));

  let nameIdx = -1;
  let priceIdx = -1;
  for (let i = 0; i < header.length; i++) {
    const h = header[i].toLowerCase();
    if (nameIdx === -1 && nameKeys.has(h)) nameIdx = i;
    if (priceIdx === -1 && priceKeys.has(h)) priceIdx = i;
  }

  // If header doesn't contain expected keys, assume first column = name, second = price
  if (nameIdx === -1) nameIdx = 0;
  if (priceIdx === -1) priceIdx = Math.min(1, header.length - 1);

  // Detect if first line is a header by checking whether the first data row's price looks numeric
  let startLine = 1;
  if (lines.length === 1) startLine = 0;
  else {
    const second = parseLine(lines[1]);
    const headerPriceHasDigit = /\d/.test(header[priceIdx] || '');
    const secondPriceHasDigit = /\d/.test(second[priceIdx] || '');
    if (secondPriceHasDigit && !headerPriceHasDigit) startLine = 1;
    else if (!secondPriceHasDigit && headerPriceHasDigit) startLine = 0;
    else startLine = 1; // prefer skipping header by default
  }

  const map: Record<string, string> = {};
  for (let i = startLine; i < lines.length; i++) {
    const cols = parseLine(lines[i]);
    const name = (cols[nameIdx] ?? '').trim();
    const price = (cols[priceIdx] ?? '').trim();
    if (name) map[name] = price;
  }

  return map;
}

// Example usage:
// import { fetchCsvToMap } from '../utils/fetchCsvToMap';
// fetchCsvToMap('https://.../output=csv').then(map => console.log(map));

export default fetchCsvToMap;
