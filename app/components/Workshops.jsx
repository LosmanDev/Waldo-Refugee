import Image from 'next/image';

const Workshops = () => {
  return (
    <section className="bg-white mb-10">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-slate-500">
          WorkShops
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="carousel carousel-center max-w-prose p-4 space-x-4 bg-base-100 rounded-box">
            <div className="carousel-item">
              <Image
                src="/assets/images/h-1.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={700}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/h-2.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/h-3.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/h-4.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-1.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-2.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-3.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-4.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={200}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-5.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-6.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/assets/images/v-7.jpg"
                className="rounded-box"
                alt="workshop class image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
            className="flex items-center mx-auto mb-2"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"
            ></path>
          </svg>
          <h1 className="text-center font-medium text-slate-700 text-2xl mb-1">
            Financial Literacy For Newcomers
          </h1>
          <span className="font-medium text-slate-500 text-xl pb-2">
            Start Dates: 12/10/2022 , 12/17/2022 , 1/7/2023 & 1/14/2023
          </span>
          <h1 className="font-medium text-slate-700 text-2xl mb-1">
            Virtual Home Buyer Class
          </h1>
          <span className="font-medium text-slate-500 text-xl pb-2">
            Start Dates: 5/10/2022 , 5/11/2022 & 5/12/2022
          </span>
          <h1 className="font-medium text-slate-700 text-2xl mb-1">
            First Time Home Buyer Program
          </h1>
          <span className="font-medium text-slate-500 text-xl pb-2">
            Start Dates:11/13/2021 , 11/20/2021 & 12/4/2021
          </span>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
