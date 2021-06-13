import React from 'react';
import './footer.scss';

import { ReactComponent as Linkedin } from '../../images/linkedin.svg';
import { ReactComponent as GitHub } from '../../images/github.svg';
import { ReactComponent as Email } from '../../images/email.svg';

const Footer = props => (
	<footer>
		<a href='https://www.linkedin.com/in/thomas-pearson-4180b8138/' target='_blank' rel="noopener noreferrer" title='Linkedin'>
			<Linkedin />
		</a>
		<a href='https://github.com/xsv24' target='_blank' rel="noopener noreferrer" title='GitHub' >
			<GitHub />
		</a>
		<a href='mailto:thomaspearson.dev@gmail.com' title='Email' >
			<Email />
		</a>
	</footer>
);

export default Footer;