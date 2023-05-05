import React, { useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ContactInfo from "../common/ContactInfo";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [emailFailed, setEmailFailed] = useState("");

  const [generalError, setGeneralError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const emailReg = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setErrorName("Name must be greater than 5 characters");
    } else if (email.length < 10 && email !== emailReg) {
      setErrorEmail("Email is no valid");
    } else if (subject.length < 10) {
      setErrorSubject("Subject must be longer than 10 chars");
    } else if (
      name.length > 100 ||
      subject.length > 300 ||
      message.length > 2000
    ) {
      setGeneralError("Text is too long");
    } else if (message.length < 10) {
      setErrorMessage("Please add a message longer than 10 chars");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            setEmailFailed(error.text);
          }
        );
        
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
      const time = setTimeout(() => {
        setConfirmMessage("The Email has been sent successfully");
      }, 3000);
      return () => {clearTimeout(time)}
  };

  return (
    <div id="contact" className="container mx-auto pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <SectionTitle topText="Contact Me" behindText="Contact" />

        <div className="grid grid-cols-9 gap-7">
          <ContactInfo />

          <div className="col-span-9 lg:col-span-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="card -mt-1.5 space-y-4 p-4 md:p-5"
            >
              <div className="inputbox">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name.."
                />
                {name.length < 5 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {errorName}
                  </span>
                ) : (
                  ""
                )}
                {name.length > 100 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {generalError}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email.."
                />
                {email.length < 10 && email !== emailReg ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {errorEmail}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="inputbox">
                <label htmlFor="subject">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter subject.."
                />
                {subject.length < 10 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {errorSubject}
                  </span>
                ) : (
                  ""
                )}
                {subject.length > 300 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {generalError}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="inputbox">
                <label htmlFor="message">Mesage</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter your message.."
                  cols={1}
                  rows={5}
                />
                {message.length < 10 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {errorMessage}
                  </span>
                ) : (
                  ""
                )}
                {message.length > 2000 ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    {generalError}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="btn">
                Send
              </button>
              <p style={{ color: "lightgreen" }}>{confirmMessage}</p>
              <p style={{ color: "red" }}>{emailFailed}</p>
            </form>
          </div>
        </div>
      </div>
      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </div>
  );
};

export default Contact;
