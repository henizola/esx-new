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
    <div className='flex flex-col gap-7 w-full'>
      <Card width='w-[100%] px-5 pt-5 pb-9'>
        <div className='flex flex-col gap-5 px-5'>
          <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left '>
            Find a Broker
          </h1>
          <p className='text-[16px] font-normal'>
            The first step to trading on ESX is approaching a licensed broker.
            Brokers are licensed agents that have the authorization to buy and
            sell shares on your behalf.
          </p>
        </div>
      </Card>
      <div className='bg-white '>
        <div className=' w-full h-full px-10'>
          <h1 className='text-header border-b-[3px] border-light-golden mt-5 w-fit text-left '>
            List of registered brokers
          </h1>
        </div>
        <div className='p-5 px-10 gap-4 '>
          {registeredUsers.map((users, index) => {
            return (
              <div
                key={index}
                className='border-b border-[#A8965B] bg-white py-2 mb-2   '
              >
                {users}
              </div>
            );
          })}
        </div>
      </div>
      <div className=' flex w-full items-center justify-center'>
        <div className='w-[90%] px-24 h-[450px] flex flex-col bg-primary-blue'>
          <h1 className='text-left text-[32px] text-white font-semibold   pt-16 pb-5'>
            Sign Up
          </h1>

          <input
            className='text  w-[460px] border-[0.5px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Username'
          />
          <input
            className='text  border-[0.5px] w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Email'
          />
          <input
            className='text  border-[0.5px] w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Password'
          />
          <span className='text-right  w-[460px] pt-7 pb-10 cursor-pointer text-[20px] font-medium text-white  '>
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
}

export default FindBroker;
