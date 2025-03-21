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
    }
  ];
  
  export default mockAds;