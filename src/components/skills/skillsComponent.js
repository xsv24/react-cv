import React from 'react';
import PropTypes from 'prop-types';
import SkillItemComponent from './skillItem';
import './skills.scss';
import { times } from '../../utils';

function sortListLengths(skills, maxCols) {
	if(!skills.length) return [];
	
	let arr = [...skills];

	return times(
		maxCols, _ => arr.splice(0,  Math.ceil(skills.length / maxCols))
	);
}

const SkillsComponent = ({
	maxCols = 3,
	skills = []
}) => (
	<div className='container'>
		<h1>Skills</h1>
		<div className='languages'>
			{sortListLengths(skills, maxCols).map((skillCol, i) => (
				<ul key={i}>
					{skillCol.map((skill, j) => <SkillItemComponent key={j} {...skill} />)}
				</ul>
			))}
		</div>
	</div>
);

SkillsComponent.propTypes = {
	maxCols: PropTypes.number,
	skills: PropTypes.array.isRequired
};

export default SkillsComponent;