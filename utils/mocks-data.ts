import {
  Category,
  HomePage,
  HomePageSection,
  Order,
  OrderStatus,
  Product,
  Store,
} from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    en: { name: "Electronics" },
    ar: { name: "إلكترونيات" },
  },
  {
    id: "2",
    en: { name: "Books" },
    ar: { name: "كتب" },
  },
  {
    id: "3",
    en: { name: "Clothing" },
    ar: { name: "ملابس" },
  },
  {
    id: "4",
    en: { name: "Home Appliances" },
    ar: { name: "أجهزة منزلية" },
  },
  {
    id: "5",
    en: { name: "Toys" },
    ar: { name: "ألعاب" },
  },
  {
    id: "6",
    en: { name: "Beauty and Personal Care" },
    ar: { name: "الجمال والعناية الشخصية" },
  },
  {
    id: "7",
    en: { name: "Sports and Outdoors" },
    ar: { name: "الرياضة والهواء الطلق" },
  },
  {
    id: "8",
    en: { name: "Furniture" },
    ar: { name: "الأثاث" },
  },
  {
    id: "9",
    en: { name: "Jewelry" },
    ar: { name: "المجوهرات" },
  },
  {
    id: "10",
    en: { name: "Food and Beverages" },
    ar: { name: "الطعام والمشروبات" },
  },
  {
    id: "11",
    en: { name: "Health and Wellness" },
    ar: { name: "الصحة والعافية" },
  },
  {
    id: "12",
    en: { name: "Garden and Outdoor Living" },
    ar: { name: "الحديقة والحياة الخارجية" },
  },
  {
    id: "13",
    en: { name: "Office Supplies" },
    ar: { name: "لوازم المكتب" },
  },
  {
    id: "14",
    en: { name: "Music" },
    ar: { name: "الموسيقى" },
  },
  {
    id: "15",
    en: { name: "Pet Supplies" },
    ar: { name: "لوازم الحيوانات الأليفة" },
  },
  {
    id: "16",
    en: { name: "Travel and Luggage" },
    ar: { name: "السفر والأمتعة" },
  },
  {
    id: "17",
    en: { name: "Art and Craft" },
    ar: { name: "الفن والحرف اليدوية" },
  },
  {
    id: "18",
    en: { name: "Automotive" },
    ar: { name: "السيارات" },
  },
  {
    id: "19",
    en: { name: "Electrical and Lighting" },
    ar: { name: "الكهرباء والإضاءة" },
  },
  {
    id: "20",
    en: { name: "Gifts and Occasions" },
    ar: { name: "الهدايا والمناسبات" },
  },
];

export const mockProducts: Product[] = [
  {
    id: "1",
    images: [],
    categoryId: "1",
    storeInfo: [
      { storeId: "1", price: 599.99, discount: 10, quantity: 1 },
      { storeId: "2", price: 629.99, discount: 5, quantity: 5 },
    ],
    en: {
      name: "Smartphone",
      description: "High-quality smartphone with advanced features",
    },
    ar: {
      name: "هاتف ذكي",
      description: "هاتف ذكي عالي الجودة مع ميزات متقدمة",
    },
  },
  {
    id: "2",
    images: [],
    categoryId: "2",
    storeInfo: [
      { storeId: "3", price: 29.99, discount: 20, quantity: 2 },
      { storeId: "4", price: 34.99, discount: 15, quantity: 3 },
    ],
    en: {
      name: "Book - Fiction",
      description: "A captivating fiction book by a renowned author",
    },
    ar: { name: "كتاب - رواية", description: "رواية جذابة من قبل كاتب مشهور" },
  },
  {
    id: "3",
    images: [],
    categoryId: "3",
    storeInfo: [
      { storeId: "5", price: 49.99, discount: 30, quantity: 1 },
      { storeId: "1", price: 54.99, discount: 25, quantity: 2 },
    ],
    en: {
      name: "Men's Shirt",
      description: "Stylish men's shirt for various occasions",
    },
    ar: { name: "قميص رجالي", description: "قميص رجالي أنيق لمناسبات متنوعة" },
  },
  {
    id: "4",
    images: [],
    categoryId: "2",
    storeInfo: [
      { storeId: "2", price: 399.99, discount: 15, quantity: 1 },
      { storeId: "5", price: 419.99, discount: 10, quantity: 2 },
    ],
    en: {
      name: "Tablet",
      description: "A sleek and powerful tablet for work and play",
    },
    ar: {
      name: "جهاز لوحي",
      description: "جهاز لوحي أنيق وقوي للعمل والترفيه",
    },
  },
  {
    id: "5",
    images: [],
    categoryId: "2",
    storeInfo: [
      { storeId: "4", price: 19.99, discount: 10, quantity: 1 },
      { storeId: "2", price: 24.99, discount: 5, quantity: 200 },
    ],
    en: {
      name: "Cookbook",
      description: "A collection of delicious recipes for home cooks",
    },
    ar: {
      name: "كتاب الطهي",
      description: "مجموعة من وصفات لذيذة للطهاة المنزليين",
    },
  },
  {
    id: "6",
    images: [],
    categoryId: "3",
    storeInfo: [
      { storeId: "1", price: 79.99, discount: 20, quantity: 1 },
      { storeId: "5", price: 89.99, discount: 15, quantity: 2 },
    ],
    en: {
      name: "Women's Dress",
      description: "Elegant and fashionable dress for women",
    },
    ar: { name: "فستان نسائي", description: "فستان أنيق وعصري للنساء" },
  },
  {
    id: "7",
    images: [],
    categoryId: "1",
    storeInfo: [
      { storeId: "4", price: 129.99, discount: 10, quantity: 1 },
      { storeId: "3", price: 149.99, discount: 5, quantity: 2 },
    ],
    en: {
      name: "Wireless Earbuds",
      description: "High-quality wireless earbuds for music enthusiasts",
    },
    ar: {
      name: "سماعات لاسلكية",
      description: "سماعات لاسلكية عالية الجودة لعشاق الموسيقى",
    },
  },
];

export const stores: Store[] = [
  {
    id: "1",
    postalCode: "12345",
    en: {
      name: "Riyadh - Tahlia Street",
      region: "Riyadh",
      city: "Riyadh",
    },
    ar: {
      name: "الرياض - شارع التحلية",
      region: "الرياض",
      city: "الرياض",
    },
  },
  {
    id: "2",
    postalCode: "67890",
    en: {
      name: "Jeddah - Corniche Road",
      region: "Makkah",
      city: "Jeddah",
    },
    ar: { name: "جدة - طريق الكورنيش", region: "مكة", city: "جدة" },
  },
  {
    id: "3",
    postalCode: "54321",
    en: {
      name: "Dammam - King Fahd Street",
      region: "Eastern Province",
      city: "Dammam",
    },
    ar: {
      name: "الدمام - شارع الملك فهد",
      region: "المنطقة الشرقية",
      city: "الدمام",
    },
  },
  {
    id: "4",
    postalCode: "98765",
    en: {
      name: "Medina - King Abdulaziz Road",
      region: "Al Madinah",
      city: "Medina",
    },
    ar: {
      name: "المدينة المنورة - طريق الملك عبد العزيز",
      region: "المدينة المنورة",
      city: "المدينة المنورة",
    },
  },
  {
    id: "5",
    postalCode: "13579",
    en: {
      name: "Khobar - Prince Turki Street",
      region: "Eastern Province",
      city: "Al Khobar",
    },
    ar: {
      name: "الخبر - شارع الأمير تركي",
      region: "المنطقة الشرقية",
      city: "الخبر",
    },
  },
];

export const orders: Order[] = [
  {
    id: "1",
    status: OrderStatus.Processed,
    createdAt: "2023-10-01T08:00:00Z",
    updatedAt: "2023-10-01T09:30:00Z",
    total: 799.99,
    storeId: "1",
    items: [
      {
        id: "101",
        price: 599.99,
        discount: 10,
        quantity: 1,
        en: {
          name: "Smartphone",
          description: "High-quality smartphone with advanced features",
        },
        ar: {
          name: "هاتف ذكي",
          description: "هاتف ذكي عالي الجودة مع ميزات متقدمة",
        },
      },
      {
        id: "102",
        price: 29.99,
        discount: 20,
        quantity: 2,
        en: {
          name: "Book - Fiction",
          description: "A captivating fiction book by a renowned author",
        },
        ar: {
          name: "كتاب - رواية",
          description: "رواية جذابة من قبل كاتب مشهور",
        },
      },
    ],
  },
  {
    id: "2",
    status: OrderStatus.Received,
    createdAt: "2023-09-28T15:45:00Z",
    updatedAt: "2023-09-28T16:30:00Z",
    storeId: "2",
    total: 149.99,
    items: [
      {
        id: "103",
        price: 49.99,
        discount: 30,
        quantity: 1,
        en: {
          name: "Men's Shirt",
          description: "Stylish men's shirt for various occasions",
        },
        ar: {
          name: "قميص رجالي",
          description: "قميص رجالي أنيق لمناسبات متنوعة",
        },
      },
      {
        id: "104",
        price: 99.99,
        discount: 10,
        quantity: 1,
        en: {
          name: "Wireless Earbuds",
          description: "High-quality wireless earbuds for music enthusiasts",
        },
        ar: {
          name: "سماعات لاسلكية",
          description: "سماعات لاسلكية عالية الجودة لعشاق الموسيقى",
        },
      },
    ],
  },
  {
    id: "3",
    status: OrderStatus.Cancelled,
    createdAt: "2023-09-25T10:15:00Z",
    updatedAt: "2023-09-25T10:30:00Z",
    total: 124.99,
    storeId: "3",
    items: [
      {
        id: "105",
        price: 29.99,
        discount: 0,
        quantity: 3,
        en: {
          name: "Cookbook",
          description: "A collection of delicious recipes for home cooks",
        },
        ar: {
          name: "كتاب الطهي",
          description: "مجموعة من وصفات لذيذة للطهاة المنزليين",
        },
      },
      {
        id: "106",
        price: 14.99,
        discount: 15,
        quantity: 2,
        en: {
          name: "Office Supplies",
          description: "Essential office supplies for productivity",
        },
        ar: {
          name: "لوازم المكتب",
          description: "لوازم مكتبية أساسية لزيادة الإنتاجية",
        },
      },
    ],
  },
];

export const homePages: { [K in HomePageSection]: HomePage } = {
  productsSection1: {
    en: {
      title: "Great Value Books From 6 SAR",
      description: "",
    },
    ar: {
      title: "كتب قيمة عظيمة من 6 ريال سعودي",
      description: "",
    },
  },

  imagesSection: {
    en: {
      title: "We Love This Week",
      description:
        "Get everything you need to get ready for university right here at WHSmith! From stationery to notebooks, desk accessories and much more, we've got all the essentials to get you off to the best start!",
    },
    ar: {
      title: "نحن نحب هذا الأسبوع",
      description:
        "احصل على كل ما تحتاجه للتحضير للجامعة هنا في WHSmith! من القرطاسية إلى الدفاتر وملحقات المكتب والمزيد من ذلك ، لدينا جميع الأدوات الأساسية لإعطائك أفضل بداية!",
    },
  },

  productsSection2: {
    en: {
      title: "Popular Right Now",
      description:
        "David Walliams is back with a laugh-out-loud tale of the most blundering and loveable family of all time - pre-order your copy today! There's so much to explore here at WHSmith - from 2 for £12 on your favourite annuals to advent calendars, everything you'll need for the spookiest Halloween, storage for your home or office and so much more! Check out all of the products trending here at WHSmith this week!",
    },
    ar: {
      title: "شعبية الآن",
      description:
        "عاد ديفيد ويليامز مع قصة تضحك من العائلة الأكثر تخبطًا وتحبًا على الإطلاق - اطلب نسختك اليوم! هناك الكثير لاستكشافه هنا في WHSmith - من 2 مقابل 12 جنيهًا إسترلينيًا في السنويات المفضلة لديك إلى التقاويم الميلادية ، كل ما تحتاجه لأكثر عيد هالوين رعبًا ، وتخزين منزلك أو مكتبك والكثير من ذلك! تحقق من جميع المنتجات الرائجة هنا في WHSmith هذا الأسبوع!",
    },
  },

  mainCategories: {
    en: {
      title: "What Are You Looking For?",
      description: "",
    },
    ar: {
      title: "ما الذي تبحث عنه؟",
      description: "",
    },
  },

  brands: {
    en: {
      title: "Discover our Brands",
      description: "",
    },
    ar: {
      title: "اكتشف علاماتنا التجارية",
      description: "",
    },
  },
};
