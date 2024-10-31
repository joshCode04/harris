import { useState } from "react";
import Select from "react-select";
import Popup from "./Popup";

function Content() {
  const [plan, setPlan] = useState("one-time");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    value: "Bitcoin",
    label: (
      <div className="flex items-center">
        <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
        Bitcoin
      </div>
    ),
  });
  const [copied, setCopied] = useState(""); // State for the copied notification

  const addresses = {
    Bitcoin: "bc1q26xdk0merragvcuuww8ghafes8tqqnxh8mg0d9",
    Ethereum: "0xB1DE3D7F74aa03F3d936556d0e3538a8C19A1de3",
    USDT: "THLMrfWfy25w9iNdJ6n8hoRsJBK6dEAU63",
  };

  const pricing = {
    "one-time": ["$80", "$160", "$340", "$540", "$1,080", "$2,030"],
    monthly: ["$8", "$16", "$34", "$54", "$108", "$205"],
  };

  const planButtonStyle = (selectedPlan) => ({
    backgroundColor: plan === selectedPlan ? "#000" : "#ddd",
    color: plan === selectedPlan ? "#fff" : "#000",
    border: `2px solid ${plan === selectedPlan ? "#000" : "#ddd"}`,
  });

  const priceButtonStyle = (price) => ({
    backgroundColor: selectedPrice === price ? "#08388B" : "#fff",
    color: selectedPrice === price ? "#fff" : "#000",
    border: `2px solid ${selectedPrice === price ? "#000" : "gray"}`,
  });

  const handleDonateClick = () => {
    setShowPopup(true);
    setPopupMessage(
      "Thank you for your donation! If you need any assistance, please contact support."
    );
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  const handleCopyAddress = (crypto) => {
    navigator.clipboard.writeText(addresses[crypto]);
    setCopied(crypto);
    setTimeout(() => setCopied(""), 3000);
  };

  const handlePaypalClick = () => {
    setShowPopup(true);
    setPopupMessage(
      "Payment successful via PayPal. If you need any assistance, please contact support."
    );
  };

  const handleBankTransferClick = () => {
    setShowPopup(true);
    setPopupMessage(
      "Payment successful via Bank Transfer. If you need any assistance, please contact support."
    );
  };

  const cryptoOptions = [
    {
      value: "Bitcoin",
      label: (
        <div className="flex items-center">
          <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
          Bitcoin
        </div>
      ),
    },
    {
      value: "Ethereum",
      label: (
        <div className="flex items-center">
          <img
            src="/ethereum.png"
            alt="Ethereum Logo"
            className="w-6 h-6 mr-2"
          />
          Ethereum
        </div>
      ),
    },
    {
      value: "USDT",
      label: (
        <div className="flex items-center">
          <img src="/USDT.png" alt="USDT Logo" className="w-6 h-6 mr-2" />
          USDT
        </div>
      ),
    },
  ];

  return (
    <section className="xl:px-[112px] max-sm:px-4 md:px-7">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-[940px]:gap-10 pt-5">
        <div className="flex flex-col gap-5 bg-[#FEF9EC] p-9 max-w-[550px] w-full rounded-lg">
          <h2 className="text-2xl md:text-3xl text-[#08388B] font-bold mb-4">
            Donate to support the Harris-Walz campaign!
          </h2>
          <p className="text-[#7E7287] mb-6">
            We all must stand together to win at the ballot box, protect our
            fundamental freedoms, and finally fulfill the promise of America.{" "}
            <br />
            <span className="font-semibold">Donate $25 or more now.</span>
          </p>
          <div className="mb-6">
            <p className="text-lg font-medium mb-2">Choose an amount</p>
            <p className="mb-4">
              Your contribution will benefit Kamala Harris.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pricing[plan].map((price, index) => (
                <button
                  key={index}
                  style={priceButtonStyle(price)}
                  className="px-4 py-2 rounded cursor-pointer text-center"
                  onClick={() => handlePriceSelect(price)}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl font-bold">$</span>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={selectedPrice || pricing[plan][1]} // Display selected price or second option as default
              onChange={(e) => setSelectedPrice(e.target.value)} // Allow manual input as well
            />
            <select className="border rounded-md p-2">
              <option value="$">$</option>
            </select>
          </div>
          <p className="text-black font-bold text-lg mb-4">Checkout</p>
          <div className="flex flex-col gap-4 mb-6">
            <label htmlFor="payment-method" className="font-medium">
              Payment Method
            </label>
            <Select
              id="payment-method"
              options={cryptoOptions}
              value={selectedPaymentMethod}
              onChange={setSelectedPaymentMethod}
              className="border rounded-md p-2"
              components={{ IndicatorSeparator: () => null }} // Remove the separator between dropdown and value
            />
            {selectedPaymentMethod && (
              <div className="relative">
                <p className="mb-2">
                  Send {selectedPaymentMethod.value} to the following address:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="border rounded-md p-2 w-full"
                    value={addresses[selectedPaymentMethod.value]}
                    readOnly
                  />
                  <button
                    onClick={() =>
                      handleCopyAddress(selectedPaymentMethod.value)
                    }
                    className="bg-gray-300 text-black px-3 py-2 rounded-md"
                  >
                    Copy
                  </button>
                </div>
                {copied === selectedPaymentMethod.value && (
                  <div className="absolute top-full mt-2 p-2 bg-green-500 text-white rounded-md">
                    {selectedPaymentMethod.value} address copied to clipboard!
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-full bg-gray-300"></div>
            <p className="text-[#657287]">Or</p>
            <div className="h-1 w-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between max-w-[500px] mb-6 gap-4 sm:gap-0">
            <button
              onClick={handlePaypalClick}
              className="bg-[#FFC439] py-3.5 px-[86px] rounded-md sm:py-3 sm:px-[86px]" // Original style for larger screens, adjusted padding for smaller screens
            >
              <span>
                <img
                  className="h9 w-20 sm:w-14 pl-3 sm:pl-0"
                  src="/paypal.png"
                  alt="PayPal"
                />
              </span>
            </button>
            <button
              onClick={handleBankTransferClick}
              className="bg-[#000000] py-3 px-14 montserat text-white rounded-md sm:p-3 sm:px-16" // Original style for larger screens, adjusted padding for smaller screens
            >
              Bank Transfer
            </button>
          </div>

          <div className="h-1 w-full bg-gray-300 mb-6"></div>
          <p className="text-[#657287] text-sm">
            Contributions to Harris For President are not deductible as
            charitable contributions for Federal income tax purposes. The
            campaign does not accept contributions from corporations or their
            PACs, unions, federal government contractors, national banks, those
            registered as federal lobbyists or under the Foreign Agents
            Registration Act, SEC-named executives of fossil fuel companies
            (i.e., companies whose primary business is the extraction,
            processing, distribution or sale of oil, gas or coal); or foreign
            nationals. To comply with Federal law, we must use our best efforts
            to obtain, maintain, and submit the name, mailing address,
            occupation and name of the employer of individuals whose
            contributions exceed $200 per election. By submitting your
            contribution you agree that your contribution will be designated for
            the 2024 general election. <br />
            <br />
            By providing your mobile phone number you consent to receive
            recurring automated text messages from Harris for President. Message
            & Data Rates May Apply. Text HELP for Info. Text STOP to opt out. No
            purchase necessary.
          </p>
        </div>
        <div className="hidden md:block max-w-[550px]">
          <img
            src="/bg1.png"
            className=" fixed bottom-0 right-0"
            alt="Background"
          />
        </div>
      </div>
      {showPopup && (
        <Popup message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}

export default Content;
