const mockAds = [
    {
      id: 1,
      image: '/assets/ad1.jpg',
      link: 'https://example.com/ad1',
      altText: 'Discover artisanal chocolates made with ethically sourced cocoa beans.'
    },
    {
      id: 2,
      image: '/assets/ad2.jpg',
      link: 'https://example.com/ad2',
      altText: 'Enhance your home decor with handcrafted ceramics from local artisans.'
    },
    {
      id: 3,
      image: '/assets/ad3.jpg',
      link: 'https://example.com/ad3',
      altText: 'Learn to code with our beginner-friendly online courses.'
    },
    {
      id: 4,
      image: '/assets/ad4.jpg',
      link: 'https://example.com/ad4',
      altText: 'Get fit and healthy with personalized workout plans and nutrition guidance.'
    },
    {
      id: 5,
      image: '/assets/ad5.jpg',
      link: 'https://example.com/ad5',
      altText: 'Explore exotic destinations with our curated travel packages.'
    },
    {
      id: 6,
      image: '/assets/ad6.jpg',
      link: 'https://example.com/ad6',
      altText: 'Find the perfect gift for any occasion with our unique selection of handcrafted items.'
    },
    {
      id: 7,
      image: '/assets/ad7.jpg',
      link: 'https://example.com/ad7',
      altText: 'Boost your productivity with our time management and organization tools.'
    },
    {
      id: 8,
      image: '/assets/ad8.jpg',
      link: 'https://example.com/ad8',
      altText: 'Improve your mental well-being with mindfulness and meditation techniques.'
    },
    {
      id: 9,
      image: '/assets/ad9.jpg',
      link: 'https://example.com/ad9',
      altText: 'Discover the latest trends in sustainable fashion and eco-friendly clothing.'
    },
    {
      id: 10,
      image: '/assets/ad10.jpg',
      link: 'https://example.com/ad10',
      altText: 'Learn a new musical instrument with our online lessons and tutorials.'
    },
    {
      id: 11,
      image: '/assets/ad11.jpg',
      link: 'https://example.com/ad11',
      altText: 'Support animal shelters and rescue organizations by donating or volunteering.'
    },
    {
      id: 12,
      image: '/assets/ad12.jpg',
      link: 'https://example.com/ad12',
      altText: 'Find the best deals on electronics and gadgets with our price comparison tool.'
    },
    {
      id: 13,
      image: '/assets/ad13.jpg',
      link: 'https://example.com/ad13',
      altText: 'Improve your photography skills with our online courses and workshops.'
    },
    {
      id: 14,
      image: '/assets/ad14.jpg',
      link: 'https://example.com/ad14',
      altText: 'Discover delicious and healthy recipes for every dietary need.'
    },
    {
      id: 15,
      image: '/assets/ad15.jpg',
      link: 'https://example.com/ad15',
      altText: 'Learn about different cultures and traditions with our educational resources.'
    },
    {
      id: 16,
      image: '/assets/ad16.jpg',
      link: 'https://example.com/ad16',
      altText: 'Find the perfect book to read with our personalized recommendations.'
    },
    {
      id: 17,
      image: '/assets/ad17.jpg',
      link: 'https://example.com/ad17',
      altText: 'Improve your communication skills with our public speaking and presentation courses.'
    },
    {
      id: 18,
      image: '/assets/ad18.jpg',
      link: 'https://example.com/ad18',
      altText: 'Discover the benefits of yoga and meditation for stress relief and relaxation.'
    },
    {
      id: 19,
      image: '/assets/ad19.jpg',
      link: 'https://example.com/ad19',
      altText: 'Find the best deals on home appliances and furniture with our online store.'
    },
    {
      id: 20,
      image: '/assets/ad20.jpg',
      link: 'https://example.com/ad20',
      altText: 'Learn about the latest advancements in science and technology with our articles and videos.'
    },
    {
      id: 21,
      image: '/assets/ad21.jpg',
      link: 'https://example.com/ad21',
      altText: 'Support local farmers and buy fresh produce at our farmers market.'
    },
    {
      id: 22,
      image: '/assets/ad22.jpg',
      link: 'https://example.com/ad22',
      altText: 'Find the perfect job with our online career resources and job board.'
    },
    {
      id: 23,
      image: '/assets/ad23.jpg',
      link: 'https://example.com/ad23',
      altText: 'Improve your writing skills with our online courses and workshops.'
    },
    {
      id: 24,
      image: '/assets/ad24.jpg',
      link: 'https://example.com/ad24',
      altText: 'Discover the benefits of aromatherapy and essential oils for relaxation and well-being.'
    },
    {
      id: 25,
      image: '/assets/ad25.jpg',
      link: 'https://example.com/ad25',
      altText: 'Find the best deals on travel insurance and vacation packages with our online comparison tool.'
    },
    {
      id: 26,
      image: '/assets/ad26.jpg',
      link: 'https://example.com/ad26',
      altText: 'Learn about the history of art and architecture with our online courses and resources.'
    },
    {
      id: 27,
      image: '/assets/ad27.jpg',
      link: 'https://example.com/ad27',
      altText: 'Support local businesses and shop for unique gifts at our online marketplace.'
    },
    {
      id: 28,
      image: '/assets/ad28.jpg',
      link: 'https://example.com/ad28',
      altText: 'Improve your financial literacy with our online courses and resources.'
    },
    {
      id: 29,
      image: '/assets/ad29.jpg',
      link: 'https://example.com/ad29',
      altText: 'Discover the benefits of gardening and growing your own food.'
    },
    {
      id: 30,
      image: '/assets/ad30.jpg',
      link: 'https://example.com/ad30',
      altText: 'Find the best deals on car rentals and transportation services with our online comparison tool.'
    },
    {
      id: 31,
      image: '/assets/ad31.jpg',
      link: 'https://example.com/ad31',
      altText: 'Learn about the latest trends in interior design and home decor.'
    },
    {
      id: 32,
      image: '/assets/ad32.jpg',
      link: 'https://example.com/ad32',
      altText: 'Support environmental organizations and learn about conservation efforts.'
    },
    {
      id: 33,
      image: '/assets/ad33.jpg',
      link: 'https://example.com/ad33',
      altText: 'Find the perfect pet for your family with our online adoption resources.'
    },
    {
      id: 34,
      image: '/assets/ad34.jpg',
      link: 'https://example.com/ad34',
      altText: 'Improve your cooking skills with our online courses and recipes.'
    },
    {
      id: 35,
      image: '/assets/ad35.jpg',
      link: 'https://example.com/ad35',
      altText: 'Discover the benefits of volunteering and giving back to your community.'
    },
    {
      id: 36,
      image: '/assets/ad36.jpg',
      link: 'https://example.com/ad36',
      altText: 'Find the best deals on insurance and financial products with our online comparison tool.'
    },
    {
      id: 37,
      image: '/assets/ad37.jpg',
      link: 'https://example.com/ad37',
      altText: 'Learn about the history of music and dance with our online courses and resources.'
    },
    {
      id: 38,
      image: '/assets/ad38.jpg',
      link: 'https://example.com/ad38',
      altText: 'Support local theaters and attend live performances in your community.'
    },
    {
      id: 39,
      image: '/assets/ad39.jpg',
      link: 'https://example.com/ad39',
      altText: 'Improve your language skills with our online translation and interpretation services.'
    },
    {
      id: 40,
      image: '/assets/ad40.jpg',
      link: 'https://example.com/ad40',
      altText: 'Discover the benefits of outdoor recreation and explore nature in your local area.'
    },
     {
      id: 41,
      image: '/assets/ad41.jpg',
      link: 'https://example.com/ad41',
      altText: 'Get personalized style advice from our expert fashion consultants.'
    },
    {
      id: 42,
      image: '/assets/ad42.jpg',
      link: 'https://example.com/ad42',
      altText: 'Find unique and affordable art pieces from emerging artists.'
    },
    {
      id: 43,
      image: '/assets/ad43.jpg',
      link: 'https://example.com/ad43',
      altText: 'Learn effective strategies for managing stress and anxiety.'
    },
    {
      id: 44,
      image: '/assets/ad44.jpg',
      link: 'https://example.com/ad44',
      altText: 'Discover healthy and delicious plant-based recipes.'
    },
    {
      id: 45,
      image: '/assets/ad45.jpg',
      link: 'https://example.com/ad45',
      altText: 'Plan your dream wedding with our expert planning services.'
    },
    {
      id: 46,
      image: '/assets/ad46.jpg',
      link: 'https://example.com/ad46',
      altText: 'Find the perfect gift for the tech lover in your life.'
    },
    {
      id: 47,
      image: '/assets/ad47.jpg',
      link: 'https://example.com/ad47',
      altText: 'Learn how to invest wisely and grow your wealth.'
    },
    {
      id: 48,
      image: '/assets/ad48.jpg',
      link: 'https://example.com/ad48',
      altText: 'Get expert advice on home improvement and renovation projects.'
    },
    {
      id: 49,
      image: '/assets/ad49.jpg',
      link: 'https://example.com/ad49',
      altText: 'Discover the best local restaurants and culinary experiences.'
    },
    {
      id: 50,
      image: '/assets/ad50.jpg',
      link: 'https://example.com/ad50',
      altText: 'Find the perfect outfit for your next special occasion.'
    },
    {
      id: 51,
      image: '/assets/ad51.jpg',
      link: 'https://example.com/ad51',
      altText: 'Explore the wonders of the underwater world with our scuba diving tours.'
    },
    {
      id: 52,
      image: '/assets/ad52.jpg',
      link: 'https://example.com/ad52',
      altText: 'Learn about the latest advancements in artificial intelligence and machine learning.'
    },
    {
      id: 53,
      image: '/assets/ad53.jpg',
      link: 'https://example.com/ad53',
      altText: 'Support organizations that are working to combat climate change.'
    },
    {
      id: 54,
      image: '/assets/ad54.jpg',
      link: 'https://example.com/ad54',
      altText: 'Find the perfect pair of shoes for any occasion.'
    },
    {
      id: 55,
      image: '/assets/ad55.jpg',
      link: 'https://example.com/ad55',
      altText: 'Learn how to start your own business with our online courses and resources.'
    },
    {
      id: 56,
      image: '/assets/ad56.jpg',
      link: 'https://example.com/ad56',
      altText: 'Get expert advice on how to manage your personal finances.'
    },
    {
      id: 57,
      image: '/assets/ad57.jpg',
      link: 'https://example.com/ad57',
      altText: 'Discover the best hiking trails in your area.'
    },
    {
      id: 58,
      image: '/assets/ad58.jpg',
      link: 'https://example.com/ad58',
      altText: 'Learn about the history of space exploration.'
    },
    {
      id: 59,
      image: '/assets/ad59.jpg',
      link: 'https://example.com/ad59',
      altText: 'Support organizations that are working to end poverty.'
    },
    {
      id: 60,
      image: '/assets/ad60.jpg',
      link: 'https://example.com/ad60',
      altText: 'Find the perfect hat for any occasion.'
    },
    {
      id: 61,
      image: '/assets/ad61.jpg',
      link: 'https://example.com/ad61',
      altText: 'Learn how to write a novel with our online courses and workshops.'
    },
    {
      id: 62,
      image: '/assets/ad62.jpg',
      link: 'https://example.com/ad62',
      altText: 'Get expert advice on how to improve your home'
    },
    {
      id: 63,
      image: '/assets/ad63.jpg',
      link: 'https://example.com/ad63',
      altText: 'Discover the best camping spots in your area.'
    },
    {
      id: 64,
      image: '/assets/ad64.jpg',
      link: 'https://example.com/ad64',
      altText: 'Learn about the history of aviation.'
    },
    {
      id: 65,
      image: '/assets/ad65.jpg',
      link: 'https://example.com/ad65',
      altText: 'Support organizations that are working to protect endangered species.'
    },
    {
      id: 66,
      image: '/assets/ad66.jpg',
      link: 'https://example.com/ad66',
      altText: 'Find the perfect scarf for any occasion.'
    },
    {
      id: 67,
      image: '/assets/ad67.jpg',
      link: 'https://example.com/ad67',
      altText: 'Learn how to paint with our online courses and workshops.'
    },
    {
      id: 68,
      image: '/assets/ad68.jpg',
      link: 'https://example.com/ad68',
      altText: 'Get expert advice on how to landscape your yard.'
    },
    {
      id: 69,
      image: '/assets/ad69.jpg',
      link: 'https://example.com/ad69',
      altText: 'Discover the best fishing spots in your area.'
    },
    {
      id: 70,
      image: '/assets/ad70.jpg',
      link: 'https://example.com/ad70',
      altText: 'Learn about the history of the internet.'
    },
    {
      id: 71,
      image: '/assets/ad71.jpg',
      link: 'https://example.com/ad71',
      altText: 'Support organizations that are working to promote education.'
    },
    {
      id: 72,
      image: '/assets/ad72.jpg',
      link: 'https://example.com/ad72',
      altText: 'Find the perfect pair of gloves for any occasion.'
    },
    {
      id: 73,
      image: '/assets/ad73.jpg',
      link: 'https://example.com/ad73',
      altText: 'Learn how to sculpt with our online courses and workshops.'
    },
    {
      id: 74,
      image: '/assets/ad74.jpg',
      link: 'https://example.com/ad74',
      altText: 'Get expert advice on how to decorate your home for the holidays.'
    },
     {
      id: 75,
      image: '/assets/ad75.jpg',
      link: 'https://example.com/ad75',
      altText: 'Discover the best bird watching spots in your area.'
    },
    {
      id: 76,
      image: '/assets/ad76.jpg',
      link: 'https://example.com/ad76',
      altText: 'Learn about the history of photography.'
    },
    {
      id: 77,
      image: '/assets/ad77.jpg',
      link: 'https://example.com/ad77',
      altText: 'Support organizations that are working to provide clean water.'
    },
    {
      id: 78,
      image: '/assets/ad78.jpg',
      link: 'https://example.com/ad78',
      altText: 'Find the perfect belt for any occasion.'
    },
    {
      id: 79,
      image: '/assets/ad79.jpg',
      link: 'https://example.com/ad79',
      altText: 'Learn how to knit with our online courses and workshops.'
    },
    {
      id: 80,
      image: '/assets/ad80.jpg',
      link: 'https://example.com/ad80',
      altText: 'Get expert advice on how to organize your closet.'
    },
    {
      id: 81,
      image: '/assets/ad81.jpg',
      link: 'https://example.com/ad81',
      altText: 'Discover the best stargazing spots in your area.'
    },
    {
      id: 82,
      image: '/assets/ad82.jpg',
      link: 'https://example.com/ad82',
      altText: 'Learn about the history of film.'
    },
    {
      id: 83,
      image: '/assets/ad83.jpg',
      link: 'https://example.com/ad83',
      altText: 'Support organizations that are working to promote peace.'
    },
    {
      id: 84,
      image: '/assets/ad84.jpg',
      link: 'https://example.com/ad84',
      altText: 'Find the perfect tie for any occasion.'
    },
    {
      id: 85,
      image: '/assets/ad85.jpg',
      link: 'https://example.com/ad85',
      altText: 'Learn how to sew with our online courses and workshops.'
    },
    {
      id: 86,
      image: '/assets/ad86.jpg',
      link: 'https://example.com/ad86',
      altText: 'Get expert advice on how to declutter your home.'
    },
    {
      id: 87,
      image: '/assets/ad87.jpg',
      link: 'https://example.com/ad87',
      altText: 'Discover the best rock climbing spots in your area.'
    },
    {
      id: 88,
      image: '/assets/ad88.jpg',
      link: 'https://example.com/ad88',
      altText: 'Learn about the history of television.'
    },
    {
      id: 89,
      image: '/assets/ad89.jpg',
      link: 'https://example.com/ad89',
      altText: 'Support organizations that are working to protect human rights.'
    },
    {
      id: 90,
      image: '/assets/ad90.jpg',
      link: 'https://example.com/ad90',
      altText: 'Find the perfect wallet for any occasion.'
    },
    {
      id: 91,
      image: '/assets/ad91.jpg',
      link: 'https://example.com/ad91',
      altText: 'Learn how to code mobile apps with our online courses and workshops.'
    },
    {
      id: 92,
      image: '/assets/ad92.jpg',
      link: 'https://example.com/ad92',
      altText: 'Get expert advice on how to create a budget and save money.'
    },
    {
      id: 93,
      image: '/assets/ad93.jpg',
      link: 'https://example.com/ad93',
      altText: 'Discover the best kayaking spots in your area.'
    },
    {
      id: 94,
      image: '/assets/ad94.jpg',
      link: 'https://example.com/ad94',
      altText: 'Learn about the history of video games.'
    },
    {
      id: 95,
      image: '/assets/ad95.jpg',
      link: 'https://example.com/ad95',
      altText: 'Support organizations that are working to end hunger.'
    },
    {
      id: 96,
      image: '/assets/ad96.jpg',
      link: 'https://example.com/ad96',
      altText: 'Find the perfect backpack for any occasion.'
    },
    {
      id: 97,
      image: '/assets/ad97.jpg',
      link: 'https://example.com/ad97',
      altText: 'Learn how to design websites with our online courses and workshops.'
    },
    {
      id: 98,
      image: '/assets/ad98.jpg',
      link: 'https://example.com/ad98',
      altText: 'Get expert advice on how to invest in the stock market.'
    },
    {
      id: 99,
      image: '/assets/ad99.jpg',
      link: 'https://example.com/ad99',
      altText: 'Discover the best surfing spots in your area.'
    },
    {
      id: 100,
      image: '/assets/ad100.jpg',
      link: 'https://example.com/ad100',
      altText: 'Learn about the history of computers.'
    }
  ];
  
  export default mockAds;