import { useState, useEffect } from 'react';
import logoURL from './logo.svg';
import './App.css';
import { Product } from '../domain/entities/product';
import productService from '../infrastructure/services/product.service';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const product = await productService.getProducts();
      setProducts(product);
    };

    loadProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logoURL}
          data-testid="img-logo"
          className="App-logo"
          alt="logo"
        />
        <p data-testid="title-app">Hello Vite + React!</p>
        <p>
          <button
            data-testid="button-count"
            type="button"
            onClick={() => setCount((c) => c + 1)}
          >
            count is: {count}
          </button>
        </p>
        <ol>
          {products.map((product) => (<li key={product.name}>{product.name}</li>))}  
        </ol>
      </header>
    </div>
  );
}

export default App;
