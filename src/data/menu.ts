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
import fuseteaImg from '../assets/photos/fusetea.png';
import fantaImg from '../assets/photos/fanta.png';
import suImg from '../assets/photos/su.png';
import colaImg from '../assets/photos/cola.png';
import spriteImg from '../assets/photos/sprite.png';
import cappucinoImg from '../assets/photos/cappucino.png';

export type MenuCategoryId = 'waffles' | 'dondurmalar' | 'kahveler' | 'icecekler';

export interface MenuItem {
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  price: string;
  imageUrl?: string;
  subcategory: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  navLabel: string;
  navLabelEn?: string;
  title: string;
  titleEn?: string;
  homeDescription: string;
  homeDescriptionEn?: string;
  pageDescription: string;
  pageDescriptionEn?: string;
  heroImage: string;
  subcategories: string[];
  subcategoriesEn?: string[];
  items: MenuItem[];
}

export const menuCategoryList: MenuCategory[] = [
  {
    id: 'waffles',
    navLabel: 'Waffle',
    navLabelEn: 'Waffle',
    title: 'Waffle Çeşitleri',
    titleEn: 'Waffle Varieties',
    homeDescription: 'Klasik, Brüksel, Bubble ve özel tariflerle hazırlanan waffle menüsü.',
    homeDescriptionEn: 'Waffle menu prepared with classic, Belgian, bubble, and special recipes.',
    pageDescription: 'Klasik, Brüksel, Bubble ve Waffle Spesiyallerimiz bölümlerinden seçim yapın.',
    pageDescriptionEn: 'Choose from our Classic, Belgian, Bubble, and Special Waffles sections.',
    heroImage: wafflesImg,
    subcategories: ['Klasik', 'Brüksel Waffle', 'Bubble Waffle', 'Waffle Spesiyallerimiz'],
    subcategoriesEn: ['Classic', 'Belgian Waffle', 'Bubble Waffle', 'Special Waffles'],
    items: [
      /* —— Klasik —— */
      {
        name: 'Kendi Waffle’ını Oluştur',
        nameEn: 'Create Your Own Waffle',
        description: 'Sınırsız seçim hakkıyla istediğin gibi tasarla.',
        descriptionEn: 'Design it as you like with unlimited choices.',
        price: '400 ₺',
        imageUrl: wafflesImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Klasik Waffle',
        nameEn: 'Classic Waffle',
        description:
          'Waffle hamuru üzerine sütlü çikolata, muz, çilek, kivi, fındık ve beyaz çikolata sos.',
        descriptionEn: 'Waffle batter topped with milk chocolate, banana, strawberry, kiwi, hazelnut, and white chocolate sauce.',
        price: '400 ₺',
        imageUrl: klasikWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Dondurmalı Waffle',
        nameEn: 'Ice Cream Waffle',
        description: 'Bir top dondurma ile servis edilir.',
        descriptionEn: 'Served with a scoop of ice cream.',
        price: '475 ₺',
        imageUrl: dondurmalıWaffleImg,
        subcategory: 'Klasik',
      },
      {
        name: 'Dubai Waffle',
        nameEn: 'Dubai Waffle',
        description:
          'Çıtır waffle hamuru üzerine Belçika çikolatası arasında Dubai çikolata iç dolgusu üzerine pirinç antep fıstığı ve antep fıstığı sos; yanında muz, çilek.',
        descriptionEn: 'Crispy waffle with Dubai chocolate filling between Belgian chocolate, topped with pistachio and pistachio sauce; served with banana and strawberry.',
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
        description:'Bubble Waffle tabakta servis edilir.',
        price: '500 ₺',
        imageUrl: bubbleWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Cup (Bardak) Waffle',
        description:'Bubble Waffle bardakta servis edilir.',
        price: '400 ₺',
        imageUrl: bubbleCupWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Dondurmalı Sandviç Waffle',
        description:'Bubble Waffle dondurmalı sandviç olarak servis edilir.',
        price: '490 ₺',
        imageUrl: bubbleDondurmalıSandvicImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Bubble Sandviç Waffle',
        description:'Bubble Waffle sandviç olarak servis edilir.',
        price: '450 ₺',
        imageUrl: bubbleSandvicImg,
        subcategory: 'Bubble Waffle',
      },
      {
        name: 'Kova Waffle (İki Kişilik)',
        description:'Kova Waffle (İki Kişilik)',
        price: '600 ₺',
        imageUrl: bubbleWaffleImg,
        subcategory: 'Bubble Waffle',
      },
        {
        name: 'Kova Waffle (Tek Kişilik)',
        description:'Kova Waffle (Tek Kişilik)',
        price: '450 ₺',
        imageUrl: bubbleWaffleImg,
        subcategory: 'Bubble Waffle',
      },
      /* —— Waffle Spesiyallerimiz —— */
      {
        name: 'Karamellim',
        nameEn: 'My Caramel',
        description: 'Sütlü çikolata, muz, çilek, fındık, özel karamel sos.',
        descriptionEn: 'Milk chocolate, banana, strawberry, hazelnut, special caramel sauce.',
        price: '400 ₺',
        imageUrl: karamellimImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Fıstık Şöleni',
        nameEn: 'Pistachio Feast',
        description: 'Sütlü çikolata, muz, çilek, fındık, antep fıstığı sos, beyaz çikolata.',
        descriptionEn: 'Milk chocolate, banana, strawberry, hazelnut, pistachio sauce, white chocolate.',
        price: '400 ₺',
        imageUrl: fistikImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Bitterim',
        description:
          'Bitter çikolata, muz, çilek, bitter damla çikolata, bitter pirinç patlağı, üzerine bitter sos.',
        price: '400 ₺',
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Panayır Special Waffle',
        description:
          'Sütlü çikolata, muz, çilek, krep kırığı, fındık, sütlü damla çikolata, beyaz pirinç patlağı, bonibon, tutti frutti üzerine beyaz çikolata sos.',
        price: '400 ₺',
        imageUrl: panayirImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Çilek Tutkusu',
        description:
          'Sütlü çikolata, çilek, frambuaz, pirinç patlağı, frambuaz damla çikolata üzerine çilek sos.',
        price: '400 ₺',
        imageUrl: cilekTutkusuImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Beyaz Düş',
        description: 'Beyaz çikolata, muz, beyaz pirinç patlağı, fındık üzerine beyaz çikolata sos.',
        price: '400 ₺',
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Lotus Waffle',
        nameEn: 'Lotus Waffle',
        description:
          'Waffle hamuru üzerine Lotus karamalize bisküvi ezmesi, muz, çilek, Lotus bisküvi parçaları üzerine beyaz çikolata; 1 adet Lotus bisküvi.',
        descriptionEn: 'Waffle with Lotus caramelized cookie paste, banana, strawberry, Lotus cookie pieces topped with white chocolate; includes 1 Lotus cookie.',
        price: '450 ₺',
        imageUrl: lotusImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Oreo Waffle',
        description:
          'Sütlü çikolata, muz, parça fındık, sütlü pirinç patlağı, Oreo bisküvi parçaları, beyaz çikolata sos üzerine 1 adet Oreo bisküvi.',
        price: '450 ₺',
        imageUrl: oreoImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
      {
        name: 'Ekşi Severlere Özel',
        description:
          'Tabanda sütlü çikolata, muz, çilek, kivi, tutti frutti, portakal şekeri üzerine sütlü çikolata sos.',
        price: '400 ₺',
        imageUrl: eksiImg,
        subcategory: 'Waffle Spesiyallerimiz',
      },
    ],
  },
  {
    id: 'dondurmalar',
    navLabel: 'Dondurma',
    navLabelEn: 'Ice Cream',
    title: 'Dondurma Çeşitleri',
    titleEn: 'Ice Cream Varieties',
    homeDescription: 'Klasik ve sevilen tatlarda top dondurma seçenekleri.',
    homeDescriptionEn: 'Scoop ice cream options in classic and favorite flavors.',
    pageDescription: 'Her biri 75 ₺; top dondurma çeşitleri.',
    pageDescriptionEn: 'Each 75 ₺; scoop ice cream varieties.',
    heroImage: dondurmaImg,
    subcategories: ['Dondurmalar'],
    subcategoriesEn: ['Ice Creams'],
    items: [
      {
        name: 'Vanilyalı Dondurma',
        nameEn: 'Vanilla Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma1Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Çikolatalı Dondurma',
        nameEn: 'Chocolate Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma2Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Limonlu Dondurma',
        nameEn: 'Lemon Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma3Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Çilekli Dondurma',
        nameEn: 'Strawberry Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma4Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Karamelli Dondurma',
        nameEn: 'Caramel Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma1Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Oreolu Dondurma',
        nameEn: 'Oreo Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma2Img,
        subcategory: 'Dondurmalar',
      },
      {
        name: 'Antep Fıstıklı Dondurma',
        nameEn: 'Pistachio Ice Cream',
        description: 'Top dondurma.',
        descriptionEn: 'Scoop ice cream.',
        price: '75 ₺',
        imageUrl: dondurma3Img,
        subcategory: 'Dondurmalar',
      },
    ],
  },
  {
    id: 'kahveler',
    navLabel: 'Kahve',
    navLabelEn: 'Coffee',
    title: 'Kahve Çeşitleri',
    titleEn: 'Coffee Varieties',
    homeDescription: 'Espresso bazlı sıcak kahveler ve soğuk kahve seçenekleri.',
    homeDescriptionEn: 'Espresso-based hot coffees and cold coffee options.',
    pageDescription: 'Kahve çeşitleri ve soğuk kahveler; milkshake içecekler menüsünde.',
    pageDescriptionEn: 'Coffee varieties and cold coffees; milkshake drinks in the menu.',
    heroImage: kahvelerImg,
    subcategories: ['Kahve Çeşitleri', 'Soğuk Kahve Çeşitleri'],
    subcategoriesEn: ['Coffee Varieties', 'Cold Coffee Varieties'],
    items: [
      { name: 'Latte', nameEn: 'Latte', description: 'Espresso ve buharla ısıtılmış süt.', descriptionEn: 'Espresso and steamed milk.', price: '150 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Fındıklı Latte', nameEn: 'Hazelnut Latte', description: 'Fındık aromalı latte.', descriptionEn: 'Hazelnut-flavored latte.', price: '170 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Karamel Latte', nameEn: 'Caramel Latte', description: 'Karamel aromalı latte.', descriptionEn: 'Caramel-flavored latte.', price: '170 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Pumpkin Spice Latte', nameEn: 'Pumpkin Spice Latte',
        description: 'Sonbahar baharatları ve kabak aroması.',
        descriptionEn: 'Autumn spices and pumpkin flavor.',
        price: '170 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Cappuccino', nameEn: 'Cappuccino', description: 'Espresso, buharda ısıtılmış süt ve süt köpüğü.', descriptionEn: 'Espresso, steamed milk and milk foam.', price: '150 ₺', imageUrl: cappucinoImg, subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Americano', nameEn: 'Americano',
        description: 'Espresso üzerine sıcak su.',
        descriptionEn: 'Hot water over espresso.',
        price: '120 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Mocha', nameEn: 'Mocha', description: 'Sütlü çikolatalı espresso içeceği.', descriptionEn: 'Chocolate espresso drink with milk.', price: '180 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'White Chocolate Mocha', nameEn: 'White Chocolate Mocha',
        description: 'Sütlü yoğun espresso ve beyaz çikolata.',
        descriptionEn: 'Rich espresso with milk and white chocolate.',
        price: '180 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Flat White', nameEn: 'Flat White',
        description: 'Az sütlü espresso.',
        descriptionEn: 'Espresso with less milk.',
        price: '130 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Cortado', nameEn: 'Cortado', description: 'Espresso ile eşit miktarda sıcak süt.', descriptionEn: 'Equal parts espresso and hot milk.', price: '130 ₺', subcategory: 'Kahve Çeşitleri' },
      {
        name: 'Espresso', nameEn: 'Espresso',
        description: 'Süt köpüklü espresso.',
        descriptionEn: 'Espresso with milk foam.',
        price: '80 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Macchiato', nameEn: 'Macchiato',
        description: 'Karamelize şekerli ve vanilya aromalı sütlü kahve.',
        descriptionEn: 'Caramelized sugar and vanilla flavored coffee with milk.',
        price: '120 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Caramel Macchiato', nameEn: 'Caramel Macchiato',
        description: 'Karamel ve espresso notalı sütlü içecek.',
        descriptionEn: 'Caramel and espresso-flavored milk drink.',
        price: '150 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      {
        name: 'Chai Tea Latte', nameEn: 'Chai Tea Latte',
        description: 'Baharat karışımlı sütlü içecek.',
        descriptionEn: 'Spice blend milk drink.',
        price: '180 ₺',
        subcategory: 'Kahve Çeşitleri',
      },
      { name: 'Chai Tea Coffee Latte', nameEn: 'Chai Tea Coffee Latte', description: 'Chai ve kahve bir arada.', descriptionEn: 'Chai and coffee together.', price: '200 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Filtre Kahve', nameEn: 'Filter Coffee', description: 'Filtre kahve', descriptionEn: 'Filter coffee', price: '120 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Türk Kahvesi', nameEn: 'Turkish Coffee', description: 'Türk kahvesi', descriptionEn: 'Turkish coffee', price: '120 ₺', subcategory: 'Kahve Çeşitleri' },
      { name: 'Ice Americano', nameEn: 'Ice Americano', description: 'Ice Americano', descriptionEn: 'Ice Americano', price: '120 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Latte (Karamel)', nameEn: 'Ice Latte (Caramel)', description: 'Ice Latte (Karamel)', descriptionEn: 'Ice Latte (Caramel)', price: '150 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Mocha', nameEn: 'Ice Mocha', description: 'Ice Mocha', descriptionEn: 'Ice Mocha', price: '180 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice White Mocha', nameEn: 'Ice White Mocha', description: 'Ice White Mocha', descriptionEn: 'Ice White Mocha', price: '180 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      { name: 'Ice Macchiato', nameEn: 'Ice Macchiato', description: 'Ice Macchiato', descriptionEn: 'Ice Macchiato', price: '120 ₺', subcategory: 'Soğuk Kahve Çeşitleri' },
      {
        name: 'Ice Caramel Macchiato', nameEn: 'Ice Caramel Macchiato',
        description: 'Ice Caramel Macchiato',
        descriptionEn: 'Ice Caramel Macchiato',
        price: '120 ₺',
        subcategory: 'Soğuk Kahve Çeşitleri',
      },
      {
        name: 'Frappe', nameEn: 'Frappe',
        description: 'Çikolata, karamel veya vanilya.',
        descriptionEn: 'Chocolate, caramel, or vanilla.',
        price: '200 ₺',
        subcategory: 'Soğuk Kahve Çeşitleri',
      },
    ],
  },
  {
    id: 'icecekler',
    navLabel: 'İçecek',
    navLabelEn: 'Beverage',
    title: 'İçecek Çeşitleri',
    titleEn: 'Beverage Varieties',
    homeDescription: 'Soğuk içecekler, milkshake, frozen ve sıcak içecekler.',
    homeDescriptionEn: 'Cold drinks, milkshakes, frozen, and hot beverages.',
    pageDescription: 'Soğuk içecekler, milkshake, frozen, sıcak içecekler, fresh ve bitki çayları.',
    pageDescriptionEn: 'Cold drinks, milkshakes, frozen, hot drinks, fresh, and herbal teas.',
    heroImage: iceceklerImg,
    subcategories: [
      'Soğuk İçecekler',
      'Milkshake',
      'Frozen',
      'Sıcak İçecekler',
      'Fresh İçecekler',
      'Bitki Çayları',
    ],
    subcategoriesEn: [
      'Cold Drinks',
      'Milkshakes',
      'Frozen',
      'Hot Drinks',
      'Fresh Drinks',
      'Herbal Teas',
    ],
    items: [
      { name: 'Coco Cola', nameEn: 'Coca-Cola', description: 'Coca-Cola', descriptionEn: 'Coca-Cola', price: '120 ₺', imageUrl: colaImg, subcategory: 'Soğuk İçecekler' },
      { name: 'Fanta', nameEn: 'Fanta', description: 'Fanta', descriptionEn: 'Fanta', price: '120 ₺', imageUrl: fantaImg, subcategory: 'Soğuk İçecekler' },
      {
        name: 'Fuse Tea', nameEn: 'Fuse Tea',
        description: 'Limon, şeftali, mango.',
        descriptionEn: 'Lemon, peach, mango.',
        price: '120 ₺',
        imageUrl: fuseteaImg,
        subcategory: 'Soğuk İçecekler',
      },
      { name: 'Sprite', nameEn: 'Sprite', description: 'Sprite', descriptionEn: 'Sprite', price: '100 ₺', imageUrl: spriteImg, subcategory: 'Soğuk İçecekler' },
      { name: 'Su', nameEn: 'Water', description: 'Su', descriptionEn: 'Water', price: '50 ₺', imageUrl: suImg, subcategory: 'Soğuk İçecekler' },
      { name: 'Soda', nameEn: 'Soda', description: 'Soda', descriptionEn: 'Soda', price: '70 ₺', subcategory: 'Soğuk İçecekler' },
      { name: 'Çilekli Milkshake', nameEn: 'Strawberry Milkshake', description: 'Çilekli Milkshake', descriptionEn: 'Strawberry Milkshake', price: '250 ₺', subcategory: 'Milkshake' },
      { name: 'Çikolatalı Milkshake', nameEn: 'Chocolate Milkshake', description: 'Çikolatalı Milkshake', descriptionEn: 'Chocolate Milkshake', price: '250 ₺', subcategory: 'Milkshake' },
      { name: 'Vanilyalı Milkshake', nameEn: 'Vanilla Milkshake', description: 'Vanilyalı Milkshake', descriptionEn: 'Vanilla Milkshake', price: '250 ₺', subcategory: 'Milkshake' },
      {
        name: 'Çikolata Muz Milkshake', nameEn: 'Chocolate Banana Milkshake',
        description: 'Çikolata Muz Milkshake',
        descriptionEn: 'Chocolate Banana Milkshake',
        price: '250 ₺',
        subcategory: 'Milkshake',
      },
      { name: 'Çilekli Frozen', nameEn: 'Strawberry Frozen', description: 'Çilekli Frozen', descriptionEn: 'Strawberry Frozen', price: '250 ₺', subcategory: 'Frozen' },
      { name: 'Hindistan Cevizli Frozen', nameEn: 'Coconut Frozen', description: 'Hindistan Cevizli Frozen', descriptionEn: 'Coconut Frozen', price: '250 ₺', subcategory: 'Frozen' },
      { name: 'Sıcak Çikolata', nameEn: 'Hot Chocolate', description: 'Sıcak Çikolata', descriptionEn: 'Hot Chocolate', price: '150 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Beyaz Çikolata', nameEn: 'White Chocolate', description: 'Beyaz Çikolata', descriptionEn: 'White Chocolate', price: '150 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Salep', nameEn: 'Salep', description: 'Salep', descriptionEn: 'Salep', price: '120 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Çay', nameEn: 'Tea', description: 'Çay', descriptionEn: 'Tea', price: '50 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Kivi Çayı', nameEn: 'Kiwi Tea', description: 'Kivi Çayı', descriptionEn: 'Kiwi Tea', price: '50 ₺', subcategory: 'Sıcak İçecekler' },
      { name: 'Ev Yapımı Limonata', nameEn: 'Homemade Lemonade', description: 'Ev Yapımı Limonata', descriptionEn: 'Homemade Lemonade', price: '100 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Çilekli Limonata', nameEn: 'Strawberry Lemonade', description: 'Çilekli Limonata', descriptionEn: 'Strawberry Lemonade', price: '120 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Berry Hibiskus', nameEn: 'Berry Hibiscus', description: 'Berry Hibiskus', descriptionEn: 'Berry Hibiscus', price: '150 ₺', subcategory: 'Fresh İçecekler' },
      { name: 'Ihlamur Çayı', nameEn: 'Linden Tea', description: 'Ihlamur Çayı', descriptionEn: 'Linden Tea', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Kuşburnu Çayı', nameEn: 'Rosehip Tea', description: 'Kuşburnu Çayı', descriptionEn: 'Rosehip Tea', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Yeşil Çay', nameEn: 'Green Tea', description: 'Yeşil Çay', descriptionEn: 'Green Tea', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Ada Çayı', nameEn: 'Island Tea', description: 'Ada Çayı', descriptionEn: 'Island Tea', price: '200 ₺', subcategory: 'Bitki Çayları' },
      { name: 'Kış Çayı', nameEn: 'Winter Tea', description: 'Kış Çayı', descriptionEn: 'Winter Tea', price: '200 ₺', subcategory: 'Bitki Çayları' },
    ],
  },
];

export const menuCategories = Object.fromEntries(
  menuCategoryList.map((category) => [category.id, category]),
) as Record<MenuCategoryId, MenuCategory>;
