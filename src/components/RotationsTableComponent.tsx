import './RotationsTableComponent.css';

import React from 'react';

import { Rotation } from '../model/Rotation';

const RotationsTableComponent = (props: { header: string; rotations: Rotation[] }) => {
	return (
		<table className="rotations">
			<tbody>
				<tr>
					<th colSpan={props.rotations[0]?.text.length}>{props.header}</th>
				</tr>
				{props.rotations.map((row) => (
					<tr key={row.id} className={row.id === 0 ? 'original' : ''}>
						{row.text.split('').map((symbol, index) => (
							<td key={index}>{symbol}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default RotationsTableComponent;
