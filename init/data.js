const sampleListings = [

    {
        title: "Taj Lake Palace",
        description: "A luxirious floating palace in the middle of the lake Pichola Offering world-class hospitality",
        image: [
            {
                url:"https://www.luxurygold.com/lg/wp-content/uploads/2015/12/iStock_000012159108_Large.jpg",
                filename:"listing_image"
            },
            {
                url:"https://www.travelplusstyle.com/wp-content/gallery/taj-lake-palace-udaipur/103682145-h1-sarva_ritu_2-_a_grand_royal_suite_4.jpg",
                filename:"listing_image"
            },
            {
                url:"https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F215848%2FVFML%2Fkhush_mahal_-_a_grand_royal_suite_(17)_s.jpg/44bc176bdacafa61cdff33d747dea9fb/1024%2C682/6/Taj_Lake_Palace_Udaipur-Udaipur-Info-16-215848.jpg",
                filename:"listing_image"
            },
        ],
        price: 7500,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "The Leela Palace",
        description: "A royal experience with exquisite architecture and fine dining in the heart of New Delhi.",
        image: [
            {
                url:"https://www.kayak.co.in/rimg/himg/e7/37/01/ice-157685056-0754606_3XL-338167.jpg?width=1366&height=768&crop=true",
                filename:"listing_image"
            },
            {
                url:"https://cdn.kiwicollection.com/media/property/PR007483/ll/007483-20-sishe_mehal_mid%202-at%20The%20Leela%20Palace%20Udaipur.jpg?cb=1711495982",
                filename:"listing_image"
            },
            {
                url:"https://www.theleela.com/prod/content/assets/styles/tl_840_604_webp/public/2024-01/Swimming-Pool_0.jpg.webp?VersionId=OW62I4aQvLp7fNEjCSZMQk2WFaHpIGdJ&itok=xS5wGGHx",
                filename:"listing_image"
            }


            // "https://www.kayak.co.in/rimg/himg/e7/37/01/ice-157685056-0754606_3XL-338167.jpg?width=1366&height=768&crop=true",
            // "https://cdn.kiwicollection.com/media/property/PR007483/ll/007483-20-sishe_mehal_mid%202-at%20The%20Leela%20Palace%20Udaipur.jpg?cb=1711495982",
            // "https://www.theleela.com/prod/content/assets/styles/tl_840_604_webp/public/2024-01/Swimming-Pool_0.jpg.webp?VersionId=OW62I4aQvLp7fNEjCSZMQk2WFaHpIGdJ&itok=xS5wGGHx"
        ],
        price: 9000,
        location: "New Delhi",
        country: "India",
    },
    {
        title: "Radisson Blu Resort",
        description: "A beachside resort offering an exotic stay with stunning views of the Arabian Sea.",
        image: [
            {
                url:"https://images.trvl-media.com/lodging/5000000/4480000/4474800/4474764/2e15d580.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
                filename:"listing_image"
            },
            {
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fc/ac/ca/main-pool-aerial-shot.jpg?w=700&h=-1&s=1",
                filename:"listing_image"
            },
            {
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFRmEvEsLtv_k2UiEIJhDr1nrb2U8CtT5vA&s",
                filename:"listing_image"
            }


            // "https://images.trvl-media.com/lodging/5000000/4480000/4474800/4474764/2e15d580.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fc/ac/ca/main-pool-aerial-shot.jpg?w=700&h=-1&s=1",
            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFRmEvEsLtv_k2UiEIJhDr1nrb2U8CtT5vA&s"

        ],
        price: 6500,
        location: "Goa",
        country: "India",
    },
    {
        title: "ITC Grand Chola",
        description: "A grand heritage hotel known for its elegance and rich South Indian hospitality.",
        image: [
            {
                url:"https://r1imghtlak.mmtcdn.com/f953fafaf48e11e79164025f77df004f.jpg",
                filename:"listing_image"
            },
            {
                url:"https://cache.marriott.com/content/dam/marriott-renditions/MAALC/maalc-restaurant-3904-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*",
                filename:"listing_image"
            },
            {
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/628286312.jpg?k=b176ed2f07c6a51e9475cb336d601f68e7f5b668be89305fdd5c473947a2fd77&o=&hp=1",
                filename:"listing_image"
            }


            // "https://r1imghtlak.mmtcdn.com/f953fafaf48e11e79164025f77df004f.jpg",
            // "https://cache.marriott.com/content/dam/marriott-renditions/MAALC/maalc-restaurant-3904-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628286312.jpg?k=b176ed2f07c6a51e9475cb336d601f68e7f5b668be89305fdd5c473947a2fd77&o=&hp=1"
        ],
        price: 8000,
        location: "Chennai",
        country: "India",
    },
    {
        title: "The Oberoi Udaivilas",
        description: "A stunning luxury resort with a mesmerizing view of the Aravalli Hills.",
        image:[
            {
               url:"https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/dining/detail/restaurant-1.jpg?w=724&extension=webp&hash=0c3b19df446b91d18b1de9b7e78882e5",
                filename:"listing_image"
            },
            {
                url:"https://www.kayak.com/rimg/himg/12/2d/37/expedia_group-56620-175320260-492366.jpg?width=1366&height=768&crop=true",
                filename:"listing_image"
            },
            {
                url:"https://images.trvl-media.com/lodging/1000000/810000/809500/809492/2fcdbfcb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
                filename:"listing_image"
            }


            // "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/dining/detail/restaurant-1.jpg?w=724&extension=webp&hash=0c3b19df446b91d18b1de9b7e78882e5",
            // "https://www.kayak.com/rimg/himg/12/2d/37/expedia_group-56620-175320260-492366.jpg?width=1366&height=768&crop=true",
            // "https://images.trvl-media.com/lodging/1000000/810000/809500/809492/2fcdbfcb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        ],
        price: 11000,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "JW Marriott Hotel",
        description: "An upscale hotel providing world-class services in the heart of Bangalore.",
        image: [
            {
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/630261067.jpg?k=0b4f244ced24bae5800a482d1cdce6abe4af9adbb7f8ec8eda59e795fd816ad9&o=&hp=1",
                filename:"listing_image"
            },
            {
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4d/bb/a1/jw-marriott-hotel-bengaluru.jpg?w=900&h=500&s=1",
                filename:"listing_image"
            },{
                url:"https://cache.marriott.com/content/dam/marriott-digital/jw/apec/hws/i/ixcjw/en_us/photo/unlimited/assets/ixcjw-pool-0029.jpg",
                filename:"listing_image"
            },


            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630261067.jpg?k=0b4f244ced24bae5800a482d1cdce6abe4af9adbb7f8ec8eda59e795fd816ad9&o=&hp=1",
            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4d/bb/a1/jw-marriott-hotel-bengaluru.jpg?w=900&h=500&s=1",
            // "https://cache.marriott.com/content/dam/marriott-digital/jw/apec/hws/i/ixcjw/en_us/photo/unlimited/assets/ixcjw-pool-0029.jpg"
        ],
        price: 7000,
        location: "Bangalore",
        country: "India",
    },
    {
        title: "The Lalit Mumbai",
        description: "A sophisticated urban retreat with impeccable luxury and comfort.",
        image: [
            {
                url:"https://www.thelalit.com/wp-content/uploads/2024/11/pool-mumbai-632x421.jpg",
                filename:"listing_image"
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/9073881.jpg?k=ffe1abc5f3cd988adb106decb9d20876f85f6ea1341d84b4b2b764dd71a49bab&o=&hp=1",
                filename:"listing_image"
            },{
                url:"https://q-xx.bstatic.com/xdata/images/hotel/max500/9095802.jpg?k=526e3d1376130d1b1e4012be743e8f0084d028741caec2810ae8de73237d5302&o=",
                filename:"listing_image"
            },

            // "https://www.thelalit.com/wp-content/uploads/2024/11/pool-mumbai-632x421.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/9073881.jpg?k=ffe1abc5f3cd988adb106decb9d20876f85f6ea1341d84b4b2b764dd71a49bab&o=&hp=1",
            // "https://q-xx.bstatic.com/xdata/images/hotel/max500/9095802.jpg?k=526e3d1376130d1b1e4012be743e8f0084d028741caec2810ae8de73237d5302&o="
        ],
        price: 8500,
        location: "Mumbai",
        country: "India",
    },
    {
        title: "Neemrana Fort-Palace",
        description: "A 15th-century heritage hotel offering a royal experience in Rajasthan.",
        image: [
            {
                url:"https://www.getyourvenue.com/uploads/venue-images/132/venueimage5.jpg",
                filename:"listing_image"
            },{
                url:"https://imgcdn.bookmywed.in/venuegallery/7182048a-1719-47d7-bb6f-8f899fc39f75Dining,_Neemrana_Fort_Palace,_restaurants_in_Rajasthan_8_6.jpg",
                filename:"listing_image"
            },{
                url:"https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3332/x_0,y_396,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/neemrana-fort-palace---15th-century-delhi-jaipur-highway/Francisi_Mahal_dgu1zc",
                filename:"listing_image"
            },


            // "https://www.getyourvenue.com/uploads/venue-images/132/venueimage5.jpg",
            // "https://shorturl.at/uhH9r",
            // "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3332/x_0,y_396,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/neemrana-fort-palace---15th-century-delhi-jaipur-highway/Francisi_Mahal_dgu1zc",
        ],
        price: 6000,
        location: "Neemrana",
        country: "India",
    },
    {
        title: "The Tamara Coorg",
        description: "A luxury nature retreat with lush greenery and breathtaking mountain views.",
        image: [
            {
                url:"https://r1imghtlak.mmtcdn.com/64890584a8c011ebaddf0242ac110002.jpg",
                filename:"listing_image"
            },{
                url:"https://r1imghtlak.mmtcdn.com/d0e6e4482a9711e998db0242ac110002.jpg",
                filename:"listing_image"
            },{
                url:"https://r1imghtlak.ibcdn.com/0454473a68ab11e8957b0af4bba828c4.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,8&output-format=jpg",
                filename:"listing_image"
            },
            // "https://r1imghtlak.mmtcdn.com/64890584a8c011ebaddf0242ac110002.jpg",
            // "https://r1imghtlak.mmtcdn.com/d0e6e4482a9711e998db0242ac110002.jpg",
            // "https://r1imghtlak.ibcdn.com/0454473a68ab11e8957b0af4bba828c4.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,8&output-format=jpg"
        ],
        price: 9500,
        location: "Coorg",
        country: "India",
    },
    {
        title: "Wildflower Hall",
        description: "A beautiful resort nestled in the Himalayas, offering a peaceful escape.",
        image: [

            {
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=900&h=500&s=1",
                filename:"listing_image",
            },{
                url:"https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/wildflower-hall-shimla-in-the-himalayas/gallery/featured/wfh-gallery-featured-2-swimming-pool-724x407.jpg",
                filename:"listing_image",
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/49283651.jpg?k=86e5255a7fcc8d7174d13deed0bde75d0c5178d166936828539e5c3e312e0055&o=&hp=1",
                filename:"listing_image",
            },


            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=900&h=500&s=1",
            // "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/wildflower-hall-shimla-in-the-himalayas/gallery/featured/wfh-gallery-featured-2-swimming-pool-724x407.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49283651.jpg?k=86e5255a7fcc8d7174d13deed0bde75d0c5178d166936828539e5c3e312e0055&o=&hp=1"
        ],
        price: 10500,
        location: "Shimla",
        country: "India",
    },
    {
        title: "The Windflower Resorts",
        description: "A serene retreat offering Ayurveda and spa therapies in Mysore.",
        image: [
            {
                url:"https://dec1osz9a7g7e.cloudfront.net/windflower-group-windflower-group-windflowergoaslider1.jpg",
                filename:"listing_image",
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/81925492.jpg?k=930292ee5e8d17b2a0d049508dbebbf7b3dfe7852eb1ad1d81c7db554a2d7af9&o=&hp=1",
                filename:"listing_image",
            },{
                url:"https://dec1osz9a7g7e.cloudfront.net/windflower-bengaluru-windflower-bengaluru-villa.jpg",
                filename:"listing_image",
            },


            // "https://dec1osz9a7g7e.cloudfront.net/windflower-group-windflower-group-windflowergoaslider1.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/81925492.jpg?k=930292ee5e8d17b2a0d049508dbebbf7b3dfe7852eb1ad1d81c7db554a2d7af9&o=&hp=1",
            // "https://dec1osz9a7g7e.cloudfront.net/windflower-bengaluru-windflower-bengaluru-villa.jpg"
        ],
        price: 5000,
        location: "Mysore",
        country: "India",
    },
    {
        title: "Ginger Hotel Pune",
        description: "A budget-friendly yet modern hotel offering a comfortable stay in Pune.",
        image: [
            {
                url:"https://api.blessingsonthenet.com/uploads/hotels/ffa4ae8b1f282d15faec8bd3f286cada-1688826198044-Ginger%20Pune%20Wakad.webp",
                filename:"listing_image",
            },{
                url:"https://r1imghtlak.mmtcdn.com/b68b3784780511e7bde50a4cef95d023.jpg",
                filename:"listing_image",
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/226165025.jpg?k=a68fb207c38d0a0c2e4b0d7ad691b867a9b2bf9eb58a20e9d5df64975547b133&o=&hp=1",
                filename:"listing_image",
            },

            // "https://api.blessingsonthenet.com/uploads/hotels/ffa4ae8b1f282d15faec8bd3f286cada-1688826198044-Ginger%20Pune%20Wakad.webp",
            // "https://r1imghtlak.mmtcdn.com/b68b3784780511e7bde50a4cef95d023.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226165025.jpg?k=a68fb207c38d0a0c2e4b0d7ad691b867a9b2bf9eb58a20e9d5df64975547b133&o=&hp=1"
        ],
        price: 3000,
        location: "Pune",
        country: "India",
    },
    {
        title: "Fairmont Jaipur",
        description: "A blend of traditional Rajput architecture and modern luxury in Jaipur.",
        image: [
            {
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/17061423.jpg?k=a602c1735b051c67933f216b380b33b7a4ddc3414f830370d0683f57f3b74f1e&o=&hp=1",
                filename:"listing_image",
            },
            {
                url:"https://www.hotels-jaipur-india.com/data/Photos/OriginalPhoto/15507/1550786/1550786230.JPEG",
                filename:"listing_image",
            },
            {
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/431170791.jpg?k=77d3bbed02e0a1a0e8cfb2d1e0e739f3047808a85384fec5978eedf5d73fbec0&o=&hp=1",
                filename:"listing_image",
            },

            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17061423.jpg?k=a602c1735b051c67933f216b380b33b7a4ddc3414f830370d0683f57f3b74f1e&o=&hp=1",
            // "https://www.hotels-jaipur-india.com/data/Photos/OriginalPhoto/15507/1550786/1550786230.JPEG",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/431170791.jpg?k=77d3bbed02e0a1a0e8cfb2d1e0e739f3047808a85384fec5978eedf5d73fbec0&o=&hp=1"
        ],
        price: 7000,
        location: "Jaipur",
        country: "India",
    },
    {
        title: "Marari Beach Resort",
        description: "A tropical paradise offering an authentic Kerala backwater experience.",
        image: [
            {
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a7/88/0c/marari-beach-sprawls.jpg?w=700&h=-1&s=1",
                filename:"listing_image",
            },{
                url:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201902261813511376-419970d61e4411ed86310a58a9feac02.jpg",
                filename:"listing_image",
            },{
                url:"https://dynamic.tourtravelworld.com/package-images/photo-big/dir_15/441692/262735.jpg",
                filename:"listing_image",
            },


            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a7/88/0c/marari-beach-sprawls.jpg?w=700&h=-1&s=1",
            // "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201902261813511376-419970d61e4411ed86310a58a9feac02.jpg",
            // "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_15/441692/262735.jpg"
        ],
        price: 5500,
        location: "Alleppey",
        country: "India",
    },
    {
        title: "The Paul Bangalore",
        description: "A stylish boutique hotel offering luxury suites in Bangalore.",
        image: [

            {
                url:"https://thepaulbangalore.in/assets/images/blog/best-5-star-hotel-in-bangalore/best-5-star-hotel-in-bangalore-2.jpg",
                filename:"listing_image",
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/15220681.jpg?k=5e9cdbd9605e557f4fad6d53142a03e49218c179ffcafc6ac4e628ab539f3acd&o=&hp=1",
                filename:"listing_image",
            },{
                url:"https://r1imghtlak.mmtcdn.com/d5cef24e8b6e11e78ba70a4cef95d023.jpg",
                filename:"listing_image",
            },


            // "https://thepaulbangalore.in/assets/images/blog/best-5-star-hotel-in-bangalore/best-5-star-hotel-in-bangalore-2.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/15220681.jpg?k=5e9cdbd9605e557f4fad6d53142a03e49218c179ffcafc6ac4e628ab539f3acd&o=&hp=1",
            // "https://r1imghtlak.mmtcdn.com/d5cef24e8b6e11e78ba70a4cef95d023.jpg",
        ],
        price: 6500,
        location: "Bangalore",
        country: "India",
    },
    {
        title: "The Trident Udaipur",
        description: "A lakeside haven offering mesmerizing sunset views and traditional hospitality.",
        image:[
            {
                url:"https://www.tridenthotels.com/-/media/trident-hotel/home-page/Homepage-Resized/Banner/1920x1080/THU-swimming-pool-with-lady.jpg",
                filename:"listing_image",
            },{
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/13/22/e0/celebrating-culture-at.jpg?w=500&h=-1&s=1",
                filename:"listing_image",
            },{
                url:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/20102042/trident-udaipur-lobby-1-1.jpeg",
                filename:"listing_image",
            },


            // "https://www.tridenthotels.com/-/media/trident-hotel/home-page/Homepage-Resized/Banner/1920x1080/THU-swimming-pool-with-lady.jpg",
            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/13/22/e0/celebrating-culture-at.jpg?w=500&h=-1&s=1",
            // "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/20102042/trident-udaipur-lobby-1-1.jpeg"
        ],
        price: 7500,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "Ramada Plaza Agra",
        description: "A premium hotel near the Taj Mahal offering an elegant stay.",
        image:[
            {
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7e/64/0a/caption.jpg?w=900&h=500&s=1",
                filename:"listing_image",
            },{
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/54/c6/e1/ramada-plaza-agra.jpg?w=700&h=-1&s=1",
                filename:"listing_image",
            },{
                url:"https://cherryholidays.com/uploads/0000/6/2024/02/08/116c0c855280b02c5828ab12b71b019e.jpg",
                filename:"listing_image",
            },


            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7e/64/0a/caption.jpg?w=900&h=500&s=1",
            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/54/c6/e1/ramada-plaza-agra.jpg?w=700&h=-1&s=1",
            // "https://cherryholidays.com/uploads/0000/6/2024/02/08/116c0c855280b02c5828ab12b71b019e.jpg"
        ],
        price: 6800,
        location: "Agra",
        country: "India",
    },
    {
        title: "The Gateway Resort Damdama Lake",
        description: "An eco-resort surrounded by nature near Gurgaon.",
        image: [
            {
                url:"https://www.backpackingwithmylens.com/wp-content/uploads/2018/12/taj-damdama-resort-hero.jpg",
                filename:"listing_image"
            },{
                url:"https://b.zmtcdn.com/data/pictures/2/18989972/8102a514f8470208da8913944bd68994.jpg",
                filename:"listing_image"
            },{
                url:"https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/66/584/227/TGR_Damdama_-_Banquet_Social_Setup_O/The-Gateway-Resort-Damdama-Lake-Gurgaon-Ballroom.jpg?tr=w-750%2Ch-420%2Cfo-auto",
                filename:"listing_image"
            },


            // "https://www.backpackingwithmylens.com/wp-content/uploads/2018/12/taj-damdama-resort-hero.jpg",
            // "https://b.zmtcdn.com/data/pictures/2/18989972/8102a514f8470208da8913944bd68994.jpg",
            // "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/66/584/227/TGR_Damdama_-_Banquet_Social_Setup_O/The-Gateway-Resort-Damdama-Lake-Gurgaon-Ballroom.jpg?tr=w-750%2Ch-420%2Cfo-auto"
        ],
        price: 7200,
        location: "Gurgaon",
        country: "India",
    },
    {
        title: "Kumarakom Lake Resort",
        description: "A serene backwater resort offering traditional Kerala architecture and stunning waterfront views.",
        image: [
            {
                url:"https://www.i-escape.com/image/hotel/kumarakom-lake-resort/overview/294639.jpg",
                filename:"listing_image"
            },  {
                url:"https://www.kumarakomlakeresort.in/assets/images/articles/24/a-luxury-kerala-retreat-by-ana-usa-1.jpg",
                filename:"listing_image"
            },  {
                url:"https://www.kumarakomlakeresort.in/assets/images/about-kumarakom-lake-resort/about/gallery/luxury-pavilion-rooms-zoom.jpg",
                filename:"listing_image"
            },


            // "https://www.i-escape.com/image/hotel/kumarakom-lake-resort/overview/294639.jpg",
            // "https://www.kumarakomlakeresort.in/assets/images/articles/24/a-luxury-kerala-retreat-by-ana-usa-1.jpg",
            // "https://www.kumarakomlakeresort.in/assets/images/about-kumarakom-lake-resort/about/gallery/luxury-pavilion-rooms-zoom.jpg"
        ],
        price: 9500,
        location: "Kerala",
        country: "India",
    },
    {
        title: "Evolve Back Coorg",
        description: "A coffee plantation resort blending luxury with nature, offering breathtaking views of Coorg’s lush hills.",
        image:[
            {
                url:"https://www.ahotellife.com/wp-content/uploads/2023/03/1-Amulya-Hiremath-Evolve-Back-Coorg-A-Hotel-Life-1500x1112.jpg",
                filename:"listing_image"
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/96977642.jpg?k=2a4748c56431699c05e83788172e0c993e44f01d5d7ac22d932856609bf7c3c8&o=&hp=1",
                filename:"listing_image"
            },{
                url:"https://i0.wp.com/memorymakerholiday.com/wp-content/uploads/2019/06/LPC-Courtyard.jpg?fit=1900%2C1100",
                filename:"listing_image"
            },


            // "https://www.ahotellife.com/wp-content/uploads/2023/03/1-Amulya-Hiremath-Evolve-Back-Coorg-A-Hotel-Life-1500x1112.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96977642.jpg?k=2a4748c56431699c05e83788172e0c993e44f01d5d7ac22d932856609bf7c3c8&o=&hp=1",
            // "https://i0.wp.com/memorymakerholiday.com/wp-content/uploads/2019/06/LPC-Courtyard.jpg?fit=1900%2C1100",
        ],
        price: 11000,
        location: "Coorg",
        country: "India",
    },
    {
        title: "Taj Falaknuma Palace",
        description: "A heritage palace hotel in Hyderabad offering a blend of royal grandeur and modern luxury.",
        image: [
            {
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o=&hp=1",
                filename:"listing_image"
            },{
                url:"https://static.toiimg.com/photo/msid-25209808,width-96,height-65.cms",
                filename:"listing_image"
            },{
                url:"https://i0.wp.com/yummraj.com/wp-content/uploads/2017/11/img_6244.jpg?resize=720%2C540&ssl=1/images?q=tbn:ANd9GcTLzZK5b7XLNAazOjnH0QD9dLq5thcwLQFumw&s",
                filename:"listing_image"
            },
            ],

            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o=&hp=1",
            // "https://static.toiimg.com/photo/msid-25209808,width-96,height-65.cms",
            // "https://i0.wp.com/yummraj.com/wp-content/uploads/2017/11/img_6244.jpg?resize=720%2C540&ssl=1/images?q=tbn:ANd9GcTLzZK5b7XLNAazOjnH0QD9dLq5thcwLQFumw&s"],
        price: 13500,
        location: "Hyderabad",
        country: "India",
    },
    {
        title: "Ananda in the Himalayas",
        description: "A world-renowned wellness retreat offering Ayurveda, yoga, and breathtaking Himalayan views.",
        image: [
            {
                url:"https://assets.architecturaldigest.in/photos/6440fb5edfce010349530344/1:1/w_1080,h_1080,c_limit/Untitled%20design%20(15).png",
                filename:"listing_image"
            },{
                url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/30/92/56/ananda-in-the-himalayas.jpg?w=700&h=-1&s=1",
                filename:"listing_image"
            },{
                url:"https://assets.vogue.in/photos/63f60b0fe78af294c28e02f1/16:9/w_2083,h_1172,c_limit/Ananda_Pavillion_Hawa%20Mahal.jpg",
                filename:"listing_image"
            },


            // "https://assets.architecturaldigest.in/photos/6440fb5edfce010349530344/1:1/w_1080,h_1080,c_limit/Untitled%20design%20(15).png",
            // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/30/92/56/ananda-in-the-himalayas.jpg?w=700&h=-1&s=1",
            // "https://assets.vogue.in/photos/63f60b0fe78af294c28e02f1/16:9/w_2083,h_1172,c_limit/Ananda_Pavillion_Hawa%20Mahal.jpg"
        ],
        price: 12500,
        location: "Uttarakhand",
        country: "India",
    },
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image:[
            {
                url:"https://media.cntraveler.com/photos/66217a1c39a0856e9b29947d/4:3/w_1960,h_1470,c_limit/Airbnb%20328097.png",
                filename:"listing_image"
            }, {
                url:"https://images.trvl-media.com/lodging/90000000/89720000/89717600/89717578/e243ae4e.jpg?impolicy=resizecrop&rw=500&ra=fit",
                filename:"listing_image"
            }, {
                url:"https://www.insidehook.com/wp-content/uploads/2024/03/The-Beach-House-On-Malibu-Road.png?w=1500&resize=1500%2C1026",
                filename:"listing_image"
            },


            // "https://media.cntraveler.com/photos/66217a1c39a0856e9b29947d/4:3/w_1960,h_1470,c_limit/Airbnb%20328097.png",
            // "https://images.trvl-media.com/lodging/90000000/89720000/89717600/89717578/e243ae4e.jpg?impolicy=resizecrop&rw=500&ra=fit",
            // "https://www.insidehook.com/wp-content/uploads/2024/03/The-Beach-House-On-Malibu-Road.png?w=1500&resize=1500%2C1026"
        ],
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image:
            [
                {
                    url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=605",
                    filename:"listing_image"
                },
                {
                    url:"https://thumbs.6sqft.com/wp-content/uploads/2014/11/21020523/jane-kim-franklin-street-lofts.jpg?w=1560&format=webp",
                    filename:"listing_image"
                },
                {
                    url:"https://www.remodelista.com/wp-content/uploads/2025/01/7-lr-williams-73-worth-st-kitchen-gentylhyers-1536x1066.jpg",
                    filename:"listing_image"
                },
                // "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
                // "https://thumbs.6sqft.com/wp-content/uploads/2014/11/21020523/jane-kim-franklin-street-lofts.jpg?w=1560&format=webp",
                // "https://www.remodelista.com/wp-content/uploads/2025/01/7-lr-williams-73-worth-st-kitchen-gentylhyers-1536x1066.jpg"
            ],
        price: 1200,
        location: "New York City",
        country: "United States",
    }
    ,{
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image:[
            {
                url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                filename:"listing_image"
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142744.jpg?k=d48c988cc5b7abe20643c7109e25595453da8b33f8baac4aa692806e6ca6cc96&o=&hp=1",
                filename:"listing_image"
            },{
                url:"https://images.ctfassets.net/wlzmdirin2hy/36tgT3CdLgmbJ4bIl5aVAI/cb49e59c58b5a653b72d0ad466c79ec4/LX_CO95_HOM_RowlandBroughton_RowlandBroughton_MountainRetreat_Livingroom3_0049_RF.jpg?w=3840&q=75",
                filename:"listing_image"
            },


            // "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142744.jpg?k=d48c988cc5b7abe20643c7109e25595453da8b33f8baac4aa692806e6ca6cc96&o=&hp=1",
            // "https://images.ctfassets.net/wlzmdirin2hy/36tgT3CdLgmbJ4bIl5aVAI/cb49e59c58b5a653b72d0ad466c79ec4/LX_CO95_HOM_RowlandBroughton_RowlandBroughton_MountainRetreat_Livingroom3_0049_RF.jpg?w=3840&q=75"
        ],
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image:[
            {
                url:"https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/2c7ade73-dbde-45e2-b566-f7e86a184d77/Francis+York+17th+Century+Historic+Villa+Near+Florence+23.jpg",
                filename:"listing_image"
            },{
                url:"https://dreamerealestate.com/wp-content/uploads/2023/04/Villa-for-sale-Florence-8745.jpg",
                filename:"listing_image"
            },{
                url:"https://cdn4.tuscanynowandmore.com/storage/app/uploads/public/5db/084/c5d/thumb_14275_1920_0_0_0_auto.jpg",
                filename:"listing_image"
            },

            // "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/2c7ade73-dbde-45e2-b566-f7e86a184d77/Francis+York+17th+Century+Historic+Villa+Near+Florence+23.jpg",
            // "https://dreamerealestate.com/wp-content/uploads/2023/04/Villa-for-sale-Florence-8745.jpg",
            // "https://cdn4.tuscanynowandmore.com/storage/app/uploads/public/5db/084/c5d/thumb_14275_1920_0_0_0_auto.jpg"
        ],

        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image:[
            {
                url:"https://a0.muscache.com/pictures/miso/Hosting-43616707/original/7973b993-b0b0-42a6-a8b6-f201f0a75b46.jpeg",
                filename:"listing_image"
            },{
                url:"https://www.govisitcostarica.com/images/blog/tree-house-lodge-entrance.jpg",
                filename:"listing_image"
            },{
                url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/629692488.jpg?k=bd5b8ee68260675b65211d1ec7808e6348607e37b0413512e89b5fd9562f28a2&o=&hp=1",
                filename:"listing_image"
            },


            // "https://a0.muscache.com/pictures/miso/Hosting-43616707/original/7973b993-b0b0-42a6-a8b6-f201f0a75b46.jpeg",
            // "https://www.govisitcostarica.com/images/blog/tree-house-lodge-entrance.jpg",
            // "https://cf.bstatic.com/xdata/images/hotel/max1024x768/629692488.jpg?k=bd5b8ee68260675b65211d1ec7808e6348607e37b0413512e89b5fd9562f28a2&o=&hp=1"
        ],
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {

        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image:[
            {
                url:"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
                filename:"listing_image"
            },  {
                url:"https://s3-ap-northeast-1.amazonaws.com/thegate/2019/06/17/13/17/21/Narai-juku-streets.jpg",
                filename:"listing_image"
            },  {
                url:"https://soranews24.com/wp-content/uploads/sites/3/2013/05/5streets_14.jpg",
                filename:"listing_image"
            },


            // "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            // "https://s3-ap-northeast-1.amazonaws.com/thegate/2019/06/17/13/17/21/Narai-juku-streets.jpg",
            // "https://soranews24.com/wp-content/uploads/sites/3/2013/05/5streets_14.jpg"
        ],
        price: 2000,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image:[
            {
                url:"https://northcapedesign.com/wp-content/uploads/2020/04/Summer-Ferncrest-at-Night-for-WEb.png",
                filename:"listing_image"
            },
            {
                url:"https://www.cummingsarchitectureinteriors.com/wp-content/uploads/New-Hampshire-Lake-House-01-Exterior.jpg",
                filename:"listing_image"
            },
            {
                url:"https://cabinconnoisseur.s3.amazonaws.com/wp-content/uploads/2023/08/18211050/cabin-rentals-in-new-hampshire-on-lake-22.jpg",
                filename:"listing_image"
            },

            // "https://northcapedesign.com/wp-content/uploads/2020/04/Summer-Ferncrest-at-Night-for-WEb.png",
            // "https://www.cummingsarchitectureinteriors.com/wp-content/uploads/New-Hampshire-Lake-House-01-Exterior.jpg",
            // "https://cabinconnoisseur.s3.amazonaws.com/wp-content/uploads/2023/08/18211050/cabin-rentals-in-new-hampshire-on-lake-22.jpg"
        ],
        price: 1200,
        location: "New Hampshire",
        country: "United States",
    },
];

// console.log(indianHotels);


module.exports = {data : sampleListings};

// {
//     title: "Evolve Back Coorg",
//         description: "A coffee plantation resort blending luxury with nature, offering breathtaking views of Coorg’s lush hills.",
//     image:[
//     {
//         url:"https://www.ahotellife.com/wp-content/uploads/2023/03/1-Amulya-Hiremath-Evolve-Back-Coorg-A-Hotel-Life-1500x1112.jpg",
//         filename:"listing_image"
//     },{
//         url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/96977642.jpg?k=2a4748c56431699c05e83788172e0c993e44f01d5d7ac22d932856609bf7c3c8&o=&hp=1",
//         filename:"listing_image"
//     },{
//         url:"https://i0.wp.com/memorymakerholiday.com/wp-content/uploads/2019/06/LPC-Courtyard.jpg?fit=1900%2C1100",
//         filename:"listing_image"
//     },
//
// ],
//     price: 11000,
//     location: "Coorg",
//     country: "India",
// },