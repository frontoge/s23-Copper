import React, {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { color, textAlign, width } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import walmart from '../images/walmart_logo.png'
import kroger from '../images/kroger_logo.png'
import aldi from '../images/aldi_logo.jpg'
<link rel="stylesheet" href="../styles/storeRecStyles.css"></link>


let s = [];

function StoreRec(props) {
    const [storeList, setstoreList] = useState([
        {name:'Walmart',image:walmart, location: 5.5, price: ""},
        {name:'Kroger', image:kroger, location : 6.5, price: ""},
        {name:'Aldi', image: aldi, location: 1.7, price:""},
        {name: 'Target', image: 'targetImage', location: 8.4, price:""}
        ]);
    { 
    function locationSort(){
        const temp = [...storeList];
        temp.sort((a,b) => a.location - b.location);
        return setstoreList(temp);
    }
    function totalPrice(){
        let instock = 12;
        let price;
        let totalPrice = 0;
        for(let i=0; i<=instock; i++)
        {
            price = Math.floor(Math.random()*10) + 2;
           // console.log(price);
            totalPrice = totalPrice + price;

        }
       // console.log(totalPrice);
        return totalPrice;
    };
   
  //  console.table(storeList)
   // totalPrice();

   
        return (
        <div clasname="stores">
        <div className='storeinfo'>
            <Box 
            sx={{
                width: 200,
                height: 'flex',
                position: 'absolute',
                top:80,
                right:0,
                backgroundColor:'primary.main'
            }}>
                <h2>Sort</h2>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={(e) => {locationSort(e.target.checked)}}/>} label="Location" />
                    <FormControlLabel control={<Switch />} label="Price" />
                    <FormControlLabel control={<Switch />} label="Most in stock " />
                </FormGroup>
                
               

            </Box>
           
            {console.log(storeList)}
        {storeList?.map((store, index) => {
    s.push(
    <div>
        <Box
        sx={{
          width: 300,
          height: 300,
          position: 'relative',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            
          }
        }}
      >
    <img src={storeList[index].image} alt="walmart" width={150} height={100}
    sx={{
        position: 'absolute',
        top:0,
        left:0
    }}/>
    
        <div 
        sx={{
            position: 'relative',
            top:0,
            end:0
        }}
        >
       <h5> {storeList[index].location} mi</h5>
    
        </div>
        <p>
                            In Stock Items:
                        </p>
                        <p>
                            Total Price: ${storeList[index].price}
                        </p>
        <Button variant="contained" 
        sx={{
            position: 'absolute',
            right:0,
            bottom:0
        }}onClick={(e)=> {
            window.location.href='https://www.walmart.com/cp/976759?&adid=22222222220221176149&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=193590193349&wl4=aud-1651068664266:kwd-667579415&wl5=9008553&wl6=&wl7=&wl8=&veh=sem&gclid=CjwKCAjwrpOiBhBVEiwA_473dBKP0ffG4wqCJX38ZbJUwECrYGszdswQGq1i8Ch47dpGU1S_GgsylRoCeEoQAvD_BwE&gclsrc=aw.ds'
        }}>Go to {storeList[index].name}</Button>
        </Box>
        <h2> </h2>
        </div>
        )
    })}

            <ul key="store" className ='storeList'> {s} </ul>
            
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
}

export default StoreRec;