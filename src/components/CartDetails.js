import useCartDetails from "../utils/useCartDetails";
import CustomerInfo from "./CustomerInfo";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CartDetails = () => {

     const cartInfo = useCartDetails();

    const name = cartInfo?.data?.cartItems?.items[0]?.name;
    const quantity = cartInfo?.data?.cartItems?.items[0]?.quantity;
    const subtotal = cartInfo?.data?.cartItems?.items[0]?.subtotal;
    const packing_charge = cartInfo?.data?.cartItems?.items[0]?.packing_charge;
    const total = cartInfo?.data?.cartItems?.items[0]?.total;
    const imgage = cartInfo?.data?.cartItems?.items[0]?.cloudinaryImageId;
   console.log("item cards" +cartInfo);

    return(
      <div className="bg-teal-50 flex justify-between mt-20">
        <div className="h-50 mt-20 flex justify-between ml-20">
          <div className="w-80 ">
       <h3>{name}</h3>
       <div>Quantity selected : {quantity}</div>
       <img className="rounded-lg bg-top h-80 w-80 mt-2 overflow-hidden rounded-md border border-gray-200" src={IMG_URL + imgage} />
        </div>
        <div className=" w-50 mt-10 ml-32 ">
       <h4 className="mt-20">Fare-details</h4>
       <div className="mt-10 ">
        <table className="w-3/4 mx-auto text-indigo-lightest text-auto ">
          <tbody>
            <tr>
              <td class="px-2 py-2  ">Item Total</td>
              <td class="px-2 py-2  ">{subtotal/100}</td>
            </tr>
            <tr>
              <td class="px-2 py-2  ">packing charge</td>
              <td class="px-2 py-2 ">{packing_charge/100}</td>
            </tr>
            <hr />
            <tr>
              <td class="px-2 py-2  ">total </td>
              <td class="px-2 py-2 ">{total/100}</td>
            </tr>
          </tbody>
        </table>
       </div>
        </div>
        </div>
        <div>
        <CustomerInfo />
        </div>
        </div>
    );
}

export default CartDetails;