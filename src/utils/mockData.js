const resList = [
    {
        "id": 1,
        "name": "Koshy's",
        "cuisine": "Indian",
        "rating": 4.5,
        "reviews_count": 124,
        "promoted": true,
        "address": {
          "street": "39, St. Mark's Road, Shanthala Nagar, Ashok Nagar",
          "city": "Bengaluru",
          "state": "Karnataka",
          "zip_code": "560001"
        },
        "contact": {
          "phone": "+91-80-22213793",
          "email": "info@koshys.com"
        },
        "menu_url": "https://www.koshys.com/menu",
        "delivery_time_minutes": 30,
        "price_range": "$$",
        "special_dishes": ["Roast Chicken", "Kerala Pork", "Fish Biryani"],
        "offers": ["10% off on orders above ₹1000", "Free dessert on weekends"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
      },
      {
        "id": 2,
        "name": "Vidyarthi Bhavan",
        "cuisine": "South Indian",
        "rating": 4.8,
        "reviews_count": 89,
        "address": {
          "street": "32, Gandhi Bazaar, Basavanagudi",
          "city": "Bengaluru",
          "state": "Karnataka",
          "zip_code": "560004"
        },
        "contact": {
          "phone": "+91-80-26677588",
          "email": "contact@vidyarthibhavan.com"
        },
        "menu_url": "https://www.vidyarthibhavan.com/menu",
        "delivery_time_minutes": 25,
        "price_range": "$",
        "special_dishes": ["Masala Dosa", "Rava Idli", "Filter Coffee"],
        "offers": ["5% off on first order", "Free coffee with breakfast combo"],
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.aE3mmRnS1fF1W3nbpLNABwHaHa&pid=Api"
      },
      {
        "id": 3,
        "name": "Sushi Zen",
        "cuisine": "Japanese",
        "rating": 4.8,
        "reviews_count": 89,
        "promoted": true,
        "address": {
          "street": "34 Sakura Street",
          "city": "Tokyo",
          "state": "Kanto",
          "zip_code": "100-0001"
        },
        "contact": {
          "phone": "+81-123456789",
          "email": "info@sushizen.jp"
        },
        "menu_url": "https://www.sushizen.jp/menu",
        "delivery_time_minutes": 45,
        "price_range": "$$$",
        "special_dishes": ["Salmon Nigiri", "Tuna Sashimi", "Tempura"],
        "offers": ["15% off on first order", "Free miso soup with every order"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
      },
      {
        "id": 4,
        "name": "La Bella Italia",
        "cuisine": "Italian",
        "rating": 4.2,
        "reviews_count": 150,
        "address": {
          "street": "77 Pasta Blvd",
          "city": "Rome",
          "state": "Lazio",
          "zip_code": "00184"
        },
        "contact": {
          "phone": "+39-987654321",
          "email": "hello@labellaitalia.it"
        },
        "menu_url": "https://www.labellaitalia.it/menu",
        "delivery_time_minutes": 35,
        "price_range": "$$",
        "special_dishes": ["Margherita Pizza", "Fettuccine Alfredo", "Tiramisu"],
        "offers": ["Buy 1 Pizza, Get 1 Half Price", "Free garlic bread with orders over €30"],
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.aE3mmRnS1fF1W3nbpLNABwHaHa&pid=Api"
      },
      {
        "id": 5,
        "name": "Taco Fiesta",
        "cuisine": "Mexican",
        "rating": 4.6,
        "reviews_count": 112,
        "address": {
          "street": "21 Sombrero Ave",
          "city": "Mexico City",
          "state": "CDMX",
          "zip_code": "01000"
        },
        "contact": {
          "phone": "+52-555-1234567",
          "email": "contact@tacofiesta.mx"
        },
        "menu_url": "https://www.tacofiesta.mx/menu",
        "delivery_time_minutes": 40,
        "price_range": "$$",
        "special_dishes": ["Tacos al Pastor", "Guacamole", "Churros"],
        "offers": ["20% off on Taco Tuesdays", "Free drink with any combo"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
      },
      {
        "id": 6,
        "name": "Burgers & Co.",
        "cuisine": "American",
        "rating": 4.3,
        "reviews_count": 134,
        "promoted": true,
        "address": {
          "street": "123 Burger Lane",
          "city": "New York",
          "state": "NY",
          "zip_code": "10001"
        },
        "contact": {
          "phone": "+1-212-5551234",
          "email": "info@burgersandco.com"
        },
        "menu_url": "https://www.burgersandco.com/menu",
        "delivery_time_minutes": 30,
        "price_range": "$$",
        "special_dishes": ["Cheeseburger", "BBQ Ribs", "Milkshake"],
        "offers": ["Free fries with every burger", "10% off on weekends"],
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.aE3mmRnS1fF1W3nbpLNABwHaHa&pid=Api"
      },
      {
        "id": 7,
        "name": "Café de Paris",
        "cuisine": "French",
        "rating": 4.7,
        "reviews_count": 155,
        "address": {
          "street": "1 Rue de Paris",
          "city": "Paris",
          "state": "Île-de-France",
          "zip_code": "75001"
        },
        "contact": {
          "phone": "+33-1-23456789",
          "email": "contact@cafedeparis.fr"
        },
        "menu_url": "https://www.cafedeparis.fr/menu",
        "delivery_time_minutes": 30,
        "price_range": "$$$",
        "special_dishes": ["Croissants", "Quiche Lorraine", "Escargot"],
        "offers": ["Free wine with dinner", "10% off on desserts"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
      },
      {
        "id": 8,
        "name": "El Chiringuito",
        "cuisine": "Spanish",
        "rating": 4.6,
        "reviews_count": 103,
        "address": {
          "street": "4 Playa del Sol",
          "city": "Barcelona",
          "state": "Catalonia",
          "zip_code": "08001"
        },
        "contact": {
          "phone": "+34-934-567890",
          "email": "info@elchiringuito.es"
        },
        "menu_url": "https://www.elchiringuito.es/menu",
        "delivery_time_minutes": 35,
        "price_range": "$$",
        "special_dishes": ["Paella", "Tapas", "Churros"],
        "offers": ["Free drink with seafood", "10% off on lunch combos"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.J9FP-bIZvTyLBgqGbr3DAAHaEJ&pid=Api"
      },
      {
        "id": 9,
        "name": "Pasta House",
        "cuisine": "Italian",
        "rating": 4.4,
        "reviews_count": 111,
        "promoted": true,
        "address": {
          "street": "56 Via Roma",
          "city": "Florence",
          "state": "Tuscany",
          "zip_code": "50123"
        },
        "contact": {
          "phone": "+39-055-1234567",
          "email": "info@pastahouse.it"
        },
        "menu_url": "https://www.pastahouse.it/menu",
        "delivery_time_minutes": 40,
        "price_range": "$$",
        "special_dishes": ["Spaghetti Carbonara", "Lasagna", "Tiramisu"],
        "offers": ["10% off on orders above €25", "Free dessert on weekends"],
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.W9RFknwcGfgpMFJFhQurjgHaEK&pid=Api"
      },
      {
        "id": 10,
        "name": "Dim Sum Palace",
        "cuisine": "Chinese",
        "rating": 4.7,
        "reviews_count": 142,
        "address": {
          "street": "88 Wok Street",
          "city": "Beijing",
          "state": "Beijing",
          "zip_code": "100000"
        },
        "contact": {
          "phone": "+86-10-12345678",
          "email": "info@dimsumpalace.cn"
        },
        "menu_url": "https://www.dimsumpalace.cn/menu",
        "delivery_time_minutes": 50,
        "price_range": "$$",
        "special_dishes": ["Peking Duck", "Dim Sum", "Sweet and Sour Pork"],
        "offers": ["15% off on orders above ¥200", "Free spring rolls with every meal"],
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.aE3mmRnS1fF1W3nbpLNABwHaHa&pid=Api"
      }
];


export default resList;


