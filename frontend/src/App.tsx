import './App.css'
import { sampleProduct } from './data'

function App() {
  return (
    <div>
      <header>
        Ts Amazon
        <main>
          <ul>
            {sampleProduct.map((product) => (
              <li key={product.id}>
                {product.title}
                <img
                  src={product.images[0]}
                  alt="image"
                  className="product-image"
                />
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </main>
        <footer> </footer>
      </header>
    </div>
  )
}

export default App
