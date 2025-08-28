+++
title = "280N"
date = 2024-12-30
location = "Bay Area"

[extra]
thumbnail = "projects/280N/images/101-01.png"
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-101-1" src="/projects/280N/images/101-01.png" alt="101 series image sequence">
    <img id="slider-image-101-2" src="/projects/280N/images/101-02.png" alt="101 series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-101" min="1" max="5" value="1" step="0.01" class="slider">
    <div class="slider-labels">
      <span>101-01</span>
      <span>101-05</span>
    </div>
  </div>
</div>

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-dde-1" src="/projects/280N/images/dde-01.png" alt="DDE series image sequence">
    <img id="slider-image-dde-2" src="/projects/280N/images/dde-02.png" alt="DDE series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-dde" min="1" max="6" value="1" step="0.01" class="slider">
    <div class="slider-labels">
      <span>dde-01</span>
      <span>dde-06</span>
    </div>
  </div>
</div>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

<div class="image-slider-container">
  <div class="image-slider">
    <img id="slider-image-jl-1" src="/projects/280N/images/jl-01.png" alt="JL series image sequence">
    <img id="slider-image-jl-2" src="/projects/280N/images/jl-02.png" alt="JL series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-jl" min="1" max="5" value="1" step="0.01" class="slider">
    <div class="slider-labels">
      <span>jl-01</span>
      <span>jl-05</span>
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

  // 101 series slider
  const slider101 = document.getElementById('image-range-101');
  const image101_1 = document.getElementById('slider-image-101-1');
  const image101_2 = document.getElementById('slider-image-101-2');

  // DDE series slider
  const sliderDDE = document.getElementById('image-range-dde');
  const imageDDE_1 = document.getElementById('slider-image-dde-1');
  const imageDDE_2 = document.getElementById('slider-image-dde-2');

  // JL series slider
  const sliderJL = document.getElementById('image-range-jl');
  const imageJL_1 = document.getElementById('slider-image-jl-1');
  const imageJL_2 = document.getElementById('slider-image-jl-2');

  // Preload 101 series images
  const images101 = [];
  for (let i = 1; i <= 5; i++) {
    const img = new Image();
    const imageNumber = i.toString().padStart(2, '0');
    img.src = basePath + '101-' + imageNumber + '.png';
    images101.push(img);
  }

  // Preload DDE series images
  const imagesDDE = [];
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    const imageNumber = i.toString().padStart(2, '0');
    img.src = basePath + 'dde-' + imageNumber + '.png';
    imagesDDE.push(img);
  }

  // Preload JL series images
  const imagesJL = [];
  for (let i = 1; i <= 5; i++) {
    const img = new Image();
    const imageNumber = i.toString().padStart(2, '0');
    img.src = basePath + 'jl-' + imageNumber + '.png';
    imagesJL.push(img);
  }

  let currentPair101 = [1, 2];
  let currentPairDDE = [1, 2];
  let currentPairJL = [1, 2];

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

  const updateImages101 = createUpdateFunction('101', image101_1, image101_2, images101, currentPair101);
  const updateImagesDDE = createUpdateFunction('dde', imageDDE_1, imageDDE_2, imagesDDE, currentPairDDE);
  const updateImagesJL = createUpdateFunction('jl', imageJL_1, imageJL_2, imagesJL, currentPairJL);

  slider101.addEventListener('input', function() {
    updateImages101(parseFloat(this.value));
  });

  sliderDDE.addEventListener('input', function() {
    updateImagesDDE(parseFloat(this.value));
  });

  sliderJL.addEventListener('input', function() {
    updateImagesJL(parseFloat(this.value));
  });

  // Initialize all sliders
  image101_2.style.opacity = '0';
  imageDDE_2.style.opacity = '0';
  imageJL_2.style.opacity = '0';
});
</script>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentibus voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
