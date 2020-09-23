import React, { Fragment, memo } from 'react';
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { getFromStorage, setInStorage } from "../utils";
import { getCurrentUser, getAllUsers } from '../utils/fakeServer';

function Dashboard() {
	const tokens = getFromStorage('tokens');
	const history = useHistory();
	const params = useParams();
	const users = getAllUsers();
	const currentUser = getCurrentUser(tokens[params.index]) || {};

	function signOut() {
		setInStorage('users', []);
		setInStorage('tokens', []);
		history.push('/');
	}

	return (
		<Fragment>
			{!tokens.length && <Redirect to="/" />}
			{tokens.length && !tokens[params.index] && <Redirect to="/0/dashboard" />}
			<div className="account-list">
				<ul>
					{
						users.map((user, i) => (
							<li className={+params.index === i ? 'active' : ''} key={user.id}>
								<Link to={`/${i}/dashboard`} target="_blank">
									<p>{user.name}</p>
									<small>{user.email}</small>
								</Link>
							</li>
						))
					}
					<Link className="add-account" to="/">Add another account</Link>
					<button onClick={signOut}>Sign out of all accounts</button>
				</ul>
			</div>
			<div className="account-details">
				<div className="card">
					<img className="avatar" src={currentUser.picture} alt=""/>
					<h3>{currentUser.name}</h3>
					<p>{currentUser.email}</p>
				</div>
			</div>
		</Fragment>
	);
}

export default memo(Dashboard);
