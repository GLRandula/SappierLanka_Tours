import React, { useState } from "react";
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import TopDestinationOne from "../../components/top-destination-one";
import About from "../../components/about";
import Client from "../../components/client";
import Blogs from "../../components/blogs";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";
import Whatsapp from "../../components/whatsapp";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { packages } from "../../data/data";

import {
  MdOutlineCardTravel,
  MdVerifiedUser,
  PiVanFill,
  ImHappy2,
  FiActivity,
  RiBardFill,
  FiMapPin,
} from "../../assets/icons/vander";

export default function Index() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Tagline />
      <Navbar
        navclass="defaultscroll is-sticky tagline-height"
        navlight={true}
        manuclass="justify-end nav-light"
      />
      <section className="relative md:pt-72 md:pb-32 py-30 table w-full items-center bg-[url('../../assets/images/bg/2.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
              <h5 className="text-3xl font-dancing text-white">
                Wander Beyond the Horizon
              </h5>
              <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                Explore the Nature <br /> With Us
              </h4>
              <p className="text-white/70 text-xl max-w-xl">
                Unforgettable travel experiences with tailored adventures,
                seamless itineraries and destinations!
              </p>
            </div>

            <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
              <Link
                to="https://youtu.be/rHaykSq0SbU"
                onClick={() => setOpen(true)}
                className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-red-500 text-red-500 hover:text-white duration-500 ease-in-out mx-auto"
              >
                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
              </Link>
            </div>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="S_CGed6E610"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </section>

      {/* <div className="container relative -mt-16 z-1">
            <Form/>
        </div> */}

      <section className="relative md:py-24 py-16 overflow-hidden">
        <div className="container lg:mt-6 mb-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-2 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Our Services
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="text-center px-6 mb-10">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <MdOutlineCardTravel></MdOutlineCardTravel>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Guided Tours</h5>
                <p className="text-slate-400 mt-3">
                  Expert-led journeys uncovering hidden gems and cultural
                  wonders
                </p>

                {/* <div className="mt-5">
                                            <Link to="tel:+152534-468-854" className="text-red-500 font-medium">+152 534-468-854</Link>
                                        </div> */}
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <PiVanFill></PiVanFill>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Transportation</h5>
                <p className="text-slate-400 mt-3">
                  Reliable and comfortable travel solutions for every step of
                  your journey
                </p>

                {/* <div className="mt-5">
                                            <Link to="mailto:contact@example.com" className="text-red-500 font-medium">contact@example.com</Link>
                                        </div> */}
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <MdVerifiedUser></MdVerifiedUser>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Safety and Support</h5>
                <p className="text-slate-400 mt-3">
                  Your well-being is our priority with 24/7 assistance
                </p>

                {/* <div className="mt-5">
                                            <Link to="#" onClick={()=>setModal(!modal)} className="video-play-icon read-more lightbox text-red-500 font-medium">View on Google map</Link>
                                        </div> */}
              </div>
            </div>
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <ImHappy2></ImHappy2>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Entertainment</h5>
                <p className="text-slate-400 mt-3">
                  Enjoy curated activities and events for memorable leisure
                  moments
                </p>

                {/* <div className="mt-5">
                                            <Link to="tel:+152534-468-854" className="text-red-500 font-medium">+152 534-468-854</Link>
                                        </div> */}
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiActivity></FiActivity>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Outdoor Activities</h5>
                <p className="text-slate-400 mt-3">
                  Thrilling adventures amidst nature’s beauty for all
                  enthusiasts
                </p>

                {/* <div className="mt-5">
                                            <Link to="mailto:contact@example.com" className="text-red-500 font-medium">contact@example.com</Link>
                                        </div> */}
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <RiBardFill></RiBardFill>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Local Experiences</h5>
                <p className="text-slate-400 mt-3">
                  Authentic encounters with traditions, cuisine, and local life
                </p>

                {/* <div className="mt-5">
                                            <Link to="#" onClick={()=>setModal(!modal)} className="video-play-icon read-more lightbox text-red-500 font-medium">View on Google map</Link>
                                        </div> */}
              </div>
            </div>
          </div>
        </div>

        <TopDestinationOne />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-2 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Tour Packages
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {packages.slice(0, 6).map((item, index) => {
              return (
                <div
                  className="group rounded-md shadow dark:shadow-gray-700 hover:shadow-sm"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-t-lg shadow dark:shadow-gray-900 mx-3 mt-3">
                    <img
                      src={item.image}
                      className="scale-125 group-hover:scale-100 duration-500"
                      alt=""
                    />
                    {item.tagText && (
                      <div className="absolute top-0 start-0 p-4">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                          {item.tagText}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-0 end-0 p-4">
                      <Link
                        to="#"
                        className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
                      >
                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="flex items-center text-slate-400 font-medium">
                        <FiMapPin className="text-red-500 me-1" /> {item.place}
                      </p>
                      <p className="flex items-center text-red-500 text-xl font-semibold mr-2">
                        {item.price}
                      </p>
                    </div>
                    <Link
                      to={`/tour-detail-one/${item.id}`}
                      className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>

                    {/* <div className="flex items-center mt-2">
                                        <span className="text-slate-400">Rating:</span>
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                            <li className="inline text-black dark:text-white text-sm">5.0(30)</li>
                                        </ul>
                                    </div> */}

                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      {/* <h5 className="text-lg font-medium text-red-500">$ 28 / Day</h5> */}

                      <Link
                        to={`/tour-detail-one/${item.id}`}
                        className="text-green-700 hover:text-red-500"
                      >
                        Explore More <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/grid"
              className="text-blue-600 hover:text-red-500 inline-block"
            >
              See More Tours{" "}
              <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>

        <About />

        <Client />

        <Blogs />
      </section>
      {/* <div
        className="fixed bottom-5 left-5 text-transparent items-end"
        style={{ zIndex: 1000 }}
      >
        <div className="size-16 bg-green-500/5 text-green-500 rounded-xl text-4xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
          <IoLogoWhatsapp />
        </div>
      </div> */}
        <Whatsapp />
      <Footer />
      <Switcher />
    </>
  );
}
