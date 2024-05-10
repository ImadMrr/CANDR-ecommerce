import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      
      {/* Fenêtre de recommandations */}
      <div className="recommendations">
        <h3>Recommandations</h3>
        <ul>
          <li>Produit recommandé 1</li>
          <li>Produit recommandé 2</li>
          <li>Produit recommandé 3</li>
        </ul>
      </div>

      {/* Fenêtre de réductions */}
      <div className="discounts">
        <h3>Réductions</h3>
        <ul>
          <li>Produit en promotion 1</li>
          <li>Produit en promotion 2</li>
          <li>Produit en promotion 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
