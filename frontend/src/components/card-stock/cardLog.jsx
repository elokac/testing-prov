import Card from "../dashboard/Card";

export default function CardLog() {
  var dateNow = new Date();

  function dateFormat(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    month = month + 1;

    if (month < 10) {
      month = "0" + month;
    }
    var day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }
    return day + "/" + month + "/" + year;
  }
  return (
    <div className="flex flex-col rounded-2xl h-[361px] bg-white text-center py-4 ">
      <p className="my-3 font-bold">Blank Cards Sales</p>

      <div className="mx-auto">
        <Card href="/card-stock" />
      </div>
      <div className="flex flex-col text-left pl-8 gap-[0.5] mt-2">
        <p>
          <b>Copies Stocked</b>: 1000 pieces
        </p>
        <p>
          <b>Copies Left</b>: 650 pieces
        </p>
        <p>
          <b>Copies Restocked</b>: {dateFormat(dateNow)}
        </p>
      </div>
    </div>
  );
}
