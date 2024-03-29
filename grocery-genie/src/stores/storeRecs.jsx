import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { color, textAlign, width } from '@mui/system';
import walmart from '../images/walmart_logo.png'
import kroger from '../images/kroger_logo.png'
import aldi from '../images/aldi_logo.jpg'
import target from '../images/target_logo.png'
import foodlion from "../images/foodLion_logo.png"
import "./styles/storeRecStyles.css";

const storeList = [
    {id: 1, name:'Walmart',image:walmart, favorite: "yes", address: "7530 Tidewater Dr",location: 5.5, price:100, in_stock: 12, cname:"WalmartPic",link: 'https://www.walmart.com/cp/976759?&adid=22222222220221176149&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=193590193349&wl4=aud-1651068664266:kwd-667579415&wl5=9008553&wl6=&wl7=&wl8=&veh=sem&gclid=CjwKCAjwrpOiBhBVEiwA_473dBKP0ffG4wqCJX38ZbJUwECrYGszdswQGq1i8Ch47dpGU1S_GgsylRoCeEoQAvD_BwE&gclsrc=aw.ds'},
    {id: 2, name:'Kroger', image:kroger, favorite: "",address: "Kroger, 1301 Frederick Blvd", location : 6.5, price:101, in_stock: 10, cname:"KrogerPic",link: 'https://www.kroger.com/pr/pickup-delivery-savings-4?ds_rl=1281562&ds_rl=1281680&cid=ps_adw_ogs_15x1savoffer_t:krogerclick&gclid=CjwKCAjwrpOiBhBVEiwA_473dFDZrwW3aTGjQaQwviSQy7rjNQwTiJkl1vDpK0YPb9cE5A0d8EM16xoCN20QAvD_BwE&gclsrc=aw.ds'},
    {id: 3, name:'Aldi', image: aldi, favorite: "",address: "730 W 21st St", location: 1.7, price:99, in_stock: 9,cname:"AldiPic",link: 'https://www.aldi.us/?utm_source=google&utm_medium=sem&utm_campaign=brand&utm_term=aldi&gclid=CjwKCAjwrpOiBhBVEiwA_473dMx0IJIjK0_ys11If1jVm80YPOLbXhfDPAlyt26YwahkrRHvkiCNfRoCtAgQAvD_BwE&gclsrc=aw.ds'},
    {id: 4, name: 'Target', image: target, favorite: "",address: "1245 N Military Hwy", location: 8.4, price: 120, in_stock: 17,cname:"targetPic",link: 'https://www.target.com/c/grocery/-/N-5xt1a'},
    {id: 5, name: 'Food Lion', image:foodlion, favorite: "",address: "2401 Colley Ave", location: 1.1, price: 99.80, in_stock: 15, cname:"foodlionPic",link: 'https://stores.foodlion.com/va/norfolk/2401-colley-ave' }
    ];
var res = localStorage.getItem('total');
let price = 0;
let stock = 0;
storeList.forEach(store => {
  let totalPrice = 0;
  var s = localStorage.getItem('stock');
storeList.forEach(store => {
  
  stock = Math.floor(Math.random()*(13-8+1)) + 8;
  s = stock
  localStorage.getItem('stock', s);
  store.in_stock = s;
  

})
  for (let i =0; i<store.in_stock; i++)
  {
  price = (Math.random()*10.00) + 2;
   totalPrice = totalPrice + price; 
  }
  res = totalPrice.toFixed(2)
  localStorage.getItem('total', res);
  store.price = res;
  

})


function StoreRec(props) {
   const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('location');


  /*  function totalPrice(){
        let price;
        let totalPrice = 0;
    storeList.forEach(store => {
        let instock = 12;
        for(let i=0; i<=instock; i++)
        {
            price = Math.floor(Math.random()*10) + 2;
           // console.log(price);
            totalPrice = totalPrice + price;

        }
        store["price"] = totalPrice
     } )
        return storeList;
    };*/
    //totalPrice();
    

    useEffect(() => {
        const sortArray = type => {
          const types = {
            location: 'location',
            price: 'price',
            inStock: 'in_stock',
            favorite: 'fav'
          };
         if(type === 'location' ||type === 'price') 
         {
          const sortProperty = types[type];
          const sorted = [...storeList].sort((a, b) => a[sortProperty] - b[sortProperty]);
        //  console.log(sorted);
          setData(sorted);
        }
        else if(type === 'inStock')
        {
          const sortProperty = types[type];
          const sorted = [...storeList].sort((a, b) => b[sortProperty] - a[sortProperty]);
          setData(sorted);
        }
        else
        {
          const sortProperty = type[type];
          const sorted = [...storeList].filter(sorted => sorted.favorite === "yes");
          setData(sorted);
        }

        };
    
        sortArray(sortType);
      }, [sortType]);

    
    //  console.table(data)
    console.table(data)
    
   
   
        return (
          <div className='backgroundImage'>
              <div className="Recommendations">
                <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="location">Location</option>
                    <option value="price">Price</option>
                    <option value="inStock">In Stock</option>
                    <option value="favorite">Favorite</option>
                </select>
                
           
       
           
    {data.map(store => (
        <div key={store.id} className="Store" >

          <img src={store.image} width={150} height={100} 
          sx={{
            position: 'relative',
            top:0,
            right:0
          }}></img>
                <div className="Information">
                   
          <h2>{`${store.name}`}</h2> 
          <p>{`location: ${store.address} ${store.location} mi`}</p>
          <p>{`price: $${store.price}`}</p>
          <p>{`In stock: ${store.in_stock}`}</p>
          <Button className="goToStore" variant="contained" onClick={(e)=> {
                window.location.href=store.link
                         }}>{`Go to ${store.name}`}</Button>
        </div>
        <h2></h2>
        </div>
        
       
      ))}
       
       </div>
                </div>
            
/*
            <div className='storeinfo'
                    sx={{
                        alignItems: "center", 
                        justifyContent: "center"
                    }}>
                    <Box
                    sx={{
                      width: 300,
                      height: 300,
                      position: 'relative',
                      backgroundColor: 'primary.dark',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        
                      },
                    }}
                  >
                    <h2>Kroger</h2>
                    <p>
                                In Stock Items:
                            </p>
                            <p>
                                Total Price: ${totalPrice()}
                            </p>
                    <Button variant="contained" 
                       sx={{
                position: 'absolute',
                right:0,
                bottom:0
            }}onClick={(e)=> {
                window.location.href='https://www.kroger.com/pr/pickup-delivery-savings-4?ds_rl=1281562&ds_rl=1281680&cid=ps_adw_ogs_15x1savoffer_t:krogerclick&gclid=CjwKCAjwrpOiBhBVEiwA_473dFDZrwW3aTGjQaQwviSQy7rjNQwTiJkl1vDpK0YPb9cE5A0d8EM16xoCN20QAvD_BwE&gclsrc=aw.ds'
            }}>Go to Kroger</Button>
                    </Box>
                   
                    </div>
                            <div className='storeinfo'
                            sx={{
                                alignItems: "center", 
                                justifyContent: "center"
                            }}>
                            <Box
                            sx={{
                              width: 300,
                              height: 300,
                              position: 'relative',
                              backgroundColor: 'primary.dark',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }}
                          >
                            <h2>Aldi</h2>
                            <p>
                                In Stock Items:
                            </p>
                            <p>
                                Total Price: ${totalPrice()}
                            </p>

                            <Button variant="contained" 
                            sx={{
                                position: 'absolute',
                                right:0,
                                bottom:0  
                            }}onClick={(e)=> {
                window.location.href='https://www.aldi.us/?utm_source=google&utm_medium=sem&utm_campaign=brand&utm_term=aldi&gclid=CjwKCAjwrpOiBhBVEiwA_473dMx0IJIjK0_ys11If1jVm80YPOLbXhfDPAlyt26YwahkrRHvkiCNfRoCtAgQAvD_BwE&gclsrc=aw.ds'
                         }}>Go to Aldi</Button>
                            </Box>
                            </div>
                     
                            <div className='storeinfo'
                            sx={{
                                alignItems: "center", 
                                justifyContent: "center"
                            }}>
                            <Box
                            sx={{
                              width: 300,
                              height: 300,
                              position: 'relative',
                              backgroundColor: 'primary.dark',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }}
                          >
                            <h2>Target</h2>
                            <p>
                                In Stock Items:
                            </p>
                            <p>
                                Total Price: ${totalPrice()}
                            </p>
                            <Button variant="contained" 
                            sx={{
                                position: 'absolute',
                                right:0,
                                bottom:0  
                            }}onClick={(e)=> {
                window.location.href='https://www.target.com/c/grocery/-/N-5xt1a'
            }}>Go to Target</Button>
                            </Box>
                            </div>
                            </div>
            */
        )
    }


export default StoreRec;