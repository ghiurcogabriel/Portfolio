import React from "react";
import { FaMailBulk, FaPhoneSquareAlt, FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">Contact Me</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-9 gap-7">
          <div className="col-span-9 lg:col-span-4">
            <div className="contact-information">
              <h4>Contact Informations</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto odit tempora quo quis maiores quos sit voluptas pariatur saepe praesentium.</p>
              <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"></span>
              <div className="contact-blocks mt-5 space-y-5">
                <div className="contact-block card flex p-4 md:p-5">
                  <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                    <FaPhoneSquareAlt />
                  </span>
                  <div className="content">
                    <h5 className="mb-2">Phone Number</h5>
                    <p className="mb-0">(+40) 754893393</p>
                  </div>
                </div>
                <div className="contact-block card flex p-4 md:p-5">
                  <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                    <FaMailBulk />
                  </span>
                  <div className="content">
                    <h5 className="mb-2">Email Address</h5>
                    <p className="mb-0">ghiurcogabriel@gmail.com</p>
                  </div>
                </div>
                <div className="contact-block card flex p-4 md:p-5">
                  <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                    <FaRegAddressCard />
                  </span>
                  <div className="content">
                    <h5 className="mb-2">Addresss</h5>
                    <p className="mb-0">Cluj-Napoca, Transylania, Romania</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 lg:col-span-4">
            <form action="" className="card -mt-1.5 space-y-4 p-4 md:p-5">
              <div className="inputbox">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name.." />
              </div>
              <div className="inputbox">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Enter your email.." />
              </div>
              <div className="inputbox">
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Enter subject.." />
              </div>
              <div className="inputbox">
                <label for="message">Mesage</label>
                <textarea type="text" name="message" id="message" placeholder="Enter your message.." cols={1} rows={5}/>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>

      </div>
      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </div>
  );
};

export default Contact;
