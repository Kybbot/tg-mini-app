if (window.Telegram) {
	window.Telegram.WebApp.expand();

	const cardLinks = document.querySelectorAll(".cardLink") as NodeListOf<HTMLButtonElement>;

	for (const cardLink of cardLinks) {
		cardLink.addEventListener("click", () => {
			const href = cardLink.dataset.href!;

			window.Telegram.WebApp.openLink(href, {try_instant_view: true});
		});
	}
}
