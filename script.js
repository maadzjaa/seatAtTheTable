let selectedItem;

const buttons = document.querySelectorAll('button[data-item]');
const tableItems = document.querySelectorAll('.table-item');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		selectedItem = button.getAttribute('data-item');
	});
});

tableItems.forEach((item) => {
	item.addEventListener('click', () => {
		if (selectedItem) {
			item.textContent = selectedItem;
		}
	});
});
