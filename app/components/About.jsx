const About = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      id="about"
      className="bg-white"
    >
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 sm:text-4xl text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
          Our Mission
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="flex flex-justify-center mt-10"
        >
          <p className="p-5 text-center leading-normal font-extralight sm:text-2xl text-md">
            At Waldo, our mission is to empower refugees by providing support in
            immigration, housing, social services, and financial literacy. We
            foster an inclusive community where refugees find the resources,
            advocacy, and guidance needed to rebuild their lives with dignity.
            Through collaboration, compassion, and innovative solutions, we
            ensure refugees access the opportunities and support necessary to
            thrive. Our financial literacy programs equip refugees with the
            skills for financial stability and independence, laying the
            foundation for a secure future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
