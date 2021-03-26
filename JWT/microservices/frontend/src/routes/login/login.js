import { h } from 'preact';
import style from './style.css';
import { useState } from 'preact/hooks';
import postData from '../../lib/requests';

const Login = () => {
	const [name, setName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (event) => {
		const loginInfo = {
			email: name,
			password
		};
		event.preventDefault();
		postData('login', loginInfo)
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div class={style.login}>
			<h1>Login</h1>
			<p>This is the Login component.</p>
			<form onSubmit={handleSubmit}>
				<input type="text" onInput={(c) => setName(c.target.value)} />
				<input type="text" onInput={(c) => setPassword(c.target.value)} />
				<button type="submit">Login Now!</button>
			</form>
		</div >
	);

};

export default Login;




