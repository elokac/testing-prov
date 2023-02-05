import React, { useRef, useState, useEffect } from 'react'

const LoadingBar = () => {
    const loadBarRef = useRef(null);
    const [widthSize, setWidthSize] = useState(0); //set initial state for width of load bar  

    useEffect(() => {
        const loadBar = loadBarRef.current;
        loadBar.style.width = `${widthSize}px`; //style load-bar to increased width-size
    });
    
    useEffect(() => {
        const interval = setInterval(() => {
             setWidthSize((widthSize) => {
                return widthSize + (320 / 8) //increase width-size of load bar every second 
            });
        }, 1000);
        const timeout = setTimeout(() => {
            clearInterval(interval) //clear interval for increment of load bar after 10seconds
        }, 8000);
        return () => {
            clearTimeout(timeout) //clean up timeout effect
        };
    }, []);

    return (
        <div className='flex justify-center items-center h-10 mt-28'>
            <div className='w-80 h-5'>
                <div className='h-3 w-0 rounded-md bg-[conic-gradient(from_20deg_at_60%_180%,_#FDB007_0deg,_#273C47_85.75deg,_#F4E7CB_185.62deg,_#FDB20E_250.62deg,_#273C47_280.37deg,_#FDB007_200deg)]' ref={loadBarRef}></div>
            </div> 
        </div>
    )
}

export default LoadingBar