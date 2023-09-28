import React from "react";

function EsxTrainingAcademy() {
  const titles = ["Program Name", "Start Date", "Duration"];
  const programs = [
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
    {
      ProgramName: "Program Name",
      StartDate: "Feb, 2023",
      Duration: "2 Months",
    },
  ];
  return (
    <div className='bg-white'>
      <h1 className='text-[30px] font-sans font-normal pt-5 pb-6 px-5'>
        ESX training academy calendar{" "}
      </h1>
      <div className='grid grid-cols-3 w-[100%] bg-primary-blue px-5 py-5'>
        {titles.map((title, index) => {
          return (
            <h1
              key={index}
              className='text-[24px] text-left text-white font-sans font-normal pl-5'
            >
              {title}
            </h1>
          );
        })}
      </div>
      <div className='w-[100%] h-fit  px-5 py-5'>
        {programs.map((program, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-3 w-full border-b border-[#A8965B]'
            >
              <p className='text-[16px] font-sans font-normal p-5'>
                {program.ProgramName}
              </p>
              <p className='text-[16px] font-sans font-light p-5'>
                {program.StartDate}
              </p>
              <p className='text-[16px] font-sans font-light p-5'>
                {program.Duration}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EsxTrainingAcademy;
