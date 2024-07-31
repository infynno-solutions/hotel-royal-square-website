// Hide the lightbox when the page loads

let currentIndex = 0;
let currentSection = 'Entrance';
const images = {
  'Entrance': [
    './images/Hotel Royal Square/Entrance/IMG-20240730-WA0223.jpg',
    './images/Hotel Royal Square/Entrance/IMG-20240730-WA0225.jpg',
    './images/Hotel Royal Square/Entrance/IMG-20240730-WA0227.jpg',
    './images/Hotel Royal Square/Entrance/IMG-20240730-WA0228.jpg'
  ],
  'Rooms': [
    'images/Hotel Royal Square/Deluxe Room/IMG-20240730-WA0218.jpg',
    'images/Hotel Royal Square/Deluxe Room/IMG-20240730-WA0219.jpg',
    'images/Hotel Royal Square/Family Room/IMG-20240730-WA0273.jpg',
    'images/Hotel Royal Square/Family Room/IMG-20240730-WA0213.jpg',
    'images/Hotel Royal Square/Family Room/IMG-20240730-WA0214.jpg',
    'images/Hotel Royal Square/Family Room/IMG-20240730-WA0274.jpg',
    'images/Hotel Royal Square/Family Room/IMG-20240730-WA0275.jpg',
    'images/Hotel Royal Square/Suite Room/IMG-20240730-WA0269.jpg',
    'images/Hotel Royal Square/Suite Room/IMG-20240730-WA0266.jpg',
    'images/Hotel Royal Square/Suite Room/IMG-20240730-WA0271.jpg',
    'images/Hotel Royal Square/Suite Room/IMG-20240730-WA0270.jpg',
    'images/Hotel Royal Square/Super Deluxe/IMG-20240730-WA0278.jpg',
    'images/Hotel Royal Square/Super Deluxe/IMG-20240730-WA0279.jpg',
    'images/Hotel Royal Square/Super Deluxe/IMG-20240730-WA0280.jpg'

  ],
  'Outdoors': [
    './images/Hotel Royal Square/Outdoors/IMG-20240730-WA0230.jpg',
    './images/Hotel Royal Square/Outdoors/IMG-20240730-WA0229.jpg'
    // Add more images as needed
  ]
};

function openLightbox(section, index) {
  currentSection = section;
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  updateLightboxImage();
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images[currentSection].length - 1;
  } else if (currentIndex >= images[currentSection].length) {
    currentIndex = 0;
  }
  updateLightboxImage();
}

function updateLightboxImage() {
  document.getElementById('lightboxImage').src = images[currentSection][currentIndex];
}
