import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <section class="page-section" id="contact">
      <div class="container contact-me">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <h4 class=" text-center text-uppercase text-secondary mb-2">
          GOKULPRADAP M
        </h4>
        <h4 class=" text-center text-uppercase text-secondary mb-2">
          +91 7845536140
        </h4>
        <h4 class=" text-center text-secondary mb-4">gokulmari96@gmail.com</h4>
      </div>
      <Footer/>
    </section>
  );
}
export default Contact;
