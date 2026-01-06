const btn = document.getElementById('playBtn');
const song = document.getElementById('song');
const icon = btn.querySelector('svg path');

let playing = false;

btn.addEventListener('click', () => {
  if (playing) {
    song.pause();
    icon.setAttribute('d', 'M8 5v14l11-7z'); // play
  } else {
    song.volume = 0.2;
    song.play();
    icon.setAttribute('d', 'M6 4h4v16H6zm8 0h4v16h-4z'); // pause
  }
  playing = !playing;
});

document.getElementById('linkCarta').href =
'https://docs.google.com/document/d/e/2PACX-1vRxcYqnZPTKDuYRSaH2rzpmobaF1MI3VTGxCkUE1VJIJ68zDtV-UpPDdH2XMzERms3nEFUbdDzVaMvB/pub'
;
