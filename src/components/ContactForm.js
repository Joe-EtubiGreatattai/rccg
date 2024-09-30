import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://rccg-t45u.onrender.com/contact-us",
        formData
      );
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
        Contact Form:
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 bg-gray-100 rounded-md text-sm md:text-base"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 bg-gray-100 rounded-md text-sm md:text-base"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            className="w-full p-3 bg-gray-100 rounded-md text-sm md:text-base"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-700 text-white px-8 py-3 rounded-md hover:bg-indigo-800 transition duration-300 text-sm md:text-base"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {responseMessage && (
            <p className="mt-4 text-sm md:text-base text-gray-700">
              {responseMessage}
            </p>
          )}
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700">
              Address
            </h3>
            <p className="text-xs md:text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=114+Chapel+Lane,+Highwycombe,+HP12+4by"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                114 Chapel Lane, Highwycombe, HP12 4by
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700">
              Contact Details
            </h3>
            <p className="text-xs md:text-sm">
              <a href="tel:+14805550103" className="hover:underline">
                (480) 555-0103
              </a>
            </p>
            <a href="mailto:pastorhouseofmercyhighwycombe@gmail.com" className="underline text-sm md:text-base">
            pastorhouseofmercyhighwycombe@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700">
              Find Us Here
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100090112639546&mibextid=ZbWKwL" className="text-gray-700 hover:text-indigo-700">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rccg_hom?igsh=N3VlMHNiZnR5ZWdj" className="text-gray-700 hover:text-indigo-700">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.855-.06zm0 3.497c-3.693 0-6.694 3.001-6.694 6.694 0 3.694 3.001 6.694 6.694 6.694 3.693 0 6.694-3.001 6.694-6.694 0-3.693-3.001-6.694-6.694-6.694zm0 1.813c2.698 0 4.88 2.183 4.88 4.88s-2.182 4.88-4.88 4.88-4.88-2.183-4.88-4.88 2.183-4.88 4.88-4.88zm7.495-.56c-.689 0-1.248.559-1.248 1.248 0 .69.559 1.248 1.248 1.248.69 0 1.248-.559 1.248-1.248s-.559-1.248-1.248-1.248zm-7.495 1.874a3.006 3.006 0 1 0 0 6.013 3.006 3.006 0 0 0 0-6.013zm0 1.813a1.193 1.193 0 1 1 0 2.387 1.193 1.193 0 0 1 0-2.387z" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
