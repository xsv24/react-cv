import React from 'react';
import PropTypes from 'prop-types';
import { times } from '../../utils';

const SkillItemComponent = ({ 
	name = "", 
	level = 5, 
	outof = 5, 
	achivedClass = "fill_skill_star", 
	toImproveClass = "skill_star", 
	rankContainer = "rank_container", 
	icon = '✪'
}) => (
	<li> 
		<span>{name}</span>
		<span className={rankContainer}>
			<span className={achivedClass}>
				{times(level, _ => icon)}
			</span>
			<span className={toImproveClass}> 
				{times(outof - level, _ => icon)}
			</span>
		</span>
	</li>
);

SkillItemComponent.propTypes = {
	achievedClass: PropTypes.string,
	toImproveClass: PropTypes.string,
	level: PropTypes.number,
	outof: PropTypes.number,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	])
};

export default SkillItemComponent;