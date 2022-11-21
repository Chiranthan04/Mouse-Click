const box = document.getElementById('box');
box.style.position = 'absolute';

document.addEventListener('click', function handleClick(event) {
  box.style.top = event.clientY - 50 + 'px';
  box.style.left = event.clientX - 50 + 'px';
});
