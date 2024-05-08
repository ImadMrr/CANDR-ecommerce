import React from 'react'
import Products from './Products'
import './styles/Catalogue.css'

function Catalogue() {
    return (

        <div class="titleCatalogue">   
            <h1> Our Products </h1>

            <div class='catalogue'>
                
                <Products 
                    img_prod = ".src/assets/casque.webp"  
                    name_prod = "Air Pod Max"
                    price = "700$"
                    />
                
                <Products 
                    img_prod = "./assets/ecran.jpg"  
                    name_prod = "Full HD screen"
                    price = "650$"
                    />
                
                <Products 
                    img_prod = "./assets/gourde.jpg"  
                    name_prod = "Bottle"
                    price = "70$"
                    />
                
                <Products 
                    img_prod = "./assets/iphone.webp"  
                    name_prod = "iPhone 14"
                    price = "800$"
                    />
                
                <Products 
                    img_prod = "./assets/macbook.webp"  
                    name_prod = "Macbook"
                    price = "2 000$"
                    />
                
                <Products 
                    img_prod = "./assets/clavier.webp"  
                    name_prod = "Keyboard"
                    price = "30$"
                    />
                
                <Products 
                    img_prod = "./assets/usbkey.webp"  
                    name_prod = "USB key 1T"
                    price = "100$"
                    />
                
                <Products 
                    img_prod = "./assets/bag.jpg"  
                    name_prod = "Bag"
                    price = "60$"
                    />
            
            </div>
        </div>
    )
}

export default Catalogue