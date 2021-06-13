import React from 'react';
import PropTypes from 'prop-types';
import { repeat } from '../../utils';

const SkillItem = ({ 
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
				{repeat(level, _ => icon)}
			</span>
			<span className={toImproveClass}> 
				{repeat(outof - level, _ => icon)}
			</span>
		</span>
	</li>
);

SkillItem.propTypes = {
	achievedClass: PropTypes.string,
	toImproveClass: PropTypes.string,
	level: PropTypes.number,
	outof: PropTypes.number,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	])
};

export default SkillItem;