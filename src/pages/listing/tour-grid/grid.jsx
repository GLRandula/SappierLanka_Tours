import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";
import Whatsapp from "../../../components/whatsapp";

import { packages } from "../../../data/data";

import { FiMapPin, FiChevronLeft, FiChevronRight } from "../../../assets/icons/vander";

export default function TourGrid() {
  const itemsPerPage = 9; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(packages.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = packages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page navigation
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light" />

      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/3.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
              Tour Packages
            </h3>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
      <div className="grid grid-cols-1 pb-8 text-center mb-10">
            <h3 className="mb-2 md:text-3xl text-2xl md:leading-normal text-red-500 leading-normal font-semibold">
            Explore Our Exclusive Tour Packages
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
            Join with unforgettable adventures, from scenic getaways to cultural explorations, we offer seamless itineraries, comfortable stays, and guided experiences tailored to your travel dreams. ✈️✨
            </p>
          </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {currentItems.map((item, index) => {
              return (
                <div
                  className="group rounded-md shadow dark:shadow-gray-700 hover:shadow-sm"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
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

                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">{item.amount}</h5>

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

          {/* Pagination */}
          <div className="grid md:grid-cols-12 grid-cols-1 mt-12">
            <div className="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 ${
                        currentPage === 1
                          ? "cursor-not-allowed opacity-50"
                          : "hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500"
                      }`}
                    >
                      <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1" />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`size-[40px] inline-flex justify-center items-center ${
                          currentPage === page
                            ? "text-white bg-red-500 border border-red-500"
                            : "text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 ${
                        currentPage === totalPages
                          ? "cursor-not-allowed opacity-50"
                          : "hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500"
                      }`}
                    >
                      <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Whatsapp />
      <Footer />
      <Switcher />
    </>
  );
}
