const CHECKUP_DATA = {
  child: {
    label: "Children (1–17)",
    title: "Recommended checkups for children & teens",
    sub: "Regular well-child visits are the cornerstone of preventive care in this age group.",
    items: [
      { icon: "🩺", name: "Well-child visit", desc: "Annual physical exam to monitor growth, development, and overall health.", freq: "Annually", color: "#2D6A4F", bg: "#E8F5EE" },
      { icon: "💉", name: "Vaccinations", desc: "Immunizations per the CDC schedule — flu, MMR, HPV (11+), and others.", freq: "Per schedule", color: "#1E40AF", bg: "#DBEAFE" },
      { icon: "👁️", name: "Vision screening", desc: "Eye test to catch nearsightedness, farsightedness, or lazy eye early.", freq: "Every 1–2 years", color: "#6D28D9", bg: "#EDE9FE" },
      { icon: "🦷", name: "Dental checkup", desc: "Cavity prevention, fluoride treatment, and orthodontic assessment.", freq: "Every 6 months", color: "#B45309", bg: "#FEF3C7" },
      { icon: "👂", name: "Hearing test", desc: "Audiometry to detect hearing loss that can affect learning.", freq: "Every 1–2 years", color: "#065F46", bg: "#D1FAE5" },
      { icon: "🩸", name: "Blood pressure check", desc: "Hypertension screening beginning at age 3.", freq: "Annually", color: "#9F1239", bg: "#FFE4E6" },
    ]
  },
  youngAdult: {
    label: "Young Adults (18–39)",
    title: "Recommended checkups for ages 18–39",
    sub: "Preventive care at this stage sets the foundation for long-term health.",
    items: [
      { icon: "🩺", name: "General physical", desc: "Blood pressure, cholesterol, BMI, and overall baseline health assessment.", freq: "Every 1–3 years", color: "#2D6A4F", bg: "#E8F5EE" },
      { icon: "🦷", name: "Dental checkup", desc: "Professional cleaning and early cavity or gum disease detection.", freq: "Every 6 months", color: "#B45309", bg: "#FEF3C7" },
      { icon: "👁️", name: "Eye exam", desc: "Vision correction check and early glaucoma screening.", freq: "Every 2 years", color: "#6D28D9", bg: "#EDE9FE" },
      { icon: "🩸", name: "Blood pressure", desc: "Screen for hypertension, which often has no symptoms.", freq: "Every 2 years", color: "#9F1239", bg: "#FFE4E6" },
      { icon: "🧪", name: "STI screening", desc: "HIV, chlamydia, and other STI tests based on lifestyle and risk.", freq: "Annually (if at risk)", color: "#1E40AF", bg: "#DBEAFE" },
      { icon: "🧠", name: "Mental health screen", desc: "Depression and anxiety screening during routine primary care visits.", freq: "Annually", color: "#065F46", bg: "#D1FAE5" },
      { icon: "💉", name: "Vaccinations", desc: "Flu, Tdap booster, HPV (up to 26), and travel vaccines as needed.", freq: "Per schedule", color: "#92400E", bg: "#FDE68A" },
    ]
  },
  middleAge: {
    label: "Middle Age (40–64)",
    title: "Recommended checkups for ages 40–64",
    sub: "Screenings become more important as risk for chronic disease increases.",
    items: [
      { icon: "🩺", name: "Annual physical", desc: "Comprehensive metabolic panel, blood pressure, weight, and lifestyle review.", freq: "Annually", color: "#2D6A4F", bg: "#E8F5EE" },
      { icon: "❤️", name: "Cardiovascular screening", desc: "Cholesterol, triglycerides, and 10-year heart disease risk assessment.", freq: "Every 4–6 years", color: "#9F1239", bg: "#FFE4E6" },
      { icon: "🩻", name: "Colorectal cancer screen", desc: "Colonoscopy or stool-based test starting at age 45.", freq: "Every 1–10 years", color: "#1E40AF", bg: "#DBEAFE" },
      { icon: "🫀", name: "Diabetes screening", desc: "Fasting blood glucose and HbA1c to detect pre-diabetes or diabetes.", freq: "Every 3 years", color: "#B45309", bg: "#FEF3C7" },
      { icon: "👁️", name: "Eye exam / glaucoma", desc: "Pressure and optic nerve check — glaucoma risk rises after 40.", freq: "Every 2 years", color: "#6D28D9", bg: "#EDE9FE" },
      { icon: "🦷", name: "Dental checkup", desc: "Gum disease, oral cancer screening, and cavity prevention.", freq: "Every 6 months", color: "#065F46", bg: "#D1FAE5" },
      { icon: "🔬", name: "Skin cancer check", desc: "Full-body dermatology exam to identify suspicious moles or lesions.", freq: "Annually", color: "#92400E", bg: "#FDE68A" },
      { icon: "🩴", name: "Bone density (women)", desc: "DEXA scan to assess osteoporosis risk, especially post-menopause.", freq: "As recommended", color: "#6D28D9", bg: "#EDE9FE" },
    ]
  },
  senior: {
    label: "Seniors (65+)",
    title: "Recommended checkups for ages 65+",
    sub: "Comprehensive preventive care at this stage supports healthy aging and independence.",
    items: [
      { icon: "🩺", name: "Annual wellness visit", desc: "Medicare-covered comprehensive review including functional and cognitive assessment.", freq: "Annually", color: "#2D6A4F", bg: "#E8F5EE" },
      { icon: "❤️", name: "Cardiovascular screening", desc: "Blood pressure, cholesterol, EKG, and arterial health evaluation.", freq: "Annually", color: "#9F1239", bg: "#FFE4E6" },
      { icon: "🧠", name: "Cognitive screening", desc: "Early detection of Alzheimer's disease, dementia, or memory concerns.", freq: "Annually", color: "#6D28D9", bg: "#EDE9FE" },
      { icon: "🦴", name: "Bone density (DEXA)", desc: "Osteoporosis screening to prevent fractures and falls.", freq: "Every 2 years", color: "#1E40AF", bg: "#DBEAFE" },
      { icon: "🫀", name: "Diabetes management", desc: "Blood glucose and HbA1c monitoring for prevention and management.", freq: "Every 3–6 months", color: "#B45309", bg: "#FEF3C7" },
      { icon: "🩻", name: "Colorectal cancer screen", desc: "Continued colonoscopy or FIT testing until age 75.", freq: "Per recommendation", color: "#065F46", bg: "#D1FAE5" },
      { icon: "👁️", name: "Eye exam", desc: "Macular degeneration, cataracts, and glaucoma screening.", freq: "Annually", color: "#92400E", bg: "#FDE68A" },
      { icon: "💉", name: "Vaccinations", desc: "Flu, pneumococcal, shingles (Shingrix), and COVID-19 boosters.", freq: "Per schedule", color: "#9F1239", bg: "#FFE4E6" },
      { icon: "👂", name: "Hearing test", desc: "Audiometry to detect age-related hearing loss and prevent falls.", freq: "Annually", color: "#2D6A4F", bg: "#E8F5EE" },
    ]
  }
};

let selectedCheckup = null;

function getAgeGroup(age) {
  if (age < 18) return 'child';
  if (age < 40) return 'youngAdult';
  if (age < 65) return 'middleAge';
  return 'senior';
}

function findCheckups() {
  const age = parseInt(document.getElementById('age-input').value);
  if (!age || age < 1 || age > 120) {
    document.getElementById('age-input').focus();
    return;
  }

  const group = getAgeGroup(age);
  const data = CHECKUP_DATA[group];

  document.getElementById('age-group-display').textContent = `Showing recommendations for: ${data.label}`;
  document.getElementById('checkup-title').textContent = data.title;
  document.getElementById('checkup-sub').textContent = data.sub;

  const grid = document.getElementById('checkups-grid');
  grid.innerHTML = '';

  data.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'checkup-card';
    card.style.setProperty('--category-color', item.color);
    card.style.setProperty('--category-bg', item.bg);
    card.innerHTML = `
      <div class="checkup-icon">${item.icon}</div>
      <div class="checkup-name">${item.name}</div>
      <div class="checkup-desc">${item.desc}</div>
      <span class="checkup-freq">${item.freq}</span>
    `;
    card.onclick = () => selectCheckup(item, card);
    grid.appendChild(card);
  });

  document.getElementById('checkup-section').classList.add('visible');
  document.getElementById('clinic-section').classList.remove('visible');
  document.getElementById('quiz-section').classList.remove('visible');
  selectedCheckup = null;

  document.getElementById('checkup-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectCheckup(item, cardEl) {
  document.querySelectorAll('.checkup-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');
  selectedCheckup = item;

  document.getElementById('clinic-section').classList.remove('visible');
  openQuiz(item);
}

// Per-checkup tailored quiz questions, keyed by checkup name
const QUIZ_QUESTIONS = {

  // ── CHILD ──────────────────────────────────────────────────────────────────
  "Well-child visit": [
    { id: 'lastVisit', text: 'When was the child\'s last well-child visit?', options: ['Within 12 months', '1–2 years ago', '2+ years ago', 'Never / unsure'] },
    { id: 'growthConcerns', text: 'Any concerns about height, weight, or development milestones?', options: ['No concerns', 'Slight concerns', 'Noticeable delays or issues'] },
    { id: 'behaviorMood', text: 'Have there been changes in mood, behavior, or school performance?', options: ['None at all', 'Minor changes', 'Significant changes'] },
    { id: 'chronicIllness', text: 'Does the child have any ongoing or chronic health conditions?', options: ['No', 'One managed condition', 'Multiple conditions'] },
  ],
  "Vaccinations": [
    { id: 'vaccStatus', text: 'Are the child\'s vaccines up to date per the CDC schedule?', options: ['Yes, fully current', 'A few may be missing', 'Several missed', 'Not sure / never checked'] },
    { id: 'lastVacc', text: 'When was the last vaccination received?', options: ['Within 6 months', '6–12 months ago', 'Over 1 year ago', 'Don\'t remember'] },
    { id: 'fluShot', text: 'Did the child receive a flu shot this season?', options: ['Yes', 'Not yet this season', 'Rarely / never gets flu shots'] },
    { id: 'reaction', text: 'Any prior adverse reactions to vaccines?', options: ['No reactions', 'Mild reactions (soreness, fever)', 'Significant reaction requiring care'] },
  ],
  "Vision screening": [
    { id: 'lastEye', text: 'When was the child\'s last eye exam?', options: ['Within 1 year', '1–2 years ago', '2+ years ago', 'Never'] },
    { id: 'squinting', text: 'Does the child squint, sit close to screens, or complain of headaches?', options: ['None of these', 'Occasionally', 'Frequently'] },
    { id: 'schoolPerf', text: 'Has vision difficulty affected reading or school performance?', options: ['No impact', 'Some difficulty', 'Noticeably struggling'] },
    { id: 'familyVision', text: 'Does the family have a history of nearsightedness or lazy eye?', options: ['No family history', 'One parent affected', 'Both parents or siblings affected'] },
  ],
  "Dental checkup": [
    { id: 'lastDental', text: 'When was the last dental visit?', options: ['Within 6 months', '6–12 months ago', '1–2 years ago', 'Over 2 years / never'] },
    { id: 'toothPain', text: 'Any tooth pain, sensitivity, or visible cavities?', options: ['None', 'Mild sensitivity', 'Pain or visible decay'] },
    { id: 'brushing', text: 'How consistently does the child brush and floss?', options: ['Twice daily + floss', 'Once daily', 'Inconsistently'] },
    { id: 'sweetDiet', text: 'How often does the child consume sugary drinks or snacks?', options: ['Rarely', 'A few times a week', 'Daily'] },
  ],
  "Hearing test": [
    { id: 'lastHearing', text: 'When was the child\'s last hearing test?', options: ['Within 1 year', '1–2 years ago', '2+ years ago', 'Never / unsure'] },
    { id: 'responseSound', text: 'Does the child respond normally to sounds and conversation?', options: ['Yes, no issues', 'Sometimes delayed', 'Frequently misses sounds or speech'] },
    { id: 'schoolListen', text: 'Any signs of difficulty listening or following instructions at school?', options: ['No', 'Occasional issues', 'Regular concern from teachers'] },
    { id: 'earInfections', text: 'History of frequent ear infections?', options: ['Rarely or never', '1–2 infections', '3 or more infections'] },
  ],
  "Blood pressure check": [
    { id: 'lastBP', text: 'When was the child\'s blood pressure last checked?', options: ['Within 1 year', '1–2 years ago', 'Over 2 years ago', 'Never / not sure'] },
    { id: 'bpResult', text: 'Was the last reading in the normal range?', options: ['Yes, normal', 'Borderline high', 'High / flagged by doctor', 'Never been checked'] },
    { id: 'weight', text: 'Is the child at a healthy weight for their age?', options: ['Yes', 'Slightly overweight', 'Overweight or obese'] },
    { id: 'familyBP', text: 'Family history of high blood pressure or kidney disease?', options: ['No known history', 'One parent', 'Multiple family members'] },
  ],

  // ── YOUNG ADULT ────────────────────────────────────────────────────────────
  "General physical": [
    { id: 'lastPhysical', text: 'When was your last general physical exam?', options: ['Within 1 year', '1–3 years ago', '3+ years ago', 'Never'] },
    { id: 'symptoms', text: 'Are you experiencing any unexplained symptoms (fatigue, pain, weight change)?', options: ['None', 'Mild or occasional', 'Persistent or worsening'] },
    { id: 'riskFactors', text: 'Do you smoke, drink heavily, or have a high-stress lifestyle?', options: ['None of these', 'One of these', 'Two or more'] },
    { id: 'familyHistory', text: 'Family history of heart disease, diabetes, or cancer?', options: ['No known history', 'One condition', 'Multiple conditions'] },
  ],
  "Eye exam": [
    { id: 'lastEye', text: 'When was your last comprehensive eye exam?', options: ['Within 1 year', '1–2 years ago', '2–4 years ago', 'Over 4 years / never'] },
    { id: 'visionChange', text: 'Have you noticed any changes in your vision lately?', options: ['No changes', 'Slightly blurrier', 'Significant change'] },
    { id: 'screenTime', text: 'How many hours a day do you spend on screens?', options: ['Under 4 hours', '4–8 hours', 'Over 8 hours'] },
    { id: 'headaches', text: 'Do you get headaches or eye strain after reading or screen use?', options: ['Rarely / never', 'Occasionally', 'Frequently'] },
  ],
  "Blood pressure": [
    { id: 'lastBP', text: 'When was your blood pressure last checked?', options: ['Within 6 months', '6–12 months ago', '1–2 years ago', 'Over 2 years / never'] },
    { id: 'bpResult', text: 'Was your last reading in the normal range?', options: ['Yes, normal', 'Borderline / "watch it"', 'High — I\'m monitoring it', 'I don\'t know'] },
    { id: 'lifestyle', text: 'How is your diet and physical activity level?', options: ['Balanced diet + regular exercise', 'Moderate', 'Poor diet + mostly sedentary'] },
    { id: 'familyBP', text: 'Family history of high blood pressure or stroke?', options: ['No known history', 'One parent or sibling', 'Multiple family members'] },
    { id: 'stress', text: 'How would you rate your current stress level?', options: ['Low', 'Moderate', 'High', 'Chronic / overwhelming'] },
  ],
  "STI screening": [
    { id: 'lastSTI', text: 'When was your last STI screening?', options: ['Within 6 months', '6–12 months ago', '1–2 years ago', 'Never or over 2 years ago'] },
    { id: 'partners', text: 'How many sexual partners have you had in the past year?', options: ['One committed partner', '2–3 partners', '4+ partners', 'Prefer not to say'] },
    { id: 'protection', text: 'How consistently do you use barrier protection (condoms)?', options: ['Always', 'Most of the time', 'Occasionally', 'Rarely or never'] },
    { id: 'symptoms', text: 'Any unusual symptoms (discharge, sores, burning)?', options: ['No symptoms', 'Mild symptoms', 'Noticeable or worsening symptoms'] },
  ],
  "Mental health screen": [
    { id: 'moodDuration', text: 'For how long have you been feeling low, anxious, or stressed?', options: ['I\'m feeling fine', 'A few days / situational', 'A few weeks', 'Over a month'] },
    { id: 'dailyFunction', text: 'Is your mood affecting work, school, or relationships?', options: ['Not at all', 'Mildly', 'Significantly'] },
    { id: 'sleep', text: 'How is your sleep quality?', options: ['Good — 7–9 hours', 'Fair — often disturbed', 'Poor — difficulty sleeping or oversleeping'] },
    { id: 'support', text: 'Do you have a therapist or mental health provider you see?', options: ['Yes, regularly', 'Seen one before but not now', 'Never sought help'] },
    { id: 'substanceUse', text: 'Do you use alcohol or substances to cope with stress or emotions?', options: ['No', 'Occasionally', 'Regularly'] },
  ],
  "Vaccinations (young adult)": [
    { id: 'fluVacc', text: 'Did you get a flu shot this year?', options: ['Yes', 'Not yet this season', 'I skip flu shots'] },
    { id: 'tdap', text: 'Have you had a Tdap booster in the last 10 years?', options: ['Yes', 'Not sure', 'No — it\'s been a long time'] },
    { id: 'hpv', text: 'Have you completed the HPV vaccine series (if under 27)?', options: ['Yes, completed', 'Partially done', 'Never started', 'Over 27 / not applicable'] },
    { id: 'travel', text: 'Do you travel internationally or work in healthcare?', options: ['No', 'Occasionally', 'Yes, frequently'] },
  ],

  // ── MIDDLE AGE ─────────────────────────────────────────────────────────────
  "Annual physical": [
    { id: 'lastPhysical', text: 'When was your last comprehensive physical?', options: ['Within 1 year', '1–2 years ago', '2–4 years ago', 'Over 4 years / never'] },
    { id: 'labWork', text: 'Have you had blood work (cholesterol, blood sugar) done recently?', options: ['Within 1 year', '1–3 years ago', 'Over 3 years ago', 'Never'] },
    { id: 'symptoms', text: 'Any new or worsening symptoms (fatigue, pain, weight change)?', options: ['None', 'Mild', 'Moderate', 'Significant'] },
    { id: 'chronicDx', text: 'Do you have any diagnosed chronic conditions?', options: ['None', 'One managed condition', 'Two or more conditions'] },
  ],
  "Cardiovascular screening": [
    { id: 'lastCardio', text: 'When was your last cholesterol or heart risk assessment?', options: ['Within 1 year', '1–3 years ago', '3–6 years ago', 'Never / unsure'] },
    { id: 'cholesterol', text: 'Do you know your cholesterol levels?', options: ['Yes — within normal range', 'Yes — borderline or high', 'No, I haven\'t been tested recently'] },
    { id: 'symptoms', text: 'Any chest discomfort, shortness of breath, or irregular heartbeat?', options: ['None', 'Rarely', 'Occasionally', 'Frequently'] },
    { id: 'lifestyle', text: 'How would you describe your diet and exercise habits?', options: ['Heart-healthy diet + regular exercise', 'Moderate', 'Poor diet + mostly sedentary'] },
    { id: 'familyHeart', text: 'Family history of early heart attack or stroke?', options: ['No', 'One relative after age 60', 'One relative before age 60', 'Multiple family members'] },
  ],
  "Colorectal cancer screen": [
    { id: 'lastColon', text: 'Have you ever had a colonoscopy or colorectal screening?', options: ['Yes — within last 10 years', 'Yes — over 10 years ago', 'Never', 'Only a stool test (FIT/Cologuard)'] },
    { id: 'bowelChanges', text: 'Any changes in bowel habits, blood in stool, or abdominal pain?', options: ['None', 'Mild / occasional', 'Persistent or worsening'] },
    { id: 'familyColon', text: 'Family history of colorectal cancer or polyps?', options: ['No', 'One relative (after 60)', 'One relative (before 60)', 'Multiple relatives'] },
    { id: 'ibd', text: 'Do you have Crohn\'s disease or ulcerative colitis?', options: ['No', 'Diagnosed but well managed', 'Active or poorly controlled'] },
  ],
  "Diabetes screening": [
    { id: 'lastGlucose', text: 'When was your last fasting blood glucose or HbA1c test?', options: ['Within 1 year', '1–3 years ago', 'Over 3 years ago', 'Never'] },
    { id: 'glucoseResult', text: 'Were your results in the normal range?', options: ['Yes, normal', 'Borderline / pre-diabetic', 'Diabetic range', 'Don\'t know'] },
    { id: 'symptoms', text: 'Frequent thirst, urination, fatigue, or blurred vision?', options: ['None', 'Occasional', 'Frequent'] },
    { id: 'weight', text: 'How would you describe your current weight?', options: ['Healthy BMI', 'Slightly overweight', 'Obese or significantly overweight'] },
    { id: 'familyDiabetes', text: 'Family history of type 2 diabetes?', options: ['No', 'One parent or sibling', 'Multiple family members'] },
  ],
  "Eye exam / glaucoma": [
    { id: 'lastEye', text: 'When was your last comprehensive eye exam?', options: ['Within 1 year', '1–2 years ago', '2–4 years ago', 'Over 4 years / never'] },
    { id: 'pressureCheck', text: 'Have you ever had your eye pressure (IOP) measured?', options: ['Yes — normal', 'Yes — borderline or elevated', 'Never'] },
    { id: 'peripheralVision', text: 'Any loss of side (peripheral) vision or blurred spots?', options: ['None', 'Possibly — hard to tell', 'Yes, noticeable'] },
    { id: 'familyGlaucoma', text: 'Family history of glaucoma or other eye diseases?', options: ['No', 'One family member', 'Multiple family members'] },
  ],
  "Skin cancer check": [
    { id: 'lastSkin', text: 'When was your last full-body skin exam by a dermatologist?', options: ['Within 1 year', '1–3 years ago', 'Over 3 years ago', 'Never'] },
    { id: 'moleChanges', text: 'Have you noticed any new, changing, or unusual moles or spots?', options: ['None', 'One suspicious spot', 'Multiple spots I\'m unsure about'] },
    { id: 'sunExposure', text: 'How much sun exposure do you typically get?', options: ['Minimal — mostly indoors', 'Moderate — occasional outdoor activity', 'High — outdoors frequently or tanning bed use'] },
    { id: 'sunburns', text: 'Have you had significant sunburns in the past?', options: ['Rarely / never', 'A few times', 'Many times / severe burns'] },
    { id: 'familySkin', text: 'Family history of melanoma or skin cancer?', options: ['No', 'One relative', 'Multiple relatives'] },
  ],
  "Bone density (women)": [
    { id: 'lastDEXA', text: 'Have you ever had a DEXA bone density scan?', options: ['Yes — normal results', 'Yes — low bone density found', 'Never'] },
    { id: 'menopause', text: 'What is your menopausal status?', options: ['Pre-menopausal', 'Peri-menopausal', 'Post-menopausal (under 5 years)', 'Post-menopausal (over 5 years)'] },
    { id: 'fractures', text: 'Any fractures from minor injuries or falls in the past few years?', options: ['None', 'One fracture', 'Two or more fractures'] },
    { id: 'calcium', text: 'Do you get adequate calcium and vitamin D in your diet or supplements?', options: ['Yes, consistently', 'Sometimes', 'Rarely / not sure'] },
    { id: 'familyOsteo', text: 'Family history of osteoporosis or hip fractures?', options: ['No known history', 'One relative', 'Multiple relatives'] },
  ],

  // ── SENIOR ─────────────────────────────────────────────────────────────────
  "Annual wellness visit": [
    { id: 'lastWellness', text: 'When was your last Medicare Annual Wellness Visit?', options: ['Within 12 months', '1–2 years ago', '2+ years ago', 'Never had one'] },
    { id: 'chronicConditions', text: 'How many chronic conditions are you currently managing?', options: ['None', '1–2 conditions', '3–4 conditions', '5 or more'] },
    { id: 'medications', text: 'How many prescription medications do you take daily?', options: ['None', '1–2', '3–5', '6 or more'] },
    { id: 'newSymptoms', text: 'Any new symptoms or health changes since your last visit?', options: ['None', 'Minor changes', 'Several new concerns'] },
  ],
  "Cardiovascular screening (senior)": [
    { id: 'lastCardio', text: 'When was your last heart or cholesterol check-up?', options: ['Within 6 months', '6–12 months ago', '1–2 years ago', 'Over 2 years ago'] },
    { id: 'heartSymptoms', text: 'Any chest pain, shortness of breath, or irregular heartbeat?', options: ['None', 'Rarely', 'Occasionally', 'Frequently'] },
    { id: 'bpControl', text: 'Is your blood pressure currently well controlled?', options: ['Yes, on track', 'Borderline — monitoring it', 'No, it\'s been elevated', 'Not sure'] },
    { id: 'afib', text: 'Have you been diagnosed with AFib or experienced palpitations?', options: ['No', 'Suspected but undiagnosed', 'Yes, diagnosed'] },
    { id: 'smoking', text: 'Do you smoke or have a significant smoking history?', options: ['Never smoked', 'Former smoker (10+ years ago)', 'Former smoker (within 10 years)', 'Current smoker'] },
  ],
  "Cognitive screening": [
    { id: 'lastCognitive', text: 'Have you ever had a formal cognitive or memory screening?', options: ['Yes — within 1 year', 'Yes — over 2 years ago', 'Never'] },
    { id: 'memoryIssues', text: 'How often do you forget things that affect daily life?', options: ['Rarely / normal forgetfulness', 'Occasionally — mild concern', 'Frequently — noticeably affecting life'] },
    { id: 'confusionEpisodes', text: 'Have you or others noticed confusion, disorientation, or personality changes?', options: ['No', 'Rarely', 'Occasionally', 'Frequently'] },
    { id: 'familyDementia', text: 'Family history of Alzheimer\'s or dementia?', options: ['No known history', 'One parent or sibling', 'Multiple family members'] },
    { id: 'adc', text: 'Do you regularly engage in mentally stimulating activities (reading, puzzles, socializing)?', options: ['Yes, daily', 'A few times a week', 'Rarely'] },
  ],
  "Bone density (DEXA)": [
    { id: 'lastDEXA', text: 'When was your last DEXA scan?', options: ['Within 2 years', '2–4 years ago', 'Over 4 years ago', 'Never'] },
    { id: 'dexaResult', text: 'What were the results of your last bone density scan?', options: ['Normal', 'Osteopenia (low bone mass)', 'Osteoporosis diagnosed', 'Never been scanned'] },
    { id: 'fallHistory', text: 'Have you had any falls or near-falls in the past year?', options: ['None', 'One fall', 'Two or more falls'] },
    { id: 'fractures', text: 'Any fractures in the last 2 years (even from minor incidents)?', options: ['None', 'One fracture', 'Two or more fractures'] },
    { id: 'supplementation', text: 'Are you taking calcium and vitamin D supplements?', options: ['Yes, both regularly', 'Calcium only or D only', 'Neither'] },
  ],
  "Diabetes management": [
    { id: 'lastA1C', text: 'When was your last HbA1c (blood sugar) test?', options: ['Within 3 months', '3–6 months ago', '6–12 months ago', 'Over 1 year ago'] },
    { id: 'a1cLevel', text: 'Is your blood sugar currently in your target range?', options: ['Yes, well controlled', 'Slightly elevated', 'Poorly controlled', 'Not sure'] },
    { id: 'diabetesSymptoms', text: 'Any symptoms of poorly controlled diabetes (thirst, fatigue, blurred vision, foot numbness)?', options: ['None', 'One or two symptoms', 'Several symptoms'] },
    { id: 'meds', text: 'Are you taking diabetes medication as prescribed?', options: ['Yes, consistently', 'Sometimes miss doses', 'Frequently miss doses', 'No medication prescribed'] },
    { id: 'footExam', text: 'Have you had a foot exam by your doctor in the past year?', options: ['Yes', 'No', 'Never had one'] },
  ],
  "Colorectal cancer screen (senior)": [
    { id: 'lastColon', text: 'When was your last colonoscopy or stool-based test?', options: ['Within 1 year (stool test) or 10 years (colonoscopy)', 'Due for repeat soon', 'Overdue', 'Never had one'] },
    { id: 'bowelChanges', text: 'Any recent changes in bowel habits, rectal bleeding, or abdominal pain?', options: ['None', 'Mild or occasional', 'Persistent'] },
    { id: 'polypHistory', text: 'Have polyps been found in prior screenings?', options: ['No polyps found', 'Low-risk polyps', 'High-risk or multiple polyps', 'Never screened'] },
    { id: 'familyColon', text: 'Family history of colorectal cancer?', options: ['No', 'One relative', 'Multiple relatives'] },
  ],
  "Eye exam (senior)": [
    { id: 'lastEye', text: 'When was your last eye exam?', options: ['Within 1 year', '1–2 years ago', 'Over 2 years ago', 'Can\'t recall'] },
    { id: 'visionChange', text: 'Have you noticed changes in your central or side vision?', options: ['No changes', 'Mild blur or haziness', 'Significant changes'] },
    { id: 'glare', text: 'Do you experience glare, halos around lights, or difficulty with night vision?', options: ['Rarely', 'Occasionally', 'Frequently'] },
    { id: 'familyEye', text: 'Family history of macular degeneration, glaucoma, or cataracts?', options: ['No known history', 'One family member', 'Multiple family members'] },
    { id: 'drivingVision', text: 'Has your vision affected driving or daily activities?', options: ['Not at all', 'Slightly', 'Yes, significantly'] },
  ],
  "Vaccinations (senior)": [
    { id: 'fluVacc', text: 'Did you receive a flu shot this season?', options: ['Yes', 'Not yet this season', 'I usually skip flu shots'] },
    { id: 'shingrix', text: 'Have you received the Shingrix (shingles) vaccine (2 doses)?', options: ['Yes, both doses', 'One dose only', 'No', 'Not sure'] },
    { id: 'pneumococcal', text: 'Have you had a pneumococcal vaccine (PCV15/PCV20)?', options: ['Yes', 'Not sure', 'No'] },
    { id: 'covid', text: 'Are you up to date with COVID-19 boosters?', options: ['Yes, current booster', 'Behind on boosters', 'Never vaccinated for COVID'] },
  ],
  "Hearing test (senior)": [
    { id: 'lastHearing', text: 'When was your last formal hearing test (audiogram)?', options: ['Within 1 year', '1–2 years ago', '2–5 years ago', 'Never / long ago'] },
    { id: 'hearingLoss', text: 'Do people often need to repeat themselves for you?', options: ['Rarely / never', 'Occasionally', 'Frequently'] },
    { id: 'tvVolume', text: 'Do you turn the TV volume higher than others prefer?', options: ['No, normal volume', 'Slightly higher', 'Significantly higher'] },
    { id: 'tinnitus', text: 'Do you experience ringing or buzzing in your ears (tinnitus)?', options: ['Never', 'Occasionally', 'Frequently'] },
    { id: 'hearingAid', text: 'Do you currently use or have you been told you need a hearing aid?', options: ['No, hearing is fine', 'Told I might benefit from one', 'I use hearing aids already'] },
  ],

};

function getQuestionsForCheckup(item) {
  // Try exact name match first
  if (QUIZ_QUESTIONS[item.name]) return QUIZ_QUESTIONS[item.name];
  // Try name with age-group suffix variants (e.g. senior Cardiovascular)
  const age = parseInt(document.getElementById('age-input').value);
  const group = getAgeGroup(age);
  const suffixKey = item.name + (group === 'senior' ? ' (senior)' : group === 'youngAdult' ? ' (young adult)' : '');
  if (QUIZ_QUESTIONS[suffixKey]) return QUIZ_QUESTIONS[suffixKey];
  // Generic fallback
  return [
    { id: 'lastVisit', text: `When was your last ${item.name.toLowerCase()}?`, options: ['Within 1 year', '1–2 years ago', '2+ years ago', 'Never / unsure'] },
    { id: 'symptoms', text: 'Do you have any symptoms or concerns related to this?', options: ['None', 'Mild', 'Moderate', 'Significant'] },
    { id: 'familyHistory', text: 'Any relevant family history?', options: ['No known history', 'One family member', 'Multiple family members'] },
  ];
}

function openQuiz(item) {
  const questions = getQuestionsForCheckup(item);

  document.getElementById('quiz-banner-name').textContent = `${item.icon} ${item.name}`;
  document.getElementById('quiz-result').innerHTML = '';
  document.getElementById('quiz-submit-btn').style.display = 'inline-flex';

  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';

  questions.forEach((q, i) => {
    const block = document.createElement('div');
    block.className = 'quiz-question-block';
    block.innerHTML = `
      <div class="quiz-q-label">Q${i + 1}. ${q.text}</div>
      <div class="quiz-options" data-qid="${q.id}">
        ${q.options.map((opt, j) => `
          <button class="quiz-option" data-index="${j}" onclick="selectOption(this, '${q.id}')">${opt}</button>
        `).join('')}
      </div>
    `;
    container.appendChild(block);
  });

  document.getElementById('quiz-section').classList.add('visible');
  document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectOption(btn, qid) {
  const group = btn.closest('.quiz-options');
  group.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function closeQuiz() {
  document.getElementById('quiz-section').classList.remove('visible');
  document.querySelectorAll('.checkup-card').forEach(c => c.classList.remove('selected'));
  selectedCheckup = null;
}

async function submitQuiz() {
  const age = parseInt(document.getElementById('age-input').value);
  const group = getAgeGroup(age);
  const questions = getQuestionsForCheckup(selectedCheckup);

  const answers = [];
  let allAnswered = true;
  questions.forEach(q => {
    const selected = document.querySelector(`.quiz-options[data-qid="${q.id}"] .quiz-option.selected`);
    if (!selected) { allAnswered = false; return; }
    answers.push({ question: q.text, answer: selected.textContent.trim() });
  });

  if (!allAnswered) {
    document.getElementById('quiz-questions').querySelectorAll('.quiz-question-block').forEach(block => {
      const opts = block.querySelector('.quiz-options');
      if (!opts.querySelector('.quiz-option.selected')) {
        block.classList.add('unanswered');
        setTimeout(() => block.classList.remove('unanswered'), 800);
      }
    });
    return;
  }

  const resultEl = document.getElementById('quiz-result');
  document.getElementById('quiz-submit-btn').style.display = 'none';
  resultEl.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span></div>`;

  const prompt = `You are a preventive healthcare advisor. A user wants to assess how urgently they need a "${selectedCheckup.name}" screening. Their age group is "${CHECKUP_DATA[group].label}".

Their answers to a health quiz are:
${answers.map((a, i) => `${i + 1}. ${a.question}\n   Answer: ${a.answer}`).join('\n')}

Based on these answers, provide:
1. An urgency score from 1 to 100 (1 = not urgent at all, 100 = seek care immediately)
2. A short label for the score (e.g. "Low urgency", "Moderate urgency", "High urgency", "Seek care soon")
3. A 2–3 sentence explanation of why this score was given
4. One concrete next step the user should take

Respond ONLY as valid JSON (no markdown, no extra text):
{
  "score": <number 1-100>,
  "label": "<short label>",
  "explanation": "<2-3 sentence explanation>",
  "nextStep": "<one concrete action>"
}`;

  try {
    const response = await fetch("https://purple-wildflower-2d4e.hunterc23.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.choices[0].message.content;
    const clean = text.replace(/<think>[\s\S]*?<\/think>/g, "").replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);
    renderUrgencyResult(result);
  } catch (err) {
    resultEl.innerHTML = `<div class="empty-state"><div class="big-icon">⚠️</div><p>Couldn't calculate urgency score. Please try again.</p></div>`;
    document.getElementById('quiz-submit-btn').style.display = 'inline-flex';
  }
}

function renderUrgencyResult(result) {
  const score = result.score;
  let colorClass, trackColor;
  if (score < 34) { colorClass = 'urgency-low'; trackColor = '#2D6A4F'; }
  else if (score < 67) { colorClass = 'urgency-med'; trackColor = '#B45309'; }
  else { colorClass = 'urgency-high'; trackColor = '#991B1B'; }

  const resultEl = document.getElementById('quiz-result');
  resultEl.innerHTML = `
    <div class="urgency-result ${colorClass}">
      <div class="urgency-score-wrap">
        <svg class="urgency-ring" viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#E5E0D8" stroke-width="10"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="${trackColor}" stroke-width="10"
            stroke-dasharray="${2 * Math.PI * 52}"
            stroke-dashoffset="${2 * Math.PI * 52 * (1 - score / 100)}"
            stroke-linecap="round"
            transform="rotate(-90 60 60)"
            class="urgency-arc"/>
          <text x="60" y="55" text-anchor="middle" dominant-baseline="middle" font-size="28" font-weight="600" fill="${trackColor}" font-family="DM Serif Display, serif">${score}</text>
          <text x="60" y="76" text-anchor="middle" font-size="10" fill="#78716C" font-family="DM Sans, sans-serif">/100</text>
        </svg>
        <div class="urgency-label">${result.label}</div>
      </div>
      <div class="urgency-details">
        <p class="urgency-explanation">${result.explanation}</p>
        <div class="urgency-next-step">
          <span class="next-step-label">Next step</span>
          <span>${result.nextStep}</span>
        </div>
      </div>
    </div>
    <button class="btn-find-clinic" onclick="openClinicFromQuiz()">Find a clinic near you →</button>
  `;
}

function openClinicFromQuiz() {
  document.getElementById('selected-name').textContent = `${selectedCheckup.icon} ${selectedCheckup.name}`;
  document.getElementById('clinic-section').classList.add('visible');
  document.getElementById('clinics-output').innerHTML = '';
  document.getElementById('location-input').value = '';
  document.getElementById('clinic-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearClinic() {
  document.getElementById('clinic-section').classList.remove('visible');
  document.getElementById('quiz-section').classList.remove('visible');
  document.querySelectorAll('.checkup-card').forEach(c => c.classList.remove('selected'));
  selectedCheckup = null;
}

async function findClinics() {
  const location = document.getElementById('location-input').value.trim();
  if (!location) {
    document.getElementById('location-input').focus();
    return;
  }

  const output = document.getElementById('clinics-output');
  output.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span></div>`;

  try {
    const prompt = `You are a helpful medical assistant. A user is looking for clinics or hospitals that offer "${selectedCheckup.name}" near "${location}".

Suggest 3 realistic, plausible clinic or hospital options for this location. Format your response ONLY as valid JSON (no markdown, no extra text) like this:
[
  {
    "name": "Clinic Name",
    "address": "123 Main St, City, State",
    "rating": 4.5,
    "type": "General Hospital",
    "availability": "Available Mon–Fri",
    "specialNote": "One short helpful note about this clinic"
  }
]

Make the suggestions realistic for the area. Vary the types (hospital, urgent care, specialty clinic, community health center). Keep addresses plausible for the given location.`;

    const response = await fetch("https://purple-wildflower-2d4e.hunterc23.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.choices[0].message.content;
    const clean = text.replace(/<think>[\s\S]*?<\/think>/g, "").replace(/```json|```/g, "").trim();
    const clinics = JSON.parse(clean);

    renderClinics(clinics);
  } catch (err) {
    output.innerHTML = `
      <div class="empty-state">
        <div class="big-icon">⚠️</div>
        <p>Couldn't load clinic suggestions. Please try again. API DIDN'T WORK</p>
      </div>`;
  }
}

function renderClinics(clinics) {
  const output = document.getElementById('clinics-output');
  output.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'clinics-list';

  clinics.forEach(clinic => {
    const stars = '★'.repeat(Math.floor(clinic.rating)) + (clinic.rating % 1 >= 0.5 ? '½' : '');
    const card = document.createElement('div');
    card.className = 'clinic-card';
    card.innerHTML = `
      <div class="clinic-icon-wrap">🏥</div>
      <div class="clinic-info">
        <div class="clinic-name">${clinic.name}</div>
        <div class="clinic-address">📍 ${clinic.address}</div>
        <div class="clinic-tags">
          <span class="clinic-tag tag-avail">${clinic.availability}</span>
          <span class="clinic-tag tag-spec">${clinic.type}</span>
          ${clinic.specialNote ? `<span class="clinic-tag tag-urgent">${clinic.specialNote}</span>` : ''}
        </div>
      </div>
      <div class="clinic-rating">
        <span class="stars">${stars}</span> ${clinic.rating.toFixed(1)}
      </div>
    `;
    list.appendChild(card);
  });

  output.appendChild(list);
}

document.getElementById('age-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') findCheckups();
});

document.getElementById('location-input') && document.getElementById('location-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') findClinics();
});
