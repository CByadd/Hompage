const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".accon"),
closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("active")
);





// <-------------------------------------------------------------------

        function closeWindow() {
			setTimeout(function() {
				window.close();
			}, 100);
		}
// -------------------------------------------------------------------

