import Container from "../components/dashboard/Container";
import { useState } from "react";
import Head from "next/head";
import Switch from "react-switch";

const Settings = () => {
  const [minimumSupply, setMinimumSupply] = useState(1);
  const [allowCopy, setAllowCopy] = useState(false);
  const [newCardAlert, setNewCardAlert] = useState(false);
  const [lowCardAlert, setLowCardAlert] = useState(false);

  const incrementSupply = () =>
    setMinimumSupply(minimumSupply => minimumSupply + 1);

  const decrementSupply = () =>
    setMinimumSupply(minimumSupply => {
      return minimumSupply > 1 ? minimumSupply - 1 : minimumSupply;
    });

	const modifySupply = event => {
		const { value } = event.target;
		setMinimumSupply(Number(value || 1))
	}

  const toggleCopyPermission = () => setAllowCopy(allowCopy => !allowCopy);

  const toggleAlert = type => {
    if (type === "newCard") {
      setNewCardAlert(alert => !alert);
    } else if (type === "lowCard") {
      setLowCardAlert(alert => !alert);
    }
  };

  return (
    <>
      <Head>
        <title>Settings</title>
        <link
          rel='stylesheet'
          href='https://raw.githubusercontent.com/instructure-react/react-toggle/master/style.css'
        />
      </Head>
      <Container title='Settings'>
        {() => (
          <div className='flex flex-col overflow-hidden rounded-[12px] bg-white shadow-xl px-[40px] py-[20px]'>
            <div className='flex flex-col gap-[10px] py-[20px]'>
              <h2 className='font-semibold text-[1rem]'>
                Set Card Reorder Level
              </h2>
              <div className='flex justify-between items-center'>
                <p className=' text-[0.9rem]'>
                  Choose minimum card supply amount
                </p>
                <div className='flex gap-[20px] items-center'>
                  <button
                    onClick={decrementSupply}
                    className='border-[1px] px-[10px] py-[2px] rounded-full bg-grey hover:bg-bac2'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    value={minimumSupply}
                    className='w-[3rem] text-center'
										onChange={e => modifySupply(e)}
                  />
                  <button
                    onClick={incrementSupply}
                    className='border-[1px] px-[10px] py-[2px] rounded-full bg-grey hover:bg-bac2'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='border-t-[1px] flex flex-col gap-[10px] py-[20px]'>
              <h2 className='font-semibold text-[1rem]'>Permission</h2>
              <div className='flex justify-between items-center'>
                <p className='text-[0.9rem]'>Allow copy of texts</p>
                <Switch
                  checked={allowCopy}
                  onChange={toggleCopyPermission}
                  onColor='#E6EEF1'
                  onHandleColor='#273C47'
                  handleDiameter={25}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                  activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                  height={20}
                  width={48}
                />
              </div>
            </div>
            <div className='border-t-[1px] flex flex-col gap-[10px] py-[20px]'>
              <h2 className='font-semibold text-[1rem]'>Notification</h2>
              <div className='flex flex-col gap-[18px]'>
                <div className='flex justify-between items-center'>
                  <p className='text-[0.9rem]'>
                    Enable email alert for new card supply
                  </p>
                  <Switch
                    checked={newCardAlert}
                    onChange={() => toggleAlert("newCard")}
                    onColor='#E6EEF1'
                    onHandleColor='#273C47'
                    handleDiameter={25}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                    activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                    height={20}
                    width={48}
                  />
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-[0.9rem]'>
                    Enable email alert for low card stock count
                  </p>
                  <Switch
                    checked={lowCardAlert}
                    onChange={() => toggleAlert("lowCard")}
                    onColor='#E6EEF1'
                    onHandleColor='#273C47'
                    handleDiameter={25}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                    activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                    height={20}
                    width={48}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Settings;
