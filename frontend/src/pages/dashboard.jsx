import dynamic from "next/dynamic";
import Container from "../components/dashboard/Container";
import Search from "../components/search/Search";
import waver from "../../public/assets/images/waving-hand.png";
import card from "../../public/assets/images/card-template.png";
import Image from "next/image";
import { ChatIcon } from "../../public/assets/svg/Icons";
import Progressbar from "../components/dashboard/animated-progressbar/Progressbar";
import Card from "../components/dashboard/Card";
import Link from "next/link";

const Chart = dynamic(() => import("../components/dashboard/Chart"), {
  ssr: false,
});

const dashboard = () => {
  const handleChange = () => {};

  const dummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <Container title='Dashboard'>
        {({ firstName }) => (
          <>
            <div className='flex justify-between items-center'>
              <h2 className='flex items-center gap-[5px]'>
                Welcome back {firstName}
                <Image src={waver} width={35.19} height={35.19} alt='' />
              </h2>
              <Search handleChange={handleChange} />
            </div>
            <div
              style={{ height: "calc(100vh - 144.2px)" }}
              className='flex gap-[18px] my-[18px] rounded-[12px] shadow-sm'
            >
              <div className='flex gap-[18px] flex-col w-[70%] rounded-[12px] overflow-y-scroll pr-[18px]'>
                <div className='flex gap-[18px] rounded-[12px]'>
                  <div className='flex flex-col gap-3 justify-center items-center rounded-[12px] border-[1px] basis-[33%] h-[200px] bg-white shadow-sm p-6'>
                    <h2 className='font-bold text-center'>Blank Cards</h2>
                    <Progressbar endValue={52} />
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-center rounded-[12px] border-[1px] basis-[33%] h-[200px] bg-white shadow-sm p-6'>
                    <h2 className='font-bold text-center'>Awaiting Print</h2>
                    <Progressbar endValue={37.5} />
                  </div>
                  <div className='flex flex-col gap-3 justify-center items-center rounded-[12px] border-[1px] basis-[33%] h-[200px] bg-white shadow-sm p-6'>
                    <h2 className='font-bold text-center'>Printed</h2>
                    <Progressbar endValue={76} />
                  </div>
                </div>
                <div className='flex items-center flex-col gap-[0.5rem] bg-white rounded-[12px] shadow-sm min-h-[300px] max-h-[300px] px-[10px] py-[18px]'>
                  <h3 className='font-bold text-center'>
                    Printed Card Cumulative Per Month
                  </h3>
                  <Chart />
                </div>
                <div className='bg-white rounded-[12px] shadow-sm min-h-[500px] max-h-[500px]'>
                  <div className="w-full flex justify-end gap-6 items-center py-[15px] px-[30px] text-[0.75rem]">
                    <div className="w-fit flex gap-3 items-center">
                      <div className="w-4 h-4 rounded-full shadow-lg bg-yellow"></div>
                      <p>Awaiting</p>
                    </div>
                    <div className="w-fit flex gap-3 items-center">
                      <div className="w-4 h-4 rounded-full shadow-lg bg-bac"></div>
                      <p>Printed</p>
                    </div>
                  </div>
                  <table
                    // style={{ height: "calc(100vh - 144.2px)" }}
                    className='flex flex-col bg-white h-[100%] w-fill overflow-x-scroll shadow-sm'
                  >
                    <thead className='flex justify-between min-w-fit px-[30px] py-[15px] bg-bac2 text-bac'>
                      <tr className='w-full font-[700] text-[0.85rem] flex justify-between pr-[10px]'>
                        <td className='min-w-[175px]'>Card Reference no.</td>
                        <td className='min-w-[220px]'>Customer's Name</td>
                        <td className='min-w-[100px]'>Date</td>
                        <td className='min-w-[80px]'>Time</td>
                        <td className='min-w-[50px]'>Action</td>
                      </tr>
                    </thead>
                    <tbody
                      className='flex flex-col min-w-fit bg-white text-bac overflow-y-scroll'
                      style={{ height: "calc(100vh - 205.4px)" }}
                    >
                      {dummy.map(dummy => (
                        <tr className='w-full flex text-[0.75rem] justify-between border-[1px] px-[30px] py-[10px]'>
                          <td className='min-w-[175px]'>202e69db-74a5-4862</td>
                          <td className='min-w-[220px]'>
                            Ishaya Solomon - Your Zaddy
                          </td>
                          <td className='min-w-[100px]'>01/02/2056</td>
                          <td className='min-w-[80px]'>04:19pm</td>
                          <td className="min-w-[50px] flex justify-center">
                            <div className={`w-4 h-4 rounded-full bg-${Math.ceil(Math.random() * 100) >= 50 ? 'yellow' : 'bac'} shadow-lg`}></div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='flex flex-col w-[30%] border-[1px] bg-white shadow-sm rounded-[12px]'>
                <div className='flex flex-col gap-3 border-b-[1px] rounded-tr-[12px] rounded-tl-[12px] p-[18px]'>
                  <Card href='/cards-list' />
                  <div className="flex flex-col gap-10">
                    <Link href='/cards-list'>
                      <p className="underline cursor-pointer font-normal">See details</p>
                    </Link>
                    <h3 className="font-bold">Recent Activities</h3>
                  </div>
                </div>
                <div className='flex flex-col gap-[18px] py-[18px] text-[14px] w-[100%] rounded-br-[12px] rounded-bl-[12px] overflow-y-scroll pr-[5px]'>
                  { dummy.map(data => (
                    <div className="border-b-2 px-[16px] pb-[16px]">
                      <div className="flex gap-[10px]">
                        <div className="w-[24px]">
                          <ChatIcon />
                        </div>
                        <p className="leading-6">
                          Card print for Ishaya Solomon (202e69db-74a5-4862) is successful.<br />
                          Printed by Ayo Temitope<br />
                          20th July. 2022, 01:25pm<br />
                        </p>
                      </div>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default dashboard;
