import { flexbox } from '@mui/system';
import React from 'react';


function StoreRec() {

    { 
        return (
            <div className='backgroundImage'>
            <div className="Recommendations">
                <div className="Store">
                    <a className="link" href="https://www.walmart.com/">
                        <img className="WalmartPic" src={require ('../images/walmart_logo.png')} alt = " Walmart Logo" ></img>
                    </a>
                    <div className="Information">
                        <h2>
                            Walmart
                        </h2>
                        <p>
                            In Stock Items: All
                        </p>
                        <p>
                            Da Wong Road, 1.2 miles
                        </p>
                        <p>
                            140 USD estimate
                        </p>
                    </div>
                </div>

                <div className="Store">
                    <a className="link" href="https://www.kroger.com/">
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
            </div>
            </div>
        )
    }
}

export default StoreRec;