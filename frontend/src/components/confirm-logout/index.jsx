import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Character from "../../../public/assets/images/imgtry.JPG";

const ConfirmLogout = () => {
    const [profileName, setProfileName] = useState("Ishaya Solomon");

    const router = useRouter();

    return <section className="flex justify-center items-center h-full">
        <div className="shadow-xl flex flex-col w-500px items-center relative bg-white rounded-xl">
            <div className="mb-9 flex flex-col items-center">
                <Image 
                    src={Character}
                    width={140}
                    height={140}
                    className="rounded-full"
                />
                <h2 className="mt-4 mb-3 font-bold text-2xl text-bac">
                    {profileName}
                </h2>
                <p className="text-bac">
                    Do you want to Logout?
                </p>
                <button className="absolute top-7 left-5 font-[100]" 
                    onClick={() => router.push("/dashboard")} 
                >
                    <FaTimes 
                        className="text-bac text-4xl" 
                        style={{strokeWidth: "0"}}
                    />
                </button>
            </div>
            <div className="flex w-full border-t-2 border-grey md:px-3">
                <div className="flex basis-1/2 justify-center items-center py-7 border-r-2 border-grey">
                    <button className="border-2 border-bac mx-auto text-bac font-bold cursor-pointer w-44 py-1 mx-auto rounded-md hover:bg-bac hover:text-white inline md:w-2/3" 
                        onClick={() => router.push("/dashboard")}
                    >
                        Cancel
                    </button>
                </div>
                <div className="flex basis-1/2 justify-center items-center py-7">
                    <button className="border-2 border-bac text-bac font-bold cursor-pointer w-44 py-1 rounded-md hover:bg-bac hover:text-white md:w-1/2 md:ml-2 md:w-2/3" 
                        onClick={() => router.push("/login")}
                    >
                        Logout
                    </button>
                </div> 
            </div>
        </div>
    </section>
}

export default ConfirmLogout;