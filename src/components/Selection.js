import React, { useState } from 'react';
import '../styles/Child.css'

const Selection = (props) => {
	const { applyColor } = props;
	const [divStyle, setDivStyle] = useState({ background: '' });
	return (
		<div className='fix-box' style={divStyle} onClick={() => applyColor(setDivStyle)}>
			<h2 className='subheading'>Selection</h2>
		</div>
	)
}

export default Selection;