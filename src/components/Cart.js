import { useSelector } from "react-redux";
import { clearCart, getTotals} from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import CustomerInfo from "./CustomerInfo";
import CartItems from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const TotalAmount = useSelector((state) => state.cart.itemTotalAmount);

  const paymentHandler = async (amount) => {
    const API_URL = 'http://localhost:5000/';
    const orderUrl = `${API_URL}order`;
  
    try {
      const response = await Axios.post(orderUrl, { amount });
      const { data } = response;
  
      const options = {
        key: process.env.RAZOR_PAY_KEY_ID,
        name: "Fast Food",
        description: "Order online - Fast Food",
        order_id: data.id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            const captureUrl = `${API_URL}capture/${paymentId}`;
  
            const captureResponse = await Axios.post(captureUrl, { amount }); 
          
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
    } catch (err) {
      console.log(err);
    }
  };
  

   
  return (
    <div className=" m-4 p-4 overflow-auto ">
      <div className="flex justify-between">
        <div>
      <h1 className="text-2xl font-bold p-4 m-4">Cart</h1>
        <div className="bg-blue">
        <CartItems items={cartItems} />
        </div>
        </div>
      <div>
      <button
          className=" p-2 bg-black text-white rounded-lg ml-96 mt-10"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className="w-90">
        <CustomerInfo />
        </div>
        <div className="flex justify-between">
        <div className="mt-10 font-bold text-xl ml-10">Amount to pay is ${TotalAmount}</div>
         <button className=" px-5 py-2 mt-10 bg-cyan-500 text-white rounded-lg" onClick={() => paymentHandler(TotalAmount)}>Continue Booking</button>
         </div>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;