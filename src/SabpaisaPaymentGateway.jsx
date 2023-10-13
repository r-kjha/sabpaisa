import React, { useState, useEffect } from "react";
import { PaymentInitModal } from "pg-test-project";
import { v4 as uuidv4 } from "uuid";
import uniqid from "uniquid";

function SabpaisaPaymentGateway(props) {
  const clientDetails = props?.clientData;
  const [isOpen, setIsOpen] = useState(false);
  const [clientCode, setClientCode] = useState("SUPA82");
  const [transUserName, setTransUserName] = useState("billing_12697");
  const [transUserPassword, setTransUserPassword] = useState("SUPA82_SP12697");
  const [authkey, setAuthkey] = useState("f75FT3T6eoy240zV");
  const [authiv, setAuthiv] = useState("i0JRGw05loqF6x1w");
  const [callbackUrl, setCallbackUrl] = useState(
    "https://securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1"
  );
  const [payerName, setpayerName] = useState(props.payerName);
  const [payerEmail, setpayerEmail] = useState(props.payerEmail);
  const [payerMobile, setpayerMobile] = useState(props.payerMobile);
  const [clientTxnId, setclientTxnId] = useState("38289722933377snjn");
  const [payerAddress, setpayerAddress] = useState("");
  const [amount, setamount] = useState(9999);
  const [amountType, setamountType] = useState("");
  const [udf1, setudf1] = useState("");
  const [udf2, setudf2] = useState("");
  const [udf3, setudf3] = useState("");
  const [udf4, setudf4] = useState("");
  const [udf5, setudf5] = useState("");
  const [udf6, setudf6] = useState("");
  const [udf7, setudf7] = useState("");
  const [udf8, setudf8] = useState("");
  const [udf9, setudf9] = useState("");
  const [udf10, setudf10] = useState("");
  const [udf11, setudf11] = useState("");
  const [udf12, setudf12] = useState(""); // client id
  const [udf13, setudf13] = useState(""); // plan id
  const [udf14, setudf14] = useState(""); // plan name
  const [udf15, setudf15] = useState(""); // application id (product id)
  const [udf16, setudf16] = useState(""); // // client subscribe plan detail id(refer to DB)
  const [udf17, setudf17] = useState(""); // payment from the COB portal
  const [udf18, setudf18] = useState("");
  const [udf19, setudf19] = useState("");
  const [udf20, setudf20] = useState("");
  const [channelId, setchannelId] = useState("");
  const [programId, setprogramId] = useState("");
  const [mcc, setmcc] = useState("");

  useEffect(() => {
    setIsOpen(props?.isOpen);
  }, [props]);

  return (
    <div>
      {" "}
      {
        //1) Testing with production enironment please pass env="prod"
        // 2)Testing with stageing enironment please pass env="" or env="stage"
        // 3)Default it is going to catch env=""
        <PaymentInitModal
          clientCode={clientCode}
          transUserPassword={transUserPassword}
          transUserName={transUserName}
          isOpen={isOpen}
          clientTxnId={uniqid()}
          authkey={authkey}
          authiv={authiv}
          payerName={payerName}
          payerEmail={payerEmail}
          payerMobile={payerMobile}
          payerAddress={payerAddress}
          amount={amount}
          amountType={amountType}
          onToggle={() => setIsOpen(!isOpen)}
          channelId={channelId}
          programId={programId}
          mcc={mcc}
          label={"Production"}
          env={"prod"}
        />
      }
    </div>
  );
}

export default SabpaisaPaymentGateway;
