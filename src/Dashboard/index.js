import React, { Fragment, memo, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { setInStorage } from "../utils";

function Dashboard() {
	const users = JSON.parse(localStorage.getItem('users'));
	let history = useHistory();
	let params = useParams();
	console.log('params', params);

	return (
		<Fragment>
			<div className="account-list">
				<ul>
					{
						users.map((user) => (
							<li key={user.id}>
								<p>{user.name}</p>
								<small>{user.email}</small>
							</li>
						))
					}
				</ul>
			</div>
			<div className="account-details">
				Account Details
			</div>
		</Fragment>
	);
}

export default memo(Dashboard);
