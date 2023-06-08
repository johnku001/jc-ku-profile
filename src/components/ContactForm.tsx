import React from 'react';

export interface ContactFormProps {
  onSubmit: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <div className="w-full mx-auto">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group mb-6">
          <input
            id="name"
            placeholder="Name"
            name="name"
            type="text"
            className="form-control block w-full px-3 py-4 text-base font-normal text-gray-200 bg-transparent bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-natural-400 focus:bg-transparent focus:border-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="form-group mb-8">
          <input
            id="email"
            name="email"
            type="email"
            className="form-control block w-full px-3 py-4 text-base font-normal text-gray-200 bg-transparent bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-natural-400 focus:bg-transparent focus:border-gray-400 focus:outline-none"
            placeholder="Email address"
            required
          />
        </div>
        <div className="form-group mb-8">
          <textarea
            id="message"
            name="message"
            className="form-control block w-full px-3 py-4 text-base font-normal text-gray-200 bg-transparent bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-natural-400 focus:bg-transparent focus:border-gray-400 focus:outline-none"
            rows={3}
            placeholder="Message"
            required
          ></textarea>
        </div>
        {/* <div data-netlify-recaptcha="true"></div> */}
        <button
          type="submit"
          className="w-full px-6 py-6 text-white font-medium text-xs leading-tight uppercase rounded shadow-md ring-gray-400 ring-2 hover:ring-gray-500 hover:shadow-lg focus:ring-grey-800 focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}
