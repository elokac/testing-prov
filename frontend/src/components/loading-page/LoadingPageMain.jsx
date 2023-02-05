import {useRef, useEffect, useState} from 'react'
import LoadingBar from './LoadingBar';
import Login from '../../pages/login';

const LoadingPageMain = () => {
    const [ispageLoadElement, setIsPageLoadElement] = useState(false) ;//set boolean state to use as conditional for starting of load bar / appearance of load bar
    const logoSectionRef = useRef(null);
    const LoadingPageImageRef = useRef(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const logoSection = logoSectionRef.current; //get image section element
            const loadingPageImage = LoadingPageImageRef.current;
            logoSection.style.width = '420px';
            logoSection.style.transform = 'translateY(50px)';
            const loadPageImageChildren = loadingPageImage.children; //get all children images used for the main page image
            Array.from(loadPageImageChildren).forEach(element => {
                element.style.opacity = '0'; //fade-out main image on load page
            });
            loadingPageImage.style.opacity = '0'; //fade-out main image on load page
            setIsPageLoadElement(true); //boolean condition to start load bar / make load bar appear
        }, 2000);
        return () => {
            return clearTimeout(timeout); //clean up timeout effect
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPageLoadElement(true); //boolean condition to start load bar / make load bar appear
        }, 5000);
        return () => {
            return clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
         const timeout = setTimeout(() => {
            setIsLogin(true);
        }, 12000);
        return () => {
            return clearTimeout(timeout);
        };
    }, []);

    if(isLogin) {
        return <Login />
    };

    if(!isLogin) {
        return (
            <main className='w-full h-screen bg-[conic-gradient(from_134.96deg_at_55%_60%,_#e4edf2_0deg,_#faf5e6_360deg)] blur-none py-5 overflow-hidden'>
                <section className='w-1/3 mx-auto ease-linear duration-1000' ref={logoSectionRef}>
                    <img src='/assets/images/logo2.png' alt='logo' className='w-full'/>
                </section>
                {ispageLoadElement ? <LoadingBar /> : '' }
                <section className='w-96 h-72 mx-auto my-10 relative ease-linear duration-1000' ref={LoadingPageImageRef}>
                    <img src='/assets/images/Plants.png' className='absolute md:h-64 lg:h-64 w-full ease-linear duration-1000' />
                    <img src='/assets/images/Shadow.png' className='absolute md:h-10 md:w-11/12 md:left-4 lg:h-10 bottom-2.5 w-10/12 left-8 ease-linear duration-1000' />
                    <img src='/assets/images/creditCard.png' className='absolute md:left-16 md:w-6/12 md:bottom-20 lg:bottom-20 lg:left-16 lg:w-5/12 lg:h-2/6 xl:left-24 xl:bottom-24 xl:h-2/6 bottom-24 w-2/5 left-24 ease-linear duration-1000' />
                    <img src='/assets/images/Character.png' className='absolute md:right-5 md:h-36 lg:right-8 lg:h-3/6 xl:r-5 xl:h-3/5 bottom-11 w-5/12 h-48 right-16 ease-linear duration-1000' />
                    <img src='/assets/images/Device.png' className='absolute md:h-24 md:w-9/12 md:left-6 lg:h-24 lg:w-9/12 lg:left-6 bottom-5 w-8/12 left-11 ease-linear duration-1000' />
                </section>
            </main>
        )
    }
}

export default LoadingPageMain
