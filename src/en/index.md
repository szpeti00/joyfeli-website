---
layout: layouts/base.njk
title: "JoyFeli - Lifestyle Coaching & Personal Training"
locale: "en"
pageKey: "home"
navbarClass: "fixed-top"
---

<!-- Home Section  -->
<header class="vh-100 d-flex align-items-center justify-content-center text-center hero-home pt-5" style="background: url('/img/Feli_predel.JPG') no-repeat center center/cover;">
  <div class="container">
    <blockquote class="blockquote">
      <p class="fs-2 fst-italic">"You cannot step into the same river twice,<br> for other waters are ever flowing on to you."</p>
      <q class="blockquote-footer text-white">Heraclitus</q>
    </blockquote>
  </div>
</header>
<!-- End Home Section -->
<div class="sun-divider white-bg">
  <span class="sun"></span>
</div>
<!-- Welcome Section -->
<section id="welcome" class="white-bg overflow-hidden">
  <div class="container position-relative">
    <div class="row">
      <div class="col-12 position-relative m-0 p-0">
        <!-- Background image container -->
        <div class="bg-image welcome-img animate-slide-in-left" data-bg="/img/Feli_mountain.jpg" data-bgPhone="/img/Feli_mountain_cut.jpg">
        </div>
        <!-- Text overlay -->
        <div class="text-overlay welcome-text animate-slide-in-right-welcome bg-white bg-opacity-75 p-4 p-xxl-5">
          <h1 class="separator-welcome text-uppercase">
            <span class="d-block mb-2">
              <span><strong>Train your mind</strong></span>
            </span>
            <span class="d-block text-center mb-2">
              <strong>Train your body</strong>
            </span>
          </h1>
          <h4 class="mb-4 fst-italic">Lifestyle Coach and Personal Trainer in Wageningen</h4>
          <p>
            I work with people who are ready to change their lives but don’t know exactly where to start. Whether you want to <strong>get fitter</strong>, <strong>build healthier habits</strong>, or find more <strong>inner balance</strong>, I guide you with personal coaching and tailored training. Together, we uncover the deeper causes of your behavior and create <strong>lasting change</strong> for both body and mind.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Welcome Section -->
<div class="sun-divider white-bg">
  <span class="sun"></span>
</div>
<!-- Coaching Services Section -->
<section class="py-5 gray-bg" id="services">
  <div class="container">
    <h2 class="mb-5 text-center separator-center">Coaching Services</h2>
    <div class="row">
      <!-- Lifestyle Coaching Card -->
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <img class="card-img-top w-50 mx-auto mt-4" src="/img/lifestylecoaching_icon.png" alt="Lifestyle Coaching Icon">
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">Lifestyle Coaching</h5>
            <h6 class="mb-2 text-center separator-center">
              The power of behavior
            </h6>
            <p class="card-text">
              Create healthy habits and discover the power of your behavior and inner motivation, so you can lead a sustainable, balanced life.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href={{ links.lifestyleCoaching[locale] }} class="btn custom-btn fs-5">More</a>
          </div>
        </div>
      </div>
      <!-- Personal Training Card -->
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <img class="card-img-top w-50 mx-auto mt-4" src="/img/personaltraining_icon.png" alt="Personal Training Icon">
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">Personal Training</h5>
            <h6 class="mb-2 text-center separator-center">
              Healthy body, strong mind
            </h6>
            <p class="card-text">
              Strengthen both your physical health and mental well-being with expert, personal guidance.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href="{{ links.personalTraining[locale] }}" class="btn custom-btn fs-5">More</a>
          </div>
        </div>
      </div>
      <!-- For Her Card -->
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <img class="card-img-top w-50 mx-auto mt-4" src="/img/forher_icon.png" alt="For Her Icon">
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">For Her</h5>
            <h6 class="mb-2 text-center separator-center">
              Safe, strong, and feminine
            </h6>
            <p class="card-text">
              Rediscover your inner strength and balance in a safe setting, specially for women who want to connect with their power and self-confidence.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href={{ links.forHer[locale] }} class="btn custom-btn fs-5">More</a>
          </div>
        </div>
      </div>
    </div><!-- End Row -->
  </div>
</section>
<!-- End Coaching Services Section -->

<div class="sun-divider white-bg">
  <span class="sun"></span>
</div>

<!-- About Me Section -->
<section class="py-5 white-bg" id="about">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="mb-5 separator">About Me</h2>
        <p>
          Hi, I'm Feli Aarsman.
          During my Ecology studies in Wageningen, I fell in love with the city and its nature. I discovered the strong interaction between people and their environment—our well-being is shaped by <strong>biological, psychological</strong>, and <strong>social factors</strong>.
        </p>
        <p>
          My passion for nature grew into a fascination with thinking, communication, and behavior, especially in relation to lifestyle and movement. This led me to my role as a coach, where I help people become <strong>physically and mentally stronger</strong>.
        </p>
        <p>
          With <strong>eight years of experience</strong> as a <strong>certified instructor</strong>, I’ve learned how positive energy can help us create a stronger, happier world together. Being healthy, strong, and resilient is essential to that journey.
        </p>
        <div class="text-center mt-3">
          <a href={{ links.about[locale] }} class="btn custom-btn fs-5">More</a>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <img class="img-fluid profile-img mx-lg-5 mt-3" src="/img/feli.jpg" alt="Feli Aarsman profile picture" loading="lazy">
      </div>
    </div>
  </div>
</section>
<!-- End About Me Section -->

<div class="sun-divider white-bg">
  <span class="sun"></span>
</div>

<!-- Reviews Section -->
<section class="py-5 gray-bg" id="reviews">
  <div class="container">
    <h2 class="mb-5 text-center">Reviews</h2>
    <!-- data-bs-interval to set the time between slides -->
    <div id="reviewsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
      <div class="carousel-inner px-5">
        <div class="carousel-item text-center active">
          <h5 class="mb-3 separator-center">Unique, Supported, Empowered</h5>
          <blockquote class="blockquote">
            <p class="fst-italic">
              "Feli coaches you and truly sees you as a unique person. She listens, is interested, and explains clearly what you can do best. She is enthusiastic with everyone and always helpful. Feli is a real people person and gives you the power to go for it!"
            </p>
            <footer class="blockquote-footer">Anja Peterse</footer>
          </blockquote>
        </div>
        <div class="carousel-item text-center">
          <h5 class="mb-3 separator-center">Inspired to achieve more
</h5>
          <blockquote class="blockquote">
            <p class="fst-italic">
              "I’m thrilled to work with Feli as my coach. She understands my goals, creates motivating workouts, and ensures I perform exercises correctly. Her positivity and support push me to achieve more. I highly recommend Feli to anyone seeking an inspiring, professional coach!"
            </p>
            <footer class="blockquote-footer">Norbert Essink</footer>
          </blockquote>
        </div>
        <!-- <div class="carousel-item text-center">
          <h5 class="mb-3 separator-center">Geïnspireerd om meer te bereiken</h5>
          <blockquote class="blockquote">
            <p class="fst-italic">"Pellentesque vitae metus non est pretium pharetra. Curabitur mattis justo quis sem dignissim."</p>
            <footer class="blockquote-footer">Client 3</footer>
          </blockquote>
        </div> -->
      </div>
      <!-- Previous Button -->
      <button class="carousel-control-prev d-flex justify-content-start" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <!-- Next Button -->
      <button class="carousel-control-next d-flex justify-content-end" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon text-end" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>
<!-- Contact Section -->
<section class="py-5 green-bg" id="contact">
  <div class="container d-flex justify-content-center align-items-center">
    <h2 class="mb-5 visually-hidden">Contact</h2>
      <div>
        <h4 class="separator-center">Contact me for more information</h4>
        <p>
          {% include "icons/whatsapp-icon.njk" %}
          <a href="https://wa.me/{{ settings.phone }}" target="_blank" rel="noopener noreferrer">{{ settings.phoneText }}</a> 
        </p>
        <p>
          {% include "icons/email-icon.njk" %}
          <a href="mailto:{{ settings.email }}">{{ settings.emailText }}</a>
        </p>
      </div>
  </div>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-md-8">
        <form 
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="contact-form"
          class="needs-validation"
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
            <button type="submit" class="btn custom-btn">Send</button>
          </div>
          <div id="form-message" class="text-center mt-3"></div>
        </form>
      </div>
    </div>
  </div>
</section>