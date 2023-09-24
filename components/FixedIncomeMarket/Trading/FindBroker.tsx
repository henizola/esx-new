import React from "react";
import Card from "../../Card/Card";

function FindBroker() {
  const registeredUsers = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  return (
    <div className="flex flex-col gap-7 w-full">
      <Card width="w-[100%] p-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px] font-normal border-b border-black">
            Find a Broker
          </h1>
          <p className="font-[16px]">
            The first step to trading on ESX is approaching a licensed broker.
            Brokers are licensed agents that have the authorization to buy and
            sell shares on your behalf.
          </p>
        </div>
      </Card>
      <div className="bg-white">
        <div className="bg-[#00205B] w-full h-full">
          <h1 className="text-[24px] px-5 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal ">
            List of registered brokers
          </h1>
        </div>
        <div className="p-5 gap-4 max-h-[283px] overflow-scroll">
          {registeredUsers.map((users) => {
            return (
              <div className="border-b border-[#A8965B] bg-white py-2 mb-2">
                {users}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex w-full items-center justify-center">
        <div className="w-[50%]  p-10 h-[400px] flex flex-col bg-primary-blue">
          <h1 className="text-left text-[40px] text-white">Sign Up</h1>

          <input
            className="text border w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5"
            placeholder="Name"
          />
          <input
            className="text border w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5"
            placeholder="Name"
          />
          <input
            className="text border w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5"
            placeholder="Name"
          />
          <span className="text-right w-[460px] mt-6 cursor-pointer text-[16px] font-light text-white">
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
}

export default FindBroker;
