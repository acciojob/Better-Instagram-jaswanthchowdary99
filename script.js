let dragged;

// events fired on the draggable target
document.addEventListener('dragstart', function(event) {
  // store a reference to the dragged element and the next sibling
  dragged = event.target;
}, false);

// events fired on the drop targets
document.addEventListener('dragover', function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener('drop', function(event) {
  // prevent default action
  event.preventDefault();
  if (event.target.className === 'dropzone') {
    // swap the innerHTML of the dragged and drop target
    let tmp = event.target.innerHTML;
    event.target.innerHTML = dragged.innerHTML;
    dragged.innerHTML = tmp;
  }
}, false);