---
layout: layouts/base.njk
title: "JoyFeli - Personal Training"
locale: "nl"
pageKey: "personalTraining"
---

<!-- Hero Section -->
<section class="hero-section overflow-hidden">
  <div class="container position-relative">
    <div class="row">
      <div class="col-12 position-relative m-0 p-0">
        <!-- Background image container -->
        <div class="bg-image-container animate-slide-in-left">
          <picture class="bg-image">
            <!-- Mobile: cut-off version -->
            <source media="(max-width: 575px)" srcset="/img/Feli_mangart_phone.webp" type="image/webp">
            <source media="(max-width: 575px)" srcset="/img/Feli_mangart.jpg" type="image/jpeg">
            <!-- Desktop: full image -->
            <source srcset="/img/Feli_mangart.webp" type="image/webp">
            <source srcset="/img/Feli_mangart.jpg" type="image/jpeg">
            <img class="bg-image-img" src="/img/Feli_mangart.jpg" alt="Personal Training Background" width="1320" height="665" loading="eager" fetchpriority="high">
          </picture>
        </div>
        <!-- Text overlay -->
        <div class="text-overlay ptraining-text animate-slide-in-right bg-white bg-opacity-75 p-4 p-xxl-5">
          <h1 class="separator text-uppercase">
            <span class="d-block mb-2">
              <span><strong>Personal Training</strong></span>
            </span>
          </h1>
            <h4>
              <span class="d-block mb-3 fst-italic">
                Gezond lichaam, sterke geest.
              </span>
            </h4>
          <p>
            Versterk zowel je fysieke gezondheid als je mentale welzijn met deskundige, persoonlijke begeleiding.
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
<!-- Tabs Section -->
<section class="py-5 gray-bg tab-section">
  <div class="container">
    <div class="custom-tabs">
      <!-- Tab Navigation -->
      <ul class="nav nav-tabs justify-content-center mb-4 border-0" id="personalTrainingTabs" role="tablist">
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4 active" id="tab-ptraining" data-bs-toggle="tab" data-bs-target="#ptraining" type="button" role="tab" aria-controls="ptraining" aria-selected="true" aria-label="Personal Training">
            Personal Training
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-info" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false" aria-label="Praktische Informatie">
            Praktische Informatie
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-pricing" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false" aria-label="Tarieven">
            Tarieven
          </button>
        </li>
      </ul>
      <!-- Dropdown Menu for sm screens -->
      <div class="dropdown d-block d-md-none text-center fs-4">
        <button
          class="btn dropdown-toggle fs-4 w-100 bg-white border"
          type="button"
          id="mobileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Select a tab"
        >
          Select a tab
        </button>
        <ul class="dropdown-menu" aria-labelledby="mobileDropdown" role="tablist">
          <li>
            <button class="dropdown-item active fs-4" data-bs-toggle="tab" data-bs-target="#ptraining" type="button" role="tab" aria-selected="true" aria-label="Personal Training">
              Personal Training
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-selected="false" aria-label="Praktische Informatie">
              Praktische Informatie
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-selected="false" aria-label="Tarieven">
              Tarieven
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-line"></div>
    </div>
    <div class="tab-content pt-3" id="PersonalTrainingTabsContent" style="overflow:hidden">
      <!-- Personal Training Tab -->
      <div class="mb-3 tab-pane fade active show" id="ptraining" role="tabpanel" aria-labelledby="tab-ptraining">
        <h4 class="mt-4 mb-3 separator">Wat is Personal Training?</h4>
        <h5 class="mb-3"><i>Kracht, motivatie, progressie en doorzettingsvermogen</i></h5>
        <p>
          Personal training is een persoonlijke benadering van fitness, ontworpen om je te helpen je gezondheids- en fitnessdoelen te bereiken door middel van op maat gemaakte trainingen, deskundige begeleiding en constante motivatie. Of je nu wilt afvallen, spiermassa wilt opbouwen, je uithoudingsvermogen wilt verbeteren of je algehele gezondheid wilt bevorderen, personal training stelt een plan op dat <strong>specifiek is afgestemd op jou</strong>, je doelen en je fitnessniveau.   
        </p>
        <p>
          Ik voorzie je van de <strong>tools, kennis</strong> en het <strong>zelfvertrouwen</strong> om blijvende vooruitgang te boeken. Mijn doel is om je in staat te stellen je fitnessreis zelfstandig voort te zetten, zodat je mij uiteindelijk niet meer nodig hebt, maar over de vaardigheden beschikt om zelf succesvol te zijn.
        </p>
        <h4 class="mt-5 mb-3 separator">Waarom nu?</h4>
        <h5 class="mb-3"><i>Het is een investering in je kracht, conditie, zelfvertrouwen en prestaties.</i></h5>
        <p>
          Als je niet zeker weet waar je moet beginnen of moeite hebt om gemotiveerd te blijven, ben ik hier om je te helpen. Personal training biedt je de structuur, begeleiding en ondersteuning die je nodig hebt om op koers te blijven en je doelen te bereiken. Dit is het perfecte moment om in <strong>jezelf te investeren, sterker te worden</strong> en <strong>meer energie</strong> te krijgen.
        </p>
        <p>
          Met persoonlijke coaching help ik je om je innerlijke kracht en motivatie te ontdekken, zodat je je zowel fysiek als mentaal sterker voelt.
        </p>
      </div>
      <!-- Practical Information Tab-->
      <div class="mb-3 tab-pane fade" id="info" role="tabpanel" aria-labelledby="tab-info">
        <h4 class="mt-4 mb-3 separator">Hoe verloopt het traject?</h4>
        <p>
          Personal training richt zich op het verbeteren van je fysieke gezondheid en fitheid door middel van doelgerichte training, beweging en motivatie. Ik stem de trainingen af op <strong>jouw persoonlijke doelen, niveau en mogelijkheden</strong>, zodat je op een effectieve en duurzame manier vooruitgang boekt.
        </p>
        <p class="mb-5">
          Een coachingstraject bestaat uit meerdere sessies die in een logische volgorde zijn opgebouwd. 
        </p>            
        <div class="row g-4">
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#introduction"
                  aria-expanded="false"
                  aria-label="Kennismaking"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/chat-bubble-icon.njk" %}
                  </span>Kennismaking</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="introduction">
                  <div class="mt-2">
                    We beginnen met een informele kennismaking om te kijken of er een klik is. Een goede <strong>vertrouwensband</strong> is essentieel voor een succesvolle samenwerking. Het is belangrijk dat je je op je gemak voelt, zodat we samen een fijne en open werksfeer kunnen creëren.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/tag-icon.njk" %}<span>Gratis</span></li>
                      <li>{% include "icons/lock-open-icon.njk" %}<span>Vrijblijvend</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#intake"
                  aria-expanded="false"
                  aria-label="Intakegesprek"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/pencil-square-icon.njk" %}
                  </span>Intakegesprek</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="intake">
                  <div class="mt-2">
                    In dit gesprek bespreken we je <strong>fitheid, doelen, motivatie en verwachtingen</strong>. We kijken naar je fysieke gesteldheid, trainingservaring en eventuele beperkingen om een plan op maat te maken. Jij bepaalt het tempo, en we voeren analyses uit die aansluiten bij jouw doelen en behoeften.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/cog-6-tooth-icon.njk" %}<span>Lichaamsanalyse</span></li>
                      <li>{% include "icons/chart-pie-icon.njk" %}<span>Kracht- en conditietests</span></li>
                      <li>{% include "icons/battery-50-icon.njk" %}<span>Beweegpatroonanalyse</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#consultation"
                  aria-expanded="false"
                  aria-label="Adviesgesprek"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/light-bulb-icon.njk" %}
                  </span>Adviesgesprek</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="consultation">
                  <div class="mt-2">
                    In het adviesgesprek gaan we verder met de inzichten uit de intake en bespreken we <strong>gerichte adviezen</strong> die passen bij jouw doelen en behoeften. We ontwikkelen een persoonlijk trainingsprogramma waarmee je zowel zelfstandig als met mijn begeleiding aan de slag kunt. Dit programma wordt afgestemd op jouw niveau, wensen en mogelijkheden, zodat je effectief en haalbaar vooruitgang boekt.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/adjustment-icon.njk" %}<span>Eigen programma</span></li>
                      <li>{% include "icons/heart-icon.njk" %}<span>Passend bij jouw passie</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#followUp"
                  aria-expanded="false"
                  aria-label="Vervolgsessies"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/arrow-trending-up-icon.njk" %}
                  </span>Vervolgsessies</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="followUp">
                  <div class="mt-2">
                    In de vervolgsessies evalueren we je voortgang, bespreken resultaten en passen het programma aan waar nodig. Nieuwe doelen kunnen worden toegevoegd. Openheid is belangrijk om samen te blijven werken aan je groei. De sessies bieden <strong>praktische handvatten</strong> en <strong>gerichte adviezen</strong> om je effectief naar je einddoel te leiden.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/arrow-path-icon.njk" %}<span>Terugkoppelen</span></li>
                      <li>{% include "icons/wrench-screwdriver-icon.njk" %}<span>Bijsturen</span></li>
                      <li>{% include "icons/cog-icon.njk" %}<span>Optimaliseren</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#evaluation"
                  aria-expanded="false"
                  aria-label="Evaluatiegesprek"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/clipboard-icon.njk" %}
                  </span>Evaluatiegesprek</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="evaluation">
                  <div class="mt-2">
                    We sluiten het traject af met een evaluatie van je voortgang, behaalde resultaten en obstakels. We bespreken mogelijke <strong>toekomstige uitdagingen</strong> en ontwikkelen strategieën om deze te overwinnen. Het doel is om duurzame resultaten te behalen, met de juiste tools en motivatie om je nieuwe fysieke niveau vast te houden en <strong>blijvende veranderingen</strong> in je fitheid door te voeren.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/exclamation-triangle-icon.njk" %}<span>Obstakels</span></li>
                      <li>{% include "icons/arrow-path-rounded-square-icon.njk" %}<span>Duurzaamheid</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body custom-color px-2 py-3 p-lg-5">
                <button
                  class="btn toggle-btn w-100 d-flex justify-content-between align-items-center collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#location"
                  aria-expanded="false"
                  aria-label="Locatie"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/home-icon.njk" %}</span>Locatie</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="location">
                  <div class="mt-2">
                    De personal training sessies vinden plaats in mijn rustige praktijkruimte in <strong>Wageningen</strong>, waar we samen aan jouw doelen werken. Als je liever <strong>thuis of buiten</strong> traint, kan dat ook. Het belangrijkste is dat jij je op je gemak voelt en gemotiveerd bent om duurzame veranderingen in je fysieke gezondheid te realiseren.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/home-modern-icon.njk" %}<span>Wageningen</span></li>
                      <li>{% include "icons/sun-icon.njk" %}<span>Buiten of andere locatie</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pricing tab -->
      <div class="mb-3 tab-pane fade" id="pricing" role="tabpanel" aria-labelledby="tab-pricing">
          <h4 class="mt-4 mb-3 separator">Welk coachingstraject?</h4>
          <p>
            Alle sessies en pakketten zijn ook beschikbaar voor <strong>duo’s</strong>. Deel de kosten, sport samen en ontvang een plan op maat!
          </p>
          <div class="row g-4">
            <!-- Start pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Start pakket</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">1 - 2 maanden, 6 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 350</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 200 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Gratis kennismaking</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">6 Trainingssessies</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Vlotte intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Eind evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#startPakket"
                            aria-expanded="false"
                            aria-label="Meer informatie"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="startPakket">
                            <div class="mt-2">
                              Een <strong>kort, intensief traject</strong> met persoonlijke begeleiding voor snel resultaat, ondersteund door gerichte oefeningen voor thuis.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Medium Pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Medium pakket</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">2 - 3 maanden, 8 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 450</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 250 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Gratis kennismaking</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">8 Trainingssessies</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Intake met analyse</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Eind evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#mediumPakket"
                            aria-expanded="false"
                            aria-label="Meer informatie"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="mediumPakket">
                            <div class="mt-2">
                              De meest gekozen optie, met <strong>intensieve personal training</strong> en ruimte om aanpassingen in je routine te integreren. Ontvang de juiste tools om je beweeggedrag duurzaam aan te passen.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 10 - Sessies Pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">10 - Sessies pakket</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">10 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 550</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 300 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Gratis kennismaking</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">10 Trainingssessies</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Uitgebreide intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Eind evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#tenSessiesPakket"
                            aria-expanded="false"
                            aria-label="Meer informatie"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="tenSessiesPakket">
                            <div class="mt-2">
                              <strong>Meer flexibiliteit</strong> in het plannen van sessies, met een aanpak die past bij jouw persoonlijke trainingsdoelen. Er is voldoende ruimte voor feedback, zodat je met impact en kracht vooruitgang boekt en blijvende resultaten behaalt.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Losse sessie Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Losse sessie</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">45 - 60 min</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 65</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 40 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Gratis kennismaking</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Flexibel</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Keuzevrijheid</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#singlePakket"
                            aria-expanded="false"
                            aria-label="Meer informatie"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="singlePakket">
                            <strong>Ultieme flexibiliteit:</strong> of je nu alleen een intake wilt om je startpunt te bepalen, of behoefte hebt aan enkele trainingssessies, alles wordt afgestemd op jouw wensen en tempo.
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Navigation buttons -->
  <div class="mt-3 text-center">
    <button id="prevTabBtn" class="btn custom-btn mx-3 fs-5" aria-label="Previous tab" disabled>{% include "icons/arrow-left-icon.njk" %}</button>
    <button id="nextTabBtn" class="btn custom-btn mx-3 fs-5" aria-label="Next tab">{% include "icons/arrow-right-icon.njk" %}</button>
  </div>
</section>