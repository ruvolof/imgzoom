function imgzoom() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      zoom(this.src);
    });
  }
}

function zoom(url) {
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.position = 'fixed';
  overlay.style.height = '100%';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.right = '0';
  overlay.style.bottom = '0';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = '2';
  overlay.style.margin = 'auto';
  overlay.style.display = 'flex';
  overlay.style.alignContent = 'center';
  overlay.onclick = function() { removeOverlays() }

  var image = document.createElement('img');
  image.src = url;
  image.style.maxHeight = '90%';
  image.style.margin = 'auto';
  overlay.appendChild(image);

  document.body.appendChild(overlay);

  document.addEventListener('keydown', escapeListener);
}

function removeOverlays() {
  console.log('fored');
  overlays = document.getElementsByClassName('overlay');
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].remove();
  }
  document.removeEventListener('keydown', escapeListener);
}

var escapeListener = function(e) {
  if (e.key == 'Escape') {
    removeOverlays();
  }
}
