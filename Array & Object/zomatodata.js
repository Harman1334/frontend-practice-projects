//Using the given zomato data print name and rating of each restaurant via for loop and also print the rating and name of third and fourth restaurant individually.

let data= [
        {
            "type": "restaurant",
            "info": {
                "resId": 21023192,
                "name": "Khadak Singh Da Dhaba",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/21023192/8723ea7eee89d2cc19ac02d4690ecf1a_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/21023192/8723ea7eee89d2cc19ac02d4690ecf1a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/21023192/f01021550a0460a45daf44e4f3649d38_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "3.9",
                },
            },
            
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 21563626,
                "name": "The Terrace",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/21563626/28cef8f04bcd0624671adbd14a17af0c_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/21563626/28cef8f04bcd0624671adbd14a17af0c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "3.1",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 15277,
                "name": "Sheikhupurian Da Vaishno Dhaba",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/15277/cfc44d58ddcc509a848bf5190d0690af_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/15277/cfc44d58ddcc509a848bf5190d0690af_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/7/15277/f20bb6fe8a6309e7adbe2c74295c8229_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.1",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20873212,
                "name": "Under The Mango Tree",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/20873212/6daf3627cee04694abbaae2cb1604004_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/20873212/6daf3627cee04694abbaae2cb1604004_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "4.2",
                },
               
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 21110297,
                "name": "The Bear House Cafe and Bar",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/21110297/8d9f429db7dcf4a15a98bed18fc59b66_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/21110297/8d9f429db7dcf4a15a98bed18fc59b66_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "3.4",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19027493,
                "name": "Biryani By Kilo",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/3/19027493/f3caffbbce8999500d021f636a1db150_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/3/19027493/f3caffbbce8999500d021f636a1db150_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/3/19027493/09e8a8c41bdca7aabd893e055417ff58_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.2",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18711090,
                "name": "The Brew Estate",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/0/18711090/323a55370f78bfefbe58a21914e098ed_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/18711090/323a55370f78bfefbe58a21914e098ed_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/0/18711090/a4898ba28de29e5a1079704f6cfd4d28_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.1",
                },
            },
        }
    ]

// Print all restaurant names and ratings 
for (let i in data) {
  let restaurant = data[i];
  console.log("Name:", restaurant.info.name,"and", "Rating:", restaurant.info.rating.rating_text);
}

// Print 3rd and 4th restaurant details individually
console.log("Third Restaurant:");
console.log("Name:", data[2].info .name, "and","Rating:", data[2].info.rating.rating_text);

console.log("Fourth Restaurant:");
console.log("Name:", data[3].info.name,"and", "Rating:", data[3].info.rating.rating_text);
