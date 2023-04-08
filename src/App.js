import { useState, useEffect } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Spinner from "./components/UI/Spinner";

function App() {
  const [cartIsSohwn, setCartIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const showCarthundler = () => {
    setCartIsShown(true);
  };

  const hideCarthundler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <div className="center">
        <Spinner />
      </div>
    );
  }

  return (
    <CartProvider>
      {cartIsSohwn && <Cart hideCart={hideCarthundler} />}
      <Header showCart={showCarthundler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
