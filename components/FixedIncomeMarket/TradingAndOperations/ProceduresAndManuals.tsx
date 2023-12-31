import Card from "@/components/Card/Card";

function ProceduresAndManuals() {
  return (
    <Card width='w-[100%] px-10'>
      <div className='flex items-center'>
        <div className=' py-10 pt-5'>
          <div className='w-[100%] flex flex-col'>
            <h1 className='text-header   font-[500] border-b-[3px]   border-[#A8965B] pb-0 w-fit'>
              Procedures & manuals{" "}
            </h1>
            <p className='  text-paragraphSmall   font-light mt-2 pt-5 leading-6   '>
              The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s first, and
              only organized securities exchange. ESX is established as a public
              private partnership inline with Article 31 of the Capital Market
              Proclamation (No.1248/2021), and is licensed by the Ethiopian
              Capital Market Authority (ECMA).
            </p>
            <button className=' rounded-lg text-white text-paragraphSmall font-light w-fit justify-center align-middle text-center bg-primary-blue py-[10px] px-5 mt-5'>
              Procedures and Manuals{" "}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProceduresAndManuals;
