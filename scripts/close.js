var animation = bodymovin.loadAnimation({
  container: document.getElementById('close-button'), // Required
  path: 'close.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Close Button", // Name for future reference. Optional.
})
