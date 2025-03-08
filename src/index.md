---
layout: layouts/base.njk
title: "JoyFeli - Leefstijlcoaching & Personal Training"
locale: "nl"
pageKey: "home"
navbarClass: "fixed-top"
---

<!-- Home Section  -->
<header class="hero-home vh-100 d-flex align-items-center justify-content-center text-center pt-5">
  <!-- Inline picture element for background image -->
  <picture class="hero-home-picture">
    <!-- Mobile: cut-off version -->
    <source media="(max-width: 1199px)" srcset="/img/Feli_predel_cut.webp" type="image/webp">
    <source media="(max-width: 1199px)" srcset="/img/Feli_predel_cut.jpg" type="image/jpeg">
    <!-- Desktop: full image -->
    <source srcset="/img/Feli_predel.webp" type="image/webp">
    <source srcset="/img/Feli_predel.JPG" type="image/jpeg">
    <img src="/img/Feli_predel.JPG" alt="Hero Background" class="hero-home-img">
  </picture>
  <!-- Hero content -->
  <div class="container hero-home-content">
    <blockquote class="blockquote">
      <p class="fs-2 fst-italic">
        "You cannot step into the same river twice,<br> for other waters are ever flowing on to you."
      </p>
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
        <div class="bg-image-container welcome-img animate-slide-in-left">
          <picture class="bg-image">
            <!-- Mobile: cut-off version -->
            <source media="(max-width: 575px)" srcset="/img/Feli_mountain_cut.webp" type="image/webp">
            <source media="(max-width: 575px)" srcset="/img/Feli_mountain_cut.jpg" type="image/jpeg">
            <!-- Desktop: full image -->
            <source srcset="/img/Feli_mountain.webp" type="image/webp">
            <source srcset="/img/Feli_mountain.jpg" type="image/jpeg">
            <img class="bg-image-img" src="/img/Feli_mountain.jpg" alt="Personal Training Background" width="1320" height="665" loading="eager" fetchpriority="high">
          </picture>
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
          <h4 class="mb-4 fst-italic">Leefstijlcoach en Personal Trainer in Wageningen</h4>
          <p>
            Ik werk met mensen die klaar zijn om hun leven te veranderen, maar niet precies weten waar ze moeten beginnen. Of je nu <strong>fitter</strong> wilt worden, <strong>gezondere gewoontes</strong> wilt opbouwen of meer <strong>innerlijke balans</strong> zoekt, ik begeleid je met persoonlijke coaching en op maat gemaakte trainingen. Samen ontdekken we de diepere oorzaken van je gedrag en creëren we <strong>blijvende verandering</strong> voor lichaam en geest.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Welcome Me Section -->
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
          <picture class="card-img-top w-50 mx-auto mt-4">
            <source srcset="/img/lifestylecoaching_icon.webp" type="image/webp">
            <source srcset="/img/lifestylecoaching_icon.png" type="image/png">
            <img src="/img/lifestylecoaching_icon.png" alt="Lifestyle Coaching Icon">
          </picture>
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">Leefstijlcoaching</h5>
            <h6 class="mb-2 text-center separator-center">
              De kracht van gedrag
            </h6>
            <p class="card-text">
              Creëer gezonde gewoontes en ontdek de kracht van je gedrag en innerlijke motivatie, zodat je een duurzaam, gebalanceerd leven kunt leiden.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href={{ links.lifestyleCoaching[locale] }} class="btn custom-btn fs-5">Meer</a>
          </div>
        </div>
      </div>
      <!-- Personal Training Card -->
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <picture class="card-img-top w-50 mx-auto mt-4">
            <source srcset="/img/personaltraining_icon.webp" type="image/webp">
            <source srcset="/img/personaltraining_icon.png" type="image/png">
            <img src="/img/personaltraining_icon.png" alt="Personal Training Icon">
          </picture>
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">Personal Training</h5>
            <h6 class="mb-2 text-center separator-center">
              Gezond lichaam, sterke geest
            </h6>
            <p class="card-text">
              Versterk zowel je fysieke gezondheid als je mentale welzijn met deskundige, persoonlijke begeleiding.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href="{{ links.personalTraining[locale] }}" class="btn custom-btn fs-5">Meer</a>
          </div>
        </div>
      </div>
      <!-- For Her Card -->
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <picture class="card-img-top w-50 mx-auto mt-4">
            <source srcset="/img/forher_icon.webp" type="image/webp">
            <source srcset="/img/forher_icon.png" type="image/png">
            <img src="/img/forher_icon.png" alt="For Her Icon">
          </picture>
          <div class="card-body custom-color">
            <h5 class="card-title text-uppercase text-center mb-4">Voor Haar</h5>
            <h6 class="mb-2 text-center separator-center">
              Veilig, sterk en vrouwelijk
            </h6>
            <p class="card-text">
              Herontdek je innerlijke kracht en balans in een veilige setting, speciaal voor vrouwen die zich willen verbinden met hun kracht en zelfvertrouwen.
            </p>
          </div>
          <div class="card-footer text-center white-bg border-0">
            <a href={{ links.forHer[locale] }} class="btn custom-btn fs-5">Meer</a>
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
        <h2 class="mb-5 separator">Over mij</h2>
        <p>
          Hi, ik ben Feli Aarsman.
          Tijdens mijn studie Ecologie in Wageningen werd ik verliefd op de stad en haar natuur. Ik ontdekte de sterke wisselwerking tussen mens en omgeving: ons welzijn wordt gevormd door <strong>biologische, psychologische en sociale factoren</strong>.
        </p>
        <p>
          Mijn passie voor natuur groeide uit tot een fascinatie voor denken, communicatie en gedrag, vooral rond leefstijl en beweging. Dit leidde tot mijn rol als coach, waarin ik mensen help <strong>fysiek en mentaal sterker</strong> te worden.
        </p>
        <p>
          Met <strong>acht jaar</strong> ervaring als <strong>gecertificeerd instructeur</strong> leerde ik hoe we met positieve energie samen een sterkere, gelukkigere wereld creëren. Gezond, sterk en veerkrachtig zijn is daarbij essentieel.
        </p>
        <div class="text-center mt-3">
          <a href={{ links.about[locale] }} class="btn custom-btn fs-5">Meer</a>
        </div>
      </div>
      <div class="col-lg-6 mt-4">
        <picture>
          <source srcset="/img/feli.webp" type="image/webp">
          <source srcset="/img/feli.jpg" type="image/jpeg">
          <img class="img-fluid profile-img mx-lg-5 mt-3" src="/img/feli.jpg" alt="Feli Aarsman profile picture" loading="lazy">
        </picture>
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
          <h5 class="mb-3 separator-center">Uniek, Ondersteund, Empowered</h5>
          <blockquote class="blockquote">
            <p class="fst-italic">
              "Feli coacht je en ziet je echt als een uniek persoon. Ze luistert,
              is geïnteresseerd en legt duidelijk uit wat je het beste kunt doen.
              Ze is enthousiast met iedereen en altijd behulpzaam. Feli is een echt mensenmens en geeft je de kracht om ervoor te gaan"
            </p>
            <footer class="blockquote-footer">Anja Peterse</footer>
          </blockquote>
        </div>
        <div class="carousel-item text-center">
          <h5 class="mb-3 separator-center">Geïnspireerd om meer te bereiken</h5>
          <blockquote class="blockquote">
            <p class="fst-italic">
              "Ik ben erg blij dat ik met Feli werk als coach. Vanaf het begin voelde ik me welkom en gemotiveerd. Feli begrijpt mijn doelen en stelt persoonlijke schema’s op die me uitdagen. Ze toont de oefeningen, controleert mijn uitvoering en zorgt voor positieve energie. Dankzij haar bereik ik meer dan ik dacht. Ik kan Feli van harte aanbevelen als inspirerende coach"
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
        <h4 class="separator-center">Neem contact met mij op</h4>
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
            <label for="name" class="form-label">Naam</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Je naam" required>
            <div class="invalid-feedback">Vul alsjeblieft je naam in.</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">E-mailadres</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Je e-mailadres" required>
            <div class="invalid-feedback">Vul alsjeblieft een geldig e-mailadres in.</div>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Telefoonnummer</label>
            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Je telefoonnummer">
            <div class="invalid-feedback">Vul alsjeblieft je telefoonnummer in.</div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Bericht</label>
            <textarea class="form-control" id="message" name="message" rows="4" placeholder="Je bericht" required></textarea>
            <div class="invalid-feedback">Vul alsjeblieft je bericht in.</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn custom-btn">Verzenden</button>
          </div>
          <div id="form-message" class="text-center mt-3 p-3 rounded"></div>
        </form>
      </div>
    </div>
  </div>
</section>
<!-- End Contact Section -->