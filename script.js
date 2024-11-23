let dragged;

document.addEventListener('dragstart', function(event) {
  dragged = event.target;
}, false);

document.addEventListener('dragover', function(event) {
  event.preventDefault();
}, false);

document.addEventListener('drop', function(event) {
  event.preventDefault();
  if (event.target.className === 'dropzone') {
    let tmp = event.target.innerHTML;
    event.target.innerHTML = dragged.innerHTML;
    dragged.innerHTML = tmp;
  }
}, false);