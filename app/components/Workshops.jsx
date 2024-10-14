'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

import { WaldoSliderDemo } from './ui/WaldoSliderDemo';

const Workshops = () => {
  useEffect(() => {
    // Parse Facebook SDK after it's loaded
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.FB.init({
            appId: '1059198042044580',
            xfbml: true,
            version: 'v21.0',
          });
        }}
      />
      <section
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        id="workshop"
        className="bg-white mb-10"
      >
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 sm:text-4xl text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
            WorkShops
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-id="super-duper"
            className="w-full lg:w-5/6 px-4 mb-5 mx-auto"
          >
            <WaldoSliderDemo />
          </div>
          <div className="p-6 md:p-8">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                Biotech training Bootcamp
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl mb-5">
                Start Dates: 6/19/2024 - 6/25/2024 & more to come....
              </span>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                Financial Literacy For Afghans
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl mb-5">
                Start Dates: 5/3/2024 & 5/4/2024
              </span>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                Financial Literacy For Somalis
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl mb-5">
                Start Dates: 4/26/2024 & 4/27/2024
              </span>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                Financial Literacy For Newcomers
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl mb-5">
                Start Dates: 12/10/2022, 12/17/2022, 1/7/2023 & 1/14/2023
              </span>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                Virtual Home Buyer Class
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl mb-5">
                Start Dates: 5/10/2022, 5/11/2022 & 5/12/2022
              </span>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-id="super-duper"
              className="text-center mb-6 md:mb-8"
            >
              <h1 className="font-medium text-slate-700 text-xl md:text-3xl mb-1">
                First Time Home Buyer Program
              </h1>
              <span className="font-medium text-slate-500 text-lg md:text-xl pb-2">
                Start Dates: 11/13/2021, 11/20/2021 & 12/4/2021
              </span>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-id="super-duper"
            data-width="100%"
            className="grid grid-cols-1 gap-4 px-3 mt-10 mb-10"
          >
            <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
              Join our Facebook page for updates and more..
            </h2>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex items-center justify-center mb-20 px-5"
          >
            {/* <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWaldorefugee%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1059198042044580"
            width="340"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            frameborder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}

            <div
              className="fb-page"
              data-href="https://www.facebook.com/Waldorefugee/"
              data-tabs="timeline"
              data-width="450"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/Waldorefugee/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/Waldorefugee/">
                  Waldo Immigration and Refugee Services Inc
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshops;
