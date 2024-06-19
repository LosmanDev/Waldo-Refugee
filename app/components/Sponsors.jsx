import Image from 'next/image';
import Link from 'next/link';

const Sponsors = () => {
  return (
    <section className="mb-32">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="pb-5 text-center"
      >
        <h1 className="mt-10 sm:text-4xl text-3xl font-medium text-slate-500">
          Our Sponsor
        </h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="flex justify-center items-center"
      >
        <Link
          href="https://www.mass.gov/orgs/office-for-refugees-and-immigrants"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Image src="/assets/images/ori.png" width={250} height={250} />
          <p className="text-center font-light mt-2">
            Massachusets Office for Refugees and Immigrants
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Sponsors;
