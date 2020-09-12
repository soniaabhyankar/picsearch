import '../styles/ImageCard.css'
import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 }

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10 + 8);

		this.setState({ spans })
	}

	render() {

		const { alt_description, urls, links, user } = this.props.image;

		return (
			<div className="middle-container" style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<a href={links.download} target="_blank" rel="noopener noreferrer">
					<img ref={this.imageRef} alt={alt_description} src={urls.regular} />
					<div className="middle"></div>
				</a>
				<div className="courtesy">
					Photo by <a href={user.links.html} target="_blank" rel="noopener noreferrer">{user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>.
				</div>
			</div>
		)
	}
}

export default ImageCard;