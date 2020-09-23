import {getFromStorage, setInStorage} from '../utils';
import * as firebase from "firebase/app";
import "firebase/database";

export function getAllUsers() {
	return getFromStorage('users');
}

export function getCurrentUser(token) {
	const users = getFromStorage('users');
	return users.find(user => user.access_token === token);
}

export function addUser(profile) {
	firebase.database()
		.ref(`users/${profile.id}`)
		.set(profile);
}
