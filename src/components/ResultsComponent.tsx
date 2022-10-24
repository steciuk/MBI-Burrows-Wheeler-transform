import './ResultsComponent.css';

import React from 'react';

import { getBWT, getRotations, getSortedRotations } from '../model/BWT';
import { Rotation } from '../model/Rotation';
import BwtComponent from './BwtComponent';
import RotationsTableComponent from './RotationsTableComponent';

const ResultsComponent = (props: { input: string }) => {
	const tempRotations: Rotation[] = getRotations(props.input);
	const sortedRotations = getSortedRotations(tempRotations);

	return (
		<div className="results">
			<div className="tables">
				<div>
					<RotationsTableComponent header="Rotations" rotations={tempRotations} />
				</div>
				<div className="sorted-rotations">
					<RotationsTableComponent header="Sorted rotations" rotations={sortedRotations} />
				</div>
			</div>
			<BwtComponent result={getBWT(sortedRotations)} />
		</div>
	);
};

export default ResultsComponent;
