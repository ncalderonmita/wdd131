const year = document.querySelector("#currentyear");
const today = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});