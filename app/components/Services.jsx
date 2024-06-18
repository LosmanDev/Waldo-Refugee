import Svg2 from './ui/Svg2';
import Svg from './ui/Svg';
import Image from 'next/image';

const Services = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      id="services"
      className="gradient"
    >
      <Svg2 />
      <div className="container max-w-5xl mx-auto m-8 ">
        <h2 className="w-full my-2 sm:text-4xl text-3xl font-bold leading-tight text-center text-white">
          Our Services
        </h2>

        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="container px-5 py-24 mx-auto"
        >
          <div className="flex justify-center items-center flex-wrap -m-4 w-3/4 sm:w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/low-income.png"
                    alt="low income"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Low Income Housing Search
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/rent-assistance.png"
                    alt="rent assistance"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Rent Assistance Referral
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/advocacy.png"
                    alt="Housing Advocacy"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Housing Advocacy
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/eviction-prevention.png"
                    alt="eviction prevention"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Eviction Prevention
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/court.png"
                    alt="court assistance"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Court Assistance
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/home-repair.png"
                    alt="home repair"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Home Repair Referral
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/home-buyer.png"
                    alt="Home Buyer Assistance"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    First Time Home Buyer Assistance
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/home-ownership.png"
                    alt="Home ownership assistance"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Assistance with Home ownership
                  </h1>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 bg-custom-cream border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 h-24 w-full relative">
                  <Image
                    className="pt-5"
                    src="/assets/images/immigration.png"
                    alt="immigration referral"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-center text-custom-green mb-3">
                    Immigration Referral
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="flex items-center justify-center item mt-10 mb-5"
        >
          <h1 className="text-white text-center text-2xl font-medium">
            Our Staff are Fluent in
          </h1>
          <svg
            className="text-white h-10 w-10 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24.076 6.187c-10.004 0-18.113 7.532-18.113 16.822c0 5.336 2.683 10.082 6.855 13.164v4.774a.68.68 0 0 0 1.004.598L18.5 39.01c1.758.528 3.629.82 5.576.82c10.004 0 18.114-7.531 18.114-16.822S34.08 6.187 24.075 6.187"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.336 23.178c2.689.103 6.982 1.766 7.543 4.345c.41 1.89-5.047 3.926-4.795 7.991c-2.663-1.318-3-3.449-3.056-4.598s-2.13-2.692-1.935-4.094s1.178-2.972-.672-4.177c1.29.533 1.963.496 2.915.533"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.42 22.645c-1.471-.673-1.401-1.402-.967-2.089s1.64.28 2.426.294s2.671-2.817 3.782-3.378s2.19-1.08 1.643-2.229s-2.383-.757-3.14-1.234s-.968-1.99-1.332-2.102s-3.677 2.78-4.963 5.369c-1.051 2.117-2.145 3.687-1.135 4.794s1.864-.266 3.687.575Zm21.8-.841s2.944 3.266 3.434 1.36c1.6-6.22-5.397-11.23-6.252-11.145s-2.874.672-3.07 1.387s1.472 1.192 1.514 1.739s-1.935.897-3.028 1.304s-1.276 1.682-1.01 2.144s1.473-.574 2.356-.616s1.948.518 2.803.546s.954-1.009 1.85-.7s.463 1.794-1.008 2.214s-2.117-.553-3.52-.532c-1.815.027-3.924 1.009-3.77 3.406s4.135 1.402 4.612 2.566s.322 4.64 1.164 5.86s2.621 1.331 3.392-.59s-.196-2.915.477-3.869s3.133-2.253 1.829-3.515M18.345 12.465c.48-.686 1.277-1.515 2.016-1.515s1.134.375 1.704.375s1.921-.29 3.167-.29s1.499.738.401 1.683s-2.513 1.689-3.297 1.689s-1.268-3.34-1.975-3.457"
            ></path>
          </svg>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="flex justify-center items-center"
        >
          <ul className="flex flex-wrap text-center justify-center items-center">
            <li className="text-center text-xl px-4 font-semibold text-slate-700 rounded-lg">
              English
            </li>
            <li className="text-center text-xl px-4 font-semibold text-white rounded-lg">
              Somali
            </li>
            <li className="text-center text-xl px-4 font-semibold text-slate-700 rounded-lg">
              Arabic
            </li>
            <li className="text-center text-xl px-4 font-semibold text-white rounded-lg">
              Swahili
            </li>
            <li className="text-center text-xl px-4 font-semibold text-slate-700 rounded-lg">
              French
            </li>
            <li className="text-center text-xl px-4 font-semibold text-white rounded-lg">
              Maay Maay
            </li>
            <li className="text-center text-xl px-4 font-semibold text-slate-700 rounded-lg">
              Darija
            </li>
            <li className="text-center text-xl px-4 font-semibold text-white rounded-lg">
              Pashto
            </li>
            <li className="text-center text-xl px-4 font-semibold text-slate-700 rounded-lg">
              Dari
            </li>
          </ul>
        </div>
      </div>
      <Svg />
    </section>
  );
};

export default Services;
