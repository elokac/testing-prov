import Container from "../../components/dashboard/Container";
import Search from "../../components/search/Search";
import Log from "../../components/card-stock/log"
import Link from "next/link";
import { ReturnIcon } from "../../../public/assets/svg/Icons";
import { useRouter } from "next/router";

export default function CardStockLog() {
  const router = useRouter();
  return (
    <Container title="Card Stock">
      {() => (
        <>
          <div className="flex">
            <div className="flex">
              <div className="cursor-pointer" onClick={() => router.back()}>
                <ReturnIcon />
              </div>
              <h2 className="font-bold text-xl">Card Stock Log</h2>
            </div>
            <Search />
          </div>
          <div
            style={{ height: "calc(100vh - 144.2px)"}}
            className="my-[10px] bg-white rounded-md "
          >
            <Log />
          </div>
        </>
      )}
    </Container>
  );
}
