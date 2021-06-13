import React, { useState } from 'react';
import Modal from '../modal/simpleModal';
import ExpItem from './experienceItem';
import GoogleMap, { Marker } from '../googleMap/GoogleMap';

const ExperienceComponent = ({ exps=[] }) => {
	const [
		{ selectedCords, openMap }, 
		setState
	] = useState({ selectedCords: {}, openMap: false });

	const toggleMap = cords => setState({
		selectedCords: cords || selectedCords,
		openMap: !openMap
	});

	return (
		<div className='container'>
			<Modal isOpen={openMap} toggle={toggleMap}>
				<GoogleMap center={selectedCords}>
					<Marker />
				</GoogleMap>
			</Modal>
			
			<h1 style={{ marginBottom: 25 }}>
				Experience
			</h1>
			
			{exps.map((exp, i) => (
				<ExpItem key={i} toggleMap={toggleMap} {...exp} />
			))}
		</div>
	);
};

export default ExperienceComponent;