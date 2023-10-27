let calculatedNum = document.querySelector(".display .span1");
const btns = [...document.querySelectorAll(".btn")].slice(2);
const accs = [...document.querySelectorAll(".acc")];
const result = document.querySelector(".result");
const allBtns = btns.concat(accs);
const equalBtn = document.querySelector(".equal");
const accessBtns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"];

const showInfoElem = document.querySelector(".info");
const hideInfo = document.querySelector(".hide-info");
allBtns.forEach(btn => {
	btn.addEventListener("click", e => {
		if (calculatedNum.textContent === "0") {
			calculatedNum.textContent = "";
		}
		calculatedNum.innerText += e.target.innerText;
	});
});
function resetValue() {
	result.textContent = result.textContent.slice(0, -1);
}
function delC() {
	result.textContent = "";
	calculatedNum.textContent = "";
}
function final() {
	let res = (result.textContent = eval(calculatedNum.textContent));
	if (result.textContent === "[object HTMLSpanElement]") {
		result.textContent = "The entry is not correct!";
		setTimeout(() => {
			result.textContent = "";
			calculatedNum.textContent = "";
		}, 1000);
	}
}
document.addEventListener("keydown", e => {
	let { key, keyCode, ctrlKey, shiftKey } = e;
	// start => to work with the calculator using the keyboard
	accessBtns.forEach(btn => {
		if (btn === key) {
			allBtns.filter(button => button.textContent === key)[0].click();
		}
	});
	if (keyCode === 8) {
		calculatedNum.textContent = calculatedNum.textContent.slice(0, -1);
	}
	if (keyCode === 46) {
		if (result.textContent === "result") {
			result.textContent = "";
		}
		result.textContent = result.textContent.slice(0, -1);
	}
	if (keyCode === 13) {
		equalBtn.click();
	}
	if (shiftKey && keyCode === 53) {
		calculatedNum.textContent = calculatedNum.textContent += "%";
	}
	// finish => to work with the calculator using the keyboard
	console.log(e.keyCode);
});

showInfoElem.addEventListener("click", e => {
	if((e.target === showInfoElem )|| (e.target === showInfoElem.children[0]) )
	showInfoElem.classList.add("show");
});

hideInfo.addEventListener('click',() => {
	showInfoElem.classList.remove('show')
})