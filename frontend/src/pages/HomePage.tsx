import { sampleProduct } from '../data'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <ul>
      {sampleProduct.map((product) => (
        <li key={product.id}>
          <Link to={`product/${product.id}`}>
            {product.title}
            <img
              src={product.images[0]}
              alt="image"
              className="product-image"
            />
            <p>{product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HomePage
