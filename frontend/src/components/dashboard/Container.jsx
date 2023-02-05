import Link from "next/link";
import randomColor from "random-color";
import { useEffect, useState } from "react";
import { BellIcon, ChatIcon } from "../../../public/assets/svg/Icons";
import LeftPanel from "./LeftPanel";

const Container = props => {
  const color = randomColor();

  const [newColor, setNewColor] = useState(color.hexString().split("#").pop())

	const [profile, setProfile] = useState({
    firstName: "Ishaya",
    lastName: "Solomon",
    email: "ishaya808@gmail.com",
    branch: "SYTYCC",
    dept: "Frontend Engineering",
    phone: "08147907809",
    country: "Iraq",
    address: "No. 123, Lagos Street, Bayelsa Road, Abuja",
    state: "Los Angeles",
    postalCode: "100001",
    color: newColor
  });

  const updateProfile = ({ target: { name, value } }) => {
    setProfile(profile => ({
      ...profile,
      [name]: value,
    }));
  };

  useEffect(() => {
    setNewColor(color.hexString().split("#").pop())
  }, [])

  return (
    <div className='flex'>
      <LeftPanel />
      <div style={{ width: "calc(100% - 270px)" }} className='bg-cont bg-cover'>
        <div className='flex justify-between items-center bg-white px-[18px] py-[8px] border-b-[1px]'>
          <h1 className="font-bold">{props.title}</h1>
          <div className='flex gap-[30px] items-center'>
            <BellIcon />
            <ChatIcon />
            <Link href='/edit-profile'>
							<div className='flex items-center gap-[5px] cursor-pointer'>
								<img
									src={`https://ui-avatars.com/api/?rounded=true&name=${profile.firstName}+${profile.lastName}&background=${profile.color}`}
									alt={`${profile.firstName.slice(0,1)}${profile.lastName.slice(0,1)}`}
									width={40}
									height={40}
								/>
								{profile.firstName} {profile.lastName}
							</div>
						</Link>
          </div>
        </div>
        <div
          style={{ height: "calc(100vh - 57px)" }}
          className='p-[18px] overflow-hidden'
        >
          {props.children(profile, setProfile, updateProfile)}
        </div>
      </div>
    </div>
  );
};

export default Container;
