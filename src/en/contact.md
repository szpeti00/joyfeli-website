---
layout: layouts/base.njk
title: "JoyFeli - Contact"
locale: "en"
pageKey: "contact"
---

<!-- Hero Section -->
<section class="hero-section overflow-hidden">
  <div class="container position-relative">
    <div class="row">
      <div class="col-12 position-relative m-0 p-0">
        <!-- Background image container -->
        <div class="bg-image-container animate-slide-in-right">
          <picture class="bg-image">
            <!-- Mobile: cut-off version -->
            <source media="(max-width: 575px)" srcset="/img/soca.webp" type="image/webp">
            <source media="(max-width: 575px)" srcset="/img/soca.jpg" type="image/jpeg">
            <!-- Desktop: full image -->
            <source srcset="/img/Cezsoca.webp" type="image/webp">
            <source srcset="/img/Cezsoca.jpg" type="image/jpeg">
            <img class="bg-image-img" src="/img/Cezsoca.jpg" alt="Personal Training Background" width="1320" height="665" loading="eager" fetchpriority="high">
          </picture>
        </div>
        <!-- Text overlay -->
        <div class="text-overlay contact-text animate-slide-in-left bg-white bg-opacity-75 p-4 p-xxl-5">
          <h1 class="separator text-uppercase">
            <span class="d-block mb-2">
              <span><strong>Contact</strong></span>
            </span>
          </h1>
            <h4>
              <span class="d-block mb-3 fst-italic">
                Send me a message
              </span>
            </h4>
          <p>
            Have any questions or want to discuss something? Feel free to reach out via email, WhatsApp, or the contact form!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Hero Section -->
<div class="sun-divider">
  <span class="sun"></span>
</div>
<section class="contact-section py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h4 class="mb-5 separator">Get in touch</h4>
        <p>
          Do you have any questions or want to discuss what works best for you? Not sure about something? Don’t hesitate to contact me, and together we’ll find the right solution for you.
        </p>
        <p>
          From <strong>November to April</strong>, I'm based in <strong>Wageningen</strong> and available for in-person sessions at my location or any other preferred venue. Online sessions are also an option during this time. In the summer months, as I’m not in the Netherlands, I’m only available for online sessions, whether starting new ones or continuing existing ones.
        </p>
        <p>
          You can contact me via email, a WhatsApp chat message, or by filling out the form below. I look forward to helping you!
        </p>
      </div>
      <div class="col-lg-6 my-5 ps-lg-5">
        <form 
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="contact-form" class="needs-validation"
          novalidate
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div class="visually-hidden">
            <label>
              Don't fill this out if you're human:<input name="bot-field">
            </label>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required>
            <div class="invalid-feedback">Please enter your name</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Your email" required>
            <div class="invalid-feedback">Please enter your email</div>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Your phone number">
            <div class="invalid-feedback">Please enter your phone number</div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" rows="4" placeholder="Your message" required></textarea>
            <div class="invalid-feedback">Please enter a message</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn custom-btn" aria-label="Send">Send</button>
          </div>
          <div id="form-message" class="text-center mt-3 p-3 rounded"></div>
        </form>
      </div>
    </div>
  </div>
</section>