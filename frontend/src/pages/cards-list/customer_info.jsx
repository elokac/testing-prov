import Card from "../../components/dashboard/Card";
import Container from "../../components/dashboard/Container";
import Search from "../../components/search/Search";

export default function customer_info() {
  return (
    <Container title="Cards List">
      {() => (
        <div>
          <div className="flex">
            <h2 className="font-bold text-xl">Customer information</h2>
            <Search />
          </div>
          <div
            style={{ height: "calc(100vh - 144.2px)" }}
            className="my-[18px] bg-white rounded overflow-y-scroll"
          >
            <div className="flex justify-center py-[50px]">
              <Card href="/cards-list/customer_info" passHref />
            </div>
            <form className="pb-[50px]">
              <div className="w-[795px] mx-auto">
                <label
                  className="ml-5 font-medium text-lg text-bac"
                  htmlFor="name"
                >
                  Print Full Name
                </label>
                <input
                  className="w-[795px] my-2 p-4 h-[51px] border rounded-[15px] border-bord1"
                  type="text"
                  placeholder="Maduka Chinwe"
                />
              </div>
              <div className="w-[795px] mx-auto ">
                <label
                  className="ml-5 font-medium text-lg text-bac"
                  htmlFor="name"
                >
                  Refrence Number
                </label>
                <input
                  className="w-[795px]  my-2 p-4 h-[51px] border rounded-[15px] border-bord1"
                  type="text"
                  placeholder="a3v2894hvb4949env30"
                />
              </div>
              <div className="w-[795px] mx-auto ">
                <label
                  className="ml-5 font-medium text-lg text-bac"
                  htmlFor="name"
                >
                  Pan
                </label>
                <input
                  className="w-[795px]  my-2 p-4 h-[51px] border rounded-[15px] border-bord1"
                  type="email"
                  placeholder="XXXXXXXXXX@gmail.com"
                />
              </div>
              <div className=" flex w-[795px] mx-auto ">
                <div>
                  <label
                    className="ml-5 font-medium text-lg text-bac"
                    htmlFor="name"
                  >
                    Expiry Date
                  </label>
                  <input
                    className="w-[374px]  my-2 h-[51px] border-bord1 border rounded-[15px] p-4  "
                    type="text"
                    placeholder="XX/XX"
                  />
                </div>
                <div>
                  <label
                    className="ml-5 font-medium text-lg text-bac"
                    htmlFor="name"
                  >
                    CVV
                  </label>
                  <input
                    className="w-[374px]  my-2 h-[51px] border-bord1 border rounded-[15px] p-4 "
                    type="text"
                    placeholder="XXX"
                  />
                </div>
              </div>

              <div className="w-[795px] mx-auto">
                <button className="w-[795px] mt-[30px] bg-bac text-white  p-4 h-[51px] border rounded-[15px] border-bord1">
                  Print
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}
