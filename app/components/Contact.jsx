import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send('service_x14hbna', 'template_f6jxf4c', data, 'Pu9T4ZADTt9dCVd-2')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    }, 2100);
  };

  return (
    <section
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      id="contact"
      className="bg-white mt-32"
    >
      <div className="container max-w-5xl mx-auto m-8 px-10">
        <h2 className="w-full my-2 sm:text-5xl text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text mb-3">
          Lets Get In Touch
        </h2>
        <h1 className="text-center text-slate-600 font-semibold text-md pb-3">
          Phone:{' '}
          <span className="text-center text-slate-600 font-medium pb-5">
            781-408-8939
          </span>
        </h1>

        {submitted ? (
          <div className="flex flex-col sm:flex-row items-center justify-center animate-fadeIn">
            <iframe src="https://lottie.host/embed/60773803-47e5-49ed-bb9d-fbd09e3bf4bf/O4Zgyx2ajN.json"></iframe>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              id="contact"
              className="flex flex-col items-center justify-center animate-fadeIn textFont"
            >
              <textarea
                name="message"
                id="message"
                {...register('Message', {
                  required: 'Message too short',
                  pattern: {
                    value: /^(\S+\s+){2}\S+.*$/,
                    message: 'Message too short',
                  },
                })}
                placeholder="Message"
                className={
                  errors.Message?.message
                    ? 'textarea textarea-error textarea-lg w-full sm:max-w-lg max-w-xs sm:mx-10'
                    : 'textarea textarea-success textarea-lg w-full sm:max-w-lg max-w-xs sm:mx-10'
                }
              />

              <button
                type="submit"
                className={
                  errors.Message?.message
                    ? 'btn btn-disabled text-accent capitalize mt-4 w-full sm:max-w-lg max-w-xs sm:mx-10'
                    : 'btn bg-gradient-to-r from-custom-green to-custom-cream text-base-100 capitalize mt-4 w-full sm:max-w-lg max-w-xs sm:mx-10'
                }
              >
                Let&apos;s Connect
              </button>
              <p className="text-error text-center pt-3">
                {errors.Message?.message}
              </p>
              <p className="text-error text-center pt-3">
                {errors.Email?.email}
              </p>
            </div>
          </form>
        )}
        <div className="grid grid-cols-1 text-center justify-center mt-10">
          <h1 className="text-slate-600 font-semibold sm:text-2xl text-xl pb-3">
            Office Location
          </h1>
          <span className="text-slate-600 font-medium md:text-lg text-base pb-3">
            <span className="text-custom-green">257 </span>
            Roxbury Street, Roxbury MA{' '}
            <span className="text-custom-green">02119</span>
          </span>
          <span className="pt-5 font-medium md:text-sm text-xs">
            Copyright <span className="text-custom-green">&copy; </span>
            {new Date().getFullYear()} - Waldo{' '}
            <span className="text-custom-green">Immigration</span> And
            <span className="text-custom-green"> Refugee</span> Services Inc
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
