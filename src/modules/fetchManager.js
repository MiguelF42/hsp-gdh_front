import { error } from './logManager';
import config from '../config.js'; 

function selectUrl(url) {
	return url.includes('http') ? url : `${config.api}/${url}`;
}

async function get(url, token = 'none') {
	const options = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', authorization: `${token}` },
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function post(url, body, token = 'none') {
	const options = {
		method: 'POST',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `${token}` },
		body: JSON.stringify(body),
	};

	console.log(body);

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function patch(url, body, token = 'none') {
	const options = {
		method: 'PATCH',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `${token}` },
		body: JSON.stringify(body),
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function put(url, body, token = 'none') {
	const options = {
		method: 'PUT',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `${token}` },
		body: JSON.stringify(body),
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

export {
	get,
	post,
	patch,
	put,
};