import React from 'react';

const InfoRoot = () => {
	return (
		<div
			style={{
				padding: '1rem',
				margin: '0 auto',
				maxWidth: '600px',
				textAlign: 'justify',
				textJustify: 'inter-word',
			}}
		>
			<p>
				The project was created as part of the Bioinformatics Methods course in the 2022Z semester
				Faculty of Electronics and Information Technology of the Warsaw University of Technology.
				<br/>
				Creators of the project:<br/>
				- Adam Steciuk<br/>
				- Eryk Mroczko<br/>
				<br/>
				The main goal of the project was to create an application which will help users 
				to understand the Burrow-Wheeler Transform algorithm. User can enter any string to transform 
				and see every step of the algorithm with visual representation of current step&lsquo;s data. 
				Application allows also to inverse the algorithm with Inverse Burrows-Wheeler Transform algorithm.
				<br/>
				The project was made in React framework and using Typescript. 
				Complete source code and documentation can be found on <a href="https://github.com/steciuk/MBI-Burrows-Wheeler-transform">GitHub</a>.
			</p>
		</div>
	);
};

export default InfoRoot;