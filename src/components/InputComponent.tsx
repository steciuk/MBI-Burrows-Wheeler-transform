import React from 'react';

const InputComponent = (props: { value: string; onChange: (value: string) => void }) => {
	return (
		<div>
			<h2>Input your text here</h2>
			<form>
				<textarea value={props.value} onChange={(e) => props.onChange(e.target.value)}></textarea>
			</form>
		</div>
	);
};

export default InputComponent;
