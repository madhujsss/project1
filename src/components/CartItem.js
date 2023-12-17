import React from 'react';
import { IMG_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addItem, getTotals } from "../utils/cartSlice";
const CartItems = ({ items, dummy }) => {

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    // Dispatch an action
    dispatch(addItem(items));
  };

  //<button onClick={() => dispatch(getTotals())}>Recalculate Totals</button>

   return (
    <div>
      {items.map((item) => (
        <div className='flex justify-between'> 
        <div className=''>  
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          
          <div className="w-3/12 p-4">
            <div className="absolute">
            <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                
              >{item.ItemQuantity}
                            </button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} className="w-full sm:w-full lg:w-full" />
          </div>
          <div className="w-6/12 m-2">
            <div className="p-2">
              <span className="block  font-semibold leading-6 text-gray-900 text-lg">{item.card.info.name}</span>
            </div>
            <p className="block leading-6 text-gray-900 text-xs">{item.card.info.description}</p>
            <span className="block font-semibold  leading-6 text-gray-900 text-sm">
            - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
          </div>
          <div className='w-3/12 '>
        <h5>Total</h5>
        <span className='py-2 mt-20 w-3/12 m-2'>{item.ItemQuantity * (item.card.info.price / 100)}</span>
         </div>
         
         
        </div>
        </div>
       
        </div>
      ))}
         <div> 
      {/* <span><button onClick={() => getTotals(items)}  key={item.card.info.id}>Recalculate Totals</button></span> */}
      </div>
    </div>
  );
}

export default CartItems
