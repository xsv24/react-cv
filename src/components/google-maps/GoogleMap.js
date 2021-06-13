import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import config from '../../config';

export const Marker = () => (
	<img style={{transform: 'translate(-50%, -50%)'}} alt='pin' src='/images/map-marker.svg' />
);

const GoogleMap = ({
	children, 
	center,
	zoom = 10
}) => {
	return (
		<div style={{ height: '100%', width: '100%', borderRadius: '15px', overflow: 'hidden' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: config.map.apiKey }}
				defaultCenter={center}
				defaultZoom={zoom}
				resetBoundsOnResize
				yesIWantToUseGoogleMapApiInternals>
				{children}
			</GoogleMapReact>
		</div>
	);
}
GoogleMap.propTypes = {
	center: PropTypes.object.isRequired,
	zoom: PropTypes.number
}

export default GoogleMap;