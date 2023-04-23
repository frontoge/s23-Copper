import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { color, textAlign, width } from '@mui/system';



function StoreRec() {
function visitWalmart(){
    window.location="https://www.walmart.com/cp/976759?&adid=22222222220221176149&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=193590193349&wl4=aud-1651068664266:kwd-667579415&wl5=9008553&wl6=&wl7=&wl8=&veh=sem&gclid=CjwKCAjwrpOiBhBVEiwA_473dBKP0ffG4wqCJX38ZbJUwECrYGszdswQGq1i8Ch47dpGU1S_GgsylRoCeEoQAvD_BwE&gclsrc=aw.ds";

}
    { 
        return (
<div            
sx={{
                position: "absoulute"

            }}>
        <div className='storeinfo'>
            <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h2>Walmart</h2>
            <p>
                                In Stock Items:
                            </p>
                            <p>
                                Total Price: 
                            </p>
            <Button variant="contained" onClick={(e)=> {
                window.location.href='https://www.walmart.com/cp/976759?&adid=22222222220221176149&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=193590193349&wl4=aud-1651068664266:kwd-667579415&wl5=9008553&wl6=&wl7=&wl8=&veh=sem&gclid=CjwKCAjwrpOiBhBVEiwA_473dBKP0ffG4wqCJX38ZbJUwECrYGszdswQGq1i8Ch47dpGU1S_GgsylRoCeEoQAvD_BwE&gclsrc=aw.ds'
            }}>Go to Walmart</Button>
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
                      backgroundColor: 'primary.dark',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <h2>Kroger</h2>
                    <Button variant="contained" onClick={(e)=> {
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
                              backgroundColor: 'primary.dark',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }}
                          >
                            <h2>Aldi</h2>

                            <Button variant="contained" onClick={(e)=> {
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
                              backgroundColor: 'primary.dark',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }}
                          >
                            <h2>Target</h2>
                            <Button variant="contained" onClick={(e)=> {
                window.location.href='https://www.target.com/c/grocery/-/N-5xt1a'
            }}>Go to Target</Button>
                            </Box>
                            </div>
                            </div>
            /*

                <div className="Store">
                    <a className="link" href="https://www.kroger.com/">
                        {/*
                        <img className="KrogerPic" src={require ('../images/kroger_logo.png')} alt = "Kroger Logo" ></img>

    
                    </a>
                    <div className="Information">
                        <h2>
                            Kroger
                        </h2>
                        <p>
                            In Stock Items: 22/25
                        </p>
                        <p>
                            Guo Mao Place, 2.5 miles
                        </p>
                        <p>
                            155 USD estimate
                        </p>
                    </div>
                </div>

                <div className="Store">
                    <a className="link" href="https://www.aldi.us/">
                        <img className="AldiPic" src={require ('../images/aldi_logo.jpg')} alt = "Aldi Logo" ></img>

                        

                    </a>
                    <div className="Information">
                        <h2>
                            Aldi
                        </h2>
                        <p>
                            In Stock Items: 18/25
                        </p>
                        <p>
                            Da Wong Road, 1.2 miles
                        </p>
                        <p>
                            145 USD estimate
                        </p>
                    </div>
                </div>
                */
        )
    }
}

export default StoreRec;