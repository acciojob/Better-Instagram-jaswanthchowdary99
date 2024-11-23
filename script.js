// Write code here

let draggedElement = null;

const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  image.addEventListener("dragend", (e) => {
    draggedElement = null;
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      const tempText = draggedElement.innerHTML;
      draggedElement.innerHTML = e.target.innerHTML;
      e.target.innerHTML = tempText;

      const tempId = draggedElement.id;
      draggedElement.id = e.target.id;
      e.target.id = tempId;
    }
  });
});
