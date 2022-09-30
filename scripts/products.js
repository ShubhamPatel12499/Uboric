let Products=
[{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-08-370x370.jpg",
name:"Quick & Easy 6 Blade Push Chopper 1000ML",
price: 349.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/09/5hto1_512_webp-370x282.jpg",
name:"Mens Casual Shoes",
price: 799.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/09/61ZFLlc1NcL-370x370.jpg",
name:"Electric Mini Food Processor with USB Cable",
price:  499.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/09/tqpgz_512_webp-370x342.jpg",
name:"Mens Casual Shoes",
price: 1039.00,
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220517_173135_289_1-370x370.jpg",
name:"26 carat Elegant Jewellery bracelet",
price: 1799.00,
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174041_206_11-370x370.jpg",
name:"26 carat Elegant Jewellery Necklace",
price:"₹ 5,499.00"
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/png_20220328_105434_0000-370x370.png",
name:"26 carat Elegant Jewellery Golden Ring all...",
price:1249.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-25_21-23-45-370x370.jpg",
name:"26 carat Elegant Jewellery kada",
price:1599.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/61Tb9AiGN1L._SL1500_-370x370.jpg",
name:"Philips Hp 8303/06 Hair Straightener",
price:1169.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/2-2-1-370x370.png",
name:"Hand blender",
price: 1975.50
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/5-38-370x370.jpg",
name:"Philips Air Purifier – Series 2000...",
price: 19999.00
},
{ poster:"https://www.uboric.com/wp-content/uploads/2022/08/61QyBa0XAWL._SL1280_-370x370.jpg",
name:"4 pc Dry Fruit Serving Bowl Set With Tray,...",
price: 465.00
}
]

                 let data=JSON.parse(localStorage.getItem("productlist"))||[];
                 displayData(Products)
                //   data.push(Products);
                    // localStorage.setItem("data",JSON.stringify(data))

                    function displayData(Products){

                    Products.forEach(function (elem){
                    
                    let box=document.createElement("div");
                    
                    let poster= document.createElement("img");
                    poster.setAttribute("src",elem.poster);

                    let Name= document.createElement("name");
                    Name.innerText=elem.name;

                    let price= document.createElement("p");
                    price.innerText="₹"+" " +elem.price;

                    let button = document.createElement("button");
                    button.setAttribute("class","book_now");
                    button.onclick=()=>{
                        saveData(elem);
                    }
                    button.innerText= "ADD";

                    box.append(poster,Name,price,button);
                    document.querySelector("#container").append(box);
                    
                });
                }

                   let saveData = (elem) =>{
                    data.push(elem);
                    localStorage.setItem("productlist",JSON.stringify(data));
                    // window.location.href="checkout.html"
                   }