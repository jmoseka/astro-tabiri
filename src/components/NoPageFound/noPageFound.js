import PageAnimation from '../PageAnimation/pageAnimation';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
  return (
    <div className=" body-gradient-bg text-lightYellow absolute h-screen w-screen ">
      <div className=" z-50">
        <h1 className="  mt-60 mx-auto">No page found. Kindly try again</h1>
        <div className="z-100 py-1 hover:opacity-[0.8] cursor-pointer">
          <Link className=" nav-menu-link uppercase" to="/">
            Daily Horoscope
          </Link>
        </div>
      </div>

      <PageAnimation />
    </div>
  );
};

export default NoPageFound;
