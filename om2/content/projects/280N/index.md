+++
title = "280N"
date = 2025-08-25
location = "Redwood City"

[extra]
thumbnail = "projects/280n/images/101/101-10.webp"
+++

[Donald Hoffman](https://en.wikipedia.org/wiki/Donald_D._Hoffman)
argues that our perception is a false mapping of reality,
and he says that we are better off for it!
I think we could continue "enhancing" our perception and tune out man-made visual clutter like ads.
We can trade it for a more aesthetic environment, custom to your liking.

With AI inpainting and VR this is possible, albeit not in realtime.
I generated sequences of images using the new Gemini 2.5 Flash Image (nano-banana).
Each iteration for a ~1MB image took about 30 seconds and costs about $0.05 USD.

Starting with a street view of highway 101 North,
we gradually remove visual clutter and then turn up the natural elements:

<div class="image-slider-container" data-series="101">
  <div class="loading-overlay">
    <div class="spinner"></div>
    <div class="loading-text">Loading images <span class="loading-progress">0/11</span></div>
  </div>
  <div class="image-slider">
    <img id="slider-image-101-1" src="/projects/280n/images/101/101-00.webp" alt="101 series image sequence">
    <img id="slider-image-101-2" src="/projects/280n/images/101/101-01.webp" alt="101 series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-101" min="0" max="10" value="0" step="0.01" class="slider" disabled>
    <div class="slider-labels">
      <span>101-00</span>
      <span>101-10</span>
    </div>
  </div>
</div>

101N again, closer to SF:

<div class="image-slider-container" data-series="dde">
  <div class="loading-overlay">
    <div class="spinner"></div>
    <div class="loading-text">Loading images <span class="loading-progress">0/11</span></div>
  </div>
  <div class="image-slider">
    <img id="slider-image-dde-1" src="/projects/280n/images/dde/dde-00.webp" alt="DDE series image sequence">
    <img id="slider-image-dde-2" src="/projects/280n/images/dde/dde-01.webp" alt="DDE series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-dde" min="0" max="10" value="0" step="0.01" class="slider" disabled>
    <div class="slider-labels">
      <span>dde-00</span>
      <span>dde-10</span>
    </div>
  </div>
</div>

Exiting the city on a notoriously ad-strewn stretch:

<div class="image-slider-container" data-series="jl">
  <div class="loading-overlay">
    <div class="spinner"></div>
    <div class="loading-text">Loading images <span class="loading-progress">0/11</span></div>
  </div>
  <div class="image-slider">
    <img id="slider-image-jl-1" src="/projects/280n/images/jl/jl-00.webp" alt="JL series image sequence">
    <img id="slider-image-jl-2" src="/projects/280n/images/jl/jl-01.webp" alt="JL series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-jl" min="0" max="10" value="0" step="0.01" class="slider" disabled>
    <div class="slider-labels">
      <span>jl-00</span>
      <span>jl-10</span>
    </div>
  </div>
</div>

Could your self-driving car show you this as it navigates the true obstacles?
Could it render true obstacles as something else more aesthetic?

Just a plain walk down the street, you probably don't need the traffic signs unless you're lost,
nor the utility poles and wires, or the parked cars:

<div class="image-slider-container" data-series="va">
  <div class="loading-overlay">
    <div class="spinner"></div>
    <div class="loading-text">Loading images <span class="loading-progress">0/11</span></div>
  </div>
  <div class="image-slider">
    <img id="slider-image-va-1" src="/projects/280n/images/va/va-00.webp" alt="VA series image sequence">
    <img id="slider-image-va-2" src="/projects/280n/images/va/va-01.webp" alt="VA series image sequence">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range-va" min="0" max="10" value="0" step="0.01" class="slider" disabled>
    <div class="slider-labels">
      <span>va-00</span>
      <span>va-10</span>
    </div>
  </div>
</div>

Next up: photospheres in a true AR/VR rig.

<style>
.image-slider-container {
  margin: 2rem 0;
  max-width: 100%;
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 4px;
  transition: opacity 0.3s ease;
}

.loading-overlay.hidden {
  opacity: 0;
  pointer-events: none;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid darkgreen;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 0.9rem;
  color: #666;
}

.loading-progress {
  font-weight: bold;
  color: darkgreen;
}

.image-slider {
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0.3;
  transition: opacity 0.5s ease;
}

.image-slider.ready {
  opacity: 1;
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
#slider-image-jl-1,
#slider-image-va-1 {
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
  transition: opacity 0.3s ease;
}

.slider:disabled {
  opacity: 0.4;
  cursor: not-allowed;
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

.slider:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
  background: #999;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: darkgreen;
  cursor: pointer;
  border: none;
}

.slider:disabled::-moz-range-thumb {
  cursor: not-allowed;
  background: #999;
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
  const basePath = '/projects/280n/images/';

  // Configuration: easily change image counts here
  const seriesConfig = {
    '101': { count: 11, slider: 'image-range-101', img1: 'slider-image-101-1', img2: 'slider-image-101-2', lazy: false },
    'dde': { count: 11, slider: 'image-range-dde', img1: 'slider-image-dde-1', img2: 'slider-image-dde-2', lazy: true },
    'jl':  { count: 11, slider: 'image-range-jl',  img1: 'slider-image-jl-1',  img2: 'slider-image-jl-2', lazy: true },
    'va':  { count: 11, slider: 'image-range-va',  img1: 'slider-image-va-1',  img2: 'slider-image-va-2', lazy: true }
  };

  // Check WebP support
  const supportsWebP = (function() {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  })();

  const allImages = {};
  const currentPairs = {};
  const loadingState = {};
  const loadedSeries = new Set();

  function loadSeriesImages(seriesName) {
    if (loadedSeries.has(seriesName)) return;
    loadedSeries.add(seriesName);

    const config = seriesConfig[seriesName];
    allImages[seriesName] = [];
    currentPairs[seriesName] = [0, 1];
    loadingState[seriesName] = { loaded: 0, total: config.count };

    const ext = supportsWebP ? 'webp' : 'png';

    for (let i = 0; i < config.count; i++) {
      const img = new Image();
      const imageNumber = i.toString().padStart(2, '0');
      img.src = basePath + seriesName + '/' + seriesName + '-' + imageNumber + '.' + ext;

      img.onload = function() {
        loadingState[seriesName].loaded++;
        updateLoadingIndicator(seriesName);

        if (loadingState[seriesName].loaded === loadingState[seriesName].total) {
          enableSlider(seriesName);
        }
      };

      img.onerror = function() {
        // Fallback to PNG if WebP fails
        if (ext === 'webp') {
          img.src = basePath + seriesName + '/' + seriesName + '-' + imageNumber + '.png';
        }
      };

      allImages[seriesName].push(img);
    }
  }

  // Load non-lazy series immediately
  Object.entries(seriesConfig).forEach(([seriesName, config]) => {
    if (!config.lazy) {
      loadSeriesImages(seriesName);
    }
  });

  // Set up Intersection Observer for lazy loading
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const seriesName = entry.target.dataset.series;
        if (seriesName && seriesConfig[seriesName]) {
          loadSeriesImages(seriesName);
          lazyObserver.unobserve(entry.target);
        }
      }
    });
  }, {
    rootMargin: '200px' // Start loading 200px before slider enters viewport
  });

  // Observe lazy-loaded containers
  Object.entries(seriesConfig).forEach(([seriesName, config]) => {
    if (config.lazy) {
      const container = document.querySelector(`.image-slider-container[data-series="${seriesName}"]`);
      if (container) {
        lazyObserver.observe(container);
      }
    }
  });

  function updateLoadingIndicator(seriesName) {
    const container = document.querySelector(`.image-slider-container[data-series="${seriesName}"]`);
    if (!container) return;

    const progressSpan = container.querySelector('.loading-progress');
    const state = loadingState[seriesName];

    if (progressSpan) {
      progressSpan.textContent = `${state.loaded}/${state.total}`;
    }
  }

  function enableSlider(seriesName) {
    const container = document.querySelector(`.image-slider-container[data-series="${seriesName}"]`);
    if (!container) return;

    const config = seriesConfig[seriesName];
    const slider = document.getElementById(config.slider);
    const imageSlider = container.querySelector('.image-slider');
    const loadingOverlay = container.querySelector('.loading-overlay');
    const image2 = document.getElementById(config.img2);

    // Set up slider event listener now that images are loaded
    const updateFunction = createUpdateFunction(seriesName);
    slider.addEventListener('input', function() {
      updateFunction(parseFloat(this.value));
    });

    // Initialize
    image2.style.opacity = '0';

    // Enable the slider
    slider.disabled = false;

    // Fade out loading overlay
    loadingOverlay.classList.add('hidden');

    // Fade in the image slider
    imageSlider.classList.add('ready');
  }

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

});
</script>

