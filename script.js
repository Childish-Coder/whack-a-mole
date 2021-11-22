var num,
	timeLeft,
	level,
	timeGap = 900,
	clickTimes = 0,
	allMoles = document.querySelectorAll('.hole img'),
	span = document.querySelector('span'),
	hitSong = new Audio('assets/hit_sound.mp3')

function makeMoleAppear() {
	allMoles.forEach(mole => {
		mole.classList.remove('visible')
	})
	num = Math.floor(Math.random() * 9)
	allMoles[num].classList.add('visible')
}

function startGame() {
	clickTimes = 0
	timeLeft = 10
	moleAppearTimer = setInterval(() => {
		if (timeLeft == 0) {
			alert(`Time Up! \n Your clicked ${clickTimes} time on 10 moles`)
			clearInterval(moleAppearTimer)
			nextMatch()
		} else {
			makeMoleAppear()
			timeLeft--
		}
	}, timeGap)
}

function detectClick() {
	hitSong.play()
	clickTimes++
}

allMoles.forEach(mole => {
	mole.addEventListener('click', detectClick)
})

function nextMatch() {
	level = prompt(`Enter \n "e" for Easy \n "m" for Medium \n "h" for Hard`)
	level.toLowerCase().trim()
	if (level == 'e') timeGap = 1100;
	else if (level == 'm') timeGap = 900;
	else if (level == 'h') timeGap = 700;
	else alert('something wrong! Try again') && nextMatch()
	startGame()
}

window.onload = nextMatch()

