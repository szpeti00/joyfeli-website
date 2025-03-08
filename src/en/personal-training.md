---
layout: layouts/base.njk
title: "JoyFeli - Personal Training"
locale: "en"
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
                Healthy Body, Strong Mind.
              </span>
            </h4>
          <p>
            Enhance both your physical health and mental well-being with expert, personalized guidance.
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
          <button class="nav-link px-4 active" id="tab-ptraining" data-bs-toggle="tab" data-bs-target="#ptraining" type="button" role="tab" aria-controls="ptraining" aria-selected="true">
            Personal Training
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-info" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">
            Practical Information
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-pricing" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false">
            Prices
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
        >
          Select a tab
        </button>
        <ul class="dropdown-menu" aria-labelledby="mobileDropdown" role="tablist">
          <li>
            <button class="dropdown-item active fs-4" data-bs-toggle="tab" data-bs-target="#ptraining" type="button" role="tab" aria-selected="true">
              Personal Training
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-selected="false">
              Practical Information
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-selected="false">
              Prices
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-line"></div>
    </div>
    <div class="tab-content pt-3" id="PersonalTrainingTabsContent" style="overflow:hidden">
      <!-- Personal Training Tab -->
      <div class="mb-3 tab-pane fade active show" id="ptraining" role="tabpanel" aria-labelledby="tab-ptraining">
        <h4 class="mt-4 mb-3 separator">What is Personal Training?</h4>
        <h5 class="mb-3"><i>Strength, motivation, progress, and resilience</i></h5>
        <p>
          Personal training is a personalized approach to fitness, designed to help you reach your health and fitness goals through tailored workouts, expert guidance, and consistent motivation. Whether you want to lose weight, build muscle, improve endurance, or enhance overall health, personal training creates a plan that is <strong>specific to you</strong>, your goals, and your fitness level.   
        </p>
        <p>
          I'll equip you with the <strong>tools, knowledge, and confidence</strong> to make lasting progress. My goal is to empower you to continue your fitness journey independently, so you no longer need me, but have the skills to succeed on your own.
        </p>
        <h4 class="mt-5 mb-3 separator">Why now?</h4>
        <h5 class="mb-3"><i>It is an investment in your strength, fitness, confidence, and performance.</i></h5>
        <p>
          If you're unsure where to start or struggling to stay motivated, I'm here to help. Personal training provides the structure, guidance, and support you need to stay on track and achieve your goals. This is the perfect time to <strong>invest in yourself, build strength</strong>, and <strong>gain more energy</strong>.
        </p>
        <p>
          With personal coaching, I help you discover your inner strength and motivation, so you feel stronger both physically and mentally.
        </p>
      </div>
      <!-- Practical Information Tab-->
      <div class="mb-3 tab-pane fade" id="info" role="tabpanel" aria-labelledby="tab-info">
        <h4 class="mt-4 mb-3 separator">How Does the Process Work?</h4>
        <p>
          Personal training focuses on improving your physical health and fitness through goal-oriented <strong>training, movement, and motivation</strong>. I tailor each session to your personal goals, level, and abilities, ensuring effective and sustainable progress.
        </p>
        <p class="mb-5">
          A coaching program consists of multiple sessions, structured in a logical sequence.
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/chat-bubble-icon.njk" %}
                  </span>Introduction</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="introduction">
                  <div class="mt-2">
                    We start with an informal introduction to see if we are a <strong>good match</strong>. A strong foundation of trust is essential for a successful collaboration. It's important that you feel comfortable so we can create a positive and open working atmosphere together.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/tag-icon.njk" %}<span>Free of charge</span></li>
                      <li>{% include "icons/lock-open-icon.njk" %}<span>No obligation</span></li>
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/pencil-square-icon.njk" %}
                  </span>Intake Session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="intake">
                  <div class="mt-2">
                    In this session, we discuss your <strong>fitness level, goals, motivation, and expectations</strong>. We assess your physical condition, training experience, and any limitations to create a personalized plan. You set the pace, and we conduct assessments that align with your goals and needs.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/cog-6-tooth-icon.njk" %}<span>Body Analysis</span></li>
                      <li>{% include "icons/chart-pie-icon.njk" %}<span>Strength & Endurance Tests</span></li>
                      <li>{% include "icons/battery-50-icon.njk" %}<span>Movement Pattern Analysis</span></li>
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/light-bulb-icon.njk" %}
                  </span>Advice Session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="consultation">
                  <div class="mt-2">
                    Building on the insights from the intake, we discuss targeted advice that <strong>fits your goals and needs</strong>. We develop a personalized training program that you can follow both independently and with my guidance. The program is tailored to your level, preferences, and abilities, ensuring effective and achievable progress.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/adjustment-icon.njk" %}<span>Customized Program</span></li>
                      <li>{% include "icons/heart-icon.njk" %}<span>Aligned with Your Passion</span></li>
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/arrow-trending-up-icon.njk" %}
                  </span>Follow-up Sessions</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="followUp">
                  <div class="mt-2">
                    These sessions focus on evaluating your progress, discussing results, and adjusting the program as needed. New goals can be set along the way. Open communication is key to continued growth. Each session provides <strong>practical guidance</strong> and targeted advice to effectively lead you toward your ultimate goal.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/arrow-path-icon.njk" %}<span>Feedback</span></li>
                      <li>{% include "icons/wrench-screwdriver-icon.njk" %}<span>Adjustments</span></li>
                      <li>{% include "icons/cog-icon.njk" %}<span>Optimization</span></li>
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/clipboard-icon.njk" %}
                  </span>Evaluation Session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="evaluation">
                  <div class="mt-2">
                    We conclude the training process with an evaluation of your progress, achievements, and challenges. We discuss <strong>potential future obstacles</strong> and develop strategies to overcome them. The goal is to ensure lasting results, providing you with the right tools and motivation to maintain your new fitness level and sustain positive changes.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/exclamation-triangle-icon.njk" %}<span>Identifying Challenges</span></li>
                      <li>{% include "icons/arrow-path-rounded-square-icon.njk" %}<span>Ensuring Long-Term Success</span></li>
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
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/home-icon.njk" %}</span>Location</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="location">
                  <div class="mt-2">
                    Personal training sessions take place in my private practice in <strong>Wageningen</strong>, a calm and supportive environment to focus on your goals. If you prefer training <strong>outdoors or at home</strong>, that’s also possible. The most important thing is that you feel comfortable and motivated to make lasting changes to your physical health.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/home-modern-icon.njk" %}<span>Wageningen Practice</span></li>
                      <li>{% include "icons/sun-icon.njk" %}<span>Outdoor or Alternative Locations</span></li>
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
          <h4 class="mt-4 mb-3 separator">Which coaching program?</h4>
          <p>
            All sessions and packages are also available for <strong>duos</strong>—share the cost, train together, and receive a customized plan!
          </p>
          <div class="row g-4">
            <!-- Start Package Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Start Package</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">1 - 2 months, 6 sessions</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 350</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 200 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">6 training sessions</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Quick intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Final evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#startPakket"
                            aria-expanded="false"
                          >
                            <span class="fs-lg-4 visually-hidden">More Information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="startPakket">
                            <div class="mt-2">
                              A <strong>short, intensive program</strong> with personal guidance for fast results, supported by targeted exercises to do at home.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Medium Package Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Medium Package</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">2 - 3 months, 8 sessions</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 450</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 250 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">8 training sessions</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">In-depth intake with analysis</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Final evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#mediumPakket"
                            aria-expanded="false"
                          >
                            <span class="fs-lg-4 visually-hidden">More Information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="mediumPakket">
                            <div class="mt-2">
                              The most chosen option, offering <strong>intensive personal training</strong> while allowing time to integrate adjustments into your routine. Get the right tools to sustainably improve your movement habits.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 10-Session Package Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">10 - Session Package</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">10 Sessions</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/user-icon.njk" %}<span class="ps-2 ps-lg-3 pe-4 pe-lg-5">€ 550</span>
                          {% include "icons/users-icon.njk" %}<span class="ps-2 ps-lg-3">€ 300 p.p</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">10 Training Sessions</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Comprehensive intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Final evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#tenSessiesPakket"
                            aria-expanded="false"
                          >
                            <span class="fs-lg-4 visually-hidden">More Information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="tenSessiesPakket">
                            <div class="mt-2">
                              <strong>More flexibility</strong> in scheduling sessions, with a personalized approach that aligns with your training goals. Plenty of room for feedback, ensuring powerful progress and lasting results.
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Single Session Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Single Session</h5>
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
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Flexible</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Freedom of choice</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#singlePakket"
                            aria-expanded="false"
                          >
                            <span class="fs-lg-4 visually-hidden">More Information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="singlePakket">
                            The <strong>ultimate flexibility:</strong> whether you need just an intake to determine your starting point or a few training sessions, everything is tailored to your needs and pace.
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
    <button id="prevTabBtn" class="btn custom-btn mx-3 fs-5" disabled>{% include "icons/arrow-left-icon.njk" %}</button>
    <button id="nextTabBtn" class="btn custom-btn mx-3 fs-5">{% include "icons/arrow-right-icon.njk" %}</button>
  </div>
</section>