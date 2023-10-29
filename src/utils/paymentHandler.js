

export const displayRazorpay = async (
    TotalAmount
  ) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
    if (!res) {
      toast.error("payment failed try later!");
      return;
    }
  
    const options = {
        key: process.env.RAZOR_PAY_KEY_ID,
        name: "Fast Food",
        amount: Number(TotalAmount) * 100,
        currency: "INR",
        description: "Order online - Fast Food",
        order_id: data.id,
      image: `https://raw.githubusercontent.com/shashikantmaurya0007/Drinks-Break-ecommerce-app/dev/public/favicon.ico`,
      handler: async function (response) {
        toast.success("Payment is Successfull");
      },
  
      theme: {
        color: "#66bb6a",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

