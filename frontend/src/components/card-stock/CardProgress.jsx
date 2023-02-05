import React, { useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CardProgress() {
  const [print, setPrint] = useState(6);
  const [total, setTotal] = useState(1000);

  return (
    <div className=" bg-white rounded-2xl flex flex-col gap-4 text-center">
      <p className="font-bold mt-5">Monthly Printed Cards Chart</p>
      <div className="flex mx-auto" style={{ width: 200, height: 200 }}>
        <CircularProgressbarWithChildren value={print}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <div className="text-lg font-semibold" style={{  marginTop: -5 }}>
            <p>
              {print} Cards <br /> Printed
            </p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="text-left ml-5 mb-8">
        <p><b>Printed Card</b>: {print} pieces of {total} </p>
        <p><b>Last Date Printed</b>: </p>
        <p><b>Last Time Printed</b>: </p>
      </div>
    </div>
  );
}
