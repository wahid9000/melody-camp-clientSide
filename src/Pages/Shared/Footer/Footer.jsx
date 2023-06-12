import { Link } from "react-router-dom";
import { FaAddressCard, FaMailchimp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-24">
            <footer className="footer text-white p-10 bg-[#08031d] opacity-85  h-full md:h-64 items-center">
                <div>
                    <Link to='/'>
                        <div><img src="logo.png" className=" rounded-2xl w-48" alt="" /></div>
                    </Link>
                    <p className='text-lg text-white roboto'>Melody Camp<br />Music Instrument Learning School</p>
                </div>

                <div>
                    <span className="footer-title">Contact Information</span>
                    <div className='flex gap-1 items-center'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <Link>Phone: +99 - 87548459575</Link>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaMailchimp></FaMailchimp>
                        <Link>Email: melody_camp_@email.ca</Link>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Address</span>
                    <div className='flex gap-1 items-center'>
                        <FaAddressCard></FaAddressCard>
                        <Link>Address: 21/A Mcdonalds Avenue, Toronto, Ontario</Link>
                    </div>
                    <Link>Available ( 10.00PM to 5.00 PM)</Link>

                </div>
            </footer>
            <div className='text-center text-white bg-[#08031d] opacity-85  pb-5'>
                <h2>Copyright © 2023 Melody Camp</h2>
            </div>
        </div>
    );
};

export default Footer;