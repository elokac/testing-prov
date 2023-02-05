import Container from "../../components/dashboard/Container";
import Link from "next/link";
import {
  CalendarIcon,
  LogIcon,
  ReloadIcon,
} from "../../../public/assets/svg/Icons";
import Histogram from "../../components/card-stock/histogram";
import Calendar from "../../components/card-stock/calendar";
import Speedometer from "../../components/card-stock/speedometer";
import CardLog from "../../components/card-stock/cardLog";
import CardProgress from "../../components/card-stock/CardProgress";

export default function index() {
  return (
    <Container title="Card Stock">
      {() => (
        <>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">Card Stock Chart</h2>
            <Link className="cursor-pointer" href="/card-stock/card-stock-log">
              <div className="flex justify-center items-center text-center py-3 gap-3 bg-yellow px-[120px] mr-6 text-white rounded-2xl cursor-pointer">
                <LogIcon />
                <h3>Card Stock Log</h3>
              </div>
            </Link>
          </div>
          <div
            style={{ height: "calc(100vh - 144.2px)" }}
            className="my-[18px] pb-10 rounded flex gap-6 justify-between pr-3 overflow-y-scroll"
          >
            <div className="space-y-10  w-2/3 h-[100%]">
              <div className="flex gap-6 w-[100%] h-[400px]">
                <div className="rounded-[15px] w-1/2 h-[100%]">
                  <CardLog />
                  <button className="bg-bac flex w-[100%] justify-center gap-2 items-center py-3 my-3 rounded-2xl text-white">
                    <ReloadIcon />
                    <p>Refresh</p>
                  </button>
                </div>

                <div className="rounded-[15px]  w-1/2 h-[100%]">
                  <Speedometer />
                  <button className="bg-bac flex w-[100%] justify-center gap-2 items-center py-3 my-3 rounded-2xl text-white">
                    <LogIcon />
                    <p>Request Supply</p>
                  </button>
                </div>
              </div>

              <div className=" w-[100%] h-1/2">
                <div className="bg-white rounded-[15px] w-[100%] h-[442px]">
                  <Histogram />
                </div>
              </div>
            </div>

            <div className="space-y-10 w-1/3 h-[100%] mt-3">
              <div className="flex flex-col gap-8 h-[400px]">
                {/* <input className="bg-bac flex w-[100%] justify-center items-center py-3 my-3 rounded-2xl text-white" placeholder="calendar"
                   Supply 
                /> */}

                <div className="flex bg-white rounded-2xl px-4 -my-3">
                  <div className="flex items-center my-2 border-r-[3px]">
                    <div className="mx-1">
                      <CalendarIcon />
                    </div>
                    <div>
                      <p>From</p>
                      <input
                        className="w-[130px]"
                        placeholder="Mon, Aug, 2022"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mx-1">
                      <CalendarIcon />
                    </div>
                    <div>
                      <p>To</p>
                      <input
                        className="w-[130px]"
                        placeholder="Mon, Aug, 2022"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[370px] rounded-2xl">
                  <Calendar />
                </div>
              </div>
              
              <div className="rounded-[15px]  h-[442px]">
                <CardProgress />
                <button className="bg-bac flex w-[100%] justify-center gap-2 items-center py-3 my-3 rounded-2xl text-white">
                  <ReloadIcon />
                  <p>Refresh</p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
