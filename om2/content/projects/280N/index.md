+++
title = "280N"
date = 2024-12-30
location = "Bay Area"

[extra]
thumbnail = "projects/280N/images/101/101-00.png"
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-101-1" src="/projects/280N/images/101/101-00.png" alt="101 series image sequence">
    <img id="slider-image-101-2" src="/projects/280N/images/101/101-01.png" alt="101 series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-101" min="0" max="9" value="0" step="0.01" class="slider">
    <div class="slider-labels">
      <span>101-00</span>
      <span>101-09</span>
    </div>
  </div>
</div>

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-dde-1" src="/projects/280N/images/dde/dde-00.png" alt="DDE series image sequence">
    <img id="slider-image-dde-2" src="/projects/280N/images/dde/dde-01.png" alt="DDE series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-dde" min="0" max="9" value="0" step="0.01" class="slider">
    <div class="slider-labels">
      <span>dde-00</span>
      <span>dde-09</span>
    </div>
  </div>
</div>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-jl-1" src="/projects/280N/images/jl/jl-00.png" alt="JL series image sequence">
    <img id="slider-image-jl-2" src="/projects/280N/images/jl/jl-01.png" alt="JL series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-jl" min="0" max="9" value="0" step="0.01" class="slider">
    <div class="slider-labels">
      <span>jl-00</span>
      <span>jl-09</span>
    </div>
  </div>
</div>

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentibus voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

<style>
.image-slider-container {
  margin: 2rem 0;
  max-width: 100%;
}

.image-slider {
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
}

.image-slider img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
}

#slider-image-101-1,
#slider-image-dde-1,
#slider-image-jl-1 {
  position: relative;
}

.slider-controls {
  text-align: center;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
  -webkit-appearance: none;
  margin-bottom: 0.5rem;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: darkgreen;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: darkgreen;
  cursor: pointer;
  border: none;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const basePath = '/projects/280N/images/';

  // Configuration: easily change image counts here
  const seriesConfig = {
    '101': { count: 10, slider: 'image-range-101', img1: 'slider-image-101-1', img2: 'slider-image-101-2' },
    'dde': { count: 10, slider: 'image-range-dde', img1: 'slider-image-dde-1', img2: 'slider-image-dde-2' },
    'jl':  { count: 10, slider: 'image-range-jl',  img1: 'slider-image-jl-1',  img2: 'slider-image-jl-2' }
  };

  // Preload all series
  const allImages = {};
  const currentPairs = {};

  Object.entries(seriesConfig).forEach(([seriesName, config]) => {
    allImages[seriesName] = [];
    currentPairs[seriesName] = [0, 1];

    for (let i = 0; i < config.count; i++) {
      const img = new Image();
      const imageNumber = i.toString().padStart(2, '0');
      img.src = basePath + seriesName + '/' + seriesName + '-' + imageNumber + '.png';
      allImages[seriesName].push(img);
    }
  });

  function createUpdateFunction(seriesName) {
    const config = seriesConfig[seriesName];
    const slider = document.getElementById(config.slider);
    const image1 = document.getElementById(config.img1);
    const image2 = document.getElementById(config.img2);
    const images = allImages[seriesName];
    const currentPair = currentPairs[seriesName];

    return function(value) {
      const lowerIndex = Math.floor(value);
      const upperIndex = Math.min(lowerIndex + 1, images.length - 1);

      if (currentPair[0] !== lowerIndex || currentPair[1] !== upperIndex) {
        const lower = lowerIndex.toString().padStart(2, '0');
        const upper = upperIndex.toString().padStart(2, '0');

        if (images[lowerIndex].complete && images[upperIndex].complete) {
          image1.src = basePath + seriesName + '/' + seriesName + '-' + lower + '.png';
          image2.src = basePath + seriesName + '/' + seriesName + '-' + upper + '.png';
          currentPair[0] = lowerIndex;
          currentPair[1] = upperIndex;
        }
      }

            // Fast transition zones: only blend in narrow range before each integer
      const blend = value - lowerIndex;
      const transitionWidth = 0.20;

      if (blend > (1 - transitionWidth) && lowerIndex < upperIndex) {
        // Approaching next image - start crossfade
        const normalizedBlend = (blend - (1 - transitionWidth)) / transitionWidth;
        image2.style.opacity = normalizedBlend;
      } else {
        // Show current image sharp
        image2.style.opacity = 0;
      }
    };
  }

  // Set up all sliders
  Object.keys(seriesConfig).forEach(seriesName => {
    const config = seriesConfig[seriesName];
    const slider = document.getElementById(config.slider);
    const image2 = document.getElementById(config.img2);
    const updateFunction = createUpdateFunction(seriesName);

    slider.addEventListener('input', function() {
      updateFunction(parseFloat(this.value));
    });

    // Initialize
    image2.style.opacity = '0';
  });
});
</script>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentibus voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
