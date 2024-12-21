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
  <div class="sun-divider">
    <span class="sun"></span>
  </div>
  <!-- About Me Section -->
  <section  id="about">
    <div class="container position-relative">
      <div class="row">
        <div class="col-12 position-relative">
          <!-- Background image container -->
          <div class="bg-image animate-slide-in-left"></div>
          <!-- Text overlay -->
          <div class="text-overlay animate-slide-in-right bg-white bg-opacity-75">
            <p>
              Hi, ik ben Feli Aarsman. Ik verhuisde naar Wageningen voor de universiteit en werd direct verliefd op de stad en haar prachtige natuurlijke omgeving. Vervolgens is mijn passie doorontwikkeld van ecologie naar sport, beweging en het coachen van menselijk gedrag; zowel mentaal als fysiek. De verbinding tussen natuur en mens staat altijd centraal in alles wat ik doe.
            </p>
            <p>
              In de zomer geef ik wildwaterkajaklessen in Slovenië, terwijl ik in de winter individuele coaching en groepslessen verzorg. Met meer dan acht jaar ervaring als gecertificeerd instructeur heb ik waardevolle inzichten opgedaan in menselijk gedrag. Dit heeft mijn overtuiging versterkt van wat ik altijd al voelde: met positieve energie kunnen we samen de wereld sterker, gelukkiger en mooier maken.
            </p>
            <div class="text-center">
              <a href={{ links[locale].about.url }} class="btn custom-btn fs-5">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- End About Me Section -->
  <div class="sun-divider">
    <span class="sun"></span>
  </div>
  <!-- Coaching Services Section -->
  <section class="py-5 bg-light" id="services">
    <div class="container">
      <h2 class="mb-5 text-center">Coaching Services</h2>
      <div class="row">
        <!-- Lifestyle Coaching Card -->
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <img class="card-img-top w-50 mx-auto mt-4" src="/img/lifestylecoaching_icon.png" alt="Lifestyle Coaching Icon">
            <div class="card-body">
              <h5 class="card-title text-uppercase text-center mb-4">Leefstijlcoaching</h5>
              <h6 class="mb-2 text-center custom-color">
                De kracht van gedrag
              </h6>
              <p class="card-text custom-color">
                Creëer gezonde gewoontes en ontdek de kracht van je gedrag en innerlijke motivatie, zodat je een duurzaam, gebalanceerd leven kunt leiden.
              </p>
            </div>
            <div class="card-footer text-center bg-white border-0">
              <a href={{ links[locale].lifestyleCoaching.url }} class="btn custom-btn fs-5">More</a>
            </div>
          </div>
        </div>
        <!-- Personal Training Card -->
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <img class="card-img-top w-50 mx-auto mt-4" src="/img/personaltraining_icon.png" alt="Personal Training Icon">
            <div class="card-body">
              <h5 class="card-title text-uppercase text-center mb-4">Personal Training</h5>
              <h6 class="mb-2 text-muted text-center">
                Gezond lichaam, sterke geest
              </h6>
              <p class="card-text text-muted">
                Versterk zowel je fysieke gezondheid als je mentale welzijn met deskundige, persoonlijke begeleiding.
              </p>
            </div>
            <div class="card-footer text-center bg-white border-0">
              <a href="{{ links[locale].personalTraining.url }}" class="btn custom-btn fs-5">More</a>
            </div>
          </div>
        </div>
        <!-- For Her Card -->
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <img class="card-img-top w-50 mx-auto mt-4" src="/img/forher_icon.png" alt="For Her Icon">
            <div class="card-body">
              <h5 class="card-title text-uppercase text-center mb-4">Voor Haar</h5>
              <h6 class="mb-2 text-muted text-center">
                Veilig, sterk en vrouwelijk
              </h6>
              <p class="card-text text-muted">
                Herontdek je innerlijke kracht en balans in een veilige setting, speciaal voor vrouwen die zich willen verbinden met hun kracht en zelfvertrouwen.
              </p>
            </div>
            <div class="card-footer text-center bg-white border-0">
              <a href={{ links[locale].forHer.url }} class="btn custom-btn fs-5">More</a>
            </div>
          </div>
        </div>
        
      </div><!-- End Row -->
    </div>
  </section>
  
  <!-- End Coaching Services Section -->

  <div class="sun-divider">
    <span class="sun"></span>
  </div>

  <!-- Reviews Section -->
  <section class="py-5" id="reviews">
    <div class="container">
      <h2 class="mb-5 text-center">Reviews</h2>
      <!-- data-bs-interval to set the time between slides -->
      <div id="reviewsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
        <div class="carousel-inner px-5">
          <div class="carousel-item text-center active">
            <h5 class="mb-3 text-underline">Uniek, Ondersteund, Empowered</h5>
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
  <div class="sun-divider">
    <span class="sun"></span>
  </div>
  <!-- Contact Section -->
  <section class="py-5 bg-light" id="contact">
    <div class="container d-flex justify-content-center align-items-center">
      <h2 class="mb-5 visually-hidden">Contact</h2>
				<div>
					<h4>Neem contact met mij op</h4>
					<p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="tel:{{ settings.phone }}">{{ settings.phoneText }}</a> 
					</p>
					<p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:{{ settings.email }}">{{ settings.emailText }}</a>
					</p>
				</div>
    </div>
  </section>
  <!-- End Contact Section -->