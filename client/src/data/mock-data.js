import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
    MdCabin,
    MdOutlineFoodBank,
    MdOutlinePets,MdCleanHands,
    MdCleaningServices
  } from 'react-icons/md';
  import { BsSnow } from 'react-icons/bs';
  import { BiHomeAlt } from 'react-icons/bi';
  import {
    GiKidSlide,
    GiFruitBowl,
    GiCakeSlice,
    GiSpaceNeedle,
    GiMilkCarton,
    GiCampingTent,
    GiOpenedFoodCan,
    GiLightningDome,
    GiBabyBottle,
    GiHealthNormal,
    GiForkKnifeSpoon,
    GiFlowerPot,
    GiMeat,
    GiEvilTree,
    GiWaveSurfer,
    GiMountainCave,
    GiCaveEntrance,
    GiGolfFlag,
  } from 'react-icons/gi';
  import { AiOutlineCoffee } from 'react-icons/ai';
  import { FaCampground, FaUmbrellaBeach, FaSwimmingPool,FaCarrot,FaEgg,FaFish } from 'react-icons/fa';
  import { RiEarthquakeFill } from 'react-icons/ri';
  import { IoFastFood } from 'react-icons/io5';

  
  
  export const locationsTab = [
    { id: 1, label: 'Fruits', icon: <GiFruitBowl size={24} /> },
    { id: 2, label: 'Vegetables', icon: <FaCarrot size={24} /> },
    { id: 3, label: 'Bakery', icon: <GiCakeSlice size={24} /> },
    { id: 4, label: 'Dairy', icon: <GiMilkCarton size={24} /> },
    { id: 5, label: 'Household', icon: <BiHomeAlt size={24} /> },
    { id: 6, label: 'Beverages ', icon: <AiOutlineCoffee size={24} /> },
    { id: 7, label: 'Beauty', icon: <GiSpaceNeedle size={24} /> },
    { id: 8, label: 'Snacks', icon: <IoFastFood size={24} /> },
    { id: 9, label: 'Gourmet', icon: <MdOutlineFoodBank size={24} /> },
    { id: 10, label: 'World Food', icon: <GiOpenedFoodCan size={24} /> },
    { id: 11, label: 'Baby Care', icon: <GiBabyBottle size={24} /> },
    { id: 12, label: 'Hygiene', icon: <MdCleanHands  size={24} /> },
    { id: 13, label: 'Kitchen', icon: <GiForkKnifeSpoon size={24} /> },
    { id: 14, label: 'Garden', icon: <GiFlowerPot size={24} /> },
    { id: 15, label: 'Pets', icon: <MdOutlinePets size={24} /> },
    { id: 16, label: 'Cleaning', icon: <MdCleaningServices size={24} /> },
    { id: 17, label: 'Medicines', icon: <GiHealthNormal size={24} /> },
    { id: 18, label: 'Eggs', icon: <FaEgg size={24} /> },
    { id: 19, label: 'Meat', icon: <GiMeat size={24} /> },
    { id: 20, label: 'Fish', icon: <FaFish size={24} /> },
  ];
  export const ads= [{
    id:1,
    locationImages: [
      {
        id:1,
        url:'https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg'
      },
      {
        id:2,
        url:'https://previews.123rf.com/images/maryaros/maryaros1904/maryaros190400022/122601702-flyers-set-for-grocery-store-with-sale-advertising.jpg'
      },
      {
        id:3,
        url:''
      },
      {
        id:4,
        url:''
      }
    ]
  }]
  
  export const locations = [
    {
      id: 1,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg',
        },
      ],
      location: 'Lays Hot \'n\' Sweet Chilli',
      days: 'Nov 9th',
      price: 'Rs.29',
      isNew: true,
      rating: 4.5,
    },
    {
      id: 2,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/251023_11-coca-cola-soft-drink-original-taste.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/251023-2_7-coca-cola-soft-drink-original-taste.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/251023-3_7-coca-cola-soft-drink-original-taste.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/251023-4_5-coca-cola-soft-drink-original-taste.jpg',
        },
      ],
      location: 'Coca-Cola',
      days: 'Nov 9th',
      price: 'Rs.39',
      isNew: false,
      rating: 4.99,
    },
    {
      id: 3,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/277584_30-cadbury-oreo-creme-biscuit-vanilla-original.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/277584-4_10-cadbury-oreo-creme-biscuit-vanilla-original.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/277584-5_9-cadbury-oreo-creme-biscuit-vanilla-original.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/s/277584-9_2-cadbury-oreo-creme-biscuit-vanilla-original.jpg',
        },
      ],
      location: 'OREO Original',
      days: 'Nov 9th',
      price: 'Rs.30',
      isNew: true,
      rating: 4.6,
    },
    {
      id: 4,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/264454_1-haldirams-namkeen-aloo-bhujia.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/264454-2_1-haldirams-namkeen-aloo-bhujia.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/264454-3_1-haldirams-namkeen-aloo-bhujia.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/264454-4_1-haldirams-namkeen-aloo-bhujia.jpg',
        },
      ],
      location: 'Haldirams Aloo Bhujia',
      days: 'Nov 10th',
      price: 'Rs.50',
      isNew: false,
      rating: 4.2,
    },
    {
      id: 5,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/1204455-2_1-fortune-sunflower-refined-oil-sun-lite.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/1204455-4_1-fortune-sunflower-refined-oil-sun-lite.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/1204455-5_1-fortune-sunflower-refined-oil-sun-lite.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/1204455-6_1-fortune-sunflower-refined-oil-sun-lite.jpg',
        },
      ],
      location: 'Fortune Refined Sunflower Oil',
      days: 'Nov 13th',
      price: 'Rs.176',
      isNew: true,
      rating: 4.1,
    },
    {
      id: 6,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/20001214_15-bb-royal-sona-masoori-raw-rice.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/20001214-3_8-bb-royal-sona-masoori-raw-rice.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/20001214-2_10-bb-royal-sona-masoori-raw-rice.jpg',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'BB Royal Sona Masoori Rice',
      days: 'Nov 9th',
      price: 'Rs.1199',
      isNew: false,
      rating: 4.6,
    },
    {
      id: 7,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/30005417_8-bb-popular-sugar.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/30005417-3_7-bb-popular-sugar.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/30005417-6_10-bb-popular-sugar.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/30005417-7_1-bb-popular-sugar.jpg',
        },
      ],
      location: 'BB Popular Sugar',
      days: 'Nov 11th',
      price: 'Rs.213',
      isNew: true,
      rating: 4.7,
    },
    {
      id: 8,
      locationImages: [
        {
          id: 1,
          url: 'https://www.bigbasket.com/media/uploads/p/l/126906_8-aashirvaad-atta-whole-wheat.jpg',
        },
        {
          id: 2,
          url: 'https://www.bigbasket.com/media/uploads/p/l/126906-3_8-aashirvaad-atta-whole-wheat.jpg',
        },
        {
          id: 3,
          url: 'https://www.bigbasket.com/media/uploads/p/l/126906-5_8-aashirvaad-atta-whole-wheat.jpg',
        },
        {
          id: 4,
          url: 'https://www.bigbasket.com/media/uploads/p/l/126906-8_2-aashirvaad-atta-whole-wheat.jpg',
        },
      ],
      location: 'Aashirvaad Whole Wheat Atta',
      days: 'Nov 16th',
      price: 'Rs. 466',
      isNew: false,
      rating: 4.8,
    },
    {
      id: 9,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Tulum, Mexico',
      days: 'Jul 1-6',
      price: '$910 CAD night',
      isNew: true,
      rating: 4.3,
    },
    {
      id: 10,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Inglis, Canada',
      days: 'Jun 12-18',
      price: '$629 CAD night',
      isNew: false,
      rating: 4.6,
    },
    {
      id: 11,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Jenner, California',
      days: 'Nov 2-7',
      price: '$2,595 CAD night',
      isNew: false,
      rating: 4.1,
    },
    {
      id: 12,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Malibu, US',
      days: 'Jun 3-4',
      price: '$4,467 CAD night',
      isNew: false,
      rating: 4.2,
    },
    {
      id: 13,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Bolzano, Italy',
      days: 'Sep 22-25',
      price: '$358 CAD night',
      isNew: true,
      rating: 4.5,
    },
    {
      id: 14,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Hawaii, US',
      days: 'Nov 4-10',
      price: '$777 CAD night',
      isNew: true,
      rating: 4.8,
    },
    {
      id: 15,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Lagos, Portugal',
      days: 'Sep 25-Oct 2',
      price: '$2,999 CAD night',
      isNew: true,
      rating: 4.88,
    },
    {
      id: 16,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'LunenBurg, Canada',
      days: 'Oct 4-9',
      price: '$500 CAD night',
      isNew: false,
      rating: 4.2,
    },
    {
      id: 17,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Santa Rosa, US',
      days: 'Jun 2-9',
      price: '$3,369 CAD night',
      isNew: false,
      rating: 4.1,
    },
    {
      id: 18,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Carlux, France',
      days: 'Oct 28-Nov 4',
      price: '$2511 CAD night',
      isNew: true,
      rating: 4.5,
    },
    {
      id: 19,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Palm desert, US',
      days: 'Jun 11-16',
      price: '$3200 CAD night',
      isNew: true,
      rating: 4.7,
    },
    {
      id: 20,
      locationImages: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ],
      location: 'Ressaca, Brazil',
      days: 'Oct 2-9',
      price: '$14,999 CAD night',
      isNew: false,
      rating: 4.5,
    },
  ];