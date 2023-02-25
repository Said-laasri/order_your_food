import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsSohwn, setCartIsShown] = useState(false);

  const showCarthundler = () => {
    setCartIsShown(true);
  };

  const hideCarthundler = () => {
    setCartIsShown(false);
  };

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
