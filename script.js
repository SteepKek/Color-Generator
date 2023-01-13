'use strict';

const btn = document.querySelector('#btn'),
	colorBlock = document.querySelector('#color-block'),
	colorNumbers = document.querySelector('#color-numbers');

const randomValues = () => {
	return Math.floor(Math.random() * 257);
};

btn.addEventListener('click', () => {
	const color1 = randomValues(),
		color2 = randomValues(),
		color3 = randomValues();
	colorBlock.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
	colorNumbers.innerHTML = `${color1}, ${color2}, ${color3}`;
});



