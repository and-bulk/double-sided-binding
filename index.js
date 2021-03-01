class DsBindedField {
	constructor({ inputSelector, outputSelector, message }) {
		this.input = document.querySelector(inputSelector);
		this.output = document.querySelector(outputSelector);
		this.message = message;

		this.input.value = message;
		this.output.textContent = message;

		this.input.addEventListener('input', () => (this.message = this.input.value));
	}

	get message() {
		return this.input.value;
	}

	set message(value) {
		this.input.value = value;
		this.output.textContent = value;
	}
}

const field = new DsBindedField({
	inputSelector: '.input',
	outputSelector: '.output',
	message: '13',
});
