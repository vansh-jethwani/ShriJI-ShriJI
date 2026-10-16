
/*
  EDIT THIS FILE to update hampers, prices, photos and item weights.
  Image URLs must be publicly accessible.
  Never put passwords or secret keys in this file.
*/

const siteSettings = {
  hero: {
    title: "Thoughtfully Curated Festive Hampers",
    subtitle: "Make every celebration memorable.",
    image: "https://your-image-url.com/hero.",
    imageAlt: "Shreeji & Shreeji festive gift hampers"
  },

  story: {
    title: "Gifting Made Special",
    image: "https://your-image-url.com/story.jpg"
  },

  announcement: {
    text: "Celebrate every occasion with Shreeji & Shreeji"
  },

  logo: {
    image: "https://your-image-url.com/logo.png"
  }
};

const hampers = [

    // Hamper 1

    {
    id: "Hamper1",
    name: "Anupam Uphaar",
    category: "Handcrafted Gift Baskets",
    price: 679,
    tag: "The Ultimate Diwali Gift",
    description:
      "A carefully curated assortment of sweet and savory treats designed to make celebrations unforgettable.",
    image:
      "public/hamper1.png",
    items: [
      {
        name: "Anjeer Dry Fruit Burfee",
        weight: 250,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/0/2/02_-anjeer-dry-fruit-burfee-domestic_500g__fop.png"
      },
      {
        name: "Punjabi Tadka",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/u/punjabi-tadka-200g_fop.png"
      },
      {
        name: "Kashmiri Mix",
        weight: 150,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/0/8/08_-kashmiri-mix-150gm-pouch_zipper_-fop.png"
      },
      {
        name: "Jim Jam",
        weight: 57,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_YLE0GqTUrDMECrXcTXRiMZaEerfCFNKuo2ShiHoUA&s=10"
      },
      {
        name: "Treat Croissant",
        weight: 45,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEXnRWo05NpgMBlli7tWYqx6hoYn-8BwEbf7AWMjMIw&s=10"
      },
      {
        name: "Korean Chips",
        weight: 28,
        image:
          "public/korean.png"
      }
    ]
  },

  // Hamper 2

  {
    id: "Hamper2",
    name: "Shahi Nazrana",
    category: "Premium Festive",
    price: 520,
    tag: "Royal Festive Celebration",
    description:
      "An exquisite collection of traditional delicacies wrapped in regal elegance for your loved ones.",
    image:
      "public/hamper2.png",
    items: [
      {
        options: [
          {
            name: "Kaju Katli",
            image:
              "https://www.sweetsandsnacks.in/wp-content/uploads/2019/03/kajukatli.jpg"
          },
          {
            name: "Mango Burfi",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv5K1lnyJOOdULaHKRJVa7d1-8bRTXl6yRd4442xKpA&s=10"
          }
        ],
        weight: 250,
      },
      {
        name: "Punjabi Tadka",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/u/punjabi-tadka-200g_fop.png"
      },
      {
        name: "Kashmiri Mix",
        weight: 150,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/0/8/08_-kashmiri-mix-150gm-pouch_zipper_-fop.png"
      },
      {
        name: "Jim Jam",
        weight: 57,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_YLE0GqTUrDMECrXcTXRiMZaEerfCFNKuo2ShiHoUA&s=10"
      },
      {
        name: "Treat Croissant",
        weight: 45,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEXnRWo05NpgMBlli7tWYqx6hoYn-8BwEbf7AWMjMIw&s=10"
      },
      {
        name: "Korean Chips",
        weight: 28,
        image:
          "public/korean.png"
      }
    ]
  },

  // Hamper 3

  {
    id: "festive-delight",
    name: "Shahi Andaz",
    category: "Festive",
    price: 459,
    tag: "A festive favourite",
    description:
      "A joyful assortment of traditional favourites and savoury treats, brought together for the season of sharing.",
    image:
      "/public/hamper3.webp",
    items: [
      {
        name: "Gulab Jamun",
        weight: 1000,
        image:
          "https://cdn.grofers.com/da/cms-assets/cms/product/7e63742574fd4412be567d938768573b.jpg"
      },
      {
        name: "Punjabi Tadka",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/u/punjabi-tadka-200g_fop.png"
      },
      {
        name: "Kashmiri Mix",
        weight: 150,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/0/8/08_-kashmiri-mix-150gm-pouch_zipper_-fop.png"
      },
      {
        name: "Manbhawan Soan Papdi",
        weight: 100,
        image:
          "https://supersavings.lk/wp-content/uploads/2020/05/bikaji-soan-papdi-manbhavan-1.jpg"
      },
      {
        name: "Khokha Bhujia",
        weight: 40,
        image:
          "https://rukmini1.flixcart.com/image/300/300/jwuzzww0/snack-savourie/r/b/s/400-bhujia-khattha-meetha-tana-bana-ratlami-chatpata-sev-pouch-original-imaff3p3fgrczhnq.jpeg"
      },
      {
        name: "Puff Corn",
        weight: 35,
        image:
          "public/puffcorn.webp"
      },
      {
        name: "Little Hearts",
        weight: 14,
        image:
          "https://m.media-amazon.com/images/I/7162ZSYe48L.jpg"
      }
    ]
  },

//   Hamper 4


  {
    id: "sweet-celebration",
    name: "Shahi Dawat",
    category: "Sweets",
    price: 379,
    tag: "Made for sweet moments",
    description:
      "A sweet little collection for sharing warm wishes, celebrating milestones and making ordinary days feel special.",
    image:
      "public/hamper4.png",
    items: [
      {
        name: "Sadabahar Soan Papdi",
        weight: 450,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/1/11_-front_-sadabahar-soanpapdi_domestic_900gm_-size-w-448-pxl-x-h-560-pxl.png"
      },
      {
        name: "Kashmiri Mix",
        weight: 150,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/0/8/08_-kashmiri-mix-150gm-pouch_zipper_-fop.png"
      },
      {
        name: "Khokha Bhujia",
        weight: 40,
        image:
          "https://rukmini1.flixcart.com/image/300/300/jwuzzww0/snack-savourie/r/b/s/400-bhujia-khattha-meetha-tana-bana-ratlami-chatpata-sev-pouch-original-imaff3p3fgrczhnq.jpeg"
      },
      {
        name: "Puff Corn",
        weight: 35,
        image:
          "public/puffcorn.webp"
      },
      {
        name: "Britannia Layerz Layer Cake",
        weight: 16,
        image:
          "https://media.britannia.co.in/Layered_Cake_Orange_de066ff090.jpg"
      }
    ]
  },

//   Hamper 5


  {
    id: "namkeen-nibbles",
    name: "Namkeen Dawat",
    category: "Namkeen",
    price: 289,
    tag: "For the savoury soul",
    description:
      "A savoury selection for snack lovers—perfect for a relaxed get-together or a thoughtful festive gesture.",
    image:
        "public/hamper5.png",
    
    items: [
      {
        name: "Manbhawan Soan Papdi",
        weight: 450,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/m/a/manbhawan-soanpapdi_domestic_900gm_fop.png"
      },
      {
        name: "Kashmiri Mix",
        weight: 150,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/0/8/08_-kashmiri-mix-150gm-pouch_zipper_-fop.png"
      },
      {
        name: "Corn Chips",
        weight: 55,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/0/3/03_-corn-chips_265mm-x-210mm_rs-20_-fop.png"
      },
      {
        name: "Cripstix",
        weight: 55,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/r/crispstix-front.png"
      },
      {
        name: "Britannia Layerz Layer Cake",
        weight: 16,
        image:
          "https://media.britannia.co.in/Layered_Cake_Orange_de066ff090.jpg"
      }
    ]
  },

//   Hamper 6


  {
    id: "little-luxuries",
    name: "Thoda Mitha, Thoda Namkeen",
    category: "Premium",
    price: 269,
    tag: "A little extra love",
    description:
      "A considered mix of indulgent treats in a gift-ready presentation, made for moments that deserve something extra.",
    image:
      "public/hamper6.png",
    items: [
      {
        name: "Manbhawan Soan Papdi",
        weight: 450,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/m/a/manbhawan-soanpapdi_domestic_900gm_fop.png"
      },
      {
        name: "Bikaneri Bhujia",
        weight: 200,
        image:
          "https://m.media-amazon.com/images/I/714HBtC0R9L.jpg"
      },
      {
        name: "Kuch Kuch (All In One)",
        weight: 200,
        image:
          "https://m.media-amazon.com/images/I/71zKHEBgL1L._AC_UF894,1000_QL80_.jpg"
      }
    ]
  },

  // Hamper 7

{
    id: "Hamper7",
    name: "Utsav Manika",
    category: "Luxury Festive",
    price: 200,
    tag: "A Touch of Elegance",
    description:
      "Delightfully packaged festive goodies bringing warmth, joy, and rich flavors to every home.",
    image:
      "public/hamper7.png",
    items: [
      {
        name: "Punjabi Tadka",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/u/punjabi-tadka-200g_fop.png"
      },
      {
        name: "Soan Cake",
        weight: 200,
        image:
          "https://nagabazaar.com/cdn/shop/files/Untitleddesign-2026-07-27T131354.716.png?v=1785138284"
      },
      {
        name: "Khokha Bhujia",
        weight: 40,
        image:
          "https://rukmini1.flixcart.com/image/300/300/jwuzzww0/snack-savourie/r/b/s/400-bhujia-khattha-meetha-tana-bana-ratlami-chatpata-sev-pouch-original-imaff3p3fgrczhnq.jpeg"
      },
      {
        name: "Puff Corn",
        weight: 35,
        image:
          "public/puffcorn.webp"
      }
    ]
  },

  // Hamper 8
  
  {
    id: "hamper8",
    name: "Rajasi Pitara",
    category: "Assortments",
    price: 190,
    tag: "Pure Traditions",
    description:
      "A grand festive box brimming with authentic snacks and sweets for magnificent Diwali gifting.",
    image:
      "public/hamper8.png",
    items: [
      {
        name: "Manbhawan Soan Papdi",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/m/a/manbhawan-soanpapdi_domestic_900gm_fop.png"
      },
      {
        name: "Pudhina Chips",
        weight: 150,
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIbC16jSETTt3fHWqlXv-4DSPykI-jaclp47cK92zrg&s=10"
      },
      {
        name: "Kuram Kuram",
        weight: 40,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWwD4064yPg2yvP2yZqcSY2p8pGh2zfMgPZXl0orYWQ&s=10"
      },
      {
        name: "Energy Snack",
        weight: 40,
        image:
          "public/energy.png"
      }
    ]
  },

  // Hamper 9

  {
    id: "warm-wishes",
    name: "Picnic",
    category: "Festive",
    price: 169,
    tag: "Small gesture, big heart",
    description:
      "A cheerful hamper of familiar favourites, assembled to make a simple thank-you or festive visit feel meaningful.",
    image:
      "public/hamper9.png",
    items: [
      {
        name: "Manbhawan Soan Papdi",
        weight: 200,
        image:
          "https://www.bikaji.com/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/m/a/manbhawan-soanpapdi_domestic_900gm_fop.png"
      },
      {
        name: "Lite Chiwda",
        weight: 82,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOFIh4IUF_ya7AudO6ngNn18RVEFRuiIzui4BOfWEYg&s=10"
      },
      {
        name: "Bikaneri Papdi",
        weight: 75,
        image:
          "public/bikaneripapdi.png"
      },
      {
        name: "Sab Kuch (Navratan Mix)",
        weight: 75,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPJKXNuBXp5zoqr-ZnqCcJTMhkGJuXeNta6f6OitW4g&s=10"
      },
      {
        name: "Bikaneri Bhujia",
        weight: 75,
        image:
          "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2026/4/7/49ecc659-39da-43de-9377-0ed62140d9c4_4377_1.png"
      }
    ]
  },

//   Hamper 10


  {
    id: "everyday-thoughtful",
    name: "Out Of Stock!!!!",
    outOfStock: true,
    category: "Everyday",
    price: 569,
    tag: "A gift for any day",
    description:
      "A simple, warm selection for hosts, colleagues, neighbours or anyone who could use a little surprise.",
    image:
      "public/hamper10.jpeg",
    items: [
      {
        name: "Bikaneri Rasgulla",
        weight: 500,
        image:
          "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/2/11/f3606df6-e164-427f-bfc4-1216a6aeb603_F19DOIK33I_MN_11022026.png"
      },
      {
        name: "Classic Namkeen",
        weight: 150,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mini Assorted Sweets",
        weight: 150,
        image:
          "https://images.unsplash.com/photo-1548907040-4d42e3f2b6d6?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Classic Namkeen",
        weight: 150,
        image:
          "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Roasted Nuts",
        weight: 100,
        image:
          "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=500&q=80"
      }
    ]
  }
];
