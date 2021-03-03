const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Привет',
			inputValue: '',
			notes: ['Заметка 1']
		}
	},

	methods: {
		addNewNote() {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		deleteNote(idx) {
			this.notes.splice(idx, 1)
		}
	},

	computed: {
		doubleCountComputed() {
			console.log('doubleCountComputed')
			return this.notes.length * 2
		}
	},

	watch: {
		inputValue(value) {
			if (value.length > 20) {
				this.inputValue = ''
			}
		}
	}
}

Vue.createApp(App).mount('#app')