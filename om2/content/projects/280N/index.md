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
    <img id="slider-image" src="/projects/280N/images/a-01.png" alt="280N Image">
  </div>
  <div class="slider-controls">
    <input type="range" id="image-range" min="1" max="5" value="1" class="slider">
    <div class="slider-labels">
      <span>a-01</span>
      <span>a-05</span>
    </div>
  </div>
</div>

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
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
  const slider = document.getElementById('image-range');
  const image = document.getElementById('slider-image');
  const basePath = '/projects/280N/images/';

  // Set initial max value based on available images
  // You can adjust this number based on how many a-XX.png images you have
  const maxImages = 5;
  slider.max = maxImages;

  slider.addEventListener('input', function() {
    const imageNumber = this.value.toString().padStart(2, '0');
    const newSrc = basePath + 'a-' + imageNumber + '.png';

    // Fade out
    image.style.opacity = '0.3';

    // Change image after short delay
    setTimeout(() => {
      image.src = newSrc;
      image.style.opacity = '1';
    }, 150);
  });
});
</script>

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentibus voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
