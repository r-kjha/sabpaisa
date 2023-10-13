import React, { useState, useEffect } from "react";
import SabpaisaPaymentGateway from "./SabpaisaPaymentGateway";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [payerName, setPayerName] = useState("");
  const [payerEmail, setPayerEmail] = useState("");
  const [payerMobile, setPayerMobile] = useState("");
  const [amount, setAmount] = useState();

  const [payerAddress, setPayerAddress] = useState("");

  const [udf12, setudf12] = useState(null); // client id
  const [udf13, setudf13] = useState(null); // plan id
  const [udf14, setudf14] = useState(null); // plan name
  const [udf15, setudf15] = useState(null); // application id (product id)
  const [udf16, setudf16] = useState(null); // client subscribe plan detail id(refer to DB)
  const [udf17, setudf17] = useState(null); // payment from the COB portal

  const handleSubmit = (e) => {
    setIsOpen(true);
    e.preventDefault();
    const btn = document.getElementById("renderSabPaisa");
    btn.click();
  };

  return (
    <div className="w-full min-h-[100svh] bg-[#F3F5F9] flex flex-col items-center justify-center">
      <div className=" w-full bg-[#F3F5F9] h-full flex flex-col xl:flex-row items-start xl:items-center  max-w-[1280px] justify-center relative">
        <form
          className="w-full h-full flex flex-col pt-10 md:pt-0 pl-10 xl:pl-0 items-center md:items-start xl:items-center justify-center "
          onSubmit={handleSubmit}
        >
          <div className="wrapper">
            <div className="row ">
              <div className="col-md-3 d-flex justify-content-start">
                <h2 className="text-[#1F3F55] font-bold text-3xl md:text-5xl z-50">
                  Continue to Payment
                </h2>
              </div>
            </div>

            <div id="renderSabPaisa"></div>
            <div className="row mt-3 h-full flex flex-col items-start justify-center gap-3">
              <div className="h-fit w-full flex flex-col items-start justify-start gap-1">
                <label
                  className="font-semibold text-[15px] md:text-[20px] text-black"
                  htmlFor=""
                >
                  Name :
                </label>
                <input
                  required
                  type="text"
                  placeholder="Name :"
                  value={payerName}
                  className="w-[90%] md:w-[400px] border-[3px] border-black rounded-[3px] p-2 py-1 text-[15px]"
                  onChange={(e) => setPayerName(e.target.value)}
                />
              </div>
              <div className="h-fit w-full flex flex-col items-start justify-start gap-1">
                <label
                  className="font-semibold text-[15px] md:text-[20px] text-black"
                  htmlFor=""
                >
                  Email :
                </label>
                <input
                  required
                  type="email"
                  placeholder="Email :"
                  value={payerEmail}
                  className="w-[90%] md:w-[400px] border-[3px] border-black rounded-[3px] p-2 py-1 text-[15px]"
                  onChange={(e) => setPayerEmail(e.target.value)}
                />
              </div>
              <div className="h-fit w-full flex flex-col items-start justify-start gap-1">
                <label
                  className="font-semibold text-[15px] md:text-[20px] text-black"
                  htmlFor=""
                >
                  Phone :
                </label>
                <input
                  required
                  type="phone"
                  placeholder="Phone :"
                  value={payerMobile}
                  className="w-[90%] md:w-[400px] border-[3px] border-black rounded-[3px] p-2 py-1 text-[15px]"
                  onChange={(e) => setPayerMobile(e.target.value)}
                />
              </div>
              <div className="h-fit w-full flex flex-col items-start justify-start gap-1">
                <label
                  className="font-semibold text-[15px] md:text-[20px] text-black"
                  htmlFor=""
                >
                  Address :
                </label>
                <input
                  required
                  type="address"
                  placeholder="Address :"
                  value={payerAddress}
                  className="w-[90%] md:w-[400px] border-[3px] border-black rounded-[3px] p-2 py-1 text-[15px]"
                  onChange={(e) => setPayerAddress(e.target.value)}
                />
              </div>

              <div className="h-fit w-full flex flex-col items-start justify-start gap-1">
                <label
                  className="font-semibold text-[15px] md:text-[20px] text-black"
                  htmlFor=""
                >
                  Amount :
                </label>
                <input
                  required
                  type="amount"
                  placeholder="Amount :"
                  value={amount}
                  className="w-[90%] md:w-[400px] border-[3px] border-black rounded-[3px] p-2 py-1 text-[15px]"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-5 text-center w-full flex flex-col items-start justify-start">
              <div>
                <button
                  type="submit"
                  value="Submit"
                  className="px-6 py-2 hover:scale-90 transition-all ease-in-out duration-300 will-change-transform bg-[#1F3F55] text-white font-semibold text-[15px] md:text-[20px] rounded-[3px]"
                >
                  Proceed To Pay
                </button>
              </div>
            </div>
          </div>
          <SabpaisaPaymentGateway
            payerName={payerName}
            payerEmail={payerEmail}
            payerMobile={payerMobile}
            isOpen={isOpen}
          />
        </form>

        <img
          src="/main.png"
          alt=""
          className="bg-transparent md:right-10 xl:right-40 z-0 h-[300px] md:h-[400px] w-[500px] object-contain md:absolute"
        />

        <div className="xl:w-[50%] bg-transparent xl:block hidden h-full w-full  flex-col items-start  justify-center"></div>
      </div>
    </div>
  );
};

export default App;
