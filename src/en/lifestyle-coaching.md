---
layout: layouts/base.njk
title: "JoyFeli - Lifestyle Coaching"
locale: "en"
pageKey: "lifestyleCoaching"
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
            <source media="(max-width: 575px)" srcset="/img/lifestylecoaching_cut.webp" type="image/webp">
            <source media="(max-width: 575px)" srcset="/img/lifestylecoaching_cut.jpg" type="image/jpeg">
            <!-- Desktop: full image -->
            <source srcset="/img/lifestylecoach_2.webp" type="image/webp">
            <source srcset="/img/lifestylecoach_2.jpg" type="image/jpeg">
            <img class="bg-image-img" src="/img/lifestylecoach_2.jpg" alt="Personal Training Background" width="1320" height="665" loading="eager" fetchpriority="high">
          </picture>
        </div>
        <!-- Text overlay -->
        <div class="text-overlay lifestylecoach-text animate-slide-in-right bg-white bg-opacity-75 p-4 p-xxl-5">
          <h1 class="separator text-uppercase">
            <span class="d-block mb-2">
              <span><strong>Lifestyle Coaching</strong></span>
            </span>
          </h1>
            <h4>
              <span class="d-block mb-3 fst-italic">
                The power of behavior.
              </span>
            </h4>
          <p>
            Create healthy habits and discover the power of your behavior and inner motivation, so you can live a sustainable, balanced life.
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
      <ul class="nav nav-tabs justify-content-center mb-4 border-0" id="lifesryleCoachingTabs" role="tablist">
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4 active" id="tab-lifestyle" data-bs-toggle="tab" data-bs-target="#lifestyle" type="button" role="tab" aria-controls="lifestyle" aria-selected="true" aria-label="Lifestyle Coaching">
            Lifestyle Coaching
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-info" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false" aria-label="Practical Information">
            Practical Information
          </button>
        </li>
        <li class="nav-item d-none d-md-flex">
          <button class="nav-link px-4" id="tab-pricing" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false" aria-label="Prices">
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
          aria-label="Select a tab"
        >
          Select a tab
        </button>
        <ul class="dropdown-menu" aria-labelledby="mobileDropdown" role="tablist">
          <li>
            <button class="dropdown-item active fs-4" data-bs-toggle="tab" data-bs-target="#lifestyle" type="button" role="tab" aria-selected="true" aria-label="Lifestyle Coaching">
              Lifestyle Coaching
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-selected="false" aria-label="Practical Information">
              Practical Information
            </button>
          </li>
          <li>
            <button class="dropdown-item fs-4" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-selected="false" aria-label="Prices">
              Prices
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-line"></div>
    </div>
    <div class="tab-content pt-3" id="lifestyleCoachingTabsContent" style="overflow:hidden">
      <!-- Lifestyle Coaching Tab -->
      <div class="mb-3 tab-pane fade active show" id="lifestyle" role="tabpanel" aria-labelledby="tab-lifestyle">
        <h4 class="mt-4 mb-3 separator">What is lifestyle Coaching?</h4>
        <h5 class="mb-3"><i>Personal growth, resilience, balance, and goal-orientation</i></h5>
        <p>
          Lifestyle coaching is a personal and holistic approach to self-improvement that helps you find balance, fulfillment, and success in all areas of your life. It goes beyond just physical health and also focuses on <strong>mental, emotional, and social well-being</strong>. By developing sustainable habits and increasing self-awareness, you learn how to align your daily choices and actions with your long-term goals. Lifestyle coaching helps you overcome obstacles, break unwanted patterns, and make conscious choices that lead to a life that fulfills you and aligns with who you truly are and want to be.   
        </p>
        <h4 class="mt-5 mb-3 separator">Why now?</h4>
        <h5 class="mb-3"> <i>It’s an investment in yourself; your health, happiness, and future.</i></h5>
        <p>
          Life can sometimes feel overwhelming, but I’m here to help you take back control, and together we can create lasting change. Whether you’re striving for personal growth, going through a transition, or simply want to experience more fulfillment, self-improvement and lifestyle coaching help you develop the willpower and cultivate the right behaviors. This can give you the balance, strength, and direction you’re seeking in your life. Don’t wait for the 'right' moment – <strong>the right moment is always now.</strong>
        </p>
      </div>
      <!-- Practical Information Tab-->
      <div class="mb-3 tab-pane fade" id="info" role="tabpanel" aria-labelledby="tab-info">
        <h4 class="mt-4 mb-3 separator">How does the coaching process work?</h4>
        <p>
          Lifestyle coaching focuses on various aspects of your life, such as <strong>behavior, nutrition, movement, sleep, stress, and relaxation</strong>. I use methods and models that align with your unique journey.
        </p>
        <p class="mb-5">
          A coaching program consists of multiple sessions, structured in a logical sequence to support your progress effectively. 
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
                  aria-label="Introduction"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/chat-bubble-icon.njk" %}</span>Introduction</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="introduction">
                  <div class="mt-2">
                    We start with an informal introduction to see if we have a good connection. It’s important that we understand and trust each other, as a strong foundation of trust is key to a successful collaboration. I want you to feel comfortable so we can create a <strong>positive and open working atmosphere</strong> together.
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
                  aria-label="Intake"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/pencil-square-icon.njk" %}</span>Intake session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="intake">
                  <div class="mt-2">
                    During this session, we explore your lifestyle and define your <strong>goals, motivation</strong> and <strong>expectations</strong> together. We assess your current situation from a physical, mental, and social perspective to create a personalized coaching plan that suits you perfectly. You are and remain the expert of your own life. Additionally, we conduct various analyses depending on the focus areas, such as:
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/cog-6-tooth-icon.njk" %}<span>Body Analysis</span></li>
                      <li>{% include "icons/chart-pie-icon.njk" %}<span>Nutrition Analysis</span></li>
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
                  aria-label="Advice"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/light-bulb-icon.njk" %}</span>Advice Session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="consultation">
                  <div class="mt-2">
                    In this session, we build on the themes discussed during the intake. Based on the intake results and any homework assignments, we can discuss <strong>specific advice</strong>. Depending on your needs, we may also use additional models and assessments, such as:
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/heart-icon.njk" %}<span>Positive Health Model</span></li>
                      <li>{% include "icons/shopping-cart-icon.njk" %}<span>Food Diary</span></li>
                      <li>{% include "icons/moon-icon.njk" %}<span>Sleep Habits</span></li>
                      <li>{% include "icons/scale-icon.njk" %}<span>Stress Management</span></li>
                      <li>{% include "icons/arrows-pointing-in-icon.njk" %}<span>Social Pressure</span></li>
                      <li>{% include "icons/sun-icon.njk" %}<span>Awareness Exercises</span></li>
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
                  aria-label="Follow-up"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/arrow-trending-up-icon.njk" %}</span>Follow-up Sessions</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="followUp">
                  <div class="mt-2">
                    These coaching sessions focus on <strong>reviewing progress</strong>, evaluating results, and adjusting where necessary. Sometimes, new sub-goals emerge that were not initially identified. Open and honest communication is key. These sessions provide practical tools and guidance to help you effectively reach your goals.
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
                  aria-label="Evaluation"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/clipboard-icon.njk" %}</span>Evaluation Session</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="evaluation">
                  <div class="mt-2">
                    We conclude the coaching process with an evaluation, reflecting on your progress and identifying <strong>potential challenges for the future</strong>. Together, we develop strategies to recognize and overcome these obstacles, ensuring that your new lifestyle becomes a lasting change. While the process is intensive, the goal is sustainable behavioral transformation.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/exclamation-triangle-icon.njk" %}<span>Identifying obstacles</span></li>
                      <li>{% include "icons/arrow-path-rounded-square-icon.njk" %}<span>Ensuring long-term success</span></li>
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
                  aria-label="Location"
                >
                  <span class="card-title fs-4"><span class="pe-2 pe-lg-3">{% include "icons/home-icon.njk" %}</span>Location</span>
                  <span class="toggle-icon"></span>
                </button>
                <div class="collapse collapse-text" id="location">
                  <div class="mt-2">
                    Coaching sessions take place in my practice in <strong>Wageningen</strong>, a calm and supportive environment where you can focus on your goals. <strong>Online sessions</strong> are also available for extra flexibility. The most important thing is that you feel comfortable and motivated to achieve lasting change.
                    <ul class="mt-3 list-unstyled">
                      <li>{% include "icons/home-modern-icon.njk" %}<span>Wageningen</span></li>
                      <li>{% include "icons/wifi-icon.njk" %}<span>Online</span></li>
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
          <h4 class="mt-4 mb-3 separator">Which coaching package?</h4>
          <div class="row g-4">
            <!-- Start package Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">Start Package</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">1 - 2 months, 6 sessions</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/price-icon.njk" %}<span class="ps-2 ps-lg-3">€ 350</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Quick intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">4 Coaching sessions</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">End evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#startPakket"
                            aria-expanded="false"
                            aria-label="More information"
                          >
                            <span class="fs-lg-4 visually-hidden">More information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="startPakket">
                            <div class="mt-2">
                              For an extra push in the right direction: <strong>short, intensive guidance</strong> to quickly acquire knowledge and make rapid progress with homework.
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
                          {% include "icons/price-icon.njk" %}<span class="ps-2 ps-lg-3">€ 450</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Intake conversation</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">6 Coaching sessions</span>
                          </div class="text-stacking">
                          <div>
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">End evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#mediumPakket"
                            aria-expanded="false"
                            aria-label="More information"
                          >
                            <span class="fs-lg-4 visually-hidden">More information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="mediumPakket">
                            <div class="mt-2">
                              The most popular choice, offering more room for <strong>active behavior change</strong> and time to integrate new habits into your life—while still being a fast-paced process to help you start strong. 
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 10 - Sessions Package Card -->
            <div class="col-md-6 col-lg-6">
                <div class="card">
                    <div class="card-body custom-color p-4 p-lg-5">
                        <h5 class="card-title text-center fs-4">10 - Session Package</h5>
                        <p class="card-text fs-lg-4 text-stacking">
                          {% include "icons/calendar-icon.njk" %}
                          <span class="ps-2 ps-lg-3">10 sessions</span>
                        </p>
                        <p class="card-text fs-lg-4">
                          {% include "icons/price-icon.njk" %}<span class="ps-2 ps-lg-3">€ 550</span>
                        </p>
                        <div class="card-text">
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Free introduction</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">Comprehensive intake</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">8 Coaching sessions</span>
                          </div>
                          <div class="text-stacking">
                            {% include "icons/check-icon.njk" %}
                            <span class="ps-2 ps-lg-3">End evaluation</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#tenSessiesPakket"
                            aria-expanded="false"
                            aria-label="More information"
                          >
                            <span class="fs-lg-4 visually-hidden">More information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="tenSessiesPakket">
                            <div class="mt-2">
                              <strong>More flexibility</strong> in scheduling, allowing for a pace that aligns with your personal development journey. We can take a more gradual approach, spreading the sessions out to fit your needs. This gives your mind and body more time to adjust, making it easier for new habits to take root and create lasting change.
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
                          {% include "icons/price-icon.njk" %}<span class="ps-2 ps-lg-3">€ 65</span>
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
                            <span class="ps-2 ps-lg-3">Autonomy</span>
                          </div>
                          <button
                            class="btn toggle-btn w-100 d-flex justify-content-center align-items-center collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#singlePakket"
                            aria-expanded="false"
                            aria-label="More information"
                          >
                            <span class="fs-lg-4 visually-hidden">More information</span>
                            <span class="toggle-icon"></span>
                          </button>
                          <div class="collapse collapse-text" id="singlePakket">
                            <strong>Ultimate flexibility:</strong> perhaps you just want an intake to assess where you stand, or you need a few advice sessions. You may also want to take the time you need, fully tailored to your wishes.
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