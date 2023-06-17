import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Reviews.css'

// import required modules
import { Navigation } from "swiper";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const fetchedData = async () => {
        const res = await fetch('https://musical-server.vercel.app/reviews')
        const data = await res.json()
        setReviews(data)
    }
    useEffect(() => {
        fetchedData();
    }, [])


    return (
        <div>
            <SectionTitle heading={"Alumnus Reviews"} subHeading={"Reviews From Our Alumnus. These Reviews doesn't say, we are the best rather defines our commitment towards our students."}></SectionTitle>
            <div className="md:px-40 bg-img bg-fixed text-white">
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div>
                                <div className="text-center px-20 py-16">
                           
                                        <img className="md:w-72 w-full mx-auto mb-10 rounded-full" src={review.image} alt="" />
                             
                                    
                                    <p className="text-justify font-secondary">{review.details}</p>
                                    <h2 className="text-xl font-primary mt-10">{review.name}</h2>
                                    <p className="font-primary">{review.category}</p>
                                    
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>


            </Swiper> 
            </div>
            
        </div>
    );
};

export default Reviews;