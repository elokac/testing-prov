import Container from "../components/dashboard/Container";
import randomColor from "random-color";
import { useRouter } from "next/router";
import { ReturnIcon } from "../../public/assets/svg/Icons";

const EditProfile = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const color = randomColor();
  const router = useRouter();

  return (
    <Container title='Edit Profile'>
      {(profile, setProfile, updateProfile) => (
        <div className='overflow-hidden text-bac'>
          <div className='flex justify-between items-center'>
            <h2 onClick={() => router.back()} className='cursor-pointer flex items-center gap-[5px]'>
              <ReturnIcon />
              Go back
            </h2>
          </div>
          <div
            style={{ height: "calc(100vh - 146.2px)" }}
            className='flex flex-col gap-[18px] justify-center text-[0.9rem] items-center my-[18px] overflow-hidden rounded-[12px] bg-white shadow-xl px-[60px] pt-[30px] pb-[20px]'
          >
            <div className='w-[80px] min-h-[80px] max-h-[80px] rounded-[50%] border-[1px] mr-[1rem]'>
              <img
                src={`https://ui-avatars.com/api/?rounded=true&name=Ishaya+Solomon&background=${profile.color}`}
                alt='profile photo'
                width={100}
                height={100}
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-[16px] w-full h-[calc(100vh - 302.2px)] overflow-y-scroll pb-[30px] pr-[1rem]'
            >
              <div className='flex gap-[18px]'>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='firstName'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    First name
                  </label>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    value={profile.firstName}
                    placeholder='Type your first name here'
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm cursor-not-allowed'
                    onChange={event => updateProfile(event)}
                    disabled
                  />
                </div>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='lastName'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Last name
                  </label>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    value={profile.lastName}
                    placeholder='Type your surname here'
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm cursor-not-allowed'
                    onChange={event => updateProfile(event)}
                    disabled
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label
                  htmlFor='email'
                  className='font-[600] text-[1rem] ml-[6px]'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={profile.email}
                  placeholder='user@providus.com'
                  className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm cursor-not-allowed'
                  onChange={event => updateProfile(event)}
                  disabled
                />
              </div>
              <div className='flex gap-[18px]'>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='branch'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Branch
                  </label>
                  <input
                    id='branch'
                    name='branch'
                    type='text'
                    value={profile.branch}
                    placeholder="What's your branch name?"
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='dept'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Department
                  </label>
                  <input
                    id='dept'
                    name='dept'
                    type='text'
                    value={profile.dept}
                    placeholder='Which department do you belong to?'
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
              </div>
              <div className='flex gap-[18px]'>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='phone'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Phone number
                  </label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={profile.phone}
                    placeholder='0814 790 7809'
                    minLength={11}
                    maxLength={11}
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='dept'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Country
                  </label>
                  <input
                    id='country'
                    name='country'
                    type='text'
                    value={profile.country}
                    placeholder='Nigeria'
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label
                  htmlFor='address'
                  className='font-[600] text-[1rem] ml-[6px]'
                >
                  Address
                </label>
                <input
                  id='address'
                  name='address'
                  type='address'
                  value={profile.address}
                  placeholder='No. 123, Lagos street, Bayelsa Road, Abuja'
                  className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                  onChange={event => updateProfile(event)}
                  required
                />
              </div>
              <div className='flex gap-[18px]'>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='state'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    State
                  </label>
                  <input
                    id='state'
                    name='state'
                    type='text'
                    value={profile.state}
                    placeholder='Lagos'
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
                <div className='flex flex-col basis-[50%] gap-[8px]'>
                  <label
                    htmlFor='postalCode'
                    className='font-[600] text-[1rem] ml-[6px]'
                  >
                    Postal Code
                  </label>
                  <input
                    id='postalCode'
                    name='postalCode'
                    type='text'
                    value={profile.postalCode}
                    placeholder='100001'
                    minLength={6}
                    maxLength={6}
                    className='w-full rounded-[12px] px-[16px] py-[8px] border-[1px] shadow-sm'
                    onChange={event => updateProfile(event)}
                    required
                  />
                </div>
              </div>
              <div className='flex justify-end'>
                <button onClick={() => setProfile(profile)} className='bg-bac px-[20px] py-[10px] mt-[40px] text-white rounded-[12px] shadow-xl'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default EditProfile;
