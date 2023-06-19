document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.addEventListener('touchmove', e => {
	const touch = e.touches[0]; // Получаем информацию о первом прикосновении
	const clientX = touch.clientX;
	const clientY = touch.clientY;
  
	Object.assign(document.documentElement, {
	  style: `
		--move-x: ${(clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(clientY - window.innerHeight / 2) * 0.01}deg;
	  `
	});
  });