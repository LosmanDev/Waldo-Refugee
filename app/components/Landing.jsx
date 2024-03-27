import Svg from './ui/Svg';
import logo from '/public/assets/images/waldo-clear.png';
import Image from 'next/image';
import { ImagesSliderDemo } from './ui/ImagesSliderDemo';

const Landing = () => {
  return (
    <section className="gradient mt-10">
      <div className="pt-24 text-white">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 sm:text-5xl text-4xl font-bold leading-tight self-center">
              Waldo Housing Assistance Center Inc
            </h1>
            <p className="px-3 leading-normal sm:text-2xl text-xl mb-8">
              A Nonprofit Housing Organization
              <br />
              Based in Boston, MA
            </p>

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Our Mission
            </button>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <ImagesSliderDemo className="animate-fadeIn" />
          </div>
        </div>
      </div>
      <Svg />
    </section>
  );
};

export default Landing;
