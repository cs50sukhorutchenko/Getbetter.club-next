import { useState, useEffect } from 'react';

export default function HomePage() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/api/data')
			.then(response => response.json())
			.then(setData);
	}, []);

	if (data === null) {
		return <div>Loading...</div>;
	}

	return <div>Data: {JSON.stringify(data)}</div>;
}