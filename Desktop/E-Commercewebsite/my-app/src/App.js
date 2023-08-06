import CreateAccount from "./SignupComponents/Signup";
import Product from "./ProductComponents/Product";
import Cart from "./CartComponents/Cart";
import Checkout from "./CheckoutComponents/Checkout";
import Login from "./LoginComponents/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <CreateAccount />
      <br></br>
      <br></br>
      <br></br>
      <Login />
      <br></br>
      <br></br>
      <br></br>
      <Product />
      <br></br>
      <br></br>
      <br></br>
      <Cart />
      <br></br>
      <br></br>
      <br></br>
      <Checkout />
    </div>
  );
}

export default App;
