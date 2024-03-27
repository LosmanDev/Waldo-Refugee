const About = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-slate-500">
          Our Mission
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-justify-center mt-10">
          <p className="p-5 text-center leading-loose font-light sm:text-2xl text-md">
            Waldo Housing Assistance Center Inc was founded to help Refugees and
            Immigrants have access to safe, clean and affordable housing. Waldo
            strives to create a brighter tomorrow by helping families become
            homeowners and increase their financial literacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
