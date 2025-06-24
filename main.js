var initSize = 100;
var color;

function onBallClick() {
  var elBall = document.getElementsByClassName('ball')[0];
  initSize += getRandomInt(20, 60);
  if (initSize > 400) initSize = 100;
  elBall.style.height = initSize + 'px';
  elBall.style.width = initSize + 'px';
  elBall.innerHTML = initSize;
  color = getRandomColor();
  elBall.style.backgroundColor = color;
}
