import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Amico from "../../public/assets/images/amico.png";
import Form from "../components/login/Form";

export default function Login() {
  return (
    <div className="flex h-[100vh]">
      <div className="bg-[#f5f5f5ff]">
        <div className="flex justify-center mt-[50px]">
          <Image src={Logo} alt="providus" />
        </div>
        <Form />
      </div>

      <div className="relative mx-auto my-auto w-full h-full flex justify-center items-center overflow-hidden">
        <div className="absolute -rotate-45 w-[1500px] h-[2500px] 2xl:w-[2500px] 2xl:h-[4000px] flex -z-10">
          <div className="w-[40%] bg-[#d4e5ec] h-full"></div>
          <div className="w-[60%] bg-[#f8f4e8] h-full"></div>
        </div>
        <Image className=" h-[500px] w-[500px]" src={Amico} alt="amico"/>
      </div>
    </div>
  );
}
