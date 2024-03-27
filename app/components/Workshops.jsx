import Image from 'next/image';
const Workshops = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-slate-500">
          WorkShops
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="carousel carousel-center max-w-fit p-4 space-x-4 bg-base-100 rounded-box">
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
      </div>
    </section>
  );
};

export default Workshops;
