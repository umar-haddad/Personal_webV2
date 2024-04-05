import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../../../public/css/contactContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      // Menampilkan SweetAlert2 error message jika ada kolom yang kosong
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      return; // Berhenti jika formulir tidak valid
    }

    emailjs
      .sendForm(
        "service_caona39",
        "template_1v1e8hc",
        form.current,
        "bNShEXNm2g3bu3Ng8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          // Display SweetAlert2 success message
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
          });

          // Reset form fields
          form.current.reset();
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact col-12" id="contact" data-aos="fade-up">
      <div className="contact-page col-6">
        <h1>📱 Get In Touch</h1>
        <div className="contact-description">
          <p>
            Jangan ragu untuk menghubungi saya, kapan pun Anda membutuhkan
            bantuan atau ingin mendiskusikan apa pun. Saya di sini untuk
            membantu Anda dengan senang hati! 🤗🔥
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-top">
            <div className="form-title">
              <label htmlFor="name">Nama :</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name..."
              />
            </div>
            <div className="form-title">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email..."
              />
            </div>
          </div>
          <div className="form-bottom">
            <label htmlFor="subject" style={{ color: "lightcyan" }}>
              Pesan :
            </label>
            <textarea
              id="subject"
              name="message"
              cols="30"
              rows="10"
              placeholder="Write something ..."
            ></textarea>
          </div>
          <div className="contact-btn">
            <button id="submit-form" type="submit">
              Submit
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;
