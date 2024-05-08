import React from 'react';
import Products from './Products';
import './styles/Catalogue.css';
import casque from './assets/casque.png';
import ecran from './assets/ecran.png';
import gourde from './assets/gourde.png';
import iphone from './assets/iphone.png';
import macbook from './assets/macbook.png';
import clavier from './assets/clavier.png';
import usbkey from './assets/usbkey.png';
import bag from './assets/bag.png';

function Catalogue() {
    return (
        <div className="titleCatalogue">   
            <h1> Our Products </h1>
            <div className='catalogue'>
                <Products 
                    img_prod={casque}
                    name_prod="Air Pod Max"
                    price="700$"
                />
                <Products 
                    img_prod={ecran}  
                    name_prod="Full HD screen"
                    price="650$"
                />
                <Products 
                    img_prod={gourde}  
                    name_prod="Bottle"
                    price="70$"
                />
                <Products 
                    img_prod={iphone}  
                    name_prod="iPhone 14"
                    price="800$"
                />
                <Products 
                    img_prod={macbook}  
                    name_prod="Macbook"
                    price="2 000$"
                />
                <Products 
                    img_prod={clavier}  
                    name_prod="Keyboard"
                    price="30$"
                />
                <Products 
                    img_prod={usbkey}  
                    name_prod="USB key 1T"
                    price="100$"
                />
                <Products 
                    img_prod={bag}  
                    name_prod="Bag"
                    price="60$"
                />
            </div>
        </div>
    );
}

export default Catalogue;
