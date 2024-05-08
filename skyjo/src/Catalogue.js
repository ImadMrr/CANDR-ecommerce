import React from 'react'
import Products from './Products'
import './styles/Catalogue.css'

function Catalogue() {
    return (

        <div class="titleCatalogue">   
            <h1> Our Products </h1>

            <div class='catalogue'>
                
                <Products 
                    img_prod = "https://media.gqmagazine.fr/photos/632d81d65e9e5a2a0c6ded7b/1:1/w_3646,h_3646,c_limit/GettyImages-1231374767.jpg"  
                    name_prod = "Air Pod Max"
                    price = "550€"
                    />
                
                <Products 
                    img_prod = "https://media.gqmagazine.fr/photos/632d81d65e9e5a2a0c6ded7b/1:1/w_3646,h_3646,c_limit/GettyImages-1231374767.jpg"  
                    name_prod = "Air Pod Max"
                    price = "550€"
                    />
                
                <Products 
                    img_prod = "https://media.gqmagazine.fr/photos/632d81d65e9e5a2a0c6ded7b/1:1/w_3646,h_3646,c_limit/GettyImages-1231374767.jpg"  
                    name_prod = "Air Pod Max"
                    price = "550€"
                    />
                
                <Products 
                    img_prod = "https://media.gqmagazine.fr/photos/632d81d65e9e5a2a0c6ded7b/1:1/w_3646,h_3646,c_limit/GettyImages-1231374767.jpg"  
                    name_prod = "Air Pod Max"
                    price = "550€"
                    />
            
            </div>
        </div>
    )
}

export default Catalogue