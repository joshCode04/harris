import { useState } from "react";
import "./Content.css";

function Content() {
  // State to manage the selected plan
  const [plan, setPlan] = useState("one-time");

  // Define pricing based on the selected plan
  const pricing = {
    "one-time": ["$80", "$160", "$340", "$540", "$1,080", "$2,030"],
    monthly: ["$8", "$16", "$34", "$54", "$108", "$205"],
  };

  // Define styles for selected plan
  const planButtonStyle = (selectedPlan) => ({
    backgroundColor: plan === selectedPlan ? "#000" : "#ddd",
    color: plan === selectedPlan ? "#fff" : "#000",
    border: `2px solid ${plan === selectedPlan ? "#000" : "#ddd"}`,
  });

  return (
    <section className="xl:px-[112px] max-sm:px-4 md:px-7 mb-7">
      <div className="flex max-[940px]:flex-col max-[940px]:items-center justify-between max-[940px]:gap-10">
        <div className="max-w-[550px] max-[940px]:text-center">
          <img src="/imgMain.jpg" className="w-[550px] mx-auto" alt="" />
          <div>
            <p className="montserat text-base font-semibold">
              We are proud to be a non-profit organization, independent and
              uncompromising. Our efforts to promote a healthy internet for
              everyone are supported by thousands of people like you. Your
              donations are essential for us to continue our mission of keeping
              the Web open and accessible. Will you contribute today?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-5xl">Donate Now</p>
          <div className="flex flex-col items-center gap-10">
            <div className="flex gap-4">
              <button
                style={planButtonStyle("one-time")}
                className="text-white px-10 py-2 rounded-md"
                onClick={() => setPlan("one-time")}
              >
                One time
              </button>
              <button
                style={planButtonStyle("monthly")}
                className="text-white px-10 py-2 rounded-md flex items-center"
                onClick={() => setPlan("monthly")}
              >
                Monthly
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {pricing[plan].map((price, index) => (
                <button
                  key={index}
                  className="bg-white text-black border border-gray-400 px-5 py-2 rounded"
                >
                  {price}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">$</span>
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                value={pricing[plan][1]} // Display the second option as default
              />
              <select className="border rounded-md p-2">
                <option value="$">$</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white px-8 py-2 rounded-md w-full">
              Donate and Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
