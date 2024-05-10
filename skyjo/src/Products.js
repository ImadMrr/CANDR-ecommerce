import './styles/Products.css'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products( {name_prod, img_prod, price, id} ) {

  const navigate = useNavigate(); //Initialisation de l'historique

  const goInfo = () => {
    navigate("/InformationsProd", { state: { name_prod, img_prod, price, id } });
  };

  return (
    <div className="containerProd" key = {id} >
      <h2 className="nameProd" > {name_prod} </h2>
      <img className="imgProd" src = {img_prod} onClick={goInfo}/>
      <p className="priceProd" > {price} </p>
      <img className="likeProd" src = "https://cdn.worldvectorlogo.com/logos/like-2.svg" alt= "Error Image" /> 
      <img className="buyProd" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1xJNgFylvNetWjr_M6J3QSSptq5HmPVtNjKOwQQ-5w&s" alt= "Error Image" /> 
    </div>
  );
}

export default Products;
