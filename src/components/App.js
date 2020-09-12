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
				query: term
			},

		});

		console.log(response.data.results);

		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '50px' }}>
				<h1>Picsearch</h1>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;