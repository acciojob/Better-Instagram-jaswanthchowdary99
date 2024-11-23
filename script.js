const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', handleDragStart);
  draggable.addEventListener('dragover', handleDragOver);
  draggable.addEventListener('drop', handleDrop);
  draggable.addEventListener('dragend', handleDragEnd);
});

let draggedElement = null;

function handleDragStart(e) {
  draggedElement = e.target;
  e.target.classList.add('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const targetElement = e.target;

  if (targetElement !== draggedElement) {
    const draggedBg = getComputedStyle(draggedElement).backgroundImage;
    const targetBg = getComputedStyle(targetElement).backgroundImage;

    const draggedText = draggedElement.innerHTML;
    const targetText = targetElement.innerHTML;

    draggedElement.style.backgroundImage = targetBg;
    draggedElement.innerHTML = targetText;

    targetElement.style.backgroundImage = draggedBg;
    targetElement.innerHTML = draggedText;
  }
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}
