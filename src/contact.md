---
layout: layouts/base.njk
title: "JoyFeli - Contact"
locale: "nl"
pageKey: "contact"
---

<!-- Hero Section -->
<section class="hero-section overflow-hidden">
  <div class="container position-relative ">
    <div class="row">
      <div class="col-12 position-relative m-0 p-0">
        <!-- Background image container -->
        <div class="bg-image contact-img animate-slide-in-right">
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
                Stuur me een bericht
              </span>
            </h4>
          <p>
            Vragen of overleggen? Neem gerust contact op via e-mail, WhatsApp of het formulier!
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
        <h4 class="mb-5 separator">Neem contact op</h4>
        <p>
          Heb je vragen of wil je samen nadenken over wat het beste bij je past? Twijfel je ergens over? Neem gerust contact met me op, dan komen we samen tot de juiste oplossing die bij jou past.
        </p>
        <p>
          Van november tot en met april ben ik beschikbaar op mijn locatie in Wageningen. In de zomermaanden ben ik flexibel en sta ik open voor het starten of voortzetten van virtuele sessies.
        </p>
        <p>
          Je kunt contact met me opnemen via e-mail, een chatbericht via WhatsApp, of door onderstaand formulier in te vullen. Ik kijk ernaar uit om je te helpen!
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
        </form>
      </div>
    </div>
  </div>
</section>