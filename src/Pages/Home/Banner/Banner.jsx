import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import banner2 from '../../../assets/bannerImage/banner4.jpg'
import banner3 from '../../../assets/bannerImage/banner-3.png'
import banner4 from '../../../assets/bannerImage/banner-2.png'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
    return (
        <div>
            <AutoplaySlider
                play={true}
                buttons={true}
                bullets={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            >
                <div className='bg-gradient-to-r from-green-950 to-black '>
                    <div className="relative opacity-30">
                        <img src={banner2} className='h-full w-full' />
                    </div>
                    <div className='absolute top-[20%] lg:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center'>
                            <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the strongest form of magic.."}</h2>
                        </div>
                        <div className='text-center mt-4  md:mt-10'>
                            <button className='btn btn-warning font-bold bg-amber-300'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-green-950 to-black '>
                    <div className="relative opacity-30">
                        <img src={banner4} className='h-full w-full' />
                    </div>
                    <div className='absolute  top-[20%]  md:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center'>
                            <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the shorthand of emotion.."}</h2>
                        </div>
                        <div className='text-center  mt-4  md:mt-10'>
                            <button className='btn btn-warning font-bold bg-amber-300'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-green-950 to-black '>
                    <div className="relative opacity-30">
                        <img src={banner3} className='h-full w-full' />
                    </div>
                    <div className='absolute  top-[20%]   md:top-[25%] text-white font-semi '>
                        <div className='flex justify-center items-center'>
                            <h2 className='mx-auto w-9/12 md:w-1/2 text-white text-3xl text-center font-semibold lg:text-8xl'>{"Music is the language of the spirit.."}</h2>
                        </div>
                        <div className='text-center mt-4 md:mt-10'>
                            <button className='btn btn-warning font-bold bg-amber-300'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                
            </AutoplaySlider>
        </div>
    );
};

export default Banner;