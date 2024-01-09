const Homepage = () => {
	const [word, setWord] = useState('');
	const [definition, setDefinition] = useState([]);
	const [searchedWord, setSearchedWord] = useState('');

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '393d3bf389msh22ad968edc3f86ep10bee4jsncc2d901b34cf',
			'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
		},
	};

	const apiUrl =
		'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary';

	return;
};

export default Homepage;
