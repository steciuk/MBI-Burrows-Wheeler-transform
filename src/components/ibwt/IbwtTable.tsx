import React from 'react';

const IbwtTable = (props: { ibwtRows: string[]; bwtIndex: number; markOriginal: boolean }) => {
	const { ibwtRows, bwtIndex, markOriginal } = props;

	return (
		<table>
			<tbody>
				{ibwtRows.map((row, rowNum) => (
					<tr
						key={rowNum}
						style={{ backgroundColor: markOriginal && rowNum === bwtIndex ? 'lightcoral' : '' }}
					>
						{[...Array(ibwtRows.length - row.length)].map((_, colNum) => (
							<td key={colNum}> </td>
						))}
						{row.split('').map((symbol, colNum) => (
							<td key={colNum}>{symbol}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default IbwtTable;
