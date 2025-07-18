
document.addEventListener("DOMContentLoaded", function () {
	const canvas = document.getElementById("emotionChart");
	if (canvas) {
		canvas.style.backgroundColor = "#2a2438";

		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "#4f46e5";
		ctx.fillRect(50, 50, 30, 100);
		ctx.fillRect(100, 50, 30, 70);
		ctx.fillRect(150, 50, 30, 150);
		ctx.fillRect(200, 50, 30, 90);
		ctx.fillRect(250, 50, 30, 60);

		// Placeholder labels
		ctx.fillStyle = "#ffffff";
		ctx.font = "10px Arial";
		ctx.fillText("Anxiety", 50, 180);
		ctx.fillText("Joy", 100, 180);
		ctx.fillText("Fear", 150, 180);
		ctx.fillText("Surprise", 200, 180);
		ctx.fillText("Trust", 250, 180);
	}

	const dreamCards = document.querySelectorAll("[data-dream-id]");
	const dreamModal = document.getElementById("dreamModal");

	dreamCards.forEach((card) => {
		card.addEventListener("click", function () {
			dreamModal.classList.remove("hidden");
			dreamModal.classList.add("flex");
		});
	});

	dreamModal.querySelector("button").addEventListener("click", function () {
		dreamModal.classList.add("hidden");
		dreamModal.classList.remove("flex");
	});
});

document
	.querySelector('[aria-label="Record Dream"]')
	.addEventListener("click", function () {
		const recognition = new (window.SpeechRecognition ||
			window.webkitSpeechRecognition)();
		recognition.lang = "en-US";
		recognition.interimResults = false;

		recognition.onresult = (event) => {
			const transcript = event.results[0][0].transcript;
			document.querySelector("textarea").value = transcript;

			fetch("/api/dreams", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ transcript }),
			});
		};

		recognition.start();
	});
