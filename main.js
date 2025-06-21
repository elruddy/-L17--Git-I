var initSize = 100;

function onBallClick() {
  var elBall = document.getElementsByClassName('ball')[0];
  initSize += 50;
  if (initSize > 400) initSize = 100;
  elBall.style.height = initSize + 'px';
  elBall.style.width = initSize + 'px';
  elBall.innerHTML = initSize;
}
