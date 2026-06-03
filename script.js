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

const QUIZ_QUESTIONS = {
  child: [
    { id: 'lastVisit', text: 'When was the last well-child visit?', options: ['Within 12 months', '1–2 years ago', '2+ years ago', 'Never / unsure'] },
    { id: 'symptoms', text: 'Any recent concerns about growth, vision, or hearing?', options: ['No concerns', 'Minor concerns', 'Yes, noticeable issues'] },
    { id: 'vaccines', text: 'Are vaccinations up to date?', options: ['Yes, fully up to date', 'Some may be missing', 'Not sure', 'No, behind schedule'] },
  ],
  youngAdult: [
    { id: 'lastPhysical', text: 'When was your last general physical exam?', options: ['Within 1 year', '1–3 years ago', '3+ years ago', 'Never'] },
    { id: 'riskFactors', text: 'Do you smoke, drink heavily, or have high-stress lifestyle?', options: ['None of these', 'One of these', 'Two or more'] },
    { id: 'familyHistory', text: 'Family history of heart disease, diabetes, or cancer?', options: ['No known history', 'One condition', 'Multiple conditions'] },
    { id: 'symptoms', text: 'Any current symptoms or health concerns?', options: ['None', 'Minor symptoms', 'Ongoing or worsening symptoms'] },
  ],
  middleAge: [
    { id: 'lastScreening', text: 'When was your last preventive screening (any type)?', options: ['Within 1 year', '1–3 years ago', '3+ years ago', 'Never / unsure'] },
    { id: 'bloodPressure', text: 'Do you have high blood pressure or high cholesterol?', options: ['No', 'One of these', 'Both', 'Unsure'] },
    { id: 'familyHistory', text: 'Family history of colorectal cancer, heart disease, or diabetes?', options: ['No history', 'One relative', 'Multiple relatives'] },
    { id: 'weight', text: 'How would you describe your current weight / BMI?', options: ['Healthy range', 'Slightly overweight', 'Obese or very overweight'] },
    { id: 'smoking', text: 'Do you currently smoke or have a significant smoking history?', options: ['Never smoked', 'Former smoker', 'Current smoker'] },
  ],
  senior: [
    { id: 'lastWellness', text: 'When was your last annual wellness visit?', options: ['Within 12 months', '1–2 years ago', '2+ years ago', 'Never / unsure'] },
    { id: 'chronicConditions', text: 'Do you have any chronic conditions (diabetes, heart disease, etc.)?', options: ['None', 'One managed condition', 'Multiple conditions'] },
    { id: 'mobility', text: 'Any concerns about falls, balance, or mobility?', options: ['No concerns', 'Occasional issues', 'Frequent or serious concerns'] },
    { id: 'memory', text: 'Any memory or cognitive concerns?', options: ['None', 'Minor forgetfulness', 'Noticeable changes'] },
    { id: 'medications', text: 'How many prescription medications do you take?', options: ['None', '1–2', '3–5', '6 or more'] },
  ]
};

function openQuiz(item) {
  const age = parseInt(document.getElementById('age-input').value);
  const group = getAgeGroup(age);
  const questions = QUIZ_QUESTIONS[group];

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
  const questions = QUIZ_QUESTIONS[group];

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
