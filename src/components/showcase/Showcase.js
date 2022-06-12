import React from 'react';
import './showcase.scss';
import showcase from '../../images/showcase.png';

const Showcase = () => (
	<section className="showcase">
		<img src={showcase} alt="My Desk layout"/>
	</section>
);

export default Showcase;