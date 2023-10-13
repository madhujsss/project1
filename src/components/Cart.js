import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import CustomerInfo from "./CustomerInfo";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const paymentHandler = async (e) => {
    const API_URL = 'http://localhost:5000/'
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: process.env.RAZOR_PAY_KEY_ID,
      name: "Fast Food",
      description: "Order online - Fast Food",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}`;
         const captureResponse = await Axios.post(url, {})
         console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    };

  return (
    <div className=" m-4 p-4 overflow-auto flex justify-between">
      <div>
      <h1 className="text-2xl font-bold p-4 m-4">Cart</h1>
      <div className="w-9/12 m-4 p-4 ">
        
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <div className="bg-blue">
        <ItemList items={cartItems} />
        </div>
      </div>
      </div>
      <div>
      <button
          className=" p-2 bg-black text-white rounded-lg ml-96 mt-20"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className="w-90">
        <CustomerInfo />
        </div>
         <button className=" px-5 py-2 ml-60 mt-10 bg-cyan-500 text-white rounded-lg" onClick={paymentHandler}>Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;