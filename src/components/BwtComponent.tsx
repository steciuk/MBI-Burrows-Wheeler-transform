import './BwtComponent.css';

import React from 'react';

import { Rotation } from '../model/Rotation';
import RotationsTableComponent from './RotationsTableComponent';

const BwtComponent = (props: { result: { bwt: string; index: number | null } }) => {
	const { bwt, index } = props.result;

	if (index !== null) {
		return (
			<div className="bwt-container">
				<RotationsTableComponent header="BWT result" rotations={[new Rotation(0, bwt)]} />
				<p>Index of original input in sorted rotation table: {index}</p>
			</div>
		);
	} else return <></>;
};

export default BwtComponent;
