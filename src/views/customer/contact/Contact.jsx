import React, { useState } from "react";
import "./contact.scss";
import { Link, useNavigate } from "react-router-dom";
import contactService from "../../../services/contact.service";
import { useSelector } from "react-redux";
const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name,
      phone,
      email,
      content,
      status: 0,
      userId: userRD?.user?.id,
    };
    console.log(contact);
    contactService
      .create(contact)
      .then((reponse) => {
        navigate("./");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact">
      <div class="container">
        <form id="contact">
          <h3 className="text-center">
            Mọi thắc mắc xin liên hệ với chúng tôi
          </h3>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              //   tabindex="1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //   tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              //   tabindex="3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              //   tabindex="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </fieldset>
          <p class="copyright">
            Designed by:{" "}
            <Link to="https://lnhuyvu.github.io/Police_Light/">Vu Store</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
