---
layout: layouts/base.njk
title: "JoyFeli - Leefstijlcoaching"
locale: "nl"
pageKey: "lifestyleCoaching"
---

<!-- Hero Section -->
<header class="hero hero-pages d-flex align-items-center justify-content-center text-center" style="background: url('/img/lifestylecoaching.jpg') no-repeat center center/cover;">
</header>

<!-- Tabs Section -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="custom-tabs">
      <!-- Tab Navigation -->
      <ul class="nav nav-tabs justify-content-center mb-4 border-0" id="leefstijlcoachingTabs" role="tablist">
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4 active" id="tab-lifestyle" data-bs-toggle="tab" data-bs-target="#lifestyle" type="button" role="tab" aria-controls="lifestyle" aria-selected="true">
            Leefstijlcoaching
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-info" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">
            Praktische Informatie
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-pricing" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false">
            Tarieven
          </button>
        </li>
      </ul>
      <!-- Dropdown Menu for sm screens -->
      <div class="dropdown d-block d-md-none text-center fs-4">
        <button
          class="btn dropdown-toggle fs-4"
          type="button"
          id="mobileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select a tab
        </button>
        <ul class="dropdown-menu" aria-labelledby="mobileDropdown" role="tablist">
          <li>
            <a class="dropdown-item" data-bs-toggle="tab" href="#lifestyle" role="tab">
              Leefstijlcoaching
            </a>
          </li>
          <li>
            <a class="dropdown-item" data-bs-toggle="tab" href="#info" role="tab">
              Praktische Informatie
            </a>
          </li>
          <li>
            <a class="dropdown-item" data-bs-toggle="tab" href="#pricing" role="tab">
              Tarieven
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-line"></div>
    </div>
    <!-- Lifestyle Coaching Tab -->
    <div class="tab-content pt-3" id="lifestyleTabsContent" style="overflow:hidden">
      <div class="tab-pane fade show active" id="lifestyle" role="tabpanel" aria-labelledby="tab-lifestyle">
        <h4>Wat is Leefstijlcoaching?</h4>
        <p>
          Leefstijlcoaching is een persoonlijke en holistische benadering van zelfverbetering, die je helpt om in alle facetten van je leven balans, voldoening en succes te vinden. Het gaat verder dan alleen fysieke gezondheid en richt zich ook op mentale, emotionele en sociale welvaart. Door het ontwikkelen van duurzame gewoonten en het vergroten van zelfbewustzijn, leer je hoe je je dagelijkse keuzes en acties in lijn kunt brengen met je langetermijndoelen. Leefstijlcoaching helpt je obstakels te overwinnen, ongewenste patronen te doorbreken en bewuste keuzes te maken die leiden tot een leven dat jou vervult en past bij wie je echt bent en wilt zijn.   
        </p>
        <div class="mx-2 p-3 shadow rounded-4 custom-bg">
          Leefstijlcoaching stelt je in staat om veerkrachtig de controle over je leven te nemen, uitdagingen te overwinnen en    een toekomst te creëren waarin je balans en kracht kunt ervaren.
        </div>
        <h4 class="mt-4">Waarom Leefstijlcoaching goed voor jou is—en waarom nu?</h4>
        <p>
          Het leven kan soms overweldigend aanvoelen, maar ik ben hier om je te helpen de controle terug te krijgen en je acties af te stemmen op je doelen. Samen kunnen we blijvende veranderingen creëren. Of je nu op zoek bent naar persoonlijke groei, een overgang doormaakt of gewoon meer vervulling wilt voelen, nu is het perfecte moment om te beginnen. Wacht niet op het 'juiste' moment, het juiste moment is altijd nu. 
        </p>
        <div class="mx-2 p-3 shadow rounded-4 custom-bg">
          Het is een investering in jezelf; je gezondheid, geluk en toekomst.
        </div>
      </div>
      <!-- Practical Information Tab-->
      <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="tab-info">
          <div class="container mt-4">
            <h4 class="fs-4">Hoe werkt het traject?</h4>
            <p>Een coachingstraject bestaat uit meerdere sessies die in een logische volgorde zijn opgebouwd. We starten altijd met een gratis en vrijblijvend kennismakingsgesprek:</p>
            <div class="row g-4">
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-body custom-color p-4 p-lg-5">
                    <button
                      class="btn toggle-btn w-100 d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#introduction"
                    >
                      <span class="card-title fs-4">Kennismaking</span>
                      <span class="toggle-icon"></span>
                    </button>
                    <div class="collapse collapse-text" id="introduction">
                      <div class="mt-2">
                        We beginnen met een informele kennismaking om te kijken of er een goede klik is. Een sterke vertrouwensband tussen ons is de basis voor een succesvolle samenwerking.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-body custom-color p-4 p-lg-5">
                    <button
                      class="btn toggle-btn w-100 d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#intake"
                    >
                      <span class="card-title fs-4">Intakegesprek</span>
                      <span class="toggle-icon"></span>
                    </button>
                    <div class="collapse collapse-text" id="intake">
                      <div class="mt-2">
                        Tijdens de intake luister ik aandachtig naar jouw verhaal, doelen en uitdagingen. Samen onderzoeken we je leefstijldoelen en werken we aan een gepersonaliseerd plan dat past bij jouw visie op een gebalanceerd en vervullend leven. Jij bent de expert van je eigen leven, en ik begeleid je in het ontdekken van jouw volledige potentieel.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-body custom-color p-4 p-lg-5">
                    <button
                      class="btn toggle-btn w-100 d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#followUp"
                    >
                      <span class="card-title fs-4">Vervolgsessies</span>
                      <span class="toggle-icon"></span>
                    </button>
                    <div class="collapse collapse-text" id="followUp">
                      <div class="mt-2">
                        In de vervolgsessies werken we verder aan de thema's die tijdens de intake zijn besproken. We evalueren de voortgang, bespreken behaalde resultaten en sturen bij waar nodig. Deze sessies bieden handvatten en adviezen om je richting jouw einddoel te blijven bewegen.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-body custom-color p-4 p-lg-5">
                    <button
                      class="btn toggle-btn w-100 d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#evaluation"
                    >
                      <span class="card-title fs-4">Evaluatiegesprek</span>
                      <span class="toggle-icon"></span>
                    </button>
                    <div class="collapse collapse-text" id="evaluation">
                      <div class="mt-2">
                        We sluiten het traject af met een evaluatie. Hierin blikken we terug op de stappen die we hebben gezet en kijken we vooruit naar mogelijke valkuilen. Samen bespreken we hoe je deze kunt herkennen en aanpakken, zodat je nieuwe leefstijl blijvend onderdeel van je leven wordt.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="mt-4 fs-4">Wat houdt leefstijlcoaching in?</h4>
            <p>Een leefstijlcoach kan ondersteunen op veel verschillende vlakken. Soms is het einddoel helder, maar vaak ontdekken we dit gaandeweg. Tijdens het traject werk ik samen met jou aan een duidelijk plan, waarbij we gebruikmaken van verschillende tools en analyses, zoals:</p>
            <ul>
                <li>{% include "icons/cog-icon.njk" %}<span class="px-lg-3">Lichaamsanalyse</span></li>
                <li>{% include "icons/chart-pie-icon.njk" %}<span class="px-lg-3">Voedingsanalyse</span></li>
                <li>{% include "icons/adjustment-icon.njk" %}<span class="px-lg-3">Analyse van je beweegpatroon</span></li>
            </ul>
            <p>Daarnaast kunnen we gebruikmaken van aanvullende modellen en testen, afhankelijk van jouw behoeften. Denk hierbij aan:</p>
            <ul>
                <li>{% include "icons/heart-icon.njk" %}<span class="px-lg-3">Positieve gezondheid</span></li>
                <li>{% include "icons/arrow-right-up-icon.njk" %}<span class="px-lg-3">Intrinsieke en extrinsieke motivatie</span></li>
                <li>{% include "icons/moon-icon.njk" %}<span class="px-lg-3">Slaapgewoontes</span></li>
                <li>{% include "icons/scale-icon.njk" %}<span class="px-lg-3">Stressmanagement</span></li>
                <li>{% include "icons/arrows-pointing-icon.njk" %}<span class="px-lg-3">Sociale druk</span></li>
                <li>{% include "icons/light-bulb-icon.njk" %}<span class="px-lg-3">Bewustwordingsoefeningen</span></li>
            </ul>
            <p>Kort samengevat: Leefstijlcoaching richt zich op verschillende aspecten van je leven, zoals gedrag, voeding, beweging, slaap, stress en ontspanning. Ik maak gebruik van methoden en modellen die aansluiten bij jouw unieke traject.</p>
            <h4 class="mt-4 fs-4">Waar vinden de sessies plaats?</h4>
            <p>
              De coachingssessies kunnen plaatsvinden op een locatie die voor jou het meest geschikt is: bij mij, bij jou thuis, of buiten in de natuur, bijvoorbeeld in de vorm van wandelcoaching. Daarnaast is het ook mogelijk om de sessies online te doen, wat flexibiliteit biedt om de coaching te integreren in je dagelijkse routine, waar je ook bent. Het belangrijkste is dat jij je op je gemak voelt en gemotiveerd bent om duurzame veranderingen te realiseren. Mijn doel is om elke sessie doelgericht en inspirerend te maken, zodat ik je effectief kan begeleiden naar een gezonder en meer gebalanceerd leven.
            </p>
        </div>
      </div>
      <!-- Pricing tab -->
      <div class="tab-pane fade" id="pricing" role="tabpanel" aria-labelledby="tab-pricing">
          <h4>Coachings trajecten:</h4>
          <div class="row g-4">
            <!-- Start pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Start pakket</h5>
                        <p class="card-text fs-lg-4">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="px-lg-3">1 a 2 maanden, 6 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/price-icon.njk" %}<span class="px-lg-3">€ 350</span>
                        </p>
                        <div class="card-text">
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">gratis kennismaking</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">intakeanalyse</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">vervolgadviesgesprekken</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#startPakket"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="startPakket">
                            <div class="mt-2">
                              Voor een extra duwtje in de goede richting:   korte,  intensieve begeleiding waarmee je snel kennis opdoet en in hoog tempo vooruitgang boekt met huiswerk.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Medium Pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Medium pakket</h5>
                        <p class="card-text fs-lg-4">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="px-lg-3">2 a 3 maanden, 8 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/price-icon.njk" %}<span class="px-lg-3">€ 450</span>
                        </p>
                        <div class="card-text">
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">gratis kennismaking</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">intakeanalyse</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">vervolgadviesgesprekken</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#mediumPakket"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="mediumPakket">
                            <div class="mt-2">
                            De meest gekozen optie, met meer ruimte voor actieve gedragsverandering en tijd om de aanpassingen in je leven te integreren. Toch blijft het een snel traject, zodat je krachtig van start kunt gaan.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 10 - Sessies Pakket Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">10 - Sessies pakket</h5>
                        <p class="card-text fs-lg-4">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="px-lg-3"> 10 sessies</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/price-icon.njk" %}<span class="px-lg-3">€ 550</span>
                        </p>
                        <div class="card-text">
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">gratis kennismaking</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">uitgebreide intakeanalyse</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">vervolgadviesgesprekken</span>
                          </div>
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="px-lg-3">evaluatie</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#tenSessiesPakket"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="tenSessiesPakket">
                            <div class="mt-2">
                              Meer flexibiliteit in het plannen van sessies, met een aanpak van proberen en leren die aansluit bij jouw persoonlijke ontwikkelingscurve. Er is meer ruimte voor terugkoppelmomenten, zodat de veranderingen met impact en kracht plaatsvinden en gedragsverandering blijvend is voor de toekomst.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Losse sessie Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Losse sessie</h5>
                        <p class="card-text fs-lg-4">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="px-lg-3">45 - 60 min</span>
                        </p>
                        <p class="card-text fs-4">
                          {% include "icons/price-icon.njk" %}<span class="px-lg-3">€ 65</span>
                        </p>
                        <div class="card-text">
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#singlePakket"
                          >
                            <span class="fs-lg-4 visually-hidden">Meer Informatie</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="singlePakket">
                            Ultieme flexibiliteit: misschien wil je alleen een intake om te zien waar je staat, of heb je behoefte aan enkele adviesgesprekken. Misschien wil je juist de tijd nemen die jij nodig hebt, geheel afgestemd op jouw wensen.
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="swipe-hint d-block d-md-none" id="swipeHint">
    {% include "icons/hand-icon.njk" %}
    <span class="swipe-text">Swipe to navigate</span>
  </div>
</section>