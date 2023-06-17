import { Link } from 'react-router-dom';
import image from '../../../assets/aboutUs.jpg'
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='w-11/12 md:w-9/12 mx-auto py-20'>
  
                <div className='grid md:grid-cols-2 gap-10'>
                    <div>
                        <img className='h-[700px] w-full' src={image} alt="" />
                    </div>
                    <div>
                        <p className='font-secondary text-slate-600 text-xl uppercase font-semibold mb-5'>Why Should You Enroll?</p>
                        <h2 className='font-primary text-5xl font-bold leading-tight'>We have Professional Instructors For You</h2>
                        <p className='font-secondary text-slate-600 text-lg mt-10  text-justify'>At Melody School, we believe that music has the power to inspire, heal, and transform lives. It is our mission to cultivate a love for music in each and every student, providing them with a solid foundation. Our dedicated team of passionate music educators brings a wealth of experience and knowledge to the classroom.</p> <br />

                        <div className='space-y-3 mt-5 cursor-pointer font-medium font-secondary   '>
                            <div className='group'>
                                <div className='flex gap-2 items-center justify-start group-hover:scale-95 hover:font-bold  transition '>
                                    <FaArrowRight></FaArrowRight>
                                    <p className='text-xl'>Best Price</p>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='flex gap-2 items-center justify-start group-hover:scale-95 hover:font-bold transition'>
                                    <FaArrowRight></FaArrowRight>
                                    <p className='text-xl'>Amazing Instructors</p>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='flex gap-2 items-center justify-start group-hover:scale-95 hover:font-bold transition'>
                                    <FaArrowRight></FaArrowRight>
                                    <p className='text-xl'>Best Facility</p>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='flex gap-2 items-center justify-start group-hover:scale-95 hover:font-bold transition'>
                                    <FaArrowRight></FaArrowRight>
                                    <p className='text-xl'>24/7 Support</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-16'>
                            <Link to='/instructors'><button
                                className="btn font-primary text-xl capitalize rounded-md bg-blue-950 border-black border-b-4  px-8 h-16 font-bold  hover:bg-white text-white ease-in duration-600 hover:text-blue-950 hover:border-black  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            > Explore Now
                            </button></Link>
                        </div>
                    </div>

                </div>
        

        </div>

    );
};

export default AboutUs;