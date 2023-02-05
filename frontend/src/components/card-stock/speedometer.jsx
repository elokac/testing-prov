import GaugeChart from "react-gauge-chart";

export default function Speedometer() {
  const dummyValue = 50;

  const chartStyle = {
    height: 150,
  }
  

  return (
    <div className="flex flex-col rounded-2xl bg-white h-[361px] text-center py-4 ">
      <p className="my-3 font-bold">Blank Cards Sales</p>
      <GaugeChart
        colors={["#FF0000", "#FDB007", "#007000"]}
        hideText="true"
        id="gauge-chart2"
        nrOfLevels={20}
        percent={ dummyValue/100 }
        style={chartStyle}
      />
      <div className="flex justify-center items-end gap-14 py-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={(dummyValue >= 0 && dummyValue <= 40) ? 40 : 24}
            height={(dummyValue >= 0 && dummyValue <= 40) ? 40 : 24}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
            className="mx-auto"
          >
            <path
              fill="red"
              d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199A7.6 7.6 0 1 1 10 2.4a7.6 7.6 0 1 1 0 15.199zM7.501 9.75C8.329 9.75 9 8.967 9 8s-.672-1.75-1.5-1.75S6 7.033 6 8s.672 1.75 1.501 1.75zm4.999 0c.829 0 1.5-.783 1.5-1.75s-.672-1.75-1.5-1.75S11 7.034 11 8s.672 1.75 1.5 1.75zm1.841 1.586a.756.756 0 0 0-1.008.32c-.034.066-.869 1.593-3.332 1.593c-2.451 0-3.291-1.513-3.333-1.592a.75.75 0 0 0-1.339.678c.05.099 1.248 2.414 4.672 2.414c3.425 0 4.621-2.316 4.67-2.415a.745.745 0 0 0-.33-.998z"
            />
          </svg>
          <p>Sad</p>
          <p>0 - 40%</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={(dummyValue > 40 && dummyValue <= 60) ? 40 : 24}
            height={(dummyValue > 40 && dummyValue <= 60) ? 40 : 24}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
            className="mx-auto"
          >
            <path
              fill="#fdb007"
              d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199A7.6 7.6 0 1 1 10 2.4a7.6 7.6 0 1 1 0 15.199zM7.501 9.75C8.329 9.75 9 8.967 9 8s-.672-1.75-1.5-1.75S6 7.033 6 8s.672 1.75 1.501 1.75zm4.999 0c.829 0 1.5-.783 1.5-1.75s-.672-1.75-1.5-1.75S11 7.034 11 8s.672 1.75 1.5 1.75zm1.841 1.586a.756.756 0 0 0-1.008.32c-.034.066-.869 1.593-3.332 1.593c-2.451 0-3.291-1.513-3.333-1.592a.75.75 0 0 0-1.339.678c.05.099 1.248 2.414 4.672 2.414c3.425 0 4.621-2.316 4.67-2.415a.745.745 0 0 0-.33-.998z"
            />
          </svg>
          <p>worried</p>
          <p>41 - 60%</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={(dummyValue > 60 && dummyValue <= 100) ? 40 : 24}
            height={(dummyValue > 60 && dummyValue <= 100) ? 40 : 24}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
            className="mx-auto"
          >
            <path
              fill="green"
              d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199A7.6 7.6 0 1 1 10 2.4a7.6 7.6 0 1 1 0 15.199zM7.501 9.75C8.329 9.75 9 8.967 9 8s-.672-1.75-1.5-1.75S6 7.033 6 8s.672 1.75 1.501 1.75zm4.999 0c.829 0 1.5-.783 1.5-1.75s-.672-1.75-1.5-1.75S11 7.034 11 8s.672 1.75 1.5 1.75zm1.841 1.586a.756.756 0 0 0-1.008.32c-.034.066-.869 1.593-3.332 1.593c-2.451 0-3.291-1.513-3.333-1.592a.75.75 0 0 0-1.339.678c.05.099 1.248 2.414 4.672 2.414c3.425 0 4.621-2.316 4.67-2.415a.745.745 0 0 0-.33-.998z"
            />
          </svg>
          <p>Happy</p>
          <p>61 - 100%</p>
        </div>
      </div>
    </div>
  );
}
