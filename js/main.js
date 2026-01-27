
// Master JS for State: MG - Persona: Mining Heritage
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const mg_index_section_immigrate_to_minas_gerais = document.getElementById('mg-index-section-immigrate-to-minas-gerais');
  if (mg_index_section_immigrate_to_minas_gerais) {
    gsap.fromTo('#mg-index-section-immigrate-to-minas-gerais', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_form_immigrate_to_minas_gerais = document.getElementById('mg-index-form-immigrate-to-minas-gerais');
  if (mg_index_form_immigrate_to_minas_gerais) {
    gsap.from('#mg-index-form-immigrate-to-minas-gerais input, #mg-index-form-immigrate-to-minas-gerais textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_state_vibe = document.getElementById('mg-index-section-state-vibe');
  if (mg_index_section_state_vibe) {
    gsap.fromTo('#mg-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_quick_facts_snapshot = document.getElementById('mg-index-section-quick-facts-snapshot');
  if (mg_index_section_quick_facts_snapshot) {
    gsap.fromTo('#mg-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_minas_gerais_map = document.getElementById('mg-index-section-minas-gerais-map');
  if (mg_index_section_minas_gerais_map) {
    gsap.fromTo('#mg-index-section-minas-gerais-map', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_cost_of_living_minas_gerais = document.getElementById('mg-index-section-cost-of-living-minas-gerais');
  if (mg_index_section_cost_of_living_minas_gerais) {
    gsap.fromTo('#mg-index-section-cost-of-living-minas-gerais', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_government_context = document.getElementById('mg-index-section-government-context');
  if (mg_index_section_government_context) {
    gsap.fromTo('#mg-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_hero_immigration_notes = document.getElementById('mg-index-hero-immigration-notes');
  if (mg_index_hero_immigration_notes) {
    gsap.fromTo('#mg-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_common_applicant_profiles = document.getElementById('mg-index-list-common-applicant-profiles');
  if (mg_index_list_common_applicant_profiles) {
    gsap.from('#mg-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_economic_drivers = document.getElementById('mg-index-list-economic-drivers');
  if (mg_index_list_economic_drivers) {
    gsap.from('#mg-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_demographics = document.getElementById('mg-index-section-demographics');
  if (mg_index_section_demographics) {
    gsap.fromTo('#mg-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_regional_challenges = document.getElementById('mg-index-section-regional-challenges');
  if (mg_index_section_regional_challenges) {
    gsap.fromTo('#mg-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_regional_opportunities = document.getElementById('mg-index-section-regional-opportunities');
  if (mg_index_section_regional_opportunities) {
    gsap.fromTo('#mg-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_culture_daily_life = document.getElementById('mg-index-section-culture-daily-life');
  if (mg_index_section_culture_daily_life) {
    gsap.fromTo('#mg-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_local_language_expressions = document.getElementById('mg-index-list-local-language-expressions');
  if (mg_index_list_local_language_expressions) {
    gsap.from('#mg-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_food_cuisine = document.getElementById('mg-index-list-food-cuisine');
  if (mg_index_list_food_cuisine) {
    gsap.from('#mg-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_festivals_traditions = document.getElementById('mg-index-list-festivals-traditions');
  if (mg_index_list_festivals_traditions) {
    gsap.from('#mg-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_music_artistic_expression = document.getElementById('mg-index-list-music-artistic-expression');
  if (mg_index_list_music_artistic_expression) {
    gsap.from('#mg-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_sports_recreation = document.getElementById('mg-index-list-sports-recreation');
  if (mg_index_list_sports_recreation) {
    gsap.from('#mg-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_landmarks_historical_sites = document.getElementById('mg-index-list-landmarks-historical-sites');
  if (mg_index_list_landmarks_historical_sites) {
    gsap.from('#mg-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_natural_features = document.getElementById('mg-index-list-natural-features');
  if (mg_index_list_natural_features) {
    gsap.from('#mg-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_parks_protected_areas = document.getElementById('mg-index-list-parks-protected-areas');
  if (mg_index_list_parks_protected_areas) {
    gsap.from('#mg-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_museums_cultural_institutions = document.getElementById('mg-index-list-museums-cultural-institutions');
  if (mg_index_list_museums_cultural_institutions) {
    gsap.from('#mg-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_image_gallery = document.getElementById('mg-index-section-image-gallery');
  if (mg_index_section_image_gallery) {
    gsap.fromTo('#mg-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_useful_government_links = document.getElementById('mg-index-section-useful-government-links');
  if (mg_index_section_useful_government_links) {
    gsap.fromTo('#mg-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_hero_federal_police_immigration_links = document.getElementById('mg-index-hero-federal-police-immigration-links');
  if (mg_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#mg-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_external_references = document.getElementById('mg-index-section-external-references');
  if (mg_index_section_external_references) {
    gsap.fromTo('#mg-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_immigration_services_overview = document.getElementById('mg-index-list-immigration-services-overview');
  if (mg_index_list_immigration_services_overview) {
    gsap.from('#mg-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_why_immigrate_here = document.getElementById('mg-index-section-why-immigrate-here');
  if (mg_index_section_why_immigrate_here) {
    gsap.fromTo('#mg-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section_legal_guidance_disclaimers = document.getElementById('mg-index-section-legal-guidance-disclaimers');
  if (mg_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#mg-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_travel_services = document.getElementById('mg-index-list-travel-services');
  if (mg_index_list_travel_services) {
    gsap.from('#mg-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_list_how_the_process_works = document.getElementById('mg-index-list-how-the-process-works');
  if (mg_index_list_how_the_process_works) {
    gsap.from('#mg-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_index_section__frequently_asked_questions_about_living_in_minas_gerais_ = document.getElementById('mg-index-section--frequently-asked-questions-about-living-in-minas-gerais-');
  if (mg_index_section__frequently_asked_questions_about_living_in_minas_gerais_) {
    gsap.fromTo('#mg-index-section--frequently-asked-questions-about-living-in-minas-gerais-', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_contactcta_section_get_started_in_minas_gerais = document.getElementById('mg-contactcta-section-get-started-in-minas-gerais');
  if (mg_contactcta_section_get_started_in_minas_gerais) {
    gsap.fromTo('#mg-contactcta-section-get-started-in-minas-gerais', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('mg-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (mg_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#mg-renouncingcitizenship-form-renounce-brazilian-citizenship input, #mg-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_quick_facts = document.getElementById('mg-renouncingcitizenship-list-quick-facts');
  if (mg_renouncingcitizenship_list_quick_facts) {
    gsap.from('#mg-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('mg-renouncingcitizenship-list-common-challenges-applicants-face');
  if (mg_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#mg-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('mg-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (mg_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#mg-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_renunciation_overview = document.getElementById('mg-renouncingcitizenship-section-renunciation-overview');
  if (mg_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#mg-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_form_who_is_this_for = document.getElementById('mg-renouncingcitizenship-form-who-is-this-for');
  if (mg_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#mg-renouncingcitizenship-form-who-is-this-for input, #mg-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_required_documents = document.getElementById('mg-renouncingcitizenship-list-required-documents');
  if (mg_renouncingcitizenship_list_required_documents) {
    gsap.from('#mg-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_process = document.getElementById('mg-renouncingcitizenship-list-process');
  if (mg_renouncingcitizenship_list_process) {
    gsap.from('#mg-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_timelines_deadlines = document.getElementById('mg-renouncingcitizenship-section-timelines-deadlines');
  if (mg_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#mg-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_fees_costs = document.getElementById('mg-renouncingcitizenship-section-fees-costs');
  if (mg_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#mg-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('mg-renouncingcitizenship-list-risks-common-mistakes');
  if (mg_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#mg-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('mg-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (mg_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_minas_gerais_specific_context = document.getElementById('mg-renouncingcitizenship-section-minas-gerais-specific-context');
  if (mg_renouncingcitizenship_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-renouncingcitizenship-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_what_our_clients_say = document.getElementById('mg-renouncingcitizenship-section-what-our-clients-say');
  if (mg_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#mg-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('mg-renouncingcitizenship-section-frequently-asked-questions');
  if (mg_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#mg-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_international_support = document.getElementById('mg-renouncingcitizenship-section-international-support');
  if (mg_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#mg-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_our_credentials = document.getElementById('mg-renouncingcitizenship-list-our-credentials');
  if (mg_renouncingcitizenship_list_our_credentials) {
    gsap.from('#mg-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_list_related_services = document.getElementById('mg-renouncingcitizenship-list-related-services');
  if (mg_renouncingcitizenship_list_related_services) {
    gsap.from('#mg-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('mg-renouncingcitizenship-section-youre-in-good-hands');
  if (mg_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#mg-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_renouncingcitizenship_section_21 = document.getElementById('mg-renouncingcitizenship-section-21');
  if (mg_renouncingcitizenship_section_21) {
    gsap.fromTo('#mg-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('mg-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (mg_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#mg-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #mg-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_quick_facts = document.getElementById('mg-provisional-list-quick-facts');
  if (mg_provisional_list_quick_facts) {
    gsap.from('#mg-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_common_challenges_applicants_face = document.getElementById('mg-provisional-list-common-challenges-applicants-face');
  if (mg_provisional_list_common_challenges_applicants_face) {
    gsap.from('#mg-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_how_we_solve_these_challenges = document.getElementById('mg-provisional-list-how-we-solve-these-challenges');
  if (mg_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#mg-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_naturalisation_overview = document.getElementById('mg-provisional-section-naturalisation-overview');
  if (mg_provisional_section_naturalisation_overview) {
    gsap.fromTo('#mg-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_form_who_is_this_naturalisation_for = document.getElementById('mg-provisional-form-who-is-this-naturalisation-for');
  if (mg_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#mg-provisional-form-who-is-this-naturalisation-for input, #mg-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_required_documents = document.getElementById('mg-provisional-list-required-documents');
  if (mg_provisional_list_required_documents) {
    gsap.from('#mg-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_application_process = document.getElementById('mg-provisional-list-application-process');
  if (mg_provisional_list_application_process) {
    gsap.from('#mg-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_timelines_deadlines = document.getElementById('mg-provisional-section-timelines-deadlines');
  if (mg_provisional_section_timelines_deadlines) {
    gsap.fromTo('#mg-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_fees_costs = document.getElementById('mg-provisional-section-fees-costs');
  if (mg_provisional_section_fees_costs) {
    gsap.fromTo('#mg-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_risks_common_mistakes = document.getElementById('mg-provisional-list-risks-common-mistakes');
  if (mg_provisional_list_risks_common_mistakes) {
    gsap.from('#mg-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_diy_vs_professional_assistance = document.getElementById('mg-provisional-section-diy-vs-professional-assistance');
  if (mg_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_minas_gerais_specific_context = document.getElementById('mg-provisional-section-minas-gerais-specific-context');
  if (mg_provisional_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-provisional-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_what_our_clients_say = document.getElementById('mg-provisional-section-what-our-clients-say');
  if (mg_provisional_section_what_our_clients_say) {
    gsap.fromTo('#mg-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_frequently_asked_questions = document.getElementById('mg-provisional-section-frequently-asked-questions');
  if (mg_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#mg-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_international_support = document.getElementById('mg-provisional-section-international-support');
  if (mg_provisional_section_international_support) {
    gsap.fromTo('#mg-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_our_credentials = document.getElementById('mg-provisional-list-our-credentials');
  if (mg_provisional_list_our_credentials) {
    gsap.from('#mg-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_list_related_services = document.getElementById('mg-provisional-list-related-services');
  if (mg_provisional_list_related_services) {
    gsap.from('#mg-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_youre_in_good_hands = document.getElementById('mg-provisional-section-youre-in-good-hands');
  if (mg_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#mg-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_provisional_section_21 = document.getElementById('mg-provisional-section-21');
  if (mg_provisional_section_21) {
    gsap.fromTo('#mg-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('mg-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (mg_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#mg-special-form-special-naturalisation-in-brazil-for-particular-cases input, #mg-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_quick_facts = document.getElementById('mg-special-list-quick-facts');
  if (mg_special_list_quick_facts) {
    gsap.from('#mg-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_common_challenges_applicants_face = document.getElementById('mg-special-list-common-challenges-applicants-face');
  if (mg_special_list_common_challenges_applicants_face) {
    gsap.from('#mg-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_how_we_solve_these_challenges = document.getElementById('mg-special-list-how-we-solve-these-challenges');
  if (mg_special_list_how_we_solve_these_challenges) {
    gsap.from('#mg-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_naturalisation_overview = document.getElementById('mg-special-section-naturalisation-overview');
  if (mg_special_section_naturalisation_overview) {
    gsap.fromTo('#mg-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_form_who_is_this_naturalisation_for = document.getElementById('mg-special-form-who-is-this-naturalisation-for');
  if (mg_special_form_who_is_this_naturalisation_for) {
    gsap.from('#mg-special-form-who-is-this-naturalisation-for input, #mg-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_required_documents = document.getElementById('mg-special-list-required-documents');
  if (mg_special_list_required_documents) {
    gsap.from('#mg-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_application_process = document.getElementById('mg-special-list-application-process');
  if (mg_special_list_application_process) {
    gsap.from('#mg-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_timelines_deadlines = document.getElementById('mg-special-section-timelines-deadlines');
  if (mg_special_section_timelines_deadlines) {
    gsap.fromTo('#mg-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_fees_costs = document.getElementById('mg-special-section-fees-costs');
  if (mg_special_section_fees_costs) {
    gsap.fromTo('#mg-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_risks_common_mistakes = document.getElementById('mg-special-list-risks-common-mistakes');
  if (mg_special_list_risks_common_mistakes) {
    gsap.from('#mg-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_diy_vs_professional_assistance = document.getElementById('mg-special-section-diy-vs-professional-assistance');
  if (mg_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_minas_gerais_specific_context = document.getElementById('mg-special-section-minas-gerais-specific-context');
  if (mg_special_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-special-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_what_our_clients_say = document.getElementById('mg-special-section-what-our-clients-say');
  if (mg_special_section_what_our_clients_say) {
    gsap.fromTo('#mg-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_frequently_asked_questions = document.getElementById('mg-special-section-frequently-asked-questions');
  if (mg_special_section_frequently_asked_questions) {
    gsap.fromTo('#mg-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_international_support = document.getElementById('mg-special-section-international-support');
  if (mg_special_section_international_support) {
    gsap.fromTo('#mg-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_our_credentials = document.getElementById('mg-special-list-our-credentials');
  if (mg_special_list_our_credentials) {
    gsap.from('#mg-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_list_related_services = document.getElementById('mg-special-list-related-services');
  if (mg_special_list_related_services) {
    gsap.from('#mg-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_youre_in_good_hands = document.getElementById('mg-special-section-youre-in-good-hands');
  if (mg_special_section_youre_in_good_hands) {
    gsap.fromTo('#mg-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_special_section_21 = document.getElementById('mg-special-section-21');
  if (mg_special_section_21) {
    gsap.fromTo('#mg-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('mg-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (mg_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#mg-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #mg-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_quick_facts = document.getElementById('mg-ordinary-list-quick-facts');
  if (mg_ordinary_list_quick_facts) {
    gsap.from('#mg-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_common_challenges_applicants_face = document.getElementById('mg-ordinary-list-common-challenges-applicants-face');
  if (mg_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#mg-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_how_we_solve_these_challenges = document.getElementById('mg-ordinary-list-how-we-solve-these-challenges');
  if (mg_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#mg-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_naturalisation_overview = document.getElementById('mg-ordinary-section-naturalisation-overview');
  if (mg_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#mg-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_form_who_is_this_naturalisation_for = document.getElementById('mg-ordinary-form-who-is-this-naturalisation-for');
  if (mg_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#mg-ordinary-form-who-is-this-naturalisation-for input, #mg-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_required_documents = document.getElementById('mg-ordinary-list-required-documents');
  if (mg_ordinary_list_required_documents) {
    gsap.from('#mg-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_application_process = document.getElementById('mg-ordinary-list-application-process');
  if (mg_ordinary_list_application_process) {
    gsap.from('#mg-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_timelines_deadlines = document.getElementById('mg-ordinary-section-timelines-deadlines');
  if (mg_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#mg-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_fees_costs = document.getElementById('mg-ordinary-section-fees-costs');
  if (mg_ordinary_section_fees_costs) {
    gsap.fromTo('#mg-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_risks_common_mistakes = document.getElementById('mg-ordinary-list-risks-common-mistakes');
  if (mg_ordinary_list_risks_common_mistakes) {
    gsap.from('#mg-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_diy_vs_professional_assistance = document.getElementById('mg-ordinary-section-diy-vs-professional-assistance');
  if (mg_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_minas_gerais_specific_context = document.getElementById('mg-ordinary-section-minas-gerais-specific-context');
  if (mg_ordinary_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-ordinary-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_what_our_clients_say = document.getElementById('mg-ordinary-section-what-our-clients-say');
  if (mg_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#mg-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_frequently_asked_questions = document.getElementById('mg-ordinary-section-frequently-asked-questions');
  if (mg_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#mg-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_international_support = document.getElementById('mg-ordinary-section-international-support');
  if (mg_ordinary_section_international_support) {
    gsap.fromTo('#mg-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_our_credentials = document.getElementById('mg-ordinary-list-our-credentials');
  if (mg_ordinary_list_our_credentials) {
    gsap.from('#mg-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_list_related_services = document.getElementById('mg-ordinary-list-related-services');
  if (mg_ordinary_list_related_services) {
    gsap.from('#mg-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_youre_in_good_hands = document.getElementById('mg-ordinary-section-youre-in-good-hands');
  if (mg_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#mg-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_ordinary_section_21 = document.getElementById('mg-ordinary-section-21');
  if (mg_ordinary_section_21) {
    gsap.fromTo('#mg-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('mg-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (mg_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#mg-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #mg-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_quick_facts = document.getElementById('mg-extraordinary-list-quick-facts');
  if (mg_extraordinary_list_quick_facts) {
    gsap.from('#mg-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_common_challenges_applicants_face = document.getElementById('mg-extraordinary-list-common-challenges-applicants-face');
  if (mg_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#mg-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_how_we_solve_these_challenges = document.getElementById('mg-extraordinary-list-how-we-solve-these-challenges');
  if (mg_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#mg-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_naturalisation_overview = document.getElementById('mg-extraordinary-section-naturalisation-overview');
  if (mg_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#mg-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('mg-extraordinary-form-who-is-this-naturalisation-for');
  if (mg_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#mg-extraordinary-form-who-is-this-naturalisation-for input, #mg-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_required_documents = document.getElementById('mg-extraordinary-list-required-documents');
  if (mg_extraordinary_list_required_documents) {
    gsap.from('#mg-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_application_process = document.getElementById('mg-extraordinary-list-application-process');
  if (mg_extraordinary_list_application_process) {
    gsap.from('#mg-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_timelines_deadlines = document.getElementById('mg-extraordinary-section-timelines-deadlines');
  if (mg_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#mg-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_fees_costs = document.getElementById('mg-extraordinary-section-fees-costs');
  if (mg_extraordinary_section_fees_costs) {
    gsap.fromTo('#mg-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_risks_common_mistakes = document.getElementById('mg-extraordinary-list-risks-common-mistakes');
  if (mg_extraordinary_list_risks_common_mistakes) {
    gsap.from('#mg-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_diy_vs_professional_assistance = document.getElementById('mg-extraordinary-section-diy-vs-professional-assistance');
  if (mg_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_minas_gerais_specific_context = document.getElementById('mg-extraordinary-section-minas-gerais-specific-context');
  if (mg_extraordinary_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-extraordinary-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_what_our_clients_say = document.getElementById('mg-extraordinary-section-what-our-clients-say');
  if (mg_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#mg-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_frequently_asked_questions = document.getElementById('mg-extraordinary-section-frequently-asked-questions');
  if (mg_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#mg-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_international_support = document.getElementById('mg-extraordinary-section-international-support');
  if (mg_extraordinary_section_international_support) {
    gsap.fromTo('#mg-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_our_credentials = document.getElementById('mg-extraordinary-list-our-credentials');
  if (mg_extraordinary_list_our_credentials) {
    gsap.from('#mg-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_list_related_services = document.getElementById('mg-extraordinary-list-related-services');
  if (mg_extraordinary_list_related_services) {
    gsap.from('#mg-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_youre_in_good_hands = document.getElementById('mg-extraordinary-section-youre-in-good-hands');
  if (mg_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#mg-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extraordinary_section_21 = document.getElementById('mg-extraordinary-section-21');
  if (mg_extraordinary_section_21) {
    gsap.fromTo('#mg-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('mg-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (mg_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#mg-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #mg-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_quick_facts = document.getElementById('mg-reacquisitioncitizenship-list-quick-facts');
  if (mg_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#mg-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('mg-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (mg_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#mg-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('mg-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (mg_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#mg-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('mg-reacquisitioncitizenship-section-reacquisition-overview');
  if (mg_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('mg-reacquisitioncitizenship-form-who-is-this-for');
  if (mg_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#mg-reacquisitioncitizenship-form-who-is-this-for input, #mg-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_required_documents = document.getElementById('mg-reacquisitioncitizenship-list-required-documents');
  if (mg_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#mg-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_process = document.getElementById('mg-reacquisitioncitizenship-list-process');
  if (mg_reacquisitioncitizenship_list_process) {
    gsap.from('#mg-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('mg-reacquisitioncitizenship-section-timelines-deadlines');
  if (mg_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_fees_costs = document.getElementById('mg-reacquisitioncitizenship-section-fees-costs');
  if (mg_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('mg-reacquisitioncitizenship-list-risks-common-mistakes');
  if (mg_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#mg-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('mg-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (mg_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_minas_gerais_specific_context = document.getElementById('mg-reacquisitioncitizenship-section-minas-gerais-specific-context');
  if (mg_reacquisitioncitizenship_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('mg-reacquisitioncitizenship-section-what-our-clients-say');
  if (mg_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('mg-reacquisitioncitizenship-section-frequently-asked-questions');
  if (mg_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_international_support = document.getElementById('mg-reacquisitioncitizenship-section-international-support');
  if (mg_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_our_credentials = document.getElementById('mg-reacquisitioncitizenship-list-our-credentials');
  if (mg_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#mg-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_list_related_services = document.getElementById('mg-reacquisitioncitizenship-list-related-services');
  if (mg_reacquisitioncitizenship_list_related_services) {
    gsap.from('#mg-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('mg-reacquisitioncitizenship-section-youre-in-good-hands');
  if (mg_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_reacquisitioncitizenship_section_21 = document.getElementById('mg-reacquisitioncitizenship-section-21');
  if (mg_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#mg-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('mg-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (mg_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#mg-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #mg-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_quick_facts = document.getElementById('mg-scientificresearch-list-quick-facts');
  if (mg_scientificresearch_list_quick_facts) {
    gsap.from('#mg-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_common_challenges_applicants_face = document.getElementById('mg-scientificresearch-list-common-challenges-applicants-face');
  if (mg_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#mg-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('mg-scientificresearch-list-how-we-solve-these-challenges');
  if (mg_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#mg-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_residency_overview = document.getElementById('mg-scientificresearch-section-residency-overview');
  if (mg_scientificresearch_section_residency_overview) {
    gsap.fromTo('#mg-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_form_who_is_this_residency_for = document.getElementById('mg-scientificresearch-form-who-is-this-residency-for');
  if (mg_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#mg-scientificresearch-form-who-is-this-residency-for input, #mg-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_required_documents = document.getElementById('mg-scientificresearch-list-required-documents');
  if (mg_scientificresearch_list_required_documents) {
    gsap.from('#mg-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_application_process = document.getElementById('mg-scientificresearch-list-application-process');
  if (mg_scientificresearch_list_application_process) {
    gsap.from('#mg-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_timelines_deadlines = document.getElementById('mg-scientificresearch-section-timelines-deadlines');
  if (mg_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#mg-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_fees_costs = document.getElementById('mg-scientificresearch-section-fees-costs');
  if (mg_scientificresearch_section_fees_costs) {
    gsap.fromTo('#mg-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_risks_common_mistakes = document.getElementById('mg-scientificresearch-list-risks-common-mistakes');
  if (mg_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#mg-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('mg-scientificresearch-section-diy-vs-professional-assistance');
  if (mg_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_minas_gerais_specific_context = document.getElementById('mg-scientificresearch-section-minas-gerais-specific-context');
  if (mg_scientificresearch_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-scientificresearch-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_what_our_clients_say = document.getElementById('mg-scientificresearch-section-what-our-clients-say');
  if (mg_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#mg-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_frequently_asked_questions = document.getElementById('mg-scientificresearch-section-frequently-asked-questions');
  if (mg_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#mg-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_international_support = document.getElementById('mg-scientificresearch-section-international-support');
  if (mg_scientificresearch_section_international_support) {
    gsap.fromTo('#mg-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_our_credentials = document.getElementById('mg-scientificresearch-list-our-credentials');
  if (mg_scientificresearch_list_our_credentials) {
    gsap.from('#mg-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_list_related_services = document.getElementById('mg-scientificresearch-list-related-services');
  if (mg_scientificresearch_list_related_services) {
    gsap.from('#mg-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_youre_in_good_hands = document.getElementById('mg-scientificresearch-section-youre-in-good-hands');
  if (mg_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#mg-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_scientificresearch_section_21 = document.getElementById('mg-scientificresearch-section-21');
  if (mg_scientificresearch_section_21) {
    gsap.fromTo('#mg-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_form_study_in_brazil_with_study_residency = document.getElementById('mg-study-form-study-in-brazil-with-study-residency');
  if (mg_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#mg-study-form-study-in-brazil-with-study-residency input, #mg-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_quick_facts = document.getElementById('mg-study-list-quick-facts');
  if (mg_study_list_quick_facts) {
    gsap.from('#mg-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_common_challenges_applicants_face = document.getElementById('mg-study-list-common-challenges-applicants-face');
  if (mg_study_list_common_challenges_applicants_face) {
    gsap.from('#mg-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_how_we_solve_these_challenges = document.getElementById('mg-study-list-how-we-solve-these-challenges');
  if (mg_study_list_how_we_solve_these_challenges) {
    gsap.from('#mg-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_residency_overview = document.getElementById('mg-study-section-residency-overview');
  if (mg_study_section_residency_overview) {
    gsap.fromTo('#mg-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_form_who_is_this_residency_for = document.getElementById('mg-study-form-who-is-this-residency-for');
  if (mg_study_form_who_is_this_residency_for) {
    gsap.from('#mg-study-form-who-is-this-residency-for input, #mg-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_required_documents = document.getElementById('mg-study-list-required-documents');
  if (mg_study_list_required_documents) {
    gsap.from('#mg-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_application_process = document.getElementById('mg-study-list-application-process');
  if (mg_study_list_application_process) {
    gsap.from('#mg-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_timelines_deadlines = document.getElementById('mg-study-section-timelines-deadlines');
  if (mg_study_section_timelines_deadlines) {
    gsap.fromTo('#mg-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_fees_costs = document.getElementById('mg-study-section-fees-costs');
  if (mg_study_section_fees_costs) {
    gsap.fromTo('#mg-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_risks_common_mistakes = document.getElementById('mg-study-list-risks-common-mistakes');
  if (mg_study_list_risks_common_mistakes) {
    gsap.from('#mg-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_diy_vs_professional_assistance = document.getElementById('mg-study-section-diy-vs-professional-assistance');
  if (mg_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_minas_gerais_specific_context = document.getElementById('mg-study-section-minas-gerais-specific-context');
  if (mg_study_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-study-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_what_our_clients_say = document.getElementById('mg-study-section-what-our-clients-say');
  if (mg_study_section_what_our_clients_say) {
    gsap.fromTo('#mg-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_frequently_asked_questions = document.getElementById('mg-study-section-frequently-asked-questions');
  if (mg_study_section_frequently_asked_questions) {
    gsap.fromTo('#mg-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_international_support = document.getElementById('mg-study-section-international-support');
  if (mg_study_section_international_support) {
    gsap.fromTo('#mg-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_our_credentials = document.getElementById('mg-study-list-our-credentials');
  if (mg_study_list_our_credentials) {
    gsap.from('#mg-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_list_related_services = document.getElementById('mg-study-list-related-services');
  if (mg_study_list_related_services) {
    gsap.from('#mg-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_youre_in_good_hands = document.getElementById('mg-study-section-youre-in-good-hands');
  if (mg_study_section_youre_in_good_hands) {
    gsap.fromTo('#mg-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_study_section_21 = document.getElementById('mg-study-section-21');
  if (mg_study_section_21) {
    gsap.fromTo('#mg-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('mg-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (mg_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#mg-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #mg-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_quick_facts = document.getElementById('mg-educationalexchange-list-quick-facts');
  if (mg_educationalexchange_list_quick_facts) {
    gsap.from('#mg-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_common_challenges_applicants_face = document.getElementById('mg-educationalexchange-list-common-challenges-applicants-face');
  if (mg_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#mg-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('mg-educationalexchange-list-how-we-solve-these-challenges');
  if (mg_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#mg-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_residency_overview = document.getElementById('mg-educationalexchange-section-residency-overview');
  if (mg_educationalexchange_section_residency_overview) {
    gsap.fromTo('#mg-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_form_who_is_this_residency_for = document.getElementById('mg-educationalexchange-form-who-is-this-residency-for');
  if (mg_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#mg-educationalexchange-form-who-is-this-residency-for input, #mg-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_required_documents = document.getElementById('mg-educationalexchange-list-required-documents');
  if (mg_educationalexchange_list_required_documents) {
    gsap.from('#mg-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_application_process = document.getElementById('mg-educationalexchange-list-application-process');
  if (mg_educationalexchange_list_application_process) {
    gsap.from('#mg-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_timelines_deadlines = document.getElementById('mg-educationalexchange-section-timelines-deadlines');
  if (mg_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#mg-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_fees_costs = document.getElementById('mg-educationalexchange-section-fees-costs');
  if (mg_educationalexchange_section_fees_costs) {
    gsap.fromTo('#mg-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_risks_common_mistakes = document.getElementById('mg-educationalexchange-list-risks-common-mistakes');
  if (mg_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#mg-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('mg-educationalexchange-section-diy-vs-professional-assistance');
  if (mg_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_minas_gerais_specific_context = document.getElementById('mg-educationalexchange-section-minas-gerais-specific-context');
  if (mg_educationalexchange_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-educationalexchange-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_what_our_clients_say = document.getElementById('mg-educationalexchange-section-what-our-clients-say');
  if (mg_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#mg-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_frequently_asked_questions = document.getElementById('mg-educationalexchange-section-frequently-asked-questions');
  if (mg_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#mg-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_international_support = document.getElementById('mg-educationalexchange-section-international-support');
  if (mg_educationalexchange_section_international_support) {
    gsap.fromTo('#mg-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_our_credentials = document.getElementById('mg-educationalexchange-list-our-credentials');
  if (mg_educationalexchange_list_our_credentials) {
    gsap.from('#mg-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_list_related_services = document.getElementById('mg-educationalexchange-list-related-services');
  if (mg_educationalexchange_list_related_services) {
    gsap.from('#mg-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_youre_in_good_hands = document.getElementById('mg-educationalexchange-section-youre-in-good-hands');
  if (mg_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#mg-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_educationalexchange_section_21 = document.getElementById('mg-educationalexchange-section-21');
  if (mg_educationalexchange_section_21) {
    gsap.fromTo('#mg-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('mg-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (mg_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#mg-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #mg-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_quick_facts = document.getElementById('mg-humanitarian-list-quick-facts');
  if (mg_humanitarian_list_quick_facts) {
    gsap.from('#mg-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_common_challenges_applicants_face = document.getElementById('mg-humanitarian-list-common-challenges-applicants-face');
  if (mg_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#mg-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_how_we_solve_these_challenges = document.getElementById('mg-humanitarian-list-how-we-solve-these-challenges');
  if (mg_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#mg-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_residency_overview = document.getElementById('mg-humanitarian-section-residency-overview');
  if (mg_humanitarian_section_residency_overview) {
    gsap.fromTo('#mg-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_form_who_is_this_residency_for = document.getElementById('mg-humanitarian-form-who-is-this-residency-for');
  if (mg_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#mg-humanitarian-form-who-is-this-residency-for input, #mg-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_required_documents = document.getElementById('mg-humanitarian-list-required-documents');
  if (mg_humanitarian_list_required_documents) {
    gsap.from('#mg-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_application_process = document.getElementById('mg-humanitarian-list-application-process');
  if (mg_humanitarian_list_application_process) {
    gsap.from('#mg-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_timelines_deadlines = document.getElementById('mg-humanitarian-section-timelines-deadlines');
  if (mg_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#mg-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_fees_costs = document.getElementById('mg-humanitarian-section-fees-costs');
  if (mg_humanitarian_section_fees_costs) {
    gsap.fromTo('#mg-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_risks_common_mistakes = document.getElementById('mg-humanitarian-list-risks-common-mistakes');
  if (mg_humanitarian_list_risks_common_mistakes) {
    gsap.from('#mg-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_diy_vs_professional_assistance = document.getElementById('mg-humanitarian-section-diy-vs-professional-assistance');
  if (mg_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_minas_gerais_specific_context = document.getElementById('mg-humanitarian-section-minas-gerais-specific-context');
  if (mg_humanitarian_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-humanitarian-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_what_our_clients_say = document.getElementById('mg-humanitarian-section-what-our-clients-say');
  if (mg_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#mg-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_frequently_asked_questions = document.getElementById('mg-humanitarian-section-frequently-asked-questions');
  if (mg_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#mg-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_international_support = document.getElementById('mg-humanitarian-section-international-support');
  if (mg_humanitarian_section_international_support) {
    gsap.fromTo('#mg-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_our_credentials = document.getElementById('mg-humanitarian-list-our-credentials');
  if (mg_humanitarian_list_our_credentials) {
    gsap.from('#mg-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_list_related_services = document.getElementById('mg-humanitarian-list-related-services');
  if (mg_humanitarian_list_related_services) {
    gsap.from('#mg-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_youre_in_good_hands = document.getElementById('mg-humanitarian-section-youre-in-good-hands');
  if (mg_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#mg-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_humanitarian_section_21 = document.getElementById('mg-humanitarian-section-21');
  if (mg_humanitarian_section_21) {
    gsap.fromTo('#mg-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('mg-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (mg_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#mg-digitalnomad-form-digital-nomad-residency-in-brazil input, #mg-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_quick_facts = document.getElementById('mg-digitalnomad-list-quick-facts');
  if (mg_digitalnomad_list_quick_facts) {
    gsap.from('#mg-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_common_challenges_applicants_face = document.getElementById('mg-digitalnomad-list-common-challenges-applicants-face');
  if (mg_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#mg-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('mg-digitalnomad-list-how-we-solve-these-challenges');
  if (mg_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#mg-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_residency_overview = document.getElementById('mg-digitalnomad-section-residency-overview');
  if (mg_digitalnomad_section_residency_overview) {
    gsap.fromTo('#mg-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_form_who_is_this_residency_for = document.getElementById('mg-digitalnomad-form-who-is-this-residency-for');
  if (mg_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#mg-digitalnomad-form-who-is-this-residency-for input, #mg-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_required_documents = document.getElementById('mg-digitalnomad-list-required-documents');
  if (mg_digitalnomad_list_required_documents) {
    gsap.from('#mg-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_application_process = document.getElementById('mg-digitalnomad-list-application-process');
  if (mg_digitalnomad_list_application_process) {
    gsap.from('#mg-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_timelines_deadlines = document.getElementById('mg-digitalnomad-section-timelines-deadlines');
  if (mg_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#mg-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_fees_costs = document.getElementById('mg-digitalnomad-section-fees-costs');
  if (mg_digitalnomad_section_fees_costs) {
    gsap.fromTo('#mg-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_risks_common_mistakes = document.getElementById('mg-digitalnomad-list-risks-common-mistakes');
  if (mg_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#mg-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('mg-digitalnomad-section-diy-vs-professional-assistance');
  if (mg_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_minas_gerais_specific_context = document.getElementById('mg-digitalnomad-section-minas-gerais-specific-context');
  if (mg_digitalnomad_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-digitalnomad-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_what_our_clients_say = document.getElementById('mg-digitalnomad-section-what-our-clients-say');
  if (mg_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#mg-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_frequently_asked_questions = document.getElementById('mg-digitalnomad-section-frequently-asked-questions');
  if (mg_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#mg-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_international_support = document.getElementById('mg-digitalnomad-section-international-support');
  if (mg_digitalnomad_section_international_support) {
    gsap.fromTo('#mg-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_our_credentials = document.getElementById('mg-digitalnomad-list-our-credentials');
  if (mg_digitalnomad_list_our_credentials) {
    gsap.from('#mg-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_list_related_services = document.getElementById('mg-digitalnomad-list-related-services');
  if (mg_digitalnomad_list_related_services) {
    gsap.from('#mg-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_youre_in_good_hands = document.getElementById('mg-digitalnomad-section-youre-in-good-hands');
  if (mg_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#mg-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_digitalnomad_section_21 = document.getElementById('mg-digitalnomad-section-21');
  if (mg_digitalnomad_section_21) {
    gsap.fromTo('#mg-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('mg-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (mg_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#mg-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #mg-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_quick_facts = document.getElementById('mg-familyreunion-list-quick-facts');
  if (mg_familyreunion_list_quick_facts) {
    gsap.from('#mg-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_common_challenges_applicants_face = document.getElementById('mg-familyreunion-list-common-challenges-applicants-face');
  if (mg_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#mg-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_how_we_solve_these_challenges = document.getElementById('mg-familyreunion-list-how-we-solve-these-challenges');
  if (mg_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#mg-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_residency_overview = document.getElementById('mg-familyreunion-section-residency-overview');
  if (mg_familyreunion_section_residency_overview) {
    gsap.fromTo('#mg-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_form_who_is_this_residency_for = document.getElementById('mg-familyreunion-form-who-is-this-residency-for');
  if (mg_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#mg-familyreunion-form-who-is-this-residency-for input, #mg-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_required_documents = document.getElementById('mg-familyreunion-list-required-documents');
  if (mg_familyreunion_list_required_documents) {
    gsap.from('#mg-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_application_process = document.getElementById('mg-familyreunion-list-application-process');
  if (mg_familyreunion_list_application_process) {
    gsap.from('#mg-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_timelines_deadlines = document.getElementById('mg-familyreunion-section-timelines-deadlines');
  if (mg_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#mg-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_fees_costs = document.getElementById('mg-familyreunion-section-fees-costs');
  if (mg_familyreunion_section_fees_costs) {
    gsap.fromTo('#mg-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_risks_common_mistakes = document.getElementById('mg-familyreunion-list-risks-common-mistakes');
  if (mg_familyreunion_list_risks_common_mistakes) {
    gsap.from('#mg-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_diy_vs_professional_assistance = document.getElementById('mg-familyreunion-section-diy-vs-professional-assistance');
  if (mg_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_minas_gerais_specific_context = document.getElementById('mg-familyreunion-section-minas-gerais-specific-context');
  if (mg_familyreunion_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-familyreunion-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_what_our_clients_say = document.getElementById('mg-familyreunion-section-what-our-clients-say');
  if (mg_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#mg-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_frequently_asked_questions = document.getElementById('mg-familyreunion-section-frequently-asked-questions');
  if (mg_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#mg-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_international_support = document.getElementById('mg-familyreunion-section-international-support');
  if (mg_familyreunion_section_international_support) {
    gsap.fromTo('#mg-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_our_credentials = document.getElementById('mg-familyreunion-list-our-credentials');
  if (mg_familyreunion_list_our_credentials) {
    gsap.from('#mg-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_list_related_services = document.getElementById('mg-familyreunion-list-related-services');
  if (mg_familyreunion_list_related_services) {
    gsap.from('#mg-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_youre_in_good_hands = document.getElementById('mg-familyreunion-section-youre-in-good-hands');
  if (mg_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#mg-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_familyreunion_section_21 = document.getElementById('mg-familyreunion-section-21');
  if (mg_familyreunion_section_21) {
    gsap.fromTo('#mg-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('mg-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (mg_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#mg-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #mg-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_quick_facts = document.getElementById('mg-mercosul-list-quick-facts');
  if (mg_mercosul_list_quick_facts) {
    gsap.from('#mg-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_common_challenges_applicants_face = document.getElementById('mg-mercosul-list-common-challenges-applicants-face');
  if (mg_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#mg-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_how_we_solve_these_challenges = document.getElementById('mg-mercosul-list-how-we-solve-these-challenges');
  if (mg_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#mg-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_residency_overview = document.getElementById('mg-mercosul-section-residency-overview');
  if (mg_mercosul_section_residency_overview) {
    gsap.fromTo('#mg-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_form_who_is_this_residency_for = document.getElementById('mg-mercosul-form-who-is-this-residency-for');
  if (mg_mercosul_form_who_is_this_residency_for) {
    gsap.from('#mg-mercosul-form-who-is-this-residency-for input, #mg-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_required_documents = document.getElementById('mg-mercosul-list-required-documents');
  if (mg_mercosul_list_required_documents) {
    gsap.from('#mg-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_application_process = document.getElementById('mg-mercosul-list-application-process');
  if (mg_mercosul_list_application_process) {
    gsap.from('#mg-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_timelines_deadlines = document.getElementById('mg-mercosul-section-timelines-deadlines');
  if (mg_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#mg-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_fees_costs = document.getElementById('mg-mercosul-section-fees-costs');
  if (mg_mercosul_section_fees_costs) {
    gsap.fromTo('#mg-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_risks_common_mistakes = document.getElementById('mg-mercosul-list-risks-common-mistakes');
  if (mg_mercosul_list_risks_common_mistakes) {
    gsap.from('#mg-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_diy_vs_professional_assistance = document.getElementById('mg-mercosul-section-diy-vs-professional-assistance');
  if (mg_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_minas_gerais_specific_context = document.getElementById('mg-mercosul-section-minas-gerais-specific-context');
  if (mg_mercosul_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-mercosul-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_what_our_clients_say = document.getElementById('mg-mercosul-section-what-our-clients-say');
  if (mg_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#mg-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_frequently_asked_questions = document.getElementById('mg-mercosul-section-frequently-asked-questions');
  if (mg_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#mg-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_international_support = document.getElementById('mg-mercosul-section-international-support');
  if (mg_mercosul_section_international_support) {
    gsap.fromTo('#mg-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_our_credentials = document.getElementById('mg-mercosul-list-our-credentials');
  if (mg_mercosul_list_our_credentials) {
    gsap.from('#mg-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_list_related_services = document.getElementById('mg-mercosul-list-related-services');
  if (mg_mercosul_list_related_services) {
    gsap.from('#mg-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_youre_in_good_hands = document.getElementById('mg-mercosul-section-youre-in-good-hands');
  if (mg_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#mg-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_mercosul_section_21 = document.getElementById('mg-mercosul-section-21');
  if (mg_mercosul_section_21) {
    gsap.fromTo('#mg-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('mg-retiree-form-retire-in-brazil-with-retiree-residency');
  if (mg_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#mg-retiree-form-retire-in-brazil-with-retiree-residency input, #mg-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_quick_facts = document.getElementById('mg-retiree-list-quick-facts');
  if (mg_retiree_list_quick_facts) {
    gsap.from('#mg-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_common_challenges_applicants_face = document.getElementById('mg-retiree-list-common-challenges-applicants-face');
  if (mg_retiree_list_common_challenges_applicants_face) {
    gsap.from('#mg-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_how_we_solve_these_challenges = document.getElementById('mg-retiree-list-how-we-solve-these-challenges');
  if (mg_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#mg-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_residency_overview = document.getElementById('mg-retiree-section-residency-overview');
  if (mg_retiree_section_residency_overview) {
    gsap.fromTo('#mg-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_form_who_is_this_residency_for = document.getElementById('mg-retiree-form-who-is-this-residency-for');
  if (mg_retiree_form_who_is_this_residency_for) {
    gsap.from('#mg-retiree-form-who-is-this-residency-for input, #mg-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_required_documents = document.getElementById('mg-retiree-list-required-documents');
  if (mg_retiree_list_required_documents) {
    gsap.from('#mg-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_application_process = document.getElementById('mg-retiree-list-application-process');
  if (mg_retiree_list_application_process) {
    gsap.from('#mg-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_timelines_deadlines = document.getElementById('mg-retiree-section-timelines-deadlines');
  if (mg_retiree_section_timelines_deadlines) {
    gsap.fromTo('#mg-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_fees_costs = document.getElementById('mg-retiree-section-fees-costs');
  if (mg_retiree_section_fees_costs) {
    gsap.fromTo('#mg-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_risks_common_mistakes = document.getElementById('mg-retiree-list-risks-common-mistakes');
  if (mg_retiree_list_risks_common_mistakes) {
    gsap.from('#mg-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_diy_vs_professional_assistance = document.getElementById('mg-retiree-section-diy-vs-professional-assistance');
  if (mg_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_minas_gerais_specific_context = document.getElementById('mg-retiree-section-minas-gerais-specific-context');
  if (mg_retiree_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-retiree-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_what_our_clients_say = document.getElementById('mg-retiree-section-what-our-clients-say');
  if (mg_retiree_section_what_our_clients_say) {
    gsap.fromTo('#mg-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_frequently_asked_questions = document.getElementById('mg-retiree-section-frequently-asked-questions');
  if (mg_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#mg-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_international_support = document.getElementById('mg-retiree-section-international-support');
  if (mg_retiree_section_international_support) {
    gsap.fromTo('#mg-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_our_credentials = document.getElementById('mg-retiree-list-our-credentials');
  if (mg_retiree_list_our_credentials) {
    gsap.from('#mg-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_list_related_services = document.getElementById('mg-retiree-list-related-services');
  if (mg_retiree_list_related_services) {
    gsap.from('#mg-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_youre_in_good_hands = document.getElementById('mg-retiree-section-youre-in-good-hands');
  if (mg_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#mg-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_retiree_section_21 = document.getElementById('mg-retiree-section-21');
  if (mg_retiree_section_21) {
    gsap.fromTo('#mg-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('mg-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (mg_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#mg-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #mg-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_quick_facts = document.getElementById('mg-volunteer-list-quick-facts');
  if (mg_volunteer_list_quick_facts) {
    gsap.from('#mg-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_common_challenges_applicants_face = document.getElementById('mg-volunteer-list-common-challenges-applicants-face');
  if (mg_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#mg-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_how_we_solve_these_challenges = document.getElementById('mg-volunteer-list-how-we-solve-these-challenges');
  if (mg_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#mg-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_residency_overview = document.getElementById('mg-volunteer-section-residency-overview');
  if (mg_volunteer_section_residency_overview) {
    gsap.fromTo('#mg-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_form_who_is_this_residency_for = document.getElementById('mg-volunteer-form-who-is-this-residency-for');
  if (mg_volunteer_form_who_is_this_residency_for) {
    gsap.from('#mg-volunteer-form-who-is-this-residency-for input, #mg-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_required_documents = document.getElementById('mg-volunteer-list-required-documents');
  if (mg_volunteer_list_required_documents) {
    gsap.from('#mg-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_application_process = document.getElementById('mg-volunteer-list-application-process');
  if (mg_volunteer_list_application_process) {
    gsap.from('#mg-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_timelines_deadlines = document.getElementById('mg-volunteer-section-timelines-deadlines');
  if (mg_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#mg-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_fees_costs = document.getElementById('mg-volunteer-section-fees-costs');
  if (mg_volunteer_section_fees_costs) {
    gsap.fromTo('#mg-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_risks_common_mistakes = document.getElementById('mg-volunteer-list-risks-common-mistakes');
  if (mg_volunteer_list_risks_common_mistakes) {
    gsap.from('#mg-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_diy_vs_professional_assistance = document.getElementById('mg-volunteer-section-diy-vs-professional-assistance');
  if (mg_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_minas_gerais_specific_context = document.getElementById('mg-volunteer-section-minas-gerais-specific-context');
  if (mg_volunteer_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-volunteer-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_what_our_clients_say = document.getElementById('mg-volunteer-section-what-our-clients-say');
  if (mg_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#mg-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_frequently_asked_questions = document.getElementById('mg-volunteer-section-frequently-asked-questions');
  if (mg_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#mg-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_international_support = document.getElementById('mg-volunteer-section-international-support');
  if (mg_volunteer_section_international_support) {
    gsap.fromTo('#mg-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_our_credentials = document.getElementById('mg-volunteer-list-our-credentials');
  if (mg_volunteer_list_our_credentials) {
    gsap.from('#mg-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_list_related_services = document.getElementById('mg-volunteer-list-related-services');
  if (mg_volunteer_list_related_services) {
    gsap.from('#mg-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_youre_in_good_hands = document.getElementById('mg-volunteer-section-youre-in-good-hands');
  if (mg_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#mg-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_volunteer_section_21 = document.getElementById('mg-volunteer-section-21');
  if (mg_volunteer_section_21) {
    gsap.fromTo('#mg-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('mg-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (mg_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#mg-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #mg-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_quick_facts = document.getElementById('mg-skilledworker-list-quick-facts');
  if (mg_skilledworker_list_quick_facts) {
    gsap.from('#mg-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_common_challenges_applicants_face = document.getElementById('mg-skilledworker-list-common-challenges-applicants-face');
  if (mg_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#mg-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_how_we_solve_these_challenges = document.getElementById('mg-skilledworker-list-how-we-solve-these-challenges');
  if (mg_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#mg-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_residency_overview = document.getElementById('mg-skilledworker-section-residency-overview');
  if (mg_skilledworker_section_residency_overview) {
    gsap.fromTo('#mg-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_form_who_is_this_residency_for = document.getElementById('mg-skilledworker-form-who-is-this-residency-for');
  if (mg_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#mg-skilledworker-form-who-is-this-residency-for input, #mg-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_required_documents = document.getElementById('mg-skilledworker-list-required-documents');
  if (mg_skilledworker_list_required_documents) {
    gsap.from('#mg-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_application_process = document.getElementById('mg-skilledworker-list-application-process');
  if (mg_skilledworker_list_application_process) {
    gsap.from('#mg-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_timelines_deadlines = document.getElementById('mg-skilledworker-section-timelines-deadlines');
  if (mg_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#mg-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_fees_costs = document.getElementById('mg-skilledworker-section-fees-costs');
  if (mg_skilledworker_section_fees_costs) {
    gsap.fromTo('#mg-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_risks_common_mistakes = document.getElementById('mg-skilledworker-list-risks-common-mistakes');
  if (mg_skilledworker_list_risks_common_mistakes) {
    gsap.from('#mg-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_diy_vs_professional_assistance = document.getElementById('mg-skilledworker-section-diy-vs-professional-assistance');
  if (mg_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_minas_gerais_specific_context = document.getElementById('mg-skilledworker-section-minas-gerais-specific-context');
  if (mg_skilledworker_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-skilledworker-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_what_our_clients_say = document.getElementById('mg-skilledworker-section-what-our-clients-say');
  if (mg_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#mg-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_frequently_asked_questions = document.getElementById('mg-skilledworker-section-frequently-asked-questions');
  if (mg_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#mg-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_international_support = document.getElementById('mg-skilledworker-section-international-support');
  if (mg_skilledworker_section_international_support) {
    gsap.fromTo('#mg-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_our_credentials = document.getElementById('mg-skilledworker-list-our-credentials');
  if (mg_skilledworker_list_our_credentials) {
    gsap.from('#mg-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_list_related_services = document.getElementById('mg-skilledworker-list-related-services');
  if (mg_skilledworker_list_related_services) {
    gsap.from('#mg-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_youre_in_good_hands = document.getElementById('mg-skilledworker-section-youre-in-good-hands');
  if (mg_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#mg-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_skilledworker_section_21 = document.getElementById('mg-skilledworker-section-21');
  if (mg_skilledworker_section_21) {
    gsap.fromTo('#mg-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('mg-religious-form-religious-residency-in-brazil-for-missions');
  if (mg_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#mg-religious-form-religious-residency-in-brazil-for-missions input, #mg-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_quick_facts = document.getElementById('mg-religious-list-quick-facts');
  if (mg_religious_list_quick_facts) {
    gsap.from('#mg-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_common_challenges_applicants_face = document.getElementById('mg-religious-list-common-challenges-applicants-face');
  if (mg_religious_list_common_challenges_applicants_face) {
    gsap.from('#mg-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_how_we_solve_these_challenges = document.getElementById('mg-religious-list-how-we-solve-these-challenges');
  if (mg_religious_list_how_we_solve_these_challenges) {
    gsap.from('#mg-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_residency_overview = document.getElementById('mg-religious-section-residency-overview');
  if (mg_religious_section_residency_overview) {
    gsap.fromTo('#mg-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_form_who_is_this_residency_for = document.getElementById('mg-religious-form-who-is-this-residency-for');
  if (mg_religious_form_who_is_this_residency_for) {
    gsap.from('#mg-religious-form-who-is-this-residency-for input, #mg-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_required_documents = document.getElementById('mg-religious-list-required-documents');
  if (mg_religious_list_required_documents) {
    gsap.from('#mg-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_application_process = document.getElementById('mg-religious-list-application-process');
  if (mg_religious_list_application_process) {
    gsap.from('#mg-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_timelines_deadlines = document.getElementById('mg-religious-section-timelines-deadlines');
  if (mg_religious_section_timelines_deadlines) {
    gsap.fromTo('#mg-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_fees_costs = document.getElementById('mg-religious-section-fees-costs');
  if (mg_religious_section_fees_costs) {
    gsap.fromTo('#mg-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_risks_common_mistakes = document.getElementById('mg-religious-list-risks-common-mistakes');
  if (mg_religious_list_risks_common_mistakes) {
    gsap.from('#mg-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_diy_vs_professional_assistance = document.getElementById('mg-religious-section-diy-vs-professional-assistance');
  if (mg_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_minas_gerais_specific_context = document.getElementById('mg-religious-section-minas-gerais-specific-context');
  if (mg_religious_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-religious-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_what_our_clients_say = document.getElementById('mg-religious-section-what-our-clients-say');
  if (mg_religious_section_what_our_clients_say) {
    gsap.fromTo('#mg-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_frequently_asked_questions = document.getElementById('mg-religious-section-frequently-asked-questions');
  if (mg_religious_section_frequently_asked_questions) {
    gsap.fromTo('#mg-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_international_support = document.getElementById('mg-religious-section-international-support');
  if (mg_religious_section_international_support) {
    gsap.fromTo('#mg-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_our_credentials = document.getElementById('mg-religious-list-our-credentials');
  if (mg_religious_list_our_credentials) {
    gsap.from('#mg-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_list_related_services = document.getElementById('mg-religious-list-related-services');
  if (mg_religious_list_related_services) {
    gsap.from('#mg-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_youre_in_good_hands = document.getElementById('mg-religious-section-youre-in-good-hands');
  if (mg_religious_section_youre_in_good_hands) {
    gsap.fromTo('#mg-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_religious_section_21 = document.getElementById('mg-religious-section-21');
  if (mg_religious_section_21) {
    gsap.fromTo('#mg-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('mg-investor-form-gain-residency-in-brazil-through-investment');
  if (mg_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#mg-investor-form-gain-residency-in-brazil-through-investment input, #mg-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_quick_facts = document.getElementById('mg-investor-list-quick-facts');
  if (mg_investor_list_quick_facts) {
    gsap.from('#mg-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_common_challenges_applicants_face = document.getElementById('mg-investor-list-common-challenges-applicants-face');
  if (mg_investor_list_common_challenges_applicants_face) {
    gsap.from('#mg-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_how_we_solve_these_challenges = document.getElementById('mg-investor-list-how-we-solve-these-challenges');
  if (mg_investor_list_how_we_solve_these_challenges) {
    gsap.from('#mg-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_residency_overview = document.getElementById('mg-investor-section-residency-overview');
  if (mg_investor_section_residency_overview) {
    gsap.fromTo('#mg-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_form_who_is_this_residency_for = document.getElementById('mg-investor-form-who-is-this-residency-for');
  if (mg_investor_form_who_is_this_residency_for) {
    gsap.from('#mg-investor-form-who-is-this-residency-for input, #mg-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_required_documents = document.getElementById('mg-investor-list-required-documents');
  if (mg_investor_list_required_documents) {
    gsap.from('#mg-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_application_process = document.getElementById('mg-investor-list-application-process');
  if (mg_investor_list_application_process) {
    gsap.from('#mg-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_timelines_deadlines = document.getElementById('mg-investor-section-timelines-deadlines');
  if (mg_investor_section_timelines_deadlines) {
    gsap.fromTo('#mg-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_fees_costs = document.getElementById('mg-investor-section-fees-costs');
  if (mg_investor_section_fees_costs) {
    gsap.fromTo('#mg-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_risks_common_mistakes = document.getElementById('mg-investor-list-risks-common-mistakes');
  if (mg_investor_list_risks_common_mistakes) {
    gsap.from('#mg-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_diy_vs_professional_assistance = document.getElementById('mg-investor-section-diy-vs-professional-assistance');
  if (mg_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_minas_gerais_specific_context = document.getElementById('mg-investor-section-minas-gerais-specific-context');
  if (mg_investor_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-investor-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_what_our_clients_say = document.getElementById('mg-investor-section-what-our-clients-say');
  if (mg_investor_section_what_our_clients_say) {
    gsap.fromTo('#mg-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_frequently_asked_questions = document.getElementById('mg-investor-section-frequently-asked-questions');
  if (mg_investor_section_frequently_asked_questions) {
    gsap.fromTo('#mg-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_international_support = document.getElementById('mg-investor-section-international-support');
  if (mg_investor_section_international_support) {
    gsap.fromTo('#mg-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_our_credentials = document.getElementById('mg-investor-list-our-credentials');
  if (mg_investor_list_our_credentials) {
    gsap.from('#mg-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_list_related_services = document.getElementById('mg-investor-list-related-services');
  if (mg_investor_list_related_services) {
    gsap.from('#mg-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_youre_in_good_hands = document.getElementById('mg-investor-section-youre-in-good-hands');
  if (mg_investor_section_youre_in_good_hands) {
    gsap.fromTo('#mg-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_investor_section_21 = document.getElementById('mg-investor-section-21');
  if (mg_investor_section_21) {
    gsap.fromTo('#mg-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('mg-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (mg_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#mg-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #mg-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_quick_facts = document.getElementById('mg-healthtreatment-list-quick-facts');
  if (mg_healthtreatment_list_quick_facts) {
    gsap.from('#mg-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_common_challenges_applicants_face = document.getElementById('mg-healthtreatment-list-common-challenges-applicants-face');
  if (mg_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#mg-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('mg-healthtreatment-list-how-we-solve-these-challenges');
  if (mg_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#mg-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_residency_overview = document.getElementById('mg-healthtreatment-section-residency-overview');
  if (mg_healthtreatment_section_residency_overview) {
    gsap.fromTo('#mg-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_form_who_is_this_residency_for = document.getElementById('mg-healthtreatment-form-who-is-this-residency-for');
  if (mg_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#mg-healthtreatment-form-who-is-this-residency-for input, #mg-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_required_documents = document.getElementById('mg-healthtreatment-list-required-documents');
  if (mg_healthtreatment_list_required_documents) {
    gsap.from('#mg-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_application_process = document.getElementById('mg-healthtreatment-list-application-process');
  if (mg_healthtreatment_list_application_process) {
    gsap.from('#mg-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_timelines_deadlines = document.getElementById('mg-healthtreatment-section-timelines-deadlines');
  if (mg_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#mg-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_fees_costs = document.getElementById('mg-healthtreatment-section-fees-costs');
  if (mg_healthtreatment_section_fees_costs) {
    gsap.fromTo('#mg-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_risks_common_mistakes = document.getElementById('mg-healthtreatment-list-risks-common-mistakes');
  if (mg_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#mg-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('mg-healthtreatment-section-diy-vs-professional-assistance');
  if (mg_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_minas_gerais_specific_context = document.getElementById('mg-healthtreatment-section-minas-gerais-specific-context');
  if (mg_healthtreatment_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-healthtreatment-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_what_our_clients_say = document.getElementById('mg-healthtreatment-section-what-our-clients-say');
  if (mg_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#mg-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_frequently_asked_questions = document.getElementById('mg-healthtreatment-section-frequently-asked-questions');
  if (mg_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#mg-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_international_support = document.getElementById('mg-healthtreatment-section-international-support');
  if (mg_healthtreatment_section_international_support) {
    gsap.fromTo('#mg-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_our_credentials = document.getElementById('mg-healthtreatment-list-our-credentials');
  if (mg_healthtreatment_list_our_credentials) {
    gsap.from('#mg-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_list_related_services = document.getElementById('mg-healthtreatment-list-related-services');
  if (mg_healthtreatment_list_related_services) {
    gsap.from('#mg-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_youre_in_good_hands = document.getElementById('mg-healthtreatment-section-youre-in-good-hands');
  if (mg_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#mg-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_healthtreatment_section_21 = document.getElementById('mg-healthtreatment-section-21');
  if (mg_healthtreatment_section_21) {
    gsap.fromTo('#mg-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('mg-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (mg_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#mg-cplp-form-residency-for-cplp-citizens-in-brazil input, #mg-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_quick_facts = document.getElementById('mg-cplp-list-quick-facts');
  if (mg_cplp_list_quick_facts) {
    gsap.from('#mg-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_common_challenges_applicants_face = document.getElementById('mg-cplp-list-common-challenges-applicants-face');
  if (mg_cplp_list_common_challenges_applicants_face) {
    gsap.from('#mg-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_how_we_solve_these_challenges = document.getElementById('mg-cplp-list-how-we-solve-these-challenges');
  if (mg_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#mg-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_residency_overview = document.getElementById('mg-cplp-section-residency-overview');
  if (mg_cplp_section_residency_overview) {
    gsap.fromTo('#mg-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_form_who_is_this_residency_for = document.getElementById('mg-cplp-form-who-is-this-residency-for');
  if (mg_cplp_form_who_is_this_residency_for) {
    gsap.from('#mg-cplp-form-who-is-this-residency-for input, #mg-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_required_documents = document.getElementById('mg-cplp-list-required-documents');
  if (mg_cplp_list_required_documents) {
    gsap.from('#mg-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_application_process = document.getElementById('mg-cplp-list-application-process');
  if (mg_cplp_list_application_process) {
    gsap.from('#mg-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_timelines_deadlines = document.getElementById('mg-cplp-section-timelines-deadlines');
  if (mg_cplp_section_timelines_deadlines) {
    gsap.fromTo('#mg-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_fees_costs = document.getElementById('mg-cplp-section-fees-costs');
  if (mg_cplp_section_fees_costs) {
    gsap.fromTo('#mg-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_risks_common_mistakes = document.getElementById('mg-cplp-list-risks-common-mistakes');
  if (mg_cplp_list_risks_common_mistakes) {
    gsap.from('#mg-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_diy_vs_professional_assistance = document.getElementById('mg-cplp-section-diy-vs-professional-assistance');
  if (mg_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_minas_gerais_specific_context = document.getElementById('mg-cplp-section-minas-gerais-specific-context');
  if (mg_cplp_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-cplp-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_what_our_clients_say = document.getElementById('mg-cplp-section-what-our-clients-say');
  if (mg_cplp_section_what_our_clients_say) {
    gsap.fromTo('#mg-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_frequently_asked_questions = document.getElementById('mg-cplp-section-frequently-asked-questions');
  if (mg_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#mg-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_international_support = document.getElementById('mg-cplp-section-international-support');
  if (mg_cplp_section_international_support) {
    gsap.fromTo('#mg-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_our_credentials = document.getElementById('mg-cplp-list-our-credentials');
  if (mg_cplp_list_our_credentials) {
    gsap.from('#mg-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_list_related_services = document.getElementById('mg-cplp-list-related-services');
  if (mg_cplp_list_related_services) {
    gsap.from('#mg-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_youre_in_good_hands = document.getElementById('mg-cplp-section-youre-in-good-hands');
  if (mg_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#mg-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_cplp_section_21 = document.getElementById('mg-cplp-section-21');
  if (mg_cplp_section_21) {
    gsap.fromTo('#mg-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('mg-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (mg_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#mg-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #mg-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_quick_facts = document.getElementById('mg-youthexchange-list-quick-facts');
  if (mg_youthexchange_list_quick_facts) {
    gsap.from('#mg-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_common_challenges_applicants_face = document.getElementById('mg-youthexchange-list-common-challenges-applicants-face');
  if (mg_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#mg-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_how_we_solve_these_challenges = document.getElementById('mg-youthexchange-list-how-we-solve-these-challenges');
  if (mg_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#mg-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_residency_overview = document.getElementById('mg-youthexchange-section-residency-overview');
  if (mg_youthexchange_section_residency_overview) {
    gsap.fromTo('#mg-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_form_who_is_this_residency_for = document.getElementById('mg-youthexchange-form-who-is-this-residency-for');
  if (mg_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#mg-youthexchange-form-who-is-this-residency-for input, #mg-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_required_documents = document.getElementById('mg-youthexchange-list-required-documents');
  if (mg_youthexchange_list_required_documents) {
    gsap.from('#mg-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_application_process = document.getElementById('mg-youthexchange-list-application-process');
  if (mg_youthexchange_list_application_process) {
    gsap.from('#mg-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_timelines_deadlines = document.getElementById('mg-youthexchange-section-timelines-deadlines');
  if (mg_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#mg-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_fees_costs = document.getElementById('mg-youthexchange-section-fees-costs');
  if (mg_youthexchange_section_fees_costs) {
    gsap.fromTo('#mg-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_risks_common_mistakes = document.getElementById('mg-youthexchange-list-risks-common-mistakes');
  if (mg_youthexchange_list_risks_common_mistakes) {
    gsap.from('#mg-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_diy_vs_professional_assistance = document.getElementById('mg-youthexchange-section-diy-vs-professional-assistance');
  if (mg_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_minas_gerais_specific_context = document.getElementById('mg-youthexchange-section-minas-gerais-specific-context');
  if (mg_youthexchange_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-youthexchange-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_what_our_clients_say = document.getElementById('mg-youthexchange-section-what-our-clients-say');
  if (mg_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#mg-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_frequently_asked_questions = document.getElementById('mg-youthexchange-section-frequently-asked-questions');
  if (mg_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#mg-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_international_support = document.getElementById('mg-youthexchange-section-international-support');
  if (mg_youthexchange_section_international_support) {
    gsap.fromTo('#mg-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_our_credentials = document.getElementById('mg-youthexchange-list-our-credentials');
  if (mg_youthexchange_list_our_credentials) {
    gsap.from('#mg-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_list_related_services = document.getElementById('mg-youthexchange-list-related-services');
  if (mg_youthexchange_list_related_services) {
    gsap.from('#mg-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_youre_in_good_hands = document.getElementById('mg-youthexchange-section-youre-in-good-hands');
  if (mg_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#mg-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_youthexchange_section_21 = document.getElementById('mg-youthexchange-section-21');
  if (mg_youthexchange_section_21) {
    gsap.fromTo('#mg-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('mg-work-form-work-and-reside-in-brazil-with-work-residency');
  if (mg_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#mg-work-form-work-and-reside-in-brazil-with-work-residency input, #mg-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_quick_facts = document.getElementById('mg-work-list-quick-facts');
  if (mg_work_list_quick_facts) {
    gsap.from('#mg-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_common_challenges_applicants_face = document.getElementById('mg-work-list-common-challenges-applicants-face');
  if (mg_work_list_common_challenges_applicants_face) {
    gsap.from('#mg-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_how_we_solve_these_challenges = document.getElementById('mg-work-list-how-we-solve-these-challenges');
  if (mg_work_list_how_we_solve_these_challenges) {
    gsap.from('#mg-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_residency_overview = document.getElementById('mg-work-section-residency-overview');
  if (mg_work_section_residency_overview) {
    gsap.fromTo('#mg-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_form_who_is_this_residency_for = document.getElementById('mg-work-form-who-is-this-residency-for');
  if (mg_work_form_who_is_this_residency_for) {
    gsap.from('#mg-work-form-who-is-this-residency-for input, #mg-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_required_documents = document.getElementById('mg-work-list-required-documents');
  if (mg_work_list_required_documents) {
    gsap.from('#mg-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_application_process = document.getElementById('mg-work-list-application-process');
  if (mg_work_list_application_process) {
    gsap.from('#mg-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_timelines_deadlines = document.getElementById('mg-work-section-timelines-deadlines');
  if (mg_work_section_timelines_deadlines) {
    gsap.fromTo('#mg-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_fees_costs = document.getElementById('mg-work-section-fees-costs');
  if (mg_work_section_fees_costs) {
    gsap.fromTo('#mg-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_risks_common_mistakes = document.getElementById('mg-work-list-risks-common-mistakes');
  if (mg_work_list_risks_common_mistakes) {
    gsap.from('#mg-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_diy_vs_professional_assistance = document.getElementById('mg-work-section-diy-vs-professional-assistance');
  if (mg_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_minas_gerais_specific_context = document.getElementById('mg-work-section-minas-gerais-specific-context');
  if (mg_work_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-work-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_what_our_clients_say = document.getElementById('mg-work-section-what-our-clients-say');
  if (mg_work_section_what_our_clients_say) {
    gsap.fromTo('#mg-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_frequently_asked_questions = document.getElementById('mg-work-section-frequently-asked-questions');
  if (mg_work_section_frequently_asked_questions) {
    gsap.fromTo('#mg-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_international_support = document.getElementById('mg-work-section-international-support');
  if (mg_work_section_international_support) {
    gsap.fromTo('#mg-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_our_credentials = document.getElementById('mg-work-list-our-credentials');
  if (mg_work_list_our_credentials) {
    gsap.from('#mg-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_list_related_services = document.getElementById('mg-work-list-related-services');
  if (mg_work_list_related_services) {
    gsap.from('#mg-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_youre_in_good_hands = document.getElementById('mg-work-section-youre-in-good-hands');
  if (mg_work_section_youre_in_good_hands) {
    gsap.fromTo('#mg-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_work_section_21 = document.getElementById('mg-work-section-21');
  if (mg_work_section_21) {
    gsap.fromTo('#mg-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('mg-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (mg_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#mg-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #mg-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_quick_facts = document.getElementById('mg-startup-list-quick-facts');
  if (mg_startup_list_quick_facts) {
    gsap.from('#mg-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_common_challenges_applicants_face = document.getElementById('mg-startup-list-common-challenges-applicants-face');
  if (mg_startup_list_common_challenges_applicants_face) {
    gsap.from('#mg-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_how_we_solve_these_challenges = document.getElementById('mg-startup-list-how-we-solve-these-challenges');
  if (mg_startup_list_how_we_solve_these_challenges) {
    gsap.from('#mg-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_visa_overview = document.getElementById('mg-startup-section-visa-overview');
  if (mg_startup_section_visa_overview) {
    gsap.fromTo('#mg-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_form_who_is_this_visa_for = document.getElementById('mg-startup-form-who-is-this-visa-for');
  if (mg_startup_form_who_is_this_visa_for) {
    gsap.from('#mg-startup-form-who-is-this-visa-for input, #mg-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_required_documents = document.getElementById('mg-startup-list-required-documents');
  if (mg_startup_list_required_documents) {
    gsap.from('#mg-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_application_process = document.getElementById('mg-startup-list-application-process');
  if (mg_startup_list_application_process) {
    gsap.from('#mg-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_timelines_deadlines = document.getElementById('mg-startup-section-timelines-deadlines');
  if (mg_startup_section_timelines_deadlines) {
    gsap.fromTo('#mg-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_fees_costs = document.getElementById('mg-startup-section-fees-costs');
  if (mg_startup_section_fees_costs) {
    gsap.fromTo('#mg-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_risks_common_mistakes = document.getElementById('mg-startup-list-risks-common-mistakes');
  if (mg_startup_list_risks_common_mistakes) {
    gsap.from('#mg-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_diy_vs_professional_assistance = document.getElementById('mg-startup-section-diy-vs-professional-assistance');
  if (mg_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_minas_gerais_specific_context = document.getElementById('mg-startup-section-minas-gerais-specific-context');
  if (mg_startup_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-startup-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_what_our_clients_say = document.getElementById('mg-startup-section-what-our-clients-say');
  if (mg_startup_section_what_our_clients_say) {
    gsap.fromTo('#mg-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_frequently_asked_questions = document.getElementById('mg-startup-section-frequently-asked-questions');
  if (mg_startup_section_frequently_asked_questions) {
    gsap.fromTo('#mg-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_international_support = document.getElementById('mg-startup-section-international-support');
  if (mg_startup_section_international_support) {
    gsap.fromTo('#mg-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_our_credentials = document.getElementById('mg-startup-list-our-credentials');
  if (mg_startup_list_our_credentials) {
    gsap.from('#mg-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_list_related_services = document.getElementById('mg-startup-list-related-services');
  if (mg_startup_list_related_services) {
    gsap.from('#mg-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_youre_in_good_hands = document.getElementById('mg-startup-section-youre-in-good-hands');
  if (mg_startup_section_youre_in_good_hands) {
    gsap.fromTo('#mg-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_startup_section_21 = document.getElementById('mg-startup-section-21');
  if (mg_startup_section_21) {
    gsap.fromTo('#mg-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('mg-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (mg_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#mg-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #mg-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_quick_facts = document.getElementById('mg-family-list-quick-facts');
  if (mg_family_list_quick_facts) {
    gsap.from('#mg-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_common_challenges_applicants_face = document.getElementById('mg-family-list-common-challenges-applicants-face');
  if (mg_family_list_common_challenges_applicants_face) {
    gsap.from('#mg-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_how_we_solve_these_challenges = document.getElementById('mg-family-list-how-we-solve-these-challenges');
  if (mg_family_list_how_we_solve_these_challenges) {
    gsap.from('#mg-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_visa_overview = document.getElementById('mg-family-section-visa-overview');
  if (mg_family_section_visa_overview) {
    gsap.fromTo('#mg-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_form_who_is_this_visa_for = document.getElementById('mg-family-form-who-is-this-visa-for');
  if (mg_family_form_who_is_this_visa_for) {
    gsap.from('#mg-family-form-who-is-this-visa-for input, #mg-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_required_documents = document.getElementById('mg-family-list-required-documents');
  if (mg_family_list_required_documents) {
    gsap.from('#mg-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_application_process = document.getElementById('mg-family-list-application-process');
  if (mg_family_list_application_process) {
    gsap.from('#mg-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_timelines_deadlines = document.getElementById('mg-family-section-timelines-deadlines');
  if (mg_family_section_timelines_deadlines) {
    gsap.fromTo('#mg-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_fees_costs = document.getElementById('mg-family-section-fees-costs');
  if (mg_family_section_fees_costs) {
    gsap.fromTo('#mg-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_risks_common_mistakes = document.getElementById('mg-family-list-risks-common-mistakes');
  if (mg_family_list_risks_common_mistakes) {
    gsap.from('#mg-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_diy_vs_professional_assistance = document.getElementById('mg-family-section-diy-vs-professional-assistance');
  if (mg_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_minas_gerais_specific_context = document.getElementById('mg-family-section-minas-gerais-specific-context');
  if (mg_family_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-family-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_what_our_clients_say = document.getElementById('mg-family-section-what-our-clients-say');
  if (mg_family_section_what_our_clients_say) {
    gsap.fromTo('#mg-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_frequently_asked_questions = document.getElementById('mg-family-section-frequently-asked-questions');
  if (mg_family_section_frequently_asked_questions) {
    gsap.fromTo('#mg-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_international_support = document.getElementById('mg-family-section-international-support');
  if (mg_family_section_international_support) {
    gsap.fromTo('#mg-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_our_credentials = document.getElementById('mg-family-list-our-credentials');
  if (mg_family_list_our_credentials) {
    gsap.from('#mg-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_list_related_services = document.getElementById('mg-family-list-related-services');
  if (mg_family_list_related_services) {
    gsap.from('#mg-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_youre_in_good_hands = document.getElementById('mg-family-section-youre-in-good-hands');
  if (mg_family_section_youre_in_good_hands) {
    gsap.fromTo('#mg-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_family_section_21 = document.getElementById('mg-family-section-21');
  if (mg_family_section_21) {
    gsap.fromTo('#mg-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('mg-sports-form-compete-in-brazil-with-the-sports-visa');
  if (mg_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#mg-sports-form-compete-in-brazil-with-the-sports-visa input, #mg-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_quick_facts = document.getElementById('mg-sports-list-quick-facts');
  if (mg_sports_list_quick_facts) {
    gsap.from('#mg-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_common_challenges_applicants_face = document.getElementById('mg-sports-list-common-challenges-applicants-face');
  if (mg_sports_list_common_challenges_applicants_face) {
    gsap.from('#mg-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_how_we_solve_these_challenges = document.getElementById('mg-sports-list-how-we-solve-these-challenges');
  if (mg_sports_list_how_we_solve_these_challenges) {
    gsap.from('#mg-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_visa_overview = document.getElementById('mg-sports-section-visa-overview');
  if (mg_sports_section_visa_overview) {
    gsap.fromTo('#mg-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_form_who_is_this_visa_for = document.getElementById('mg-sports-form-who-is-this-visa-for');
  if (mg_sports_form_who_is_this_visa_for) {
    gsap.from('#mg-sports-form-who-is-this-visa-for input, #mg-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_required_documents = document.getElementById('mg-sports-list-required-documents');
  if (mg_sports_list_required_documents) {
    gsap.from('#mg-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_application_process = document.getElementById('mg-sports-list-application-process');
  if (mg_sports_list_application_process) {
    gsap.from('#mg-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_timelines_deadlines = document.getElementById('mg-sports-section-timelines-deadlines');
  if (mg_sports_section_timelines_deadlines) {
    gsap.fromTo('#mg-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_fees_costs = document.getElementById('mg-sports-section-fees-costs');
  if (mg_sports_section_fees_costs) {
    gsap.fromTo('#mg-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_risks_common_mistakes = document.getElementById('mg-sports-list-risks-common-mistakes');
  if (mg_sports_list_risks_common_mistakes) {
    gsap.from('#mg-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_diy_vs_professional_assistance = document.getElementById('mg-sports-section-diy-vs-professional-assistance');
  if (mg_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_minas_gerais_specific_context = document.getElementById('mg-sports-section-minas-gerais-specific-context');
  if (mg_sports_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-sports-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_what_our_clients_say = document.getElementById('mg-sports-section-what-our-clients-say');
  if (mg_sports_section_what_our_clients_say) {
    gsap.fromTo('#mg-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_frequently_asked_questions = document.getElementById('mg-sports-section-frequently-asked-questions');
  if (mg_sports_section_frequently_asked_questions) {
    gsap.fromTo('#mg-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_international_support = document.getElementById('mg-sports-section-international-support');
  if (mg_sports_section_international_support) {
    gsap.fromTo('#mg-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_our_credentials = document.getElementById('mg-sports-list-our-credentials');
  if (mg_sports_list_our_credentials) {
    gsap.from('#mg-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_list_related_services = document.getElementById('mg-sports-list-related-services');
  if (mg_sports_list_related_services) {
    gsap.from('#mg-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_youre_in_good_hands = document.getElementById('mg-sports-section-youre-in-good-hands');
  if (mg_sports_section_youre_in_good_hands) {
    gsap.fromTo('#mg-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_sports_section_21 = document.getElementById('mg-sports-section-21');
  if (mg_sports_section_21) {
    gsap.fromTo('#mg-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('mg-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (mg_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#mg-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #mg-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_quick_facts = document.getElementById('mg-medical-list-quick-facts');
  if (mg_medical_list_quick_facts) {
    gsap.from('#mg-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_common_challenges_applicants_face = document.getElementById('mg-medical-list-common-challenges-applicants-face');
  if (mg_medical_list_common_challenges_applicants_face) {
    gsap.from('#mg-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_how_we_solve_these_challenges = document.getElementById('mg-medical-list-how-we-solve-these-challenges');
  if (mg_medical_list_how_we_solve_these_challenges) {
    gsap.from('#mg-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_visa_overview = document.getElementById('mg-medical-section-visa-overview');
  if (mg_medical_section_visa_overview) {
    gsap.fromTo('#mg-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_form_who_is_this_visa_for = document.getElementById('mg-medical-form-who-is-this-visa-for');
  if (mg_medical_form_who_is_this_visa_for) {
    gsap.from('#mg-medical-form-who-is-this-visa-for input, #mg-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_required_documents = document.getElementById('mg-medical-list-required-documents');
  if (mg_medical_list_required_documents) {
    gsap.from('#mg-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_application_process = document.getElementById('mg-medical-list-application-process');
  if (mg_medical_list_application_process) {
    gsap.from('#mg-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_timelines_deadlines = document.getElementById('mg-medical-section-timelines-deadlines');
  if (mg_medical_section_timelines_deadlines) {
    gsap.fromTo('#mg-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_fees_costs = document.getElementById('mg-medical-section-fees-costs');
  if (mg_medical_section_fees_costs) {
    gsap.fromTo('#mg-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_risks_common_mistakes = document.getElementById('mg-medical-list-risks-common-mistakes');
  if (mg_medical_list_risks_common_mistakes) {
    gsap.from('#mg-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_diy_vs_professional_assistance = document.getElementById('mg-medical-section-diy-vs-professional-assistance');
  if (mg_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_minas_gerais_specific_context = document.getElementById('mg-medical-section-minas-gerais-specific-context');
  if (mg_medical_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-medical-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_what_our_clients_say = document.getElementById('mg-medical-section-what-our-clients-say');
  if (mg_medical_section_what_our_clients_say) {
    gsap.fromTo('#mg-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_frequently_asked_questions = document.getElementById('mg-medical-section-frequently-asked-questions');
  if (mg_medical_section_frequently_asked_questions) {
    gsap.fromTo('#mg-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_international_support = document.getElementById('mg-medical-section-international-support');
  if (mg_medical_section_international_support) {
    gsap.fromTo('#mg-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_our_credentials = document.getElementById('mg-medical-list-our-credentials');
  if (mg_medical_list_our_credentials) {
    gsap.from('#mg-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_list_related_services = document.getElementById('mg-medical-list-related-services');
  if (mg_medical_list_related_services) {
    gsap.from('#mg-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_youre_in_good_hands = document.getElementById('mg-medical-section-youre-in-good-hands');
  if (mg_medical_section_youre_in_good_hands) {
    gsap.fromTo('#mg-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_medical_section_21 = document.getElementById('mg-medical-section-21');
  if (mg_medical_section_21) {
    gsap.fromTo('#mg-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('mg-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (mg_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#mg-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #mg-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_quick_facts = document.getElementById('mg-tourist-list-quick-facts');
  if (mg_tourist_list_quick_facts) {
    gsap.from('#mg-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_common_challenges_applicants_face = document.getElementById('mg-tourist-list-common-challenges-applicants-face');
  if (mg_tourist_list_common_challenges_applicants_face) {
    gsap.from('#mg-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_how_we_solve_these_challenges = document.getElementById('mg-tourist-list-how-we-solve-these-challenges');
  if (mg_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#mg-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_visa_overview = document.getElementById('mg-tourist-section-visa-overview');
  if (mg_tourist_section_visa_overview) {
    gsap.fromTo('#mg-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_form_who_is_this_visa_for = document.getElementById('mg-tourist-form-who-is-this-visa-for');
  if (mg_tourist_form_who_is_this_visa_for) {
    gsap.from('#mg-tourist-form-who-is-this-visa-for input, #mg-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_required_documents = document.getElementById('mg-tourist-list-required-documents');
  if (mg_tourist_list_required_documents) {
    gsap.from('#mg-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_application_process = document.getElementById('mg-tourist-list-application-process');
  if (mg_tourist_list_application_process) {
    gsap.from('#mg-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_timelines_deadlines = document.getElementById('mg-tourist-section-timelines-deadlines');
  if (mg_tourist_section_timelines_deadlines) {
    gsap.fromTo('#mg-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_fees_costs = document.getElementById('mg-tourist-section-fees-costs');
  if (mg_tourist_section_fees_costs) {
    gsap.fromTo('#mg-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_risks_common_mistakes = document.getElementById('mg-tourist-list-risks-common-mistakes');
  if (mg_tourist_list_risks_common_mistakes) {
    gsap.from('#mg-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_diy_vs_professional_assistance = document.getElementById('mg-tourist-section-diy-vs-professional-assistance');
  if (mg_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_minas_gerais_specific_context = document.getElementById('mg-tourist-section-minas-gerais-specific-context');
  if (mg_tourist_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-tourist-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_what_our_clients_say = document.getElementById('mg-tourist-section-what-our-clients-say');
  if (mg_tourist_section_what_our_clients_say) {
    gsap.fromTo('#mg-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_frequently_asked_questions = document.getElementById('mg-tourist-section-frequently-asked-questions');
  if (mg_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#mg-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_international_support = document.getElementById('mg-tourist-section-international-support');
  if (mg_tourist_section_international_support) {
    gsap.fromTo('#mg-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_our_credentials = document.getElementById('mg-tourist-list-our-credentials');
  if (mg_tourist_list_our_credentials) {
    gsap.from('#mg-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_list_related_services = document.getElementById('mg-tourist-list-related-services');
  if (mg_tourist_list_related_services) {
    gsap.from('#mg-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_youre_in_good_hands = document.getElementById('mg-tourist-section-youre-in-good-hands');
  if (mg_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#mg-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_tourist_section_21 = document.getElementById('mg-tourist-section-21');
  if (mg_tourist_section_21) {
    gsap.fromTo('#mg-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('mg-transit-form-transit-through-brazil-with-the-transit-visa');
  if (mg_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#mg-transit-form-transit-through-brazil-with-the-transit-visa input, #mg-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_quick_facts = document.getElementById('mg-transit-list-quick-facts');
  if (mg_transit_list_quick_facts) {
    gsap.from('#mg-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_common_challenges_applicants_face = document.getElementById('mg-transit-list-common-challenges-applicants-face');
  if (mg_transit_list_common_challenges_applicants_face) {
    gsap.from('#mg-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_how_we_solve_these_challenges = document.getElementById('mg-transit-list-how-we-solve-these-challenges');
  if (mg_transit_list_how_we_solve_these_challenges) {
    gsap.from('#mg-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_visa_overview = document.getElementById('mg-transit-section-visa-overview');
  if (mg_transit_section_visa_overview) {
    gsap.fromTo('#mg-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_form_who_is_this_visa_for = document.getElementById('mg-transit-form-who-is-this-visa-for');
  if (mg_transit_form_who_is_this_visa_for) {
    gsap.from('#mg-transit-form-who-is-this-visa-for input, #mg-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_required_documents = document.getElementById('mg-transit-list-required-documents');
  if (mg_transit_list_required_documents) {
    gsap.from('#mg-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_application_process = document.getElementById('mg-transit-list-application-process');
  if (mg_transit_list_application_process) {
    gsap.from('#mg-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_timelines_deadlines = document.getElementById('mg-transit-section-timelines-deadlines');
  if (mg_transit_section_timelines_deadlines) {
    gsap.fromTo('#mg-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_fees_costs = document.getElementById('mg-transit-section-fees-costs');
  if (mg_transit_section_fees_costs) {
    gsap.fromTo('#mg-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_risks_common_mistakes = document.getElementById('mg-transit-list-risks-common-mistakes');
  if (mg_transit_list_risks_common_mistakes) {
    gsap.from('#mg-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_diy_vs_professional_assistance = document.getElementById('mg-transit-section-diy-vs-professional-assistance');
  if (mg_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_minas_gerais_specific_context = document.getElementById('mg-transit-section-minas-gerais-specific-context');
  if (mg_transit_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-transit-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_what_our_clients_say = document.getElementById('mg-transit-section-what-our-clients-say');
  if (mg_transit_section_what_our_clients_say) {
    gsap.fromTo('#mg-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_frequently_asked_questions = document.getElementById('mg-transit-section-frequently-asked-questions');
  if (mg_transit_section_frequently_asked_questions) {
    gsap.fromTo('#mg-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_international_support = document.getElementById('mg-transit-section-international-support');
  if (mg_transit_section_international_support) {
    gsap.fromTo('#mg-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_our_credentials = document.getElementById('mg-transit-list-our-credentials');
  if (mg_transit_list_our_credentials) {
    gsap.from('#mg-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_list_related_services = document.getElementById('mg-transit-list-related-services');
  if (mg_transit_list_related_services) {
    gsap.from('#mg-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_youre_in_good_hands = document.getElementById('mg-transit-section-youre-in-good-hands');
  if (mg_transit_section_youre_in_good_hands) {
    gsap.fromTo('#mg-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_transit_section_21 = document.getElementById('mg-transit-section-21');
  if (mg_transit_section_21) {
    gsap.fromTo('#mg-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_form_study_in_brazil_with_the_student_visa = document.getElementById('mg-student-form-study-in-brazil-with-the-student-visa');
  if (mg_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#mg-student-form-study-in-brazil-with-the-student-visa input, #mg-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_quick_facts = document.getElementById('mg-student-list-quick-facts');
  if (mg_student_list_quick_facts) {
    gsap.from('#mg-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_common_challenges_applicants_face = document.getElementById('mg-student-list-common-challenges-applicants-face');
  if (mg_student_list_common_challenges_applicants_face) {
    gsap.from('#mg-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_how_we_solve_these_challenges = document.getElementById('mg-student-list-how-we-solve-these-challenges');
  if (mg_student_list_how_we_solve_these_challenges) {
    gsap.from('#mg-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_visa_overview = document.getElementById('mg-student-section-visa-overview');
  if (mg_student_section_visa_overview) {
    gsap.fromTo('#mg-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_form_who_is_this_visa_for = document.getElementById('mg-student-form-who-is-this-visa-for');
  if (mg_student_form_who_is_this_visa_for) {
    gsap.from('#mg-student-form-who-is-this-visa-for input, #mg-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_required_documents = document.getElementById('mg-student-list-required-documents');
  if (mg_student_list_required_documents) {
    gsap.from('#mg-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_application_process = document.getElementById('mg-student-list-application-process');
  if (mg_student_list_application_process) {
    gsap.from('#mg-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_timelines_deadlines = document.getElementById('mg-student-section-timelines-deadlines');
  if (mg_student_section_timelines_deadlines) {
    gsap.fromTo('#mg-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_fees_costs = document.getElementById('mg-student-section-fees-costs');
  if (mg_student_section_fees_costs) {
    gsap.fromTo('#mg-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_risks_common_mistakes = document.getElementById('mg-student-list-risks-common-mistakes');
  if (mg_student_list_risks_common_mistakes) {
    gsap.from('#mg-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_diy_vs_professional_assistance = document.getElementById('mg-student-section-diy-vs-professional-assistance');
  if (mg_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_minas_gerais_specific_context = document.getElementById('mg-student-section-minas-gerais-specific-context');
  if (mg_student_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-student-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_what_our_clients_say = document.getElementById('mg-student-section-what-our-clients-say');
  if (mg_student_section_what_our_clients_say) {
    gsap.fromTo('#mg-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_frequently_asked_questions = document.getElementById('mg-student-section-frequently-asked-questions');
  if (mg_student_section_frequently_asked_questions) {
    gsap.fromTo('#mg-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_international_support = document.getElementById('mg-student-section-international-support');
  if (mg_student_section_international_support) {
    gsap.fromTo('#mg-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_our_credentials = document.getElementById('mg-student-list-our-credentials');
  if (mg_student_list_our_credentials) {
    gsap.from('#mg-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_list_related_services = document.getElementById('mg-student-list-related-services');
  if (mg_student_list_related_services) {
    gsap.from('#mg-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_youre_in_good_hands = document.getElementById('mg-student-section-youre-in-good-hands');
  if (mg_student_section_youre_in_good_hands) {
    gsap.fromTo('#mg-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_student_section_21 = document.getElementById('mg-student-section-21');
  if (mg_student_section_21) {
    gsap.fromTo('#mg-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('mg-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (mg_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#mg-business-form-conduct-business-in-brazil-with-the-business-visa input, #mg-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_quick_facts = document.getElementById('mg-business-list-quick-facts');
  if (mg_business_list_quick_facts) {
    gsap.from('#mg-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_common_challenges_applicants_face = document.getElementById('mg-business-list-common-challenges-applicants-face');
  if (mg_business_list_common_challenges_applicants_face) {
    gsap.from('#mg-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_how_we_solve_these_challenges = document.getElementById('mg-business-list-how-we-solve-these-challenges');
  if (mg_business_list_how_we_solve_these_challenges) {
    gsap.from('#mg-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_visa_overview = document.getElementById('mg-business-section-visa-overview');
  if (mg_business_section_visa_overview) {
    gsap.fromTo('#mg-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_form_who_is_this_visa_for = document.getElementById('mg-business-form-who-is-this-visa-for');
  if (mg_business_form_who_is_this_visa_for) {
    gsap.from('#mg-business-form-who-is-this-visa-for input, #mg-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_required_documents = document.getElementById('mg-business-list-required-documents');
  if (mg_business_list_required_documents) {
    gsap.from('#mg-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_application_process = document.getElementById('mg-business-list-application-process');
  if (mg_business_list_application_process) {
    gsap.from('#mg-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_timelines_deadlines = document.getElementById('mg-business-section-timelines-deadlines');
  if (mg_business_section_timelines_deadlines) {
    gsap.fromTo('#mg-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_fees_costs = document.getElementById('mg-business-section-fees-costs');
  if (mg_business_section_fees_costs) {
    gsap.fromTo('#mg-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_risks_common_mistakes = document.getElementById('mg-business-list-risks-common-mistakes');
  if (mg_business_list_risks_common_mistakes) {
    gsap.from('#mg-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_diy_vs_professional_assistance = document.getElementById('mg-business-section-diy-vs-professional-assistance');
  if (mg_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_minas_gerais_specific_context = document.getElementById('mg-business-section-minas-gerais-specific-context');
  if (mg_business_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-business-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_what_our_clients_say = document.getElementById('mg-business-section-what-our-clients-say');
  if (mg_business_section_what_our_clients_say) {
    gsap.fromTo('#mg-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_frequently_asked_questions = document.getElementById('mg-business-section-frequently-asked-questions');
  if (mg_business_section_frequently_asked_questions) {
    gsap.fromTo('#mg-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_international_support = document.getElementById('mg-business-section-international-support');
  if (mg_business_section_international_support) {
    gsap.fromTo('#mg-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_our_credentials = document.getElementById('mg-business-list-our-credentials');
  if (mg_business_list_our_credentials) {
    gsap.from('#mg-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_list_related_services = document.getElementById('mg-business-list-related-services');
  if (mg_business_list_related_services) {
    gsap.from('#mg-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_youre_in_good_hands = document.getElementById('mg-business-section-youre-in-good-hands');
  if (mg_business_section_youre_in_good_hands) {
    gsap.fromTo('#mg-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_business_section_21 = document.getElementById('mg-business-section-21');
  if (mg_business_section_21) {
    gsap.fromTo('#mg-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('mg-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (mg_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#mg-research-form-conduct-research-in-brazil-with-the-research-visa input, #mg-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_quick_facts = document.getElementById('mg-research-list-quick-facts');
  if (mg_research_list_quick_facts) {
    gsap.from('#mg-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_common_challenges_applicants_face = document.getElementById('mg-research-list-common-challenges-applicants-face');
  if (mg_research_list_common_challenges_applicants_face) {
    gsap.from('#mg-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_how_we_solve_these_challenges = document.getElementById('mg-research-list-how-we-solve-these-challenges');
  if (mg_research_list_how_we_solve_these_challenges) {
    gsap.from('#mg-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_visa_overview = document.getElementById('mg-research-section-visa-overview');
  if (mg_research_section_visa_overview) {
    gsap.fromTo('#mg-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_form_who_is_this_visa_for = document.getElementById('mg-research-form-who-is-this-visa-for');
  if (mg_research_form_who_is_this_visa_for) {
    gsap.from('#mg-research-form-who-is-this-visa-for input, #mg-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_required_documents = document.getElementById('mg-research-list-required-documents');
  if (mg_research_list_required_documents) {
    gsap.from('#mg-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_application_process = document.getElementById('mg-research-list-application-process');
  if (mg_research_list_application_process) {
    gsap.from('#mg-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_timelines_deadlines = document.getElementById('mg-research-section-timelines-deadlines');
  if (mg_research_section_timelines_deadlines) {
    gsap.fromTo('#mg-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_fees_costs = document.getElementById('mg-research-section-fees-costs');
  if (mg_research_section_fees_costs) {
    gsap.fromTo('#mg-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_risks_common_mistakes = document.getElementById('mg-research-list-risks-common-mistakes');
  if (mg_research_list_risks_common_mistakes) {
    gsap.from('#mg-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_diy_vs_professional_assistance = document.getElementById('mg-research-section-diy-vs-professional-assistance');
  if (mg_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_minas_gerais_specific_context = document.getElementById('mg-research-section-minas-gerais-specific-context');
  if (mg_research_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-research-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_what_our_clients_say = document.getElementById('mg-research-section-what-our-clients-say');
  if (mg_research_section_what_our_clients_say) {
    gsap.fromTo('#mg-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_frequently_asked_questions = document.getElementById('mg-research-section-frequently-asked-questions');
  if (mg_research_section_frequently_asked_questions) {
    gsap.fromTo('#mg-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_international_support = document.getElementById('mg-research-section-international-support');
  if (mg_research_section_international_support) {
    gsap.fromTo('#mg-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_our_credentials = document.getElementById('mg-research-list-our-credentials');
  if (mg_research_list_our_credentials) {
    gsap.from('#mg-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_list_related_services = document.getElementById('mg-research-list-related-services');
  if (mg_research_list_related_services) {
    gsap.from('#mg-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_youre_in_good_hands = document.getElementById('mg-research-section-youre-in-good-hands');
  if (mg_research_section_youre_in_good_hands) {
    gsap.fromTo('#mg-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_research_section_21 = document.getElementById('mg-research-section-21');
  if (mg_research_section_21) {
    gsap.fromTo('#mg-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('mg-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (mg_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#mg-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #mg-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_quick_facts = document.getElementById('mg-diplomatic-list-quick-facts');
  if (mg_diplomatic_list_quick_facts) {
    gsap.from('#mg-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_common_challenges_applicants_face = document.getElementById('mg-diplomatic-list-common-challenges-applicants-face');
  if (mg_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#mg-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_how_we_solve_these_challenges = document.getElementById('mg-diplomatic-list-how-we-solve-these-challenges');
  if (mg_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#mg-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_visa_overview = document.getElementById('mg-diplomatic-section-visa-overview');
  if (mg_diplomatic_section_visa_overview) {
    gsap.fromTo('#mg-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_form_who_is_this_visa_for = document.getElementById('mg-diplomatic-form-who-is-this-visa-for');
  if (mg_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#mg-diplomatic-form-who-is-this-visa-for input, #mg-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_required_documents = document.getElementById('mg-diplomatic-list-required-documents');
  if (mg_diplomatic_list_required_documents) {
    gsap.from('#mg-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_application_process = document.getElementById('mg-diplomatic-list-application-process');
  if (mg_diplomatic_list_application_process) {
    gsap.from('#mg-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_timelines_deadlines = document.getElementById('mg-diplomatic-section-timelines-deadlines');
  if (mg_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#mg-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_fees_costs = document.getElementById('mg-diplomatic-section-fees-costs');
  if (mg_diplomatic_section_fees_costs) {
    gsap.fromTo('#mg-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_risks_common_mistakes = document.getElementById('mg-diplomatic-list-risks-common-mistakes');
  if (mg_diplomatic_list_risks_common_mistakes) {
    gsap.from('#mg-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_diy_vs_professional_assistance = document.getElementById('mg-diplomatic-section-diy-vs-professional-assistance');
  if (mg_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_minas_gerais_specific_context = document.getElementById('mg-diplomatic-section-minas-gerais-specific-context');
  if (mg_diplomatic_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-diplomatic-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_what_our_clients_say = document.getElementById('mg-diplomatic-section-what-our-clients-say');
  if (mg_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#mg-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_frequently_asked_questions = document.getElementById('mg-diplomatic-section-frequently-asked-questions');
  if (mg_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#mg-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_international_support = document.getElementById('mg-diplomatic-section-international-support');
  if (mg_diplomatic_section_international_support) {
    gsap.fromTo('#mg-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_our_credentials = document.getElementById('mg-diplomatic-list-our-credentials');
  if (mg_diplomatic_list_our_credentials) {
    gsap.from('#mg-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_list_related_services = document.getElementById('mg-diplomatic-list-related-services');
  if (mg_diplomatic_list_related_services) {
    gsap.from('#mg-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_youre_in_good_hands = document.getElementById('mg-diplomatic-section-youre-in-good-hands');
  if (mg_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#mg-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_diplomatic_section_21 = document.getElementById('mg-diplomatic-section-21');
  if (mg_diplomatic_section_21) {
    gsap.fromTo('#mg-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('mg-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (mg_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#mg-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #mg-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_quick_facts = document.getElementById('mg-journalist-list-quick-facts');
  if (mg_journalist_list_quick_facts) {
    gsap.from('#mg-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_common_challenges_applicants_face = document.getElementById('mg-journalist-list-common-challenges-applicants-face');
  if (mg_journalist_list_common_challenges_applicants_face) {
    gsap.from('#mg-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_how_we_solve_these_challenges = document.getElementById('mg-journalist-list-how-we-solve-these-challenges');
  if (mg_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#mg-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_visa_overview = document.getElementById('mg-journalist-section-visa-overview');
  if (mg_journalist_section_visa_overview) {
    gsap.fromTo('#mg-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_form_who_is_this_visa_for = document.getElementById('mg-journalist-form-who-is-this-visa-for');
  if (mg_journalist_form_who_is_this_visa_for) {
    gsap.from('#mg-journalist-form-who-is-this-visa-for input, #mg-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_required_documents = document.getElementById('mg-journalist-list-required-documents');
  if (mg_journalist_list_required_documents) {
    gsap.from('#mg-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_application_process = document.getElementById('mg-journalist-list-application-process');
  if (mg_journalist_list_application_process) {
    gsap.from('#mg-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_timelines_deadlines = document.getElementById('mg-journalist-section-timelines-deadlines');
  if (mg_journalist_section_timelines_deadlines) {
    gsap.fromTo('#mg-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_fees_costs = document.getElementById('mg-journalist-section-fees-costs');
  if (mg_journalist_section_fees_costs) {
    gsap.fromTo('#mg-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_risks_common_mistakes = document.getElementById('mg-journalist-list-risks-common-mistakes');
  if (mg_journalist_list_risks_common_mistakes) {
    gsap.from('#mg-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_diy_vs_professional_assistance = document.getElementById('mg-journalist-section-diy-vs-professional-assistance');
  if (mg_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_minas_gerais_specific_context = document.getElementById('mg-journalist-section-minas-gerais-specific-context');
  if (mg_journalist_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-journalist-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_what_our_clients_say = document.getElementById('mg-journalist-section-what-our-clients-say');
  if (mg_journalist_section_what_our_clients_say) {
    gsap.fromTo('#mg-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_frequently_asked_questions = document.getElementById('mg-journalist-section-frequently-asked-questions');
  if (mg_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#mg-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_international_support = document.getElementById('mg-journalist-section-international-support');
  if (mg_journalist_section_international_support) {
    gsap.fromTo('#mg-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_our_credentials = document.getElementById('mg-journalist-list-our-credentials');
  if (mg_journalist_list_our_credentials) {
    gsap.from('#mg-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_list_related_services = document.getElementById('mg-journalist-list-related-services');
  if (mg_journalist_list_related_services) {
    gsap.from('#mg-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_youre_in_good_hands = document.getElementById('mg-journalist-section-youre-in-good-hands');
  if (mg_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#mg-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_journalist_section_21 = document.getElementById('mg-journalist-section-21');
  if (mg_journalist_section_21) {
    gsap.fromTo('#mg-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('mg-fines-form-resolve-immigration-fines-in-brazil');
  if (mg_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#mg-fines-form-resolve-immigration-fines-in-brazil input, #mg-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_quick_facts = document.getElementById('mg-fines-list-quick-facts');
  if (mg_fines_list_quick_facts) {
    gsap.from('#mg-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_common_challenges_applicants_face = document.getElementById('mg-fines-list-common-challenges-applicants-face');
  if (mg_fines_list_common_challenges_applicants_face) {
    gsap.from('#mg-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_how_we_solve_these_challenges = document.getElementById('mg-fines-list-how-we-solve-these-challenges');
  if (mg_fines_list_how_we_solve_these_challenges) {
    gsap.from('#mg-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_service_overview = document.getElementById('mg-fines-section-service-overview');
  if (mg_fines_section_service_overview) {
    gsap.fromTo('#mg-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_form_who_is_this_service_for = document.getElementById('mg-fines-form-who-is-this-service-for');
  if (mg_fines_form_who_is_this_service_for) {
    gsap.from('#mg-fines-form-who-is-this-service-for input, #mg-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_required_documents = document.getElementById('mg-fines-list-required-documents');
  if (mg_fines_list_required_documents) {
    gsap.from('#mg-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_process = document.getElementById('mg-fines-list-process');
  if (mg_fines_list_process) {
    gsap.from('#mg-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_timelines_deadlines = document.getElementById('mg-fines-section-timelines-deadlines');
  if (mg_fines_section_timelines_deadlines) {
    gsap.fromTo('#mg-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_fees_costs = document.getElementById('mg-fines-section-fees-costs');
  if (mg_fines_section_fees_costs) {
    gsap.fromTo('#mg-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_risks_common_mistakes = document.getElementById('mg-fines-list-risks-common-mistakes');
  if (mg_fines_list_risks_common_mistakes) {
    gsap.from('#mg-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_diy_vs_professional_assistance = document.getElementById('mg-fines-section-diy-vs-professional-assistance');
  if (mg_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_minas_gerais_specific_context = document.getElementById('mg-fines-section-minas-gerais-specific-context');
  if (mg_fines_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-fines-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_what_our_clients_say = document.getElementById('mg-fines-section-what-our-clients-say');
  if (mg_fines_section_what_our_clients_say) {
    gsap.fromTo('#mg-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_frequently_asked_questions = document.getElementById('mg-fines-section-frequently-asked-questions');
  if (mg_fines_section_frequently_asked_questions) {
    gsap.fromTo('#mg-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_international_support = document.getElementById('mg-fines-section-international-support');
  if (mg_fines_section_international_support) {
    gsap.fromTo('#mg-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_our_credentials = document.getElementById('mg-fines-list-our-credentials');
  if (mg_fines_list_our_credentials) {
    gsap.from('#mg-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_list_related_services = document.getElementById('mg-fines-list-related-services');
  if (mg_fines_list_related_services) {
    gsap.from('#mg-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_youre_in_good_hands = document.getElementById('mg-fines-section-youre-in-good-hands');
  if (mg_fines_section_youre_in_good_hands) {
    gsap.fromTo('#mg-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_fines_section_21 = document.getElementById('mg-fines-section-21');
  if (mg_fines_section_21) {
    gsap.fromTo('#mg-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_form_deportation_assistance_in_brazil = document.getElementById('mg-deportation-form-deportation-assistance-in-brazil');
  if (mg_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#mg-deportation-form-deportation-assistance-in-brazil input, #mg-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_quick_facts = document.getElementById('mg-deportation-list-quick-facts');
  if (mg_deportation_list_quick_facts) {
    gsap.from('#mg-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_common_challenges_applicants_face = document.getElementById('mg-deportation-list-common-challenges-applicants-face');
  if (mg_deportation_list_common_challenges_applicants_face) {
    gsap.from('#mg-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_how_we_solve_these_challenges = document.getElementById('mg-deportation-list-how-we-solve-these-challenges');
  if (mg_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#mg-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_service_overview = document.getElementById('mg-deportation-section-service-overview');
  if (mg_deportation_section_service_overview) {
    gsap.fromTo('#mg-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_form_who_is_this_service_for = document.getElementById('mg-deportation-form-who-is-this-service-for');
  if (mg_deportation_form_who_is_this_service_for) {
    gsap.from('#mg-deportation-form-who-is-this-service-for input, #mg-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_required_documents = document.getElementById('mg-deportation-list-required-documents');
  if (mg_deportation_list_required_documents) {
    gsap.from('#mg-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_process = document.getElementById('mg-deportation-list-process');
  if (mg_deportation_list_process) {
    gsap.from('#mg-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_timelines_deadlines = document.getElementById('mg-deportation-section-timelines-deadlines');
  if (mg_deportation_section_timelines_deadlines) {
    gsap.fromTo('#mg-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_fees_costs = document.getElementById('mg-deportation-section-fees-costs');
  if (mg_deportation_section_fees_costs) {
    gsap.fromTo('#mg-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_risks_common_mistakes = document.getElementById('mg-deportation-list-risks-common-mistakes');
  if (mg_deportation_list_risks_common_mistakes) {
    gsap.from('#mg-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_diy_vs_professional_assistance = document.getElementById('mg-deportation-section-diy-vs-professional-assistance');
  if (mg_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_minas_gerais_specific_context = document.getElementById('mg-deportation-section-minas-gerais-specific-context');
  if (mg_deportation_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-deportation-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_what_our_clients_say = document.getElementById('mg-deportation-section-what-our-clients-say');
  if (mg_deportation_section_what_our_clients_say) {
    gsap.fromTo('#mg-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_frequently_asked_questions = document.getElementById('mg-deportation-section-frequently-asked-questions');
  if (mg_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#mg-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_international_support = document.getElementById('mg-deportation-section-international-support');
  if (mg_deportation_section_international_support) {
    gsap.fromTo('#mg-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_our_credentials = document.getElementById('mg-deportation-list-our-credentials');
  if (mg_deportation_list_our_credentials) {
    gsap.from('#mg-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_list_related_services = document.getElementById('mg-deportation-list-related-services');
  if (mg_deportation_list_related_services) {
    gsap.from('#mg-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_youre_in_good_hands = document.getElementById('mg-deportation-section-youre-in-good-hands');
  if (mg_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#mg-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_deportation_section_21 = document.getElementById('mg-deportation-section-21');
  if (mg_deportation_section_21) {
    gsap.fromTo('#mg-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('mg-translation-form-sworn-document-translation-services-in-brazil');
  if (mg_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#mg-translation-form-sworn-document-translation-services-in-brazil input, #mg-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_quick_facts = document.getElementById('mg-translation-list-quick-facts');
  if (mg_translation_list_quick_facts) {
    gsap.from('#mg-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_common_challenges_applicants_face = document.getElementById('mg-translation-list-common-challenges-applicants-face');
  if (mg_translation_list_common_challenges_applicants_face) {
    gsap.from('#mg-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_how_we_solve_these_challenges = document.getElementById('mg-translation-list-how-we-solve-these-challenges');
  if (mg_translation_list_how_we_solve_these_challenges) {
    gsap.from('#mg-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_service_overview = document.getElementById('mg-translation-section-service-overview');
  if (mg_translation_section_service_overview) {
    gsap.fromTo('#mg-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_form_who_is_this_service_for = document.getElementById('mg-translation-form-who-is-this-service-for');
  if (mg_translation_form_who_is_this_service_for) {
    gsap.from('#mg-translation-form-who-is-this-service-for input, #mg-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_required_documents = document.getElementById('mg-translation-list-required-documents');
  if (mg_translation_list_required_documents) {
    gsap.from('#mg-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_process = document.getElementById('mg-translation-list-process');
  if (mg_translation_list_process) {
    gsap.from('#mg-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_timelines_deadlines = document.getElementById('mg-translation-section-timelines-deadlines');
  if (mg_translation_section_timelines_deadlines) {
    gsap.fromTo('#mg-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_fees_costs = document.getElementById('mg-translation-section-fees-costs');
  if (mg_translation_section_fees_costs) {
    gsap.fromTo('#mg-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_risks_common_mistakes = document.getElementById('mg-translation-list-risks-common-mistakes');
  if (mg_translation_list_risks_common_mistakes) {
    gsap.from('#mg-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_diy_vs_professional_assistance = document.getElementById('mg-translation-section-diy-vs-professional-assistance');
  if (mg_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_minas_gerais_specific_context = document.getElementById('mg-translation-section-minas-gerais-specific-context');
  if (mg_translation_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-translation-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_what_our_clients_say = document.getElementById('mg-translation-section-what-our-clients-say');
  if (mg_translation_section_what_our_clients_say) {
    gsap.fromTo('#mg-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_frequently_asked_questions = document.getElementById('mg-translation-section-frequently-asked-questions');
  if (mg_translation_section_frequently_asked_questions) {
    gsap.fromTo('#mg-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_international_support = document.getElementById('mg-translation-section-international-support');
  if (mg_translation_section_international_support) {
    gsap.fromTo('#mg-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_our_credentials = document.getElementById('mg-translation-list-our-credentials');
  if (mg_translation_list_our_credentials) {
    gsap.from('#mg-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_list_related_services = document.getElementById('mg-translation-list-related-services');
  if (mg_translation_list_related_services) {
    gsap.from('#mg-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_youre_in_good_hands = document.getElementById('mg-translation-section-youre-in-good-hands');
  if (mg_translation_section_youre_in_good_hands) {
    gsap.fromTo('#mg-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_translation_section_21 = document.getElementById('mg-translation-section-21');
  if (mg_translation_section_21) {
    gsap.fromTo('#mg-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('mg-expulsion-form-expulsion-assistance-in-brazil');
  if (mg_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#mg-expulsion-form-expulsion-assistance-in-brazil input, #mg-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_quick_facts = document.getElementById('mg-expulsion-list-quick-facts');
  if (mg_expulsion_list_quick_facts) {
    gsap.from('#mg-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_common_challenges_applicants_face = document.getElementById('mg-expulsion-list-common-challenges-applicants-face');
  if (mg_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#mg-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_how_we_solve_these_challenges = document.getElementById('mg-expulsion-list-how-we-solve-these-challenges');
  if (mg_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#mg-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_service_overview = document.getElementById('mg-expulsion-section-service-overview');
  if (mg_expulsion_section_service_overview) {
    gsap.fromTo('#mg-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_form_who_is_this_service_for = document.getElementById('mg-expulsion-form-who-is-this-service-for');
  if (mg_expulsion_form_who_is_this_service_for) {
    gsap.from('#mg-expulsion-form-who-is-this-service-for input, #mg-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_required_documents = document.getElementById('mg-expulsion-list-required-documents');
  if (mg_expulsion_list_required_documents) {
    gsap.from('#mg-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_process = document.getElementById('mg-expulsion-list-process');
  if (mg_expulsion_list_process) {
    gsap.from('#mg-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_timelines_deadlines = document.getElementById('mg-expulsion-section-timelines-deadlines');
  if (mg_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#mg-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_fees_costs = document.getElementById('mg-expulsion-section-fees-costs');
  if (mg_expulsion_section_fees_costs) {
    gsap.fromTo('#mg-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_risks_common_mistakes = document.getElementById('mg-expulsion-list-risks-common-mistakes');
  if (mg_expulsion_list_risks_common_mistakes) {
    gsap.from('#mg-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_diy_vs_professional_assistance = document.getElementById('mg-expulsion-section-diy-vs-professional-assistance');
  if (mg_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_minas_gerais_specific_context = document.getElementById('mg-expulsion-section-minas-gerais-specific-context');
  if (mg_expulsion_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-expulsion-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_what_our_clients_say = document.getElementById('mg-expulsion-section-what-our-clients-say');
  if (mg_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#mg-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_frequently_asked_questions = document.getElementById('mg-expulsion-section-frequently-asked-questions');
  if (mg_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#mg-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_international_support = document.getElementById('mg-expulsion-section-international-support');
  if (mg_expulsion_section_international_support) {
    gsap.fromTo('#mg-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_our_credentials = document.getElementById('mg-expulsion-list-our-credentials');
  if (mg_expulsion_list_our_credentials) {
    gsap.from('#mg-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_list_related_services = document.getElementById('mg-expulsion-list-related-services');
  if (mg_expulsion_list_related_services) {
    gsap.from('#mg-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_youre_in_good_hands = document.getElementById('mg-expulsion-section-youre-in-good-hands');
  if (mg_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#mg-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_expulsion_section_21 = document.getElementById('mg-expulsion-section-21');
  if (mg_expulsion_section_21) {
    gsap.fromTo('#mg-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('mg-appeals-form-appeal-immigration-denials-in-brazil');
  if (mg_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#mg-appeals-form-appeal-immigration-denials-in-brazil input, #mg-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_quick_facts = document.getElementById('mg-appeals-list-quick-facts');
  if (mg_appeals_list_quick_facts) {
    gsap.from('#mg-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_common_challenges_applicants_face = document.getElementById('mg-appeals-list-common-challenges-applicants-face');
  if (mg_appeals_list_common_challenges_applicants_face) {
    gsap.from('#mg-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_how_we_solve_these_challenges = document.getElementById('mg-appeals-list-how-we-solve-these-challenges');
  if (mg_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#mg-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_service_overview = document.getElementById('mg-appeals-section-service-overview');
  if (mg_appeals_section_service_overview) {
    gsap.fromTo('#mg-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_form_who_is_this_service_for = document.getElementById('mg-appeals-form-who-is-this-service-for');
  if (mg_appeals_form_who_is_this_service_for) {
    gsap.from('#mg-appeals-form-who-is-this-service-for input, #mg-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_required_documents = document.getElementById('mg-appeals-list-required-documents');
  if (mg_appeals_list_required_documents) {
    gsap.from('#mg-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_appeal_process = document.getElementById('mg-appeals-list-appeal-process');
  if (mg_appeals_list_appeal_process) {
    gsap.from('#mg-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_timelines_deadlines = document.getElementById('mg-appeals-section-timelines-deadlines');
  if (mg_appeals_section_timelines_deadlines) {
    gsap.fromTo('#mg-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_fees_costs = document.getElementById('mg-appeals-section-fees-costs');
  if (mg_appeals_section_fees_costs) {
    gsap.fromTo('#mg-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_risks_common_mistakes = document.getElementById('mg-appeals-list-risks-common-mistakes');
  if (mg_appeals_list_risks_common_mistakes) {
    gsap.from('#mg-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_diy_vs_professional_assistance = document.getElementById('mg-appeals-section-diy-vs-professional-assistance');
  if (mg_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_minas_gerais_specific_context = document.getElementById('mg-appeals-section-minas-gerais-specific-context');
  if (mg_appeals_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-appeals-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_what_our_clients_say = document.getElementById('mg-appeals-section-what-our-clients-say');
  if (mg_appeals_section_what_our_clients_say) {
    gsap.fromTo('#mg-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_frequently_asked_questions = document.getElementById('mg-appeals-section-frequently-asked-questions');
  if (mg_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#mg-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_international_support = document.getElementById('mg-appeals-section-international-support');
  if (mg_appeals_section_international_support) {
    gsap.fromTo('#mg-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_our_credentials = document.getElementById('mg-appeals-list-our-credentials');
  if (mg_appeals_list_our_credentials) {
    gsap.from('#mg-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_list_related_services = document.getElementById('mg-appeals-list-related-services');
  if (mg_appeals_list_related_services) {
    gsap.from('#mg-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_youre_in_good_hands = document.getElementById('mg-appeals-section-youre-in-good-hands');
  if (mg_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#mg-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_appeals_section_21 = document.getElementById('mg-appeals-section-21');
  if (mg_appeals_section_21) {
    gsap.fromTo('#mg-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('mg-consular-form-consular-services-in-brazil-for-citizens');
  if (mg_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#mg-consular-form-consular-services-in-brazil-for-citizens input, #mg-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_quick_facts = document.getElementById('mg-consular-list-quick-facts');
  if (mg_consular_list_quick_facts) {
    gsap.from('#mg-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_common_challenges_applicants_face = document.getElementById('mg-consular-list-common-challenges-applicants-face');
  if (mg_consular_list_common_challenges_applicants_face) {
    gsap.from('#mg-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_how_we_solve_these_challenges = document.getElementById('mg-consular-list-how-we-solve-these-challenges');
  if (mg_consular_list_how_we_solve_these_challenges) {
    gsap.from('#mg-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_service_overview = document.getElementById('mg-consular-section-service-overview');
  if (mg_consular_section_service_overview) {
    gsap.fromTo('#mg-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_form_who_is_this_service_for = document.getElementById('mg-consular-form-who-is-this-service-for');
  if (mg_consular_form_who_is_this_service_for) {
    gsap.from('#mg-consular-form-who-is-this-service-for input, #mg-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_required_documents = document.getElementById('mg-consular-list-required-documents');
  if (mg_consular_list_required_documents) {
    gsap.from('#mg-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_process = document.getElementById('mg-consular-list-process');
  if (mg_consular_list_process) {
    gsap.from('#mg-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_timelines_deadlines = document.getElementById('mg-consular-section-timelines-deadlines');
  if (mg_consular_section_timelines_deadlines) {
    gsap.fromTo('#mg-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_fees_costs = document.getElementById('mg-consular-section-fees-costs');
  if (mg_consular_section_fees_costs) {
    gsap.fromTo('#mg-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_risks_common_mistakes = document.getElementById('mg-consular-list-risks-common-mistakes');
  if (mg_consular_list_risks_common_mistakes) {
    gsap.from('#mg-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_diy_vs_professional_assistance = document.getElementById('mg-consular-section-diy-vs-professional-assistance');
  if (mg_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_minas_gerais_specific_context = document.getElementById('mg-consular-section-minas-gerais-specific-context');
  if (mg_consular_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-consular-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_what_our_clients_say = document.getElementById('mg-consular-section-what-our-clients-say');
  if (mg_consular_section_what_our_clients_say) {
    gsap.fromTo('#mg-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_frequently_asked_questions = document.getElementById('mg-consular-section-frequently-asked-questions');
  if (mg_consular_section_frequently_asked_questions) {
    gsap.fromTo('#mg-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_international_support = document.getElementById('mg-consular-section-international-support');
  if (mg_consular_section_international_support) {
    gsap.fromTo('#mg-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_our_credentials = document.getElementById('mg-consular-list-our-credentials');
  if (mg_consular_list_our_credentials) {
    gsap.from('#mg-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_list_related_services = document.getElementById('mg-consular-list-related-services');
  if (mg_consular_list_related_services) {
    gsap.from('#mg-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_youre_in_good_hands = document.getElementById('mg-consular-section-youre-in-good-hands');
  if (mg_consular_section_youre_in_good_hands) {
    gsap.fromTo('#mg-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_consular_section_21 = document.getElementById('mg-consular-section-21');
  if (mg_consular_section_21) {
    gsap.fromTo('#mg-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('mg-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (mg_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#mg-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #mg-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_quick_facts = document.getElementById('mg-criminalrecords-list-quick-facts');
  if (mg_criminalrecords_list_quick_facts) {
    gsap.from('#mg-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_common_challenges_applicants_face = document.getElementById('mg-criminalrecords-list-common-challenges-applicants-face');
  if (mg_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#mg-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('mg-criminalrecords-list-how-we-solve-these-challenges');
  if (mg_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#mg-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_service_overview = document.getElementById('mg-criminalrecords-section-service-overview');
  if (mg_criminalrecords_section_service_overview) {
    gsap.fromTo('#mg-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_form_who_is_this_service_for = document.getElementById('mg-criminalrecords-form-who-is-this-service-for');
  if (mg_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#mg-criminalrecords-form-who-is-this-service-for input, #mg-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_required_documents = document.getElementById('mg-criminalrecords-list-required-documents');
  if (mg_criminalrecords_list_required_documents) {
    gsap.from('#mg-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_process = document.getElementById('mg-criminalrecords-list-process');
  if (mg_criminalrecords_list_process) {
    gsap.from('#mg-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_timelines_deadlines = document.getElementById('mg-criminalrecords-section-timelines-deadlines');
  if (mg_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#mg-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_fees_costs = document.getElementById('mg-criminalrecords-section-fees-costs');
  if (mg_criminalrecords_section_fees_costs) {
    gsap.fromTo('#mg-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_risks_common_mistakes = document.getElementById('mg-criminalrecords-list-risks-common-mistakes');
  if (mg_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#mg-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('mg-criminalrecords-section-diy-vs-professional-assistance');
  if (mg_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_minas_gerais_specific_context = document.getElementById('mg-criminalrecords-section-minas-gerais-specific-context');
  if (mg_criminalrecords_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-criminalrecords-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_what_our_clients_say = document.getElementById('mg-criminalrecords-section-what-our-clients-say');
  if (mg_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#mg-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_frequently_asked_questions = document.getElementById('mg-criminalrecords-section-frequently-asked-questions');
  if (mg_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#mg-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_international_support = document.getElementById('mg-criminalrecords-section-international-support');
  if (mg_criminalrecords_section_international_support) {
    gsap.fromTo('#mg-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_our_credentials = document.getElementById('mg-criminalrecords-list-our-credentials');
  if (mg_criminalrecords_list_our_credentials) {
    gsap.from('#mg-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_list_related_services = document.getElementById('mg-criminalrecords-list-related-services');
  if (mg_criminalrecords_list_related_services) {
    gsap.from('#mg-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_youre_in_good_hands = document.getElementById('mg-criminalrecords-section-youre-in-good-hands');
  if (mg_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#mg-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_criminalrecords_section_21 = document.getElementById('mg-criminalrecords-section-21');
  if (mg_criminalrecords_section_21) {
    gsap.fromTo('#mg-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_form_extradition_assistance_in_brazil = document.getElementById('mg-extradition-form-extradition-assistance-in-brazil');
  if (mg_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#mg-extradition-form-extradition-assistance-in-brazil input, #mg-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_quick_facts = document.getElementById('mg-extradition-list-quick-facts');
  if (mg_extradition_list_quick_facts) {
    gsap.from('#mg-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_common_challenges_applicants_face = document.getElementById('mg-extradition-list-common-challenges-applicants-face');
  if (mg_extradition_list_common_challenges_applicants_face) {
    gsap.from('#mg-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_how_we_solve_these_challenges = document.getElementById('mg-extradition-list-how-we-solve-these-challenges');
  if (mg_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#mg-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_service_overview = document.getElementById('mg-extradition-section-service-overview');
  if (mg_extradition_section_service_overview) {
    gsap.fromTo('#mg-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_form_who_is_this_service_for = document.getElementById('mg-extradition-form-who-is-this-service-for');
  if (mg_extradition_form_who_is_this_service_for) {
    gsap.from('#mg-extradition-form-who-is-this-service-for input, #mg-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_required_documents = document.getElementById('mg-extradition-list-required-documents');
  if (mg_extradition_list_required_documents) {
    gsap.from('#mg-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_process = document.getElementById('mg-extradition-list-process');
  if (mg_extradition_list_process) {
    gsap.from('#mg-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_timelines_deadlines = document.getElementById('mg-extradition-section-timelines-deadlines');
  if (mg_extradition_section_timelines_deadlines) {
    gsap.fromTo('#mg-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_fees_costs = document.getElementById('mg-extradition-section-fees-costs');
  if (mg_extradition_section_fees_costs) {
    gsap.fromTo('#mg-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_risks_common_mistakes = document.getElementById('mg-extradition-list-risks-common-mistakes');
  if (mg_extradition_list_risks_common_mistakes) {
    gsap.from('#mg-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_diy_vs_professional_assistance = document.getElementById('mg-extradition-section-diy-vs-professional-assistance');
  if (mg_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_minas_gerais_specific_context = document.getElementById('mg-extradition-section-minas-gerais-specific-context');
  if (mg_extradition_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-extradition-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_what_our_clients_say = document.getElementById('mg-extradition-section-what-our-clients-say');
  if (mg_extradition_section_what_our_clients_say) {
    gsap.fromTo('#mg-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_frequently_asked_questions = document.getElementById('mg-extradition-section-frequently-asked-questions');
  if (mg_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#mg-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_international_support = document.getElementById('mg-extradition-section-international-support');
  if (mg_extradition_section_international_support) {
    gsap.fromTo('#mg-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_our_credentials = document.getElementById('mg-extradition-list-our-credentials');
  if (mg_extradition_list_our_credentials) {
    gsap.from('#mg-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_list_related_services = document.getElementById('mg-extradition-list-related-services');
  if (mg_extradition_list_related_services) {
    gsap.from('#mg-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_youre_in_good_hands = document.getElementById('mg-extradition-section-youre-in-good-hands');
  if (mg_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#mg-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_extradition_section_21 = document.getElementById('mg-extradition-section-21');
  if (mg_extradition_section_21) {
    gsap.fromTo('#mg-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_form_discover_the_north_amazon_and_beyond = document.getElementById('mg-north-form-discover-the-north-amazon-and-beyond');
  if (mg_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#mg-north-form-discover-the-north-amazon-and-beyond input, #mg-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_quick_facts = document.getElementById('mg-north-list-quick-facts');
  if (mg_north_list_quick_facts) {
    gsap.from('#mg-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_common_challenges_applicants_face = document.getElementById('mg-north-list-common-challenges-applicants-face');
  if (mg_north_list_common_challenges_applicants_face) {
    gsap.from('#mg-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_how_we_solve_these_challenges = document.getElementById('mg-north-list-how-we-solve-these-challenges');
  if (mg_north_list_how_we_solve_these_challenges) {
    gsap.from('#mg-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_trip_overview = document.getElementById('mg-north-section-trip-overview');
  if (mg_north_section_trip_overview) {
    gsap.fromTo('#mg-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_form_who_is_this_trip_for = document.getElementById('mg-north-form-who-is-this-trip-for');
  if (mg_north_form_who_is_this_trip_for) {
    gsap.from('#mg-north-form-who-is-this-trip-for input, #mg-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_required_documents = document.getElementById('mg-north-list-required-documents');
  if (mg_north_list_required_documents) {
    gsap.from('#mg-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_booking_process = document.getElementById('mg-north-list-booking-process');
  if (mg_north_list_booking_process) {
    gsap.from('#mg-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_timelines_deadlines = document.getElementById('mg-north-section-timelines-deadlines');
  if (mg_north_section_timelines_deadlines) {
    gsap.fromTo('#mg-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_fees_costs = document.getElementById('mg-north-section-fees-costs');
  if (mg_north_section_fees_costs) {
    gsap.fromTo('#mg-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_risks_common_mistakes = document.getElementById('mg-north-list-risks-common-mistakes');
  if (mg_north_list_risks_common_mistakes) {
    gsap.from('#mg-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_diy_vs_professional_assistance = document.getElementById('mg-north-section-diy-vs-professional-assistance');
  if (mg_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_minas_gerais_specific_context = document.getElementById('mg-north-section-minas-gerais-specific-context');
  if (mg_north_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-north-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_what_our_clients_say = document.getElementById('mg-north-section-what-our-clients-say');
  if (mg_north_section_what_our_clients_say) {
    gsap.fromTo('#mg-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_frequently_asked_questions = document.getElementById('mg-north-section-frequently-asked-questions');
  if (mg_north_section_frequently_asked_questions) {
    gsap.fromTo('#mg-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_international_support = document.getElementById('mg-north-section-international-support');
  if (mg_north_section_international_support) {
    gsap.fromTo('#mg-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_our_credentials = document.getElementById('mg-north-list-our-credentials');
  if (mg_north_list_our_credentials) {
    gsap.from('#mg-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_list_related_services = document.getElementById('mg-north-list-related-services');
  if (mg_north_list_related_services) {
    gsap.from('#mg-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_youre_in_good_hands = document.getElementById('mg-north-section-youre-in-good-hands');
  if (mg_north_section_youre_in_good_hands) {
    gsap.fromTo('#mg-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_north_section_21 = document.getElementById('mg-north-section-21');
  if (mg_north_section_21) {
    gsap.fromTo('#mg-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('mg-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (mg_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#mg-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #mg-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_quick_facts = document.getElementById('mg-centralwest-list-quick-facts');
  if (mg_centralwest_list_quick_facts) {
    gsap.from('#mg-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_common_challenges_applicants_face = document.getElementById('mg-centralwest-list-common-challenges-applicants-face');
  if (mg_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#mg-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_how_we_solve_these_challenges = document.getElementById('mg-centralwest-list-how-we-solve-these-challenges');
  if (mg_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#mg-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_trip_overview = document.getElementById('mg-centralwest-section-trip-overview');
  if (mg_centralwest_section_trip_overview) {
    gsap.fromTo('#mg-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_form_who_is_this_trip_for = document.getElementById('mg-centralwest-form-who-is-this-trip-for');
  if (mg_centralwest_form_who_is_this_trip_for) {
    gsap.from('#mg-centralwest-form-who-is-this-trip-for input, #mg-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_required_documents = document.getElementById('mg-centralwest-list-required-documents');
  if (mg_centralwest_list_required_documents) {
    gsap.from('#mg-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_booking_process = document.getElementById('mg-centralwest-list-booking-process');
  if (mg_centralwest_list_booking_process) {
    gsap.from('#mg-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_timelines_deadlines = document.getElementById('mg-centralwest-section-timelines-deadlines');
  if (mg_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#mg-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_fees_costs = document.getElementById('mg-centralwest-section-fees-costs');
  if (mg_centralwest_section_fees_costs) {
    gsap.fromTo('#mg-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_risks_common_mistakes = document.getElementById('mg-centralwest-list-risks-common-mistakes');
  if (mg_centralwest_list_risks_common_mistakes) {
    gsap.from('#mg-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_diy_vs_professional_assistance = document.getElementById('mg-centralwest-section-diy-vs-professional-assistance');
  if (mg_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_minas_gerais_specific_context = document.getElementById('mg-centralwest-section-minas-gerais-specific-context');
  if (mg_centralwest_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-centralwest-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_what_our_clients_say = document.getElementById('mg-centralwest-section-what-our-clients-say');
  if (mg_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#mg-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_frequently_asked_questions = document.getElementById('mg-centralwest-section-frequently-asked-questions');
  if (mg_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#mg-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_international_support = document.getElementById('mg-centralwest-section-international-support');
  if (mg_centralwest_section_international_support) {
    gsap.fromTo('#mg-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_our_credentials = document.getElementById('mg-centralwest-list-our-credentials');
  if (mg_centralwest_list_our_credentials) {
    gsap.from('#mg-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_list_related_services = document.getElementById('mg-centralwest-list-related-services');
  if (mg_centralwest_list_related_services) {
    gsap.from('#mg-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_youre_in_good_hands = document.getElementById('mg-centralwest-section-youre-in-good-hands');
  if (mg_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#mg-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_centralwest_section_21 = document.getElementById('mg-centralwest-section-21');
  if (mg_centralwest_section_21) {
    gsap.fromTo('#mg-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('mg-southeast-form-dynamic-southeast-cities-and-history');
  if (mg_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#mg-southeast-form-dynamic-southeast-cities-and-history input, #mg-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_quick_facts = document.getElementById('mg-southeast-list-quick-facts');
  if (mg_southeast_list_quick_facts) {
    gsap.from('#mg-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_common_challenges_applicants_face = document.getElementById('mg-southeast-list-common-challenges-applicants-face');
  if (mg_southeast_list_common_challenges_applicants_face) {
    gsap.from('#mg-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_how_we_solve_these_challenges = document.getElementById('mg-southeast-list-how-we-solve-these-challenges');
  if (mg_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#mg-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_trip_overview = document.getElementById('mg-southeast-section-trip-overview');
  if (mg_southeast_section_trip_overview) {
    gsap.fromTo('#mg-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_form_who_is_this_trip_for = document.getElementById('mg-southeast-form-who-is-this-trip-for');
  if (mg_southeast_form_who_is_this_trip_for) {
    gsap.from('#mg-southeast-form-who-is-this-trip-for input, #mg-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_required_documents = document.getElementById('mg-southeast-list-required-documents');
  if (mg_southeast_list_required_documents) {
    gsap.from('#mg-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_booking_process = document.getElementById('mg-southeast-list-booking-process');
  if (mg_southeast_list_booking_process) {
    gsap.from('#mg-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_timelines_deadlines = document.getElementById('mg-southeast-section-timelines-deadlines');
  if (mg_southeast_section_timelines_deadlines) {
    gsap.fromTo('#mg-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_fees_costs = document.getElementById('mg-southeast-section-fees-costs');
  if (mg_southeast_section_fees_costs) {
    gsap.fromTo('#mg-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_risks_common_mistakes = document.getElementById('mg-southeast-list-risks-common-mistakes');
  if (mg_southeast_list_risks_common_mistakes) {
    gsap.from('#mg-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_diy_vs_professional_assistance = document.getElementById('mg-southeast-section-diy-vs-professional-assistance');
  if (mg_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_minas_gerais_specific_context = document.getElementById('mg-southeast-section-minas-gerais-specific-context');
  if (mg_southeast_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-southeast-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_what_our_clients_say = document.getElementById('mg-southeast-section-what-our-clients-say');
  if (mg_southeast_section_what_our_clients_say) {
    gsap.fromTo('#mg-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_frequently_asked_questions = document.getElementById('mg-southeast-section-frequently-asked-questions');
  if (mg_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#mg-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_international_support = document.getElementById('mg-southeast-section-international-support');
  if (mg_southeast_section_international_support) {
    gsap.fromTo('#mg-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_our_credentials = document.getElementById('mg-southeast-list-our-credentials');
  if (mg_southeast_list_our_credentials) {
    gsap.from('#mg-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_list_related_services = document.getElementById('mg-southeast-list-related-services');
  if (mg_southeast_list_related_services) {
    gsap.from('#mg-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_youre_in_good_hands = document.getElementById('mg-southeast-section-youre-in-good-hands');
  if (mg_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#mg-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_southeast_section_21 = document.getElementById('mg-southeast-section-21');
  if (mg_southeast_section_21) {
    gsap.fromTo('#mg-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('mg-northeast-form-vibrant-northeast-beaches-and-culture');
  if (mg_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#mg-northeast-form-vibrant-northeast-beaches-and-culture input, #mg-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_quick_facts = document.getElementById('mg-northeast-list-quick-facts');
  if (mg_northeast_list_quick_facts) {
    gsap.from('#mg-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_common_challenges_applicants_face = document.getElementById('mg-northeast-list-common-challenges-applicants-face');
  if (mg_northeast_list_common_challenges_applicants_face) {
    gsap.from('#mg-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_how_we_solve_these_challenges = document.getElementById('mg-northeast-list-how-we-solve-these-challenges');
  if (mg_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#mg-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_trip_overview = document.getElementById('mg-northeast-section-trip-overview');
  if (mg_northeast_section_trip_overview) {
    gsap.fromTo('#mg-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_form_who_is_this_trip_for = document.getElementById('mg-northeast-form-who-is-this-trip-for');
  if (mg_northeast_form_who_is_this_trip_for) {
    gsap.from('#mg-northeast-form-who-is-this-trip-for input, #mg-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_required_documents = document.getElementById('mg-northeast-list-required-documents');
  if (mg_northeast_list_required_documents) {
    gsap.from('#mg-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_booking_process = document.getElementById('mg-northeast-list-booking-process');
  if (mg_northeast_list_booking_process) {
    gsap.from('#mg-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_timelines_deadlines = document.getElementById('mg-northeast-section-timelines-deadlines');
  if (mg_northeast_section_timelines_deadlines) {
    gsap.fromTo('#mg-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_fees_costs = document.getElementById('mg-northeast-section-fees-costs');
  if (mg_northeast_section_fees_costs) {
    gsap.fromTo('#mg-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_risks_common_mistakes = document.getElementById('mg-northeast-list-risks-common-mistakes');
  if (mg_northeast_list_risks_common_mistakes) {
    gsap.from('#mg-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_diy_vs_professional_assistance = document.getElementById('mg-northeast-section-diy-vs-professional-assistance');
  if (mg_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_minas_gerais_specific_context = document.getElementById('mg-northeast-section-minas-gerais-specific-context');
  if (mg_northeast_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-northeast-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_what_our_clients_say = document.getElementById('mg-northeast-section-what-our-clients-say');
  if (mg_northeast_section_what_our_clients_say) {
    gsap.fromTo('#mg-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_frequently_asked_questions = document.getElementById('mg-northeast-section-frequently-asked-questions');
  if (mg_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#mg-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_international_support = document.getElementById('mg-northeast-section-international-support');
  if (mg_northeast_section_international_support) {
    gsap.fromTo('#mg-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_our_credentials = document.getElementById('mg-northeast-list-our-credentials');
  if (mg_northeast_list_our_credentials) {
    gsap.from('#mg-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_list_related_services = document.getElementById('mg-northeast-list-related-services');
  if (mg_northeast_list_related_services) {
    gsap.from('#mg-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_youre_in_good_hands = document.getElementById('mg-northeast-section-youre-in-good-hands');
  if (mg_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#mg-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_northeast_section_21 = document.getElementById('mg-northeast-section-21');
  if (mg_northeast_section_21) {
    gsap.fromTo('#mg-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_form_charming_south_wine_and_gauchos = document.getElementById('mg-south-form-charming-south-wine-and-gauchos');
  if (mg_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#mg-south-form-charming-south-wine-and-gauchos input, #mg-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_quick_facts = document.getElementById('mg-south-list-quick-facts');
  if (mg_south_list_quick_facts) {
    gsap.from('#mg-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_common_challenges_applicants_face = document.getElementById('mg-south-list-common-challenges-applicants-face');
  if (mg_south_list_common_challenges_applicants_face) {
    gsap.from('#mg-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_how_we_solve_these_challenges = document.getElementById('mg-south-list-how-we-solve-these-challenges');
  if (mg_south_list_how_we_solve_these_challenges) {
    gsap.from('#mg-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_trip_overview = document.getElementById('mg-south-section-trip-overview');
  if (mg_south_section_trip_overview) {
    gsap.fromTo('#mg-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_form_who_is_this_trip_for = document.getElementById('mg-south-form-who-is-this-trip-for');
  if (mg_south_form_who_is_this_trip_for) {
    gsap.from('#mg-south-form-who-is-this-trip-for input, #mg-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_required_documents = document.getElementById('mg-south-list-required-documents');
  if (mg_south_list_required_documents) {
    gsap.from('#mg-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_booking_process = document.getElementById('mg-south-list-booking-process');
  if (mg_south_list_booking_process) {
    gsap.from('#mg-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_timelines_deadlines = document.getElementById('mg-south-section-timelines-deadlines');
  if (mg_south_section_timelines_deadlines) {
    gsap.fromTo('#mg-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_fees_costs = document.getElementById('mg-south-section-fees-costs');
  if (mg_south_section_fees_costs) {
    gsap.fromTo('#mg-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_risks_common_mistakes = document.getElementById('mg-south-list-risks-common-mistakes');
  if (mg_south_list_risks_common_mistakes) {
    gsap.from('#mg-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_diy_vs_professional_assistance = document.getElementById('mg-south-section-diy-vs-professional-assistance');
  if (mg_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#mg-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_minas_gerais_specific_context = document.getElementById('mg-south-section-minas-gerais-specific-context');
  if (mg_south_section_minas_gerais_specific_context) {
    gsap.fromTo('#mg-south-section-minas-gerais-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_what_our_clients_say = document.getElementById('mg-south-section-what-our-clients-say');
  if (mg_south_section_what_our_clients_say) {
    gsap.fromTo('#mg-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_frequently_asked_questions = document.getElementById('mg-south-section-frequently-asked-questions');
  if (mg_south_section_frequently_asked_questions) {
    gsap.fromTo('#mg-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_international_support = document.getElementById('mg-south-section-international-support');
  if (mg_south_section_international_support) {
    gsap.fromTo('#mg-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_our_credentials = document.getElementById('mg-south-list-our-credentials');
  if (mg_south_list_our_credentials) {
    gsap.from('#mg-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_list_related_services = document.getElementById('mg-south-list-related-services');
  if (mg_south_list_related_services) {
    gsap.from('#mg-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_youre_in_good_hands = document.getElementById('mg-south-section-youre-in-good-hands');
  if (mg_south_section_youre_in_good_hands) {
    gsap.fromTo('#mg-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

  const mg_south_section_21 = document.getElementById('mg-south-section-21');
  if (mg_south_section_21) {
    gsap.fromTo('#mg-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutCirc'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
