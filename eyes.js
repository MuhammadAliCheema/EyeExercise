// Retrieve the ball elements from the DOM
const balls = document.getElementsByClassName('ball');

// Function to create the eyes and make them follow the cursor movement
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y; 
    balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
  }
};
