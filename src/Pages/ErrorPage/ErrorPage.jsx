import { Link } from 'react-router-dom';
import image from '../../assets/bannerImage/404.png';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt="" />
            <Link to='/'><button className='btn btn-success mt-10'>Back To Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;