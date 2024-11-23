let draggedElement = null;

const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData("text", draggedElement.id);
  });

  image.addEventListener("dragend", () => {
    draggedElement = null;
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();
    
    const target = e.target;
    if (target !== draggedElement) {
      const draggedElementId = draggedElement.id;
      const targetId = target.id;
      
      const tempBg = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = target.style.backgroundImage;
      target.style.backgroundImage = tempBg;

      draggedElement.id = targetId;
      target.id = draggedElementId;
    }
  });
});
