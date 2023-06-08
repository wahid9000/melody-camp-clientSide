import './PageBanner.css'
const PageBanner = ({heading, subHeading}) => {
    return (
        <div className="bg-gradient-to-l from-green-950 to-black mb-16">
            <div className='background-img h-[300px] bg-fixed '>
                <div className='text-center text-white pt-24 texts'>
                    <h2 className="text-5xl font-bold mb-3">{heading}</h2>
                    <p className="text-2xl">{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;