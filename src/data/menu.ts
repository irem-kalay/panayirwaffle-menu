import wafflesImg from '../assets/photos/wafflelar.jpg';
import kahvelerImg from '../assets/photos/kahveler.jpg';
import iceceklerImg from '../assets/photos/icecekler.jpg';
import dondurmaImg from '../assets/photos/dondurma.jpg';
import brukselImg from '../assets/photos/bruksel.jpg';
import bubbleWaffleImg from '../assets/photos/bubbleWaffle.jpg';
import bubbleSandvicImg from '../assets/photos/bubbleSandvicWaffle.jpg';
import bubbleCupWaffleImg from '../assets/photos/bubbleCupWaffle.jpg';
import bubbleDondurmalıSandvicImg from '../assets/photos/bubbleDondurmalıSandvicWaffle.jpg';
import cilekTutkusuImg from '../assets/photos/cilekTutukusu.jpg';
import fistikImg from '../assets/photos/fıstıkk.jpg';
import karamellimImg from '../assets/photos/karamellim.jpg';
import lotusImg from '../assets/photos/lotus.jpg';
import oreoImg from '../assets/photos/oreo.jpg';
import ormanMeyveliImg from '../assets/photos/ormanmeyveli.jpg';
import panayirImg from '../assets/photos/panayir.jpg';
import snowyImg from '../assets/photos/snowy.jpg';
import dondurma1Img from '../assets/photos/dondurma1.jpg';
import dondurma2Img from '../assets/photos/dondurma2.jpg';
import dondurma3Img from '../assets/photos/dondurma3.jpg';
import dondurma4Img from '../assets/photos/dondurma4.jpg';
import klasikWaffleImg from '../assets/photos/klasikWaffle.jpg';
import dubaiWaffleImg from '../assets/photos/dubaiWaffle.jpg';
import dondurmalıWaffleImg from '../assets/photos/dondurmalıWaffle.jpg';
import eksiImg from '../assets/photos/eksi.jpg';

export type MenuCategoryId = 'waffles' | 'dondurmalar' | 'kahveler' | 'icecekler';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  imageUrl?: string;
  subcategory: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  homeDescription: string;
  pageDescription: string;
  heroImage: string;
  subcategories: string[];
  items: MenuItem[];
}

export const menuCategoryList: MenuCategory[] = [
  {
    id: 'waffles',
    title: 'Waffle Çeşitleri',
    homeDescription: 'Klasik, Brüksel, Bubble ve özel tariflerle hazırlanan waffle menüsü.',
    pageDescription: 'Klasik, Brüksel, Bubble ve Waffle Spesiyallerimiz bölümlerinden seçim yapın.',
    heroImage: wafflesImg,
    subcategories: ['Klasik', 'Brüksel Waffle', 'Bubble Waffle', 'Waffle Spesiyallerimiz'],
    items: [
      /* —— Klasik —— */
      {
        name: 'Kendi Waffle’ını Oluştur',
        description: 'Sınırsız seçim hakkıyla istediğin gibi tasarla.',
        price: '350 ₺',
        imageUrl: wafflesImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Klasik Waffle',
        description:
          'Waffle hamuru üzerine sütlü çikolata, muz, çilek, kivi, fındık ve beyaz çikolata sos.',
        price: '350 ₺',
        imageUrl: klasikWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Dondurmalı Waffle',
        description: 'Bir top dondurma ile servis edilir.',
        price: '400 ₺',
        imageUrl: dondurmalıWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Dubai Waffle',
        description:
          'Çıtır waffle hamuru üzerine Belçika çikolatası arasında Dubai çikolata iç dolgusu üzerine pirinç antep fıstığı ve antep fıstığı sos; yanında muz, çilek.',
        price: '400 ₺',
        imageUrl: dubaiWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Waffle American',
        description:
          'Waffle hamuru üzerine damla çikolata, üzerine akçaağaç şurubu; yanına çilek, muz.',
        price: '400 ₺',
        imageUrl: klasikWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Double American',
        description:
          'İki katlı waffle hamuru içerisinde damla çikolata, tereyağı, akçaağaç şurubu; meyvesiz servis edilir.',
        price: '500 ₺',
        imageUrl: klasikWaffleImg,
        subcategory: 'Klasik',
      },
      /* —— Brüksel Waffle —— */
      {
        name: 'Fıstık Güzeli',
        description:
          'Çıtır Brüksel waffle hamuru üzerine beyaz, sütlü Belçika çikolatası, muz, çilek, fındık, antep fıstığı ve antep fıstığı sos.',
        price: '450 ₺',
        imageUrl: fistikImg,
        subcategory: 'Brüksel Waffle',
      },
      {
        name: 'Snowy',
        description:
          'Çıtır Brüksel waffle hamuru üzerine beyaz, sütlü Belçika çikolatası, muz, çilek, kivi, kestane şekeri, incir, beyaz çikolata sos ve Hindistan cevizi.',
        price: '450 ₺',
        imageUrl: snowyImg,
        subcategory: 'Brüksel Waffle',
      },
      {
        name: 'Brüksel Panayırı',
        description:
          'Çıtır Brüksel waffle hamuru üzerine beyaz, sütlü Belçika çikolatası, muz, çilek, fındık, yer fıstığı, file badem, antep fıstığı, beyaz çikolata sos.',
        price: '450 ₺',
        imageUrl: brukselImg,
        subcategory: 'Brüksel Waffle',
      },
      {
        name: 'Orman Meyveli',
        description:
          'Çıtır Brüksel waffle hamuru üzerine beyaz, sütlü Belçika çikolatası, muz, çilek ve orman meyveleri eşliğinde antep fıstığı parçalarının lezzet şöleni.',
        price: '450 ₺',
        imageUrl: ormanMeyveliImg,
        subcategory: 'Brüksel Waffle',
      },
      {
        name: 'Cream Waffle',
        description: 'Çıtır Brüksel waffle hamuru üzerine krema üzerine muz, çilek.',
        price: '400 ₺',
        imageUrl: brukselImg,
        subcategory: 'Brüksel Waffle',
      },
      /* —— Bubble Waffle —— */
      {
        name: 'Bubble Waffle (Tabak)',
        price: '450 ₺',
        imageUrl: bubbleWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Cup (Bardak) Waffle',
        price: '400 ₺',
        imageUrl: bubbleCupWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Dondurmalı Sandviç Waffle',
        price: '490 ₺',
        imageUrl: bubbleDondurmalıSandvicImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Sandviç Waffle',
        price: '450 ₺',
        imageUrl: bubbleSandvicImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Kova Waffle',
        price: '600 ₺',
        imageUrl: bubbleWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      /* —— Waffle Spesiyallerimiz —— */
      {
        name: 'Karamellim',
        description: 'Sütlü çikolata, muz, çilek, fındık, özel karamel sos.',
        price: '350 ₺',
        imageUrl: karamellimImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Fıstık Şöleni',
        description: 'Sütlü çikolata, muz, çilek, fındık, antep fıstığı sos, beyaz çikolata.',
        price: '350 ₺',
        imageUrl: fistikImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Bitterim',
        description:
          'Bitter çikolata, muz, çilek, bitter damla çikolata, bitter pirinç patlağı, üzerine bitter sos.',
        price: '350 ₺',
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Panayır Special Waffle',
        description:
          'Sütlü çikolata, muz, çilek, krep kırığı, fındık, sütlü damla çikolata, beyaz pirinç patlağı, bonibon, tutti frutti üzerine beyaz çikolata sos.',
        price: '350 ₺',
        imageUrl: panayirImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Çilek Tutkusu',
        description:
          'Sütlü çikolata, çilek, frambuaz, pirinç patlağı, frambuaz damla çikolata üzerine çilek sos.',
        price: '350 ₺',
        imageUrl: cilekTutkusuImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Beyaz Düş',
        description: 'Beyaz çikolata, muz, beyaz pirinç patlağı, fındık üzerine beyaz çikolata sos.',
        price: '350 ₺',
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Lotus Waffle',
        description:
          'Waffle hamuru üzerine Lotus karamalize bisküvi ezmesi, muz, çilek, Lotus bisküvi parçaları üzerine beyaz çikolata; 1 adet Lotus bisküvi.',
        price: '400 ₺',
        imageUrl: lotusImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Oreo Waffle',
        description:
          'Sütlü çikolata, muz, parça fındık, sütlü pirinç patlağı, Oreo bisküvi parçaları, beyaz çikolata sos üzerine 1 adet Oreo bisküvi.',
        price: '400 ₺',
        imageUrl: oreoImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Ekşi Severlere Özel',
        description:
          'Tabanda sütlü çikolata, muz, çilek, kivi, tutti frutti, portakal şekeri üzerine sütlü çikolata sos.',
        price: '350 ₺',
        imageUrl: eksiImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
    ],
  },
  {
    id: 'dondurmalar',
    title: 'Dondurma Çeşitleri',
    homeDescription: 'Klasik ve sevilen tatlarda top dondurma seçenekleri.',
    pageDescription: 'Her biri 50 ₺; top dondurma çeşitleri.',
    heroImage: dondurmaImg,
    subcategories: ['Dondurmalar'],
    items: [
      {
        name: 'Vanilyalı Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma1Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Çikolatalı Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma2Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Limonlu Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma3Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Çilekli Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma4Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Karamelli Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma1Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Oreolu Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma2Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Antep Fıstıklı Dondurma',
        description: 'Top dondurma.',
        price: '50 ₺',
        imageUrl: dondurma3Img,
        subcategory: 'Dondurmalar',
      },
    ],
  },
  {
    id: 'kahveler',
    title: 'Kahve Çeşitleri',
    homeDescription: 'Espresso bazlı sıcak kahveler ve soğuk kahve seçenekleri.',
    pageDescription: 'Kahve çeşitleri ve soğuk kahveler; milkshake içecekler menüsünde.',
    heroImage: kahvelerImg,
    subcategories: ['Kahve Çeşitleri', 'Soğuk Kahve Çeşitleri'],
    items: [
      { name: 'Latte', description: 'Espresso ve buharla ısıtılmış süt.', price: '150 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Fındıklı Latte', description: 'Fındık aromalı latte.', price: '170 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Karamel Latte', description: 'Karamel aromalı latte.', price: '170 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Pumpkin Spice Latte',
        description: 'Sonbahar baharatları ve kabak aroması.',
        price: '170 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Cappuccino', description: 'Espresso, buharda ısıtılmış süt ve süt köpüğü.', price: '150 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Americano',
        description: 'Espresso üzerine sıcak su.',
        price: '120 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Mocha', description: 'Sütlü çikolatalı espresso içeceği.', price: '180 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'White Chocolate Mocha',
        description: 'Sütlü yoğun espresso ve beyaz çikolata.',
        price: '180 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Flat White',
        description: 'Az sütlü espresso.',
        price: '130 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Cortado', description: 'Espresso ile eşit miktarda sıcak süt.', price: '130 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Espresso',
        description: 'Süt köpüklü espresso.',
        price: '80 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Macchiato',
        description: 'Karamelize şekerli ve vanilya aromalı sütlü kahve.',
        price: '120 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Caramel Macchiato',
        description: 'Karamel ve espresso notalı sütlü içecek.',
        price: '150 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Chai Tea Latte',
        description: 'Baharat karışımlı sütlü içecek.',
        price: '180 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Chai Tea Coffee Latte', description: 'Chai ve kahve bir arada.', price: '200 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Filtre Kahve', description: '', price: '120 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Türk Kahvesi', description: '', price: '120 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Ice Americano', description: '', price: '120 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Latte (Karamel)', description: '', price: '150 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Mocha', description: '', price: '180 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice White Mocha', description: '', price: '180 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Macchiato', description: '', price: '120 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      {
        name: 'Ice Caramel Macchiato',
        description: '',
        price: '120 ₺',
        subcategory: 'Soğuk Kahve Çeşitleri',
      },
      {
        name: 'Frappe',
        description: 'Çikolata, karamel veya vanilya.',
        price: '200 ₺',
        subcategory: 'Soğuk Kahve Çeşitleri',
      },
    ],
  },
  {
    id: 'icecekler',
    title: 'İçecek Çeşitleri',
    homeDescription: 'Soğuk içecekler, milkshake, frozen ve sıcak içecekler.',
    pageDescription: 'Soğuk içecekler, milkshake, frozen, sıcak içecekler, fresh ve bitki çayları.',
    heroImage: iceceklerImg,
    subcategories: [
      'Soğuk İçecekler',
      'Milkshake',
      'Frozen',
      'Sıcak İçecekler',
      'Fresh İçecekler',
      'Bitki Çayları',
    ],
    items: [
      { name: 'Coco Cola', description: '', price: '120 ₺', subcategory: 'Soğuk İçecekler' },
      { name: 'Fanta', description: '', price: '120 ₺', subcategory: 'Soğuk İçecekler' },
      {
        name: 'Fuse Tea',
        description: 'Limon, şeftali, mango.',
        price: '120 ₺',
        subcategory: 'Soğuk İçecekler',
      },
      { name: 'Sprite', description: '', price: '100 ₺', subcategory: 'Soğuk İçecekler' },
      { name: 'Su', description: '', price: '50 ₺', subcategory: 'Soğuk İçecekler' },
      { name: 'Soda', description: '', price: '70 ₺', subcategory: 'Soğuk İçecekler' },
      { name: 'Çilekli Milkshake', description: '', price: '250 ₺', subcategory: 'Milkshake' },
      { name: 'Çikolatalı Milkshake', description: '', price: '250 ₺', subcategory: 'Milkshake' },
      { name: 'Vanilyalı Milkshake', description: '', price: '250 ₺', subcategory: 'Milkshake' },
      {
        name: 'Çikolata Muz Milkshake',
        description: '',
        price: '250 ₺',
        subcategory: 'Milkshake',
      },
      { name: 'Çilekli Frozen', description: '', price: '250 ₺', subcategory: 'Frozen' },
      { name: 'Hindistan Cevizli Frozen', description: '', price: '250 ₺', subcategory: 'Frozen' },
      { name: 'Sıcak Çikolata', description: '', price: '150 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Beyaz Çikolata', description: '', price: '150 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Salep', description: '', price: '120 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Çay', description: '', price: '50 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Kivi Çayı', description: '', price: '50 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Ev Yapımı Limonata', description: '', price: '100 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Çilekli Limonata', description: '', price: '120 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Berry Hibiskus', description: '', price: '150 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Ihlamur Çayı', description: '', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Kuşburnu Çayı', description: '', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Yeşil Çay', description: '', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Ada Çayı', description: '', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Kış Çayı', description: '', price: '200 ₺', subcategory: 'Bitki Çayları' },
    ],
  },
];

export const menuCategories = Object.fromEntries(
  menuCategoryList.map((category) => [category.id, category]),
) as Record<MenuCategoryId, MenuCategory>;
