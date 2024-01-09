const Homepage = () => {
	const [word, setWord] = useState('');
	const [definition, setDefinition] = useState([]);
	const [searchedWord, setSearchedWord] = useState('');

	const apiUrl =
		'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '393d3bf389msh22ad968edc3f86ep10bee4jsncc2d901b34cf',
			'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
		},
	};

	async function getDictionaryData() {
		try {
			const response = await fetch(`${apiUrl}?word=${word}`, options);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();

			console.log('API Response:', data);

			setDefinition(data.definition || '');

			setSearchedWord(word);
		} catch (error) {
			console.error('Error:', error.message);
		}
	}

	const handleInputChange = (e) => {
		setWord(e.target.value);
	};

	const handleSearch = () => {
		getDictionaryData();
	};

	return (
		<div>
			<div>
				<label htmlFor='wordInput'>Enter a word: </label>
				<input
					type='text'
					id='wordInput'
					value={word}
					onChange={handleInputChange}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
		</div>
	);
};

export default Homepage;
