import React, { useState } from 'react'
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

import Blogs from '../components/blogs'
import Client from '../components/client'
import About from '../components/about'
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import Whatsapp from '../components/whatsapp';

import { teamData,placeImage } from "../data/data";

// import {FiFacebook, FiInstagram, FiLinkedin} from "../assets/icons/vander"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css";

import {
    MdOutlineCardTravel,
    MdVerifiedUser,
    PiVanFill,
    ImHappy2,
    FiActivity,
    RiBardFill,
    FiInstagram
  } from "../assets/icons/vander";

export default function Aboutus(){
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + placeImage.length - 1) % placeImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeImage.length);
    };
    let currentImage = placeImage[currentImageIndex];

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const settings = {  
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 12
            },

            992: {
                items: 8
            },

            767: {
                items: 6
            },

            575: {
                items: 5
            },

            420: {
                items: 3
            },

            320: {
                items: 2
            },
        },
      };
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/1_.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">SappierLanka Tours</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">SappierLanka Tours</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                </ul>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
        <div className="container lg:mt-16 mb-24">
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
                <About/>
            {/* <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.map((item,index)=>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={item.image} className="" alt=""/>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiFacebook className="size-4"></FiFacebook></Link></li>
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiInstagram className="size-4"></FiInstagram></Link></li>
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiLinkedin className="size-4"></FiLinkedin></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link to="" className="text-lg font-semibold hover:text-red-500 duration-500">{item.name}</Link>
                                        <p className="text-slate-400">{item.possition}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}

            <Client/>

            <Blogs/>
        </section>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {placeImage.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <Link to="" onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                        <img src={item} className="sm:size-40 object-cover" alt=""/>
                                    </Link>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={placeImage[(currentImageIndex + placeImage.length - 1) % placeImage.length]}
                        nextSrc={placeImage[(currentImageIndex + 1) % placeImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center">
                    <Link to="#" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiInstagram className="size-4"></FiInstagram></Link>
                </div>
            </div>
        </div>
        <Whatsapp />
        <Footer/>
        <Switcher/>
        </>
    )
}