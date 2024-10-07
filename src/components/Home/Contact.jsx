import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section
      id="contact"
      className="mt-12 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="max-w-7xl mx-auto bg-cover bg-center bg-no-repeat">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-2">
          CONTACT
        </h2>
        <span className="block h-2 w-24 bg-orange mx-auto rounded-full my-6"></span>
        <p className="text-xl text-center mt-4 mb-12 font-roboto text-black">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/xjkvbeaw"
          method="POST"
          className="rounded px-8 pt-6 pb-8 mb-4 bg-opacity-80 backdrop-blur-md"
        >
          <div className="mb-4">
            <label
              className="block text-black text-xl font-bold mb-2 font-montserrat"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none rounded w-full h-20 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-xl font-bold mb-2 font-montserrat"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none rounded w-full h-20 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-xl font-bold mb-2 font-montserrat"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter Your Message"
              rows="12"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-orange text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
        {status === "SUCCESS" && (
          <p className="text-green text-center">Thanks for your message!</p>
        )}
        {status === "ERROR" && (
          <p className="text-orange text-center">Oops! There was an error.</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
