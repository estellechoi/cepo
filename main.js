(function (document) {
	"use strict";

	const $toggles = document.querySelectorAll(".toggle");
	const $toggleBtn = document.getElementById("btn--toggle");

	$toggleBtn.addEventListener("click", function () {
		toggleElement();
	});

	function toggleElement() {
		// (array-like but not array) NodeList loop
		[].forEach.call($toggles, (item) => {
			item.classList.toggle("toggle--on");
		});
	}
})(document);
