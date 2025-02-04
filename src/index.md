---
layout: layouts/base.njk
title: "JoyFeli - Leefstijlcoaching & Personal Training"
locale: "nl"
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
  <!-- About Me Section -->
  <section  id="about" class="white-bg">
    <div class="container position-relative">
      <div class="row">
        <div class="col-12 position-relative m-0 p-0">
          <!-- Background image container -->
          <div class="bg-image animate-slide-in-left"></div>
          <!-- Text overlay -->
          <div class="text-overlay animate-slide-in-right bg-white bg-opacity-75">
            <p>
              Hi, ik ben Feli Aarsman. Ik verhuisde naar Wageningen voor de universiteit en werd direct verliefd op de stad en haar prachtige natuurlijke omgeving. Vervolgens is mijn passie doorontwikkeld van ecologie naar sport, beweging en het coachen van menselijk gedrag; zowel mentaal als fysiek. De verbinding tussen natuur en mens staat altijd centraal in alles wat ik doe.
            </p>
            <p>
              Met meer dan acht jaar ervaring als gecertificeerd instructeur heb ik waardevolle inzichten opgedaan in menselijk gedrag. Dit heeft mijn overtuiging versterkt dat wat ik altijd al voelde: met positieve energie kunnen we samen de wereld sterker, gelukkiger en mooier maken. Om positieve energie uit te stralen, is het belangrijk gezond, sterk en veerkrachtig te zijn.
            </p>
            <div class="text-center">
              <a href={{ links.about[locale] }} class="btn custom-btn fs-5">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- End About Me Section -->
  <div class="sun-divider white-bg">
    <span class="sun"></span>
  </div>
  <!-- Coaching Services Section -->
  <section class="py-5 gray-bg" id="services">
    <div class="container">
      <h2 class="mb-5 text-center">Coaching Services</h2>
      <div class="row">
        <!-- Lifestyle Coaching Card -->
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <img class="card-img-top w-50 mx-auto mt-4" src="/img/lifestylecoaching_icon.png" alt="Lifestyle Coaching Icon">
            <div class="card-body custom-color">
              <h5 class="card-title text-uppercase text-center mb-4">Leefstijlcoaching</h5>
              <h6 class="mb-2 text-center">
                De kracht van gedrag
              </h6>
              <p class="card-text">
                Creëer gezonde gewoontes en ontdek de kracht van je gedrag en innerlijke motivatie, zodat je een duurzaam, gebalanceerd leven kunt leiden.
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
              <h6 class="mb-2 text-center">
                Gezond lichaam, sterke geest
              </h6>
              <p class="card-text">
                Versterk zowel je fysieke gezondheid als je mentale welzijn met deskundige, persoonlijke begeleiding.
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
              <h5 class="card-title text-uppercase text-center mb-4">Voor Haar</h5>
              <h6 class="mb-2 text-center">
                Veilig, sterk en vrouwelijk
              </h6>
              <p class="card-text">
                Herontdek je innerlijke kracht en balans in een veilige setting, speciaal voor vrouwen die zich willen verbinden met hun kracht en zelfvertrouwen.
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

  <!-- Reviews Section -->
  <section class="py-5 white-bg" id="reviews">
    <div class="container">
      <h2 class="mb-5 text-center">Reviews</h2>
      <!-- data-bs-interval to set the time between slides -->
      <div id="reviewsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div class="carousel-inner px-5">
          <div class="carousel-item text-center active">
            <h5 class="mb-3">Uniek, Ondersteund, Empowered</h5>
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
            <h5 class="mb-3">Geïnspireerd om meer te bereiken</h5>
            <blockquote class="blockquote">
              <p class="fst-italic">
                "Ik ben erg blij dat ik met Feli werk als coach. Vanaf het begin voelde ik me welkom en gemotiveerd. Feli begrijpt mijn doelen en stelt persoonlijke schema’s op die me uitdagen. Ze toont de oefeningen, controleert mijn uitvoering en zorgt voor positieve energie. Dankzij haar bereik ik meer dan ik dacht. Ik kan Feli van harte aanbevelen als inspirerende coach"
              </p>
              <footer class="blockquote-footer">Norbert Essink</footer>
            </blockquote>
          </div>
          <!-- <div class="carousel-item text-center">
            <h5 class="mb-3">Geïnspireerd om meer te bereiken</h5>
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
  <!-- End Reviews Section -->
  <div class="sun-divider white-bg">
    <span class="sun"></span>
  </div>
  <!-- Contact Section -->
  <section class="py-5 gray-bg" id="contact">
    <div class="container d-flex justify-content-center align-items-center">
      <h2 class="mb-5 visually-hidden">Contact</h2>
				<div>
          <a class="visually-hidden" href="/leefstijlcoaching#pricing">See Pricing</a>
					<h4>Neem contact met mij op</h4>
					<p>
            {% include "icons/phone-icon.njk" %}
            <a href="tel:{{ settings.phone }}">{{ settings.phoneText }}</a> 
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
            <div class="visually-hidden">
              <label>
                Don't fill this out if you're human:<input name="bot-field">
              </label>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Naam</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="Je naam" required>
              <div class="invalid-feedback">Vul alsjeblieft jouw naam in.</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mailadres</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Je e-mailadres" required>
              <div class="invalid-feedback">Vul alsjeblieft een geldig e-mailadres in.</div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefoonnummer</label>
              <input type="tel" class="form-control" id="phone" name="phone" placeholder="Je telefoonnummer">
              <div class="invalid-feedback">Vul alsjeblieft jouw telefoonnummer in.</div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Bericht</label>
              <textarea class="form-control" id="message" name="message" rows="4" placeholder="Je bericht" required></textarea>
              <div class="invalid-feedback">Vul alsjeblieft jouw bericht in.</div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn custom-btn">Verzenden</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->