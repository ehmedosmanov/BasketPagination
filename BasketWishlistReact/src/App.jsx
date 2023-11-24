import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import useFetch from "./hooks/useFetch";
import useLocaleStorage from "./hooks/useLocaleStorage";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const baseUrl = "https://northwind.vercel.app/api/products";
  const { data } = useFetch(baseUrl);
  const [basket, setBasket] = useLocaleStorage("basket");
  const [wishlist, setWishList] = useLocaleStorage("wishlist");

  const addToBasket = (product) => {
    const findProduct = basket.find(item => item.id === product.id)
    
    if(findProduct) {
      findProduct.count++
      setBasket([...basket])
      return
    }
    setBasket([...basket, {...product, count: 1}]);
  };

  const addToWishlist = (wishlistProduct) => {
    const findWishlistProduct = wishlist.find(x => x.id === wishlistProduct.id)
    if(findWishlistProduct) {
      return
    }
    setWishList([...wishlist, wishlistProduct]);
  };

  const remoteFromBasket = (id) => {
    console.log(id);
    setBasket(basket.filter((item) => item.id !== id));
  };

  const remoteFromWishlist = (id) => {
    setWishList(wishlist.filter(x => x.id !== id))
  }

  const handleInc = (id) => {
    const findProductPrice = basket.find(x => x.id === id)
    if(findProductPrice) {
      findProductPrice.count++
      setBasket([...basket])
    }
  }

  const handleDec = (id) => {
    const findProductPrice = basket.find(x => x.id === id)
    if(findProductPrice) {
      findProductPrice.count--
      if(findProductPrice.count === 0) {
        setBasket(basket.filter((item) => item.id !== id));
        return
      }
      setBasket([...basket])
    }
  }

  const sum = basket.reduce((acc, x) => acc + x.count * x.unitPrice, 0).toFixed(2)

  return (
    <>
      <Navbar />
      <div className="top-side">
        <div className="baket">
          <div className="container">
            <div className="title">
              <h2>Basket</h2>
            </div>
            <div className="basket-products">
              {basket &&
                basket.map((basketProduct) => (
                  <ul key={basketProduct.id} className="box border">
                    <li>id: {basketProduct.id}</li>
                    <li>name: {basketProduct.name}</li>
                    <li>price: {basketProduct.unitPrice * basketProduct.count}</li>
                    <li>count: {basketProduct.count}</li>
                    <li>
                      <button className="btn"
                        onClick={() => remoteFromBasket(basketProduct.id)}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button className="btn-count" onClick={() => handleInc(basketProduct.id)}>+</button>
                      <button className="btn-count" onClick={() => handleDec(basketProduct.id)}>-</button>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
        <div className="wishlist">
          <div className="baket">
            <div className="container">
              <div className="title">
                <h2>Wishlist</h2>
              </div>
              <div className="basket-products">
                {wishlist &&
                  wishlist.map((wishPro) => (
                    <ul key={wishPro.id} className="box border">
                      <li>{wishPro.id}</li>
                      <li>{wishPro.name}</li>
                      <li>{wishPro.unitPrice}</li>
                      <li>
                        <button className="btn" onClick={() => remoteFromWishlist(wishPro.id)}>
                          Delete
                        </button>
                      </li>
                      <li>

                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
        <h2>Subtotal:{sum} </h2>
          <div className="title">
            <h2>Products</h2>
          </div>
          <div className="products-items">
            {data &&
              data.map((product) => (
                <ul className="box border" key={product.id}>
                  <li>{product.id}</li>
                  <li>{product.name}</li>
                  <li className="btns">
                    <button className="btn" onClick={() => addToBasket(product)}>
                      Add To Basket
                    </button>
                    <button className="btn" onClick={() => addToWishlist(product)}>Add To Wishlist</button>
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
