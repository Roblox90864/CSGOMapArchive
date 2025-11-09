const OWNER = 'Fizzyyt64';
const REPO = 'csgoshit';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/maps/`;

async function loadMaps(){
  try{
    const res = await fetch('./maps.json');
    const maps = await res.json();
    renderMaps(maps);
  }catch(e){
    document.getElementById('maps').innerHTML = '<p style="color:#f88">Failed to load maps.json — make sure it exists in docs/</p>';
    console.error(e);
  }
}

function renderMaps(maps){
  const container = document.getElementById('maps');
  container.innerHTML = '';
  maps.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = m.name;

    const desc = document.createElement('p');
    desc.textContent = m.description || 'No description provided.';

    const actions = document.createElement('div');
    actions.className = 'actions';

    const dl = document.createElement('a');
    dl.className = 'btn';
    dl.textContent = 'Download';
    dl.href = RAW_BASE + encodeURIComponent(m.file);
    dl.target = '_blank';

    const info = document.createElement('a');
    info.className = 'btn secondary';
    info.textContent = m.size ? `Size: ${m.size}` : 'Info';
    info.href = '#';

    actions.appendChild(dl);
    actions.appendChild(info);

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(actions);

    container.appendChild(card);
  });
}

// Search
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const q = search.value.toLowerCase();
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(c => {
    const name = c.querySelector('h3').textContent.toLowerCase();
    c.style.display = name.includes(q) ? '' : 'none';
  });
});

loadMaps();