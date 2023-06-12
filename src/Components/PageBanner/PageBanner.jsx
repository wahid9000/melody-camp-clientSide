import './PageBanner.css'
const PageBanner = ({heading, subHeading}) => {
    return (
        <div className="bg-gradient-to-b from-blue-950 to-blue-950 mb-16">
            <div className='background-img h-[400px] bg-fixed '>
                <div className='text-center text-white pt-48 texts'>
                    <h2 className="text-5xl font-bold mb-3">{heading}</h2>
                    <p className="text-2xl">{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;