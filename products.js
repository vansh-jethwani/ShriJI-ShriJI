
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
    id: "festive-delight",
    name: "Festive Delight",
    category: "Festive",
    price: 459,
    tag: "A festive favourite",
    description:
      "A joyful assortment of traditional favourites and savoury treats, brought together for the season of sharing.",
    image:
      "/public/hamper1.webp",
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
        weight: 40,
        image:
          "https://m.media-amazon.com/images/I/7162ZSYe48L.jpg"
      }
    ]
  },

//   Hamper 2


  {
    id: "sweet-celebration",
    name: "Sweet Celebration",
    category: "Sweets",
    price: 379,
    tag: "Made for sweet moments",
    description:
      "A sweet little collection for sharing warm wishes, celebrating milestones and making ordinary days feel special.",
    image:
      "public/hamper3.webp",
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
        name: "Puff Corn",
        weight: 35,
        image:
          "public/puffcorn.webp"
      },
      {
        name: "Khokha Bhujia",
        weight: 40,
        image:
          "https://rukmini1.flixcart.com/image/300/300/jwuzzww0/snack-savourie/r/b/s/400-bhujia-khattha-meetha-tana-bana-ratlami-chatpata-sev-pouch-original-imaff3p3fgrczhnq.jpeg"
      },
      {
        name: "Britannia Layerz Layer Cake",
        weight: 16,
        image:
          "https://media.britannia.co.in/Layered_Cake_Orange_de066ff090.jpg"
      }
    ]
  },

//   Hamper 3


  {
    id: "namkeen-nibbles",
    name: "Namkeen Nibbles",
    category: "Namkeen",
    price: 289,
    tag: "For the savoury soul",
    description:
      "A savoury selection for snack lovers—perfect for a relaxed get-together or a thoughtful festive gesture.",
    image:
        "public/hamper2.webp",
    
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

//   Hamper 4


  {
    id: "little-luxuries",
    name: "Little Luxuries",
    category: "Premium",
    price: 269,
    tag: "A little extra love",
    description:
      "A considered mix of indulgent treats in a gift-ready presentation, made for moments that deserve something extra.",
    image:
      "public/hamper4.png",
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

//   Hamper 5


  {
    id: "warm-wishes",
    name: "Warm Wishes",
    category: "Festive",
    price: 169,
    tag: "Small gesture, big heart",
    description:
      "A cheerful hamper of familiar favourites, assembled to make a simple thank-you or festive visit feel meaningful.",
    image:
      "public/hamper5.png",
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
          "https://images.unsplash.com/photo-1548907040-4d42e3f2b6d6?auto=format&fit=crop&w=500&q=80"
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

//   Hamper 6


  {
    id: "everyday-thoughtful",
    name: "Out Of Stock!!!!",
    category: "Everyday",
    price: 569,
    tag: "A gift for any day",
    description:
      "A simple, warm selection for hosts, colleagues, neighbours or anyone who could use a little surprise.",
    image:
      "public/hamper6.jpeg",
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
