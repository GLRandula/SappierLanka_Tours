import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { packages } from "../data/data";

import emailjs from "emailjs-com";

import {FiUser, FiUsers} from "../assets/icons/vander"

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

export default function DetailSidebar(){
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comments: "",
      });

      const [messageStatus, setMessageStatus] = useState("");

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // EmailJS parameters
        const serviceID = "service_3jfxhfi"; // Replace with your EmailJS service ID
        const templateID = "template_nc4f0gb"; // Replace with your EmailJS template ID
        const userID = "tM8Ss0PfnKAfe2aE6"; // Replace with your EmailJS public key
    
        emailjs
          .send(serviceID, templateID, formData, userID)
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setMessageStatus("Message sent successfully!");
            },
            (error) => {
              console.error("FAILED...", error);
              setMessageStatus("Failed to send the message. Please try again.");
            }
          );
    
        // Reset the form
        setFormData({
          name: "",
          email: "",
          comments: "",
        });
      };

    const { id } = useParams(); // Fetch the ID from the URL
    const tourPackage = packages.find((pkg) => pkg.id === parseInt(id)); // Find the package by ID

    if (!tourPackage) {
    return <p>Location not found</p>; // If no package is found
    }

    const { place, title, description, sub_places, image } = tourPackage;

    // Generate a Google Maps Embed Link for the place
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    place
    )}`;

    return (
      <div className="lg:col-span-4 md:col-span-5">
        <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
          <div className="mt-6">
            <h5 className="text-lg font-semibold">Leave A Comment:</h5>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-12 mb-5">
                  <div className="text-left">
                    <label htmlFor="name" className="font-semibold">
                      Your Name:
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Name :"
                      required
                    />
                  </div>
                </div>

                <div className="lg:col-span-12 mb-5">
                  <div className="text-left">
                    <label htmlFor="email" className="font-semibold">
                      Your Email:
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Email :"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="mb-5">
                  <div className="text-left">
                    <label htmlFor="comments" className="font-semibold">
                      Your Comment:
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28"
                      placeholder="Message :"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                id="submit"
                name="send"
                className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
              >
                Send Message
              </button>

              {messageStatus && (
                <p className="mt-4 text-center text-green-600">
                  {messageStatus}
                </p>
              )}
            </form>
          </div>
          <div className="mt-16">
            {/* <h5 className="text-lg font-medium">Tour Map</h5>

                    <div className="mt-3">
                        <iframe src={googleMapsUrl} style={{border:'0'}} title="travosy" className="w-full h-[300px] rounded-full"></iframe>
                    </div> */}
          </div>
        </div>
      </div>
    );
}

