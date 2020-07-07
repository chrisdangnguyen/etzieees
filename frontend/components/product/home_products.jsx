import React, { useEffect }from 'react';
import { withRouter } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';

function shuffle(array) {
  let j, x;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array;
}

const homeProducts = props => {
  useEffect(() => {
    props.fetchAllProducts();
  }, [])

  if (!props.products){
    return null;
  }

  const shuffleProds = props.products.slice(0, 10);
  const popularProducts = shuffle(shuffleProds).slice(0, 5)

  const otherProducts = props.products.slice(10);
  const randomProds = shuffle(otherProducts).slice(0, 15);

  return (
    <div className="home-products-container">
      <div className="popular-products">
        <div className="product-list">
          {popularProducts.map(product => {
              return <ProductIndexItem product={product} key={product.id}/>
            })
          }
        </div>
      </div>

      <div className="other-products-container">
          <h1>Design ideas and inspiration</h1>
          <div className="other-products"> 
            <div className="product-list">
              {randomProds.map(product => {
                  return <ProductIndexItem product={product} key={product.id} />
                })
              }
            </div>
          </div>
      </div>
    </div>
  )
}


export default withRouter(homeProducts);