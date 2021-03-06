import React from 'react';
import config from './config';
import { firebase } from './firebase';

import Loading from './components/loading/loading';
import useRequest from './hooks/useRequest';

import AboutComponent from './components/about/About';
import ShowcaseComponent from './components/showcase/Showcase';
import FooterComponent from './components/footer/Footer';
import SkillsComponent from './components/skills/Skills';
import ExperienceComponent from './components/experience/Experience';

import './styles/global.scss';

// init db connection and grab helpers
const { getSkills, getExperiences } = firebase(config.db);

const App = props => { 
	const [ exps ] = useRequest({
		request: getExperiences
	});

	const [ skills ] = useRequest({
		request: getSkills
	});

	const isLoading = skills.loading || exps.loading;

	return (
		<div className='App'>
			<Loading loading={isLoading} />
			{!isLoading &&
				<>
					<ShowcaseComponent />
					<AboutComponent />
					<SkillsComponent skills={skills.values}  maxCols={3} />
					<ExperienceComponent exps={exps.values} /> 
					<FooterComponent />
				</>
			}
		</div>
	);
}

export default App;