import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID PRYDQ8yb17jJE0YO-i9EEp016xt8SbNEYRZGY2kQBuM'
	}
});