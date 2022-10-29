import React from 'react';

const AboutBwtRoot = () => {
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
				The Burrows–Wheeler transform (BWT, also called block-sorting compression) rearranges a character
				string into runs of similar characters. This is useful for compression, since it tends to be easy to
				compress a string that has runs of repeated characters by techniques such as move-to-front transform
				and run-length encoding.
			</p>
		</div>
	);
};

export default AboutBwtRoot;
