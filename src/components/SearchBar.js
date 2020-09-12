import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {

	state = {
		term: ''
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input
							type="text"
							placeholder="Search images"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;