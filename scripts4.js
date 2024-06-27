document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.research-list li');

  listItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});
