import image from '../../assets/bannerImage/404.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt="" />
            <button className='btn btn-success mt-10'>Back To Home Page</button>
        </div>
    );
};

export default ErrorPage;