import {getFromStorage, setInStorage} from '../utils';

export function getUser(token) {
	const users = getFromStorage('users');
	return users.find(user => user.access_token === token);
}
