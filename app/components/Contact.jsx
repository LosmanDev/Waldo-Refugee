const Contact = () => {
  return (
    <section
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      id="contact"
      className="bg-white mt-40"
    >
      <div className="container max-w-5xl mx-auto m-8 px-10">
        <h2 className="w-full my-2 sm:text-5xl text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
          Lets Get In Touch
        </h2>
        <svg
          className="flex justify-center mx-auto "
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 20 20"
        >
          <path
            fill="#56a399"
            d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"
          ></path>
        </svg>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="grid grid-cols-1 text-center justify-center mt-10">
          <h1 className="text-slate-600 font-semibold sm:text-2xl text-xl pb-3">
            Founder/Executive Director
          </h1>
          <a href="mailto:Maka@WaldoHousing.org" className="pb-5">
            <span className="text-slate-600 font-medium sm:text-xl text-lg pb-5">
              Maka
              <span className="text-custom-green">@</span>
              WaldoHousing.org
            </span>
          </a>
          <h1 className="text-slate-600 font-semibold sm:text-2xl text-xl pb-3">
            Phone
          </h1>
          <span className="text-slate-600 font-medium sm:text-xl text-lg pb-5">
            781-408-8939
          </span>
          <h1 className="text-slate-600 font-semibold sm:text-2xl text-xl pb-3">
            Office Location
          </h1>
          <span className="text-slate-600 font-medium sm:text-xl text-lg pb-3">
            <span className="text-custom-green">1417 </span>
            Tremont Street, Boston MA{' '}
            <span className="text-custom-green">02120</span>
          </span>
          <span className="pt-5 font-medium text-lg ">
            Copyright <span className="text-custom-green">&copy; </span>
            {new Date().getFullYear()} - Waldo Housing
            <span className="text-custom-green"> Assistance</span> Center Inc
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
