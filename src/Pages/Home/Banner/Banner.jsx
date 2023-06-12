import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import banner6 from '../../../assets/bannerImage/banner-7.jpg'
import banner3 from '../../../assets/bannerImage/banner-3.jpg'
import banner5 from '../../../assets/bannerImage/banner-5.jpg'
import { Link } from 'react-router-dom';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
    return (
        <div className='pt-20'>
            <AutoplaySlider
    
                play={true}
                buttons={false}
                bullets={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            >
                <div className='bg-gradient-to-b from-blue-950 to-black '>
                    <div className="relative opacity-50">
                        <img src={banner5} className='h-full w-full' />
                    </div>
                    <div className='absolute top-[20%] lg:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center'>
                   
                                <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the strongest form of magic.."}</h2>
                       
                        </div>

                        <div className='text-center mt-4  md:mt-10'>
                            <Link to='/classes'><button className="btn capitalize rounded-md bg-blue-950 border bg-opacity-80 px-4 py-2 text-sm font-medium hover:bg-[#3045cd] text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">See Our Classes</button></Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-blue-950 to-black '>
                    <div className="relative opacity-50">
                        <img src={banner6} className='h-full w-full' />
                    </div>
                    <div className='absolute  top-[20%]  md:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center '>
                            <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the shorthand of emotion.."}</h2>
                        </div>
                        <div className='text-center  mt-4  md:mt-10'>
                            <Link to='/classes'><button className="btn capitalize rounded-md bg-blue-950 border bg-opacity-80 px-4 py-2 text-sm font-medium hover:bg-[#3045cd] text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">See Our Classes</button></Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-blue-950 to-black '>
                    <div className="relative opacity-30">
                        <img src={banner3} className='h-full w-full' />
                    </div>
                    <div className='absolute  top-[20%]   md:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center'>
                            <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the language of the spirit.."}</h2>
                        </div>
                        <div className='text-center mt-4 md:mt-10'>
                            <Link to='/classes'><button className="btn capitalize rounded-md bg-blue-950 border bg-opacity-80 px-4 py-2 text-sm font-medium hover:bg-[#3045cd] text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">See Our Classes</button></Link>
                        </div>
                    </div>
                </div>

            </AutoplaySlider>
        </div>
    );
};

export default Banner;