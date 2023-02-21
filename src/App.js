import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsSohwn, setCartIsShown] = useState(false);

  const showCarthundler = () => {
    setCartIsShown(true);
  };

  const hideCarthundler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsSohwn && <Cart hideCart={hideCarthundler} />}
      <Header  showCart={showCarthundler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
