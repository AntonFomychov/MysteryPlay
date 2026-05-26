$(document).ready(function () {

	// Відкриття модалки
	function showModal(modalId) {
		$(".close-bg").addClass("active");
		$("#" + modalId).addClass("active");
	}

	// Закриття всіх модалок
	function closeAllModals() {
		$(".close-bg").removeClass("active");
		$(".modal").removeClass("active");
	}

	// Відкриття за триггерами з data-modal
	$(document).on("click", "[data-modal]", function (e) {
		const modalId = $(this).data("modal");
		closeAllModals();
		showModal(modalId);
	});

	// Закриття за кнопками з data-close
	$(document).on("click", "[data-close]", function (e) {
		e.preventDefault();
		closeAllModals();
	});

	// Закриття за кліком на close-bg
	$(document).on("click", ".close-bg", function (e) {
		if (e.target === this) {
			closeAllModals();
		}
	});

	// Закриття по ESC
	$(document).on("keydown", function (e) {
		if (e.key === "Escape") {
			closeAllModals();
		}
	});

});