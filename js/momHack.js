// momHacks.js

// Mom hack data
const momHacks = [
  {
    title: '🧼 Quick Hack: Magic Sink Scrub',
    description: 'Mix baking soda and a few drops of lemon essential oil for a quick, non-toxic sink refresher! 💧✨',
    category: 'Cleaning'
  },
  {
    title: '🧺 MomTime Saver: Laundry Shuffle',
    description: 'Sort clothes as you go with 3 bins: lights, darks, and colors. Even toddlers can help! 👕👶🏽',
    category: 'Parenting'
  },
  {
    title: '🍽️ Dinner in a Dash',
    description: 'Rotisserie chicken + microwave steamable veggies + instant rice = gourmet in 12 mins 🍗🥦⏱️',
    category: 'Time-Saving'
  },
  {
    title: '🧘‍♀️ Self-Care Reset',
    description: 'Take 10 minutes in the bathroom with soft music and breathe. Your sanity counts. 💖🎧',
    category: 'Self-Care'
  },
  {
    title: '📅 Sticky Note Command Center',
    description: 'Color-coded sticky notes for each kid’s tasks on the fridge = no chaos mornings 💡📝',
    category: 'Parenting'
  }
];

// Function to load a random hack on page load or button click
function loadRandomHack() {
  const randomIndex = Math.floor(Math.random() * momHacks.length);
  const hack = momHacks[randomIndex];

  document.getElementById('hack-title').innerText = hack.title;
  document.getElementById('hack-description').innerText = hack.description;
  document.getElementById('hack-category').innerText = `Category: ${hack.category}`;
}

// Placeholder save function (can be upgraded later)
function saveHack() {
  alert('💖 Hack saved to favorites! (feature coming soon)');
}

// Copy hack to clipboard for sharing
function shareHack() {
  const title = document.getElementById('hack-title').innerText;
  const desc = document.getElementById('hack-description').innerText;
  const category = document.getElementById('hack-category').innerText;
  const fullHack = `${title}\n\n${desc}\n\n${category}`;

  navigator.clipboard.writeText(fullHack).then(() => {
    alert('📤 Hack copied to clipboard! Share it with a mama!');
  }).catch(err => {
    alert('Something went wrong copying the hack.');
  });
}

// Load one hack when the page first loads
document.addEventListener('DOMContentLoaded', loadRandomHack);