(function (window, document) {
	"use strict";

	const $toggles = document.querySelectorAll(".toggle");
	const $toggleBtn = document.getElementById("btn--toggle");

	$toggleBtn.addEventListener("click", function () {
		toggleElement();
	});

	window.addEventListener("resize", function () {
		if (window.innerWidth > 1024) {
			foldElement();
		}
	});

	function toggleElement() {
		// (array-like but not array) NodeList loop
		[].forEach.call($toggles, (item) => {
			item.classList.toggle("toggle--on");
		});
	}

	function foldElement() {
		[].forEach.call($toggles, (item) => {
			item.classList.remove("toggle--on");
		});
	}
})(window, document);
