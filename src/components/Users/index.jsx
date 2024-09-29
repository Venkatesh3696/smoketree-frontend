import { useEffect, useState } from 'react';
import { baseUrl } from '../../config/config.js';

const Users = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = () => {
		fetch(`${baseUrl}/users`)
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((err) => {
				console.log(err);
				setUsers([]);
			});
	};
	console.log(users);

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			{/* <p>
				Need to Register? Click <a href='/'>here</a>
			</p> */}
			<p>Here are the users registered</p>
			<table>
				<thead>
					<tr>
						<th>user id</th>
						<th>name</th>
						<th>address</th>
					</tr>
				</thead>
				<tbody>
					{users.map((each) => (
						<tr key={each.id}>
							<td>{each.userId}</td>
							<td>{each.name}</td>
							<td>{each.address}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
