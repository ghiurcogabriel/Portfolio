import React from 'react'
import { FaMailBulk, FaPhoneSquareAlt, FaRegAddressCard } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div className="col-span-9 lg:col-span-4">
            <div className="contact-information">
              <h4>Contact Informations</h4>
              <p>
                For further information, please contact me using the following contact information or by using the contact form.
              </p>
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
  )
}

export default ContactInfo