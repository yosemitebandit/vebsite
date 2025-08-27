+++
title = "280N"
date = 2024-12-30
location = "Bay Area"

[extra]
thumbnail = "projects/280N/images/a-01.png"
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-1" src="/projects/280N/images/a-01.png" alt="Image sequence">
    <img id="slider-image-2" src="/projects/280N/images/a-02.png" alt="Image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range" min="1" max="5" value="1" step="0.01" class="slider">
    <div class="slider-labels">
      <span>a-01</span>
      <span>a-05</span>
    </div>
  </div>
</div>

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-b1" src="/projects/280N/images/dde-01.png" alt="DDE series image sequence">
    <img id="slider-image-b2" src="/projects/280N/images/dde-02.png" alt="DDE series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-b" min="1" max="6" value="1" step="0.01" class="slider">
    <div class="slider-labels">
      <span>dde-01</span>
      <span>dde-06</span>
    </div>
  </div>
</div>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

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

#slider-image-1,
#slider-image-b1 {
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
  // A-series slider
  const sliderA = document.getElementById('image-range');
  const imageA1 = document.getElementById('slider-image-1');
  const imageA2 = document.getElementById('slider-image-2');

  // B-series slider
  const sliderB = document.getElementById('image-range-b');
  const imageB1 = document.getElementById('slider-image-b1');
  const imageB2 = document.getElementById('slider-image-b2');

  const basePath = '/projects/280N/images/';

  // Preload A-series images
  const imagesA = [];
  for (let i = 1; i <= 5; i++) {
    const img = new Image();
    const imageNumber = i.toString().padStart(2, '0');
    img.src = basePath + 'a-' + imageNumber + '.png';
    imagesA.push(img);
  }

    // Preload DDE-series images (fallback to A-series if DDE doesn't exist)
  const imagesB = [];
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    const imageNumber = i.toString().padStart(2, '0');
    img.src = basePath + 'dde-' + imageNumber + '.png';

    // Fallback to A-series if DDE-series image fails to load
    img.onerror = function() {
      this.src = basePath + 'a-' + imageNumber + '.png';
    };

    imagesB.push(img);
  }

  let currentPairA = [1, 2];
  let currentPairB = [1, 2];

  function createUpdateFunction(series, image1, image2, images, currentPair) {
    return function(value) {
      const lowerIndex = Math.floor(value);
      const upperIndex = Math.min(lowerIndex + 1, images.length);

      if (currentPair[0] !== lowerIndex || currentPair[1] !== upperIndex) {
        const lower = lowerIndex.toString().padStart(2, '0');
        const upper = upperIndex.toString().padStart(2, '0');

        if (images[lowerIndex - 1].complete && images[upperIndex - 1].complete) {
          image1.src = basePath + series + '-' + lower + '.png';
          image2.src = basePath + series + '-' + upper + '.png';
          currentPair[0] = lowerIndex;
          currentPair[1] = upperIndex;
        }
      }

      const blend = value - lowerIndex;
      image2.style.opacity = blend;
    };
  }

  const updateImagesA = createUpdateFunction('a', imageA1, imageA2, imagesA, currentPairA);
  const updateImagesB = createUpdateFunction('dde', imageB1, imageB2, imagesB, currentPairB);

  sliderA.addEventListener('input', function() {
    updateImagesA(parseFloat(this.value));
  });

  sliderB.addEventListener('input', function() {
    updateImagesB(parseFloat(this.value));
  });

  // Initialize both sliders
  imageA2.style.opacity = '0';
  imageB2.style.opacity = '0';
});
</script>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentibus voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
