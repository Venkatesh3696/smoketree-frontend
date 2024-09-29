import { useState } from 'react';
import './index.css';
import { baseUrl } from '../../config/config';

const Home = () => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	const onSubmitForm = (e) => {
		e.preventDefault();

		const payload = {
			name,
			address,
		};

		console.log(address);
		fetch(`${baseUrl}/register`, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>Welcome to Smoke Tree!</h1>
			<p>Please Register below with your Address.</p>
			<form onSubmit={onSubmitForm}>
				<label htmlFor='name'>Please enter your Name</label>
				<input
					id='name'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor='address'>Please enter your Address</label>
				<textarea
					id='address'
					rows={6}
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				></textarea>
				<button role='submit'>Submit</button>
			</form>
			{/* <p>
				you can see users <a href='/users'>here</a> with their
				corresponsding address.
			</p> */}
		</div>
	);
};

export default Home;
