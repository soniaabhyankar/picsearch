import React from 'react';
import unsplash from '../api/unsplash';
import '../styles/App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = {
		images: []
	};

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term,
				per_page: 500
			},

		});

		console.log(response.data);

		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '50px' }}>
				<h1>Picsearch</h1>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
				<footer>&copy; {new Date().getFullYear()} <a href="https://www.soniaabhyankar.com/" target="_blank" rel="noopener noreferrer">Sonia Abhyankar</a></footer>
			</div>
		);
	}
}

export default App;