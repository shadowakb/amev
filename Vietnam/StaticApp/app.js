/* Overwrite only the updated portions, but re-send whole file for correctness */
/* app.js – Vietnam Itinerary SPA (client-side only) */

// -------------------------- DATA -------------------------------------------------
const itinerary = [
  {
    day: 1,
    date: '2025-08-07',
    city: 'Transit',
    summary: 'Journey from Una to New Delhi & Overnight Flight',
    stops: [
      { time: '13:23', title: 'Depart Una Railway Station', details: 'Train to New Delhi', place: 'Una Railway Station, Una, Himachal Pradesh, India' },
      { time: '18:25', title: 'Arrive New Delhi', details: 'Transfer to IGI Airport', place: 'New Delhi Railway Station, Paharganj, New Delhi, India' },
      { time: '00:05', title: 'Flight to Hanoi', details: 'DEL to HAN', place: 'Indira Gandhi International Airport, New Delhi, India' }
    ],
    overnight: 'In-flight',
    hotel: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d76.2673!3d31.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad9c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sUna%20Railway%20Station!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  },
  {
    day: 2,
    date: '2025-08-08',
    city: 'Hanoi',
    summary: 'Arrival in Hanoi & Old Quarter Charm',
    stops: [
      { time: '05:40', title: 'Land in Hanoi', details: 'Noi Bai International Airport', place: 'Noi Bai International Airport, Hanoi, Vietnam' },
      { time: '08:00', title: 'Hotel check-in', details: 'Oriental Suites Hotel & Spa', place: 'Oriental Suites Hotel & Spa, 20 Hang Be Street, Hanoi, Vietnam' },
      { time: '10:00', title: 'Old Quarter Exploration', details: 'Narrow streets and traditional trades', place: 'Hanoi Old Quarter, Hoan Kiem District, Hanoi, Vietnam' },
      { time: '12:00', title: 'Hoan Kiem Lake & Temple', details: 'Ngoc Son Temple via Huc Bridge', place: 'Hoan Kiem Lake, Hanoi, Vietnam' },
      { time: '15:00', title: 'Local lunch', details: 'Banh Mi or Egg Coffee', place: 'Hanoi Old Quarter, Hoan Kiem District, Hanoi, Vietnam' },
      { time: '18:00', title: 'Water Puppet Show', details: 'Thang Long Theatre', place: 'Thang Long Water Puppet Theatre, 57B Dinh Tien Hoang, Hanoi, Vietnam' }
    ],
    overnight: 'Hanoi',
    hotel: 'Oriental Suites Hotel & Spa',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0969!2d105.8542!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sHanoi%20Old%20Quarter!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 3,
    date: '2025-08-09',
    city: 'Ha Long Bay',
    summary: 'Majestic Ha Long Bay Cruise',
    stops: [
      { time: '07:50', title: 'Pick-up from hotel', details: 'Limousine Bus to Ha Long Bay', place: 'Oriental Suites Hotel & Spa, 20 Hang Be Street, Hanoi, Vietnam' },
      { time: '12:00', title: 'Board cruise', details: 'Tuần Châu Harbor', place: 'Tuan Chau Harbor, Ha Long Bay, Quang Ninh, Vietnam' },
      { time: '13:00', title: 'Buffet lunch on board', details: 'Cruise through limestone karsts', place: 'Ha Long Bay, Quang Ninh Province, Vietnam' },
      { time: '14:30', title: 'Sung Sot Cave', details: 'Surprise Cave exploration', place: 'Sung Sot Cave, Ha Long Bay, Quang Ninh, Vietnam' },
      { time: '16:00', title: 'Ti Top Island', details: 'Beach & panoramic viewpoint', place: 'Ti Top Island, Ha Long Bay, Quang Ninh, Vietnam' },
      { time: '17:00', title: 'Luon Cave', details: 'Kayaking or bamboo boat', place: 'Luon Cave, Ha Long Bay, Quang Ninh, Vietnam' },
      { time: '21:00', title: 'Return to Hanoi', details: 'Back to hotel', place: 'Oriental Suites Hotel & Spa, 20 Hang Be Street, Hanoi, Vietnam' }
    ],
    overnight: 'Hanoi',
    hotel: 'Oriental Suites Hotel & Spa',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.5!2d107.0847!3d20.9101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a6c1d6c1d6c1d%3A0x6c1d6c1d6c1d6c1d!2sHa%20Long%20Bay!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 4,
    date: '2025-08-10',
    city: 'Ninh Binh',
    summary: 'Ninh Binh\'s Ancient Beauty & Nature',
    stops: [
      { time: '07:30', title: 'Pick-up from hotel', details: 'Limousine D-Car to Ninh Binh', place: 'Oriental Suites Hotel & Spa, 20 Hang Be Street, Hanoi, Vietnam' },
      { time: '10:30', title: 'Hoa Lu Ancient Capital', details: 'Temples and cycling tour', place: 'Hoa Lu Ancient Capital, Ninh Binh Province, Vietnam' },
      { time: '12:00', title: 'Local lunch', details: '', place: 'Ninh Binh City, Ninh Binh Province, Vietnam' },
      { time: '13:00', title: 'Tràng An boat ride', details: 'Caves and waterways', place: 'Trang An Landscape Complex, Ninh Binh Province, Vietnam' },
      { time: '14:45', title: 'Mua Cave climb', details: '500 steps for panoramic views', place: 'Mua Cave, Ninh Binh Province, Vietnam' },
      { time: '18:45', title: 'Return to Hanoi', details: 'Back to hotel', place: 'Oriental Suites Hotel & Spa, 20 Hang Be Street, Hanoi, Vietnam' }
    ],
    overnight: 'Hanoi',
    hotel: 'Oriental Suites Hotel & Spa',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.5!2d105.9745!3d20.2574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c6c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sTrang%20An%20Landscape%20Complex!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 5,
    date: '2025-08-11',
    city: 'Hoi An',
    summary: 'Flight to Da Nang & Hoi An Charm',
    stops: [
      { time: '07:20', title: 'Flight to Da Nang', details: 'VietJet Air VJ-545', place: 'Noi Bai International Airport, Hanoi, Vietnam' },
      { time: '08:40', title: 'Arrive Da Nang', details: 'Transfer to Hoi An', place: 'Da Nang International Airport, Da Nang, Vietnam' },
      { time: '10:00', title: 'Check-in Hoi An', details: 'Royal Riverside Hoi An Hotel & Spa', place: 'Royal Riverside Hoi An Hotel & Spa, 132 Cua Dai Road, Hoi An, Vietnam' },
      { time: '13:00', title: 'Hoi An Ancient Town', details: 'Japanese Covered Bridge, merchant houses', place: 'Hoi An Ancient Town, Quang Nam Province, Vietnam' },
      { time: '16:00', title: 'Coconut Boat Ride', details: 'Cam Thanh village (optional)', place: 'Cam Thanh Coconut Village, Hoi An, Quang Nam, Vietnam' },
      { time: '18:00', title: 'Lantern evening', details: 'Lantern Boat Ride on Thu Bon River', place: 'Thu Bon River, Hoi An, Quang Nam, Vietnam' }
    ],
    overnight: 'Hoi An',
    hotel: 'Royal Riverside Hoi An Hotel & Spa',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8!2d108.3269!3d15.8801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2sHoi%20An%20Ancient%20Town!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 6,
    date: '2025-08-12',
    city: 'Hoi An',
    summary: 'Hoi An Immersion & Relaxation',
    stops: [
      { time: '09:00', title: 'Choose your adventure', details: 'Cooking class, cycling tour, or spa', place: 'Royal Riverside Hoi An Hotel & Spa, 132 Cua Dai Road, Hoi An, Vietnam' },
      { time: '10:00', title: 'Tra Que Village', details: 'Cycling through rice paddies (optional)', place: 'Tra Que Vegetable Village, Hoi An, Quang Nam, Vietnam' },
      { time: '12:00', title: 'Lunch in Hoi An', details: '', place: 'Hoi An Ancient Town, Quang Nam Province, Vietnam' },
      { time: '14:00', title: 'Ancient Town shopping', details: 'Tailored clothing and souvenirs', place: 'Hoi An Ancient Town, Quang Nam Province, Vietnam' },
      { time: '18:00', title: 'Farewell dinner', details: 'Local eatery', place: 'Hoi An Ancient Town, Quang Nam Province, Vietnam' },
      { time: '20:00', title: 'Final lantern stroll', details: 'Reflecting on Hoi An charm', place: 'Hoi An Ancient Town, Quang Nam Province, Vietnam' }
    ],
    overnight: 'Hoi An',
    hotel: 'Royal Riverside Hoi An Hotel & Spa',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8!2d108.3269!3d15.8801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2sHoi%20An%20Ancient%20Town!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 7,
    date: '2025-08-13',
    city: 'Da Nang',
    summary: 'Ba Na Hills Adventure & Da Nang Check-in',
    stops: [
      { time: '08:00', title: 'Check-out Hoi An', details: 'Transfer to Da Nang', place: 'Royal Riverside Hoi An Hotel & Spa, 132 Cua Dai Road, Hoi An, Vietnam' },
      { time: '09:30', title: 'Drop luggage Da Nang', details: 'The Nalod Da Nang', place: 'The Nalod Da Nang, 36 Bach Dang Street, Da Nang, Vietnam' },
      { time: '10:30', title: 'Ba Na Hills', details: 'Cable car to mountain resort', place: 'Ba Na Hills, Hoa Vang District, Da Nang, Vietnam' },
      { time: '12:00', title: 'Golden Bridge', details: 'Iconic bridge walk', place: 'Golden Bridge, Ba Na Hills, Da Nang, Vietnam' },
      { time: '13:00', title: 'Lunch at Ba Na Hills', details: 'Mountain resort restaurants', place: 'Ba Na Hills, Hoa Vang District, Da Nang, Vietnam' },
      { time: '14:00', title: 'French Village & Fantasy Park', details: 'Le Jardin D\'Amour gardens', place: 'Ba Na Hills, Hoa Vang District, Da Nang, Vietnam' },
      { time: '17:00', title: 'Return to Da Nang', details: 'Check-in hotel', place: 'The Nalod Da Nang, 36 Bach Dang Street, Da Nang, Vietnam' }
    ],
    overnight: 'Da Nang',
    hotel: 'The Nalod Da Nang',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0!2d108.2372!3d15.9767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2sBa%20Na%20Hills!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 8,
    date: '2025-08-14',
    city: 'Da Nang',
    summary: 'Da Nang City & Beach Exploration',
    stops: [
      { time: '08:00', title: 'Marble Mountains', details: 'Caves and ancient pagodas', place: 'Marble Mountains, Ngu Hanh Son District, Da Nang, Vietnam' },
      { time: '12:00', title: 'Lunch in Da Nang', details: '', place: 'Da Nang City Center, Da Nang, Vietnam' },
      { time: '14:00', title: 'My Khe Beach', details: 'White sand beach relaxation', place: 'My Khe Beach, Da Nang, Vietnam' },
      { time: '16:00', title: 'Lady Buddha statue', details: 'Linh Ung Pagoda, Son Tra Peninsula', place: 'Linh Ung Pagoda, Son Tra Peninsula, Da Nang, Vietnam' },
      { time: '18:00', title: 'Han River promenade', details: 'Evening stroll', place: 'Han River, Da Nang, Vietnam' },
      { time: '19:00', title: 'Dragon Bridge', details: 'Illuminated bridge viewing', place: 'Dragon Bridge, Da Nang, Vietnam' }
    ],
    overnight: 'Da Nang',
    hotel: 'The Nalod Da Nang',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0!2d108.2220!3d16.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a63%3A0x1df0cb4b86727e06!2sMarble%20Mountains!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 9,
    date: '2025-08-15',
    city: 'Transit',
    summary: 'Da Nang to India',
    stops: [
      { time: '10:00', title: 'Last-minute shopping', details: 'Souvenir shopping', place: 'Da Nang City Center, Da Nang, Vietnam' },
      { time: '12:00', title: 'Check-out hotel', details: 'Transfer to airport', place: 'The Nalod Da Nang, 36 Bach Dang Street, Da Nang, Vietnam' },
      { time: '15:25', title: 'Flight to Hanoi', details: 'Vietnam Airlines VN-7198', place: 'Da Nang International Airport, Da Nang, Vietnam' },
      { time: '16:50', title: 'Arrive Hanoi T1', details: 'Transfer to Terminal 2', place: 'Noi Bai International Airport, Hanoi, Vietnam' },
      { time: '19:05', title: 'Flight to Delhi', details: 'Vietnam Airlines VN-981', place: 'Noi Bai International Airport, Hanoi, Vietnam' },
      { time: '22:05', title: 'Arrive Delhi', details: 'Transfer to railway station', place: 'Indira Gandhi International Airport, New Delhi, India' }
    ],
    overnight: 'In-flight (DEL-UNA)',
    hotel: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0!2d108.2019!3d16.0439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b532aa79bd%3A0x1df0cb4b86727e06!2sDa%20Nang%20International%20Airport!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  },
  {
    day: 10,
    date: '2025-08-16',
    city: 'Home',
    summary: 'Arrival Home',
    stops: [
      { time: '08:00', title: 'Arrive Una Railway Station', details: 'End of journey', place: 'Una Railway Station, Una, Himachal Pradesh, India' },
      { time: '09:00', title: 'Travel home', details: 'From Una Railway Station', place: 'Una Railway Station, Una, Himachal Pradesh, India' }
    ],
    overnight: 'Home',
    hotel: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d76.2673!3d31.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad9c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sUna%20Railway%20Station!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  }
];

// -------------------------- HELPERS ---------------------------------------------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function qsDay() {
  const params = new URLSearchParams(window.location.search);
  const dayParam = parseInt(params.get('day'), 10);
  if (!isNaN(dayParam)) return dayParam;
  if (window.location.hash.startsWith('#day-')) {
    const n = parseInt(window.location.hash.replace('#day-', ''), 10);
    return isNaN(n) ? null : n;
  }
  return null;
}

function goto(day) {
  if (day) {
    history.pushState({}, '', `?day=${day}`);
  } else {
    history.pushState({}, '', window.location.pathname);
  }
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00');
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

// ------------------------- RENDER ----------------------------------------------
function renderSidebar(activeDay) {
  const nav = $('#sidebar');
  nav.innerHTML = '';

  const title = document.createElement('div');
  title.textContent = 'Itinerary';
  title.className = 'nav-sidebar__title';
  title.style.cursor = 'pointer';
  title.addEventListener('click', () => goto(null));
  nav.appendChild(title);

  const list = document.createElement('ul');

  // Overview link first
  const homeLi = document.createElement('li');
  const homeA = document.createElement('a');
  homeA.href = '#';
  homeA.textContent = 'Overview';
  if (!activeDay) homeA.classList.add('active');
  homeA.addEventListener('click', e => {
    e.preventDefault();
    goto(null);
  });
  homeLi.appendChild(homeA);
  list.appendChild(homeLi);

  // Day links
  itinerary.forEach(dayObj => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `?day=${dayObj.day}`;
    a.textContent = `Day ${dayObj.day}`;
    if (dayObj.day === activeDay) a.classList.add('active');
    a.addEventListener('click', e => {
      e.preventDefault();
      goto(dayObj.day);
    });
    li.appendChild(a);
    list.appendChild(li);
  });

  nav.appendChild(list);
}

function renderHome(container) {
  container.innerHTML = '<h1 class="mb-8">Vietnam Itinerary Overview</h1>';
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(280px,1fr))';
  grid.style.gap = 'var(--space-16)';

  itinerary.forEach(dayObj => {
    const card = document.createElement('div');
    card.className = 'card card--day';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.addEventListener('click', () => goto(dayObj.day));
    card.addEventListener('keypress', e => { if (e.key === 'Enter') goto(dayObj.day); });

    const body = document.createElement('div');
    body.className = 'card__body';

    const dayNum = document.createElement('div');
    dayNum.className = 'day-num';
    dayNum.textContent = `Day ${dayObj.day}`;

    const summary = document.createElement('p');
    summary.textContent = dayObj.summary;

    const date = document.createElement('p');
    date.style.color = 'var(--color-text-secondary)';
    date.style.fontSize = 'var(--font-size-sm)';
    date.textContent = formatDate(dayObj.date);

    body.appendChild(dayNum);
    body.appendChild(summary);
    body.appendChild(date);

    card.appendChild(body);
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

function renderDetail(container, dayObj) {
  container.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'flex flex-col gap-4 mb-8';

  const h2 = document.createElement('h2');
  h2.textContent = `Day ${dayObj.day}: ${dayObj.city}`;
  header.appendChild(h2);

  const sub = document.createElement('div');
  sub.className = 'status status--info';
  sub.textContent = `${formatDate(dayObj.date)} · ${dayObj.summary}`;
  header.appendChild(sub);

  container.appendChild(header);

  // Grid layout
  const grid = document.createElement('div');
  grid.className = 'detail-grid';

  // Timeline
  const timeline = document.createElement('ul');
  timeline.className = 'timeline';

  dayObj.stops.forEach((stop, idx) => {
    const item = document.createElement('li');
    item.className = 'timeline-item';
    if (idx === 0) item.classList.add('active');
    item.dataset.place = stop.place || stop.title;

    const point = document.createElement('span');
    point.className = 'timeline-point';

    const content = document.createElement('div');
    content.className = 'timeline-content';

    const time = document.createElement('div');
    time.className = 'timeline-time';
    time.textContent = stop.time;

    const title = document.createElement('div');
    title.textContent = stop.title;

    const details = document.createElement('div');
    details.style.color = 'var(--color-text-secondary)';
    details.style.fontSize = 'var(--font-size-sm)';
    details.textContent = stop.details;

    content.appendChild(time);
    content.appendChild(title);
    if (stop.details) content.appendChild(details);

    item.appendChild(point);
    item.appendChild(content);
    timeline.appendChild(item);
  });

  grid.appendChild(timeline);

  // Map
  const mapWrap = document.createElement('div');
  const iframe = document.createElement('iframe');
  iframe.loading = 'lazy';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  mapWrap.appendChild(iframe);

  function updateMap(place) {
    const placeQuery = encodeURIComponent(place);
    iframe.src = `https://www.google.com/maps?q=${placeQuery}&output=embed`;
  }

  // Initial map load
  if (dayObj.map && dayObj.map.trim() !== '') {
    iframe.src = dayObj.map;
  } else {
    updateMap(dayObj.stops[0].place || dayObj.stops[0].title);
  }

  grid.appendChild(mapWrap);
  container.appendChild(grid);

  // Overnight / hotel
  const footer = document.createElement('div');
  footer.className = 'mt-8';
  footer.innerHTML = `<p><strong>Overnight:</strong> ${dayObj.overnight || '—'}</p>`;
  if (dayObj.hotel) footer.innerHTML += `<p><strong>Hotel:</strong> ${dayObj.hotel}</p>`;
  container.appendChild(footer);

  // Timeline click -> map update
  timeline.addEventListener('click', e => {
    const li = e.target.closest('.timeline-item');
    if (!li) return;
    const place = li.dataset.place;
    if (!place) return;
    updateMap(place);

    // highlight
    $$('.timeline-item', timeline).forEach(el => el.classList.remove('active'));
    li.classList.add('active');
  });
}

function render() {
  const dayNum = qsDay();
  const container = $('#app');

  if (!dayNum) {
    renderHome(container);
  } else {
    const dayObj = itinerary.find(d => d.day === dayNum);
    if (dayObj) {
      renderDetail(container, dayObj);
    } else {
      container.innerHTML = '<p>Day not found.</p>';
    }
  }
  renderSidebar(dayNum);
}

window.addEventListener('popstate', render);
render();
