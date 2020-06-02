import React from 'react';
import classes from './Experience.module.css';
import { ESection } from '../../common/sectionTitles';
import ExperienceTrack from './ExperienceTrack/ExperienceTrack';
const Experience = (props) => {
	const tracks = [
		{
			title: 'Full Stack React C# Web Developer',
			location: 'St. Georgen',
			description:
                `Nisi ex sit minim magna duis duis fugiat consectetur 
                culpa labore ullamco dolore. Id exercitation dolor
                 est sint proident aliquip ex reprehenderit anim veniam Lorem. Duis consectetur 
                 ullamco ad ipsum excepteur non adipisicing dolore Lorem aliqua mollit aliqua consectetur nisi. 
                 In magna ipsum ipsum ut ea. Nisi dolor dolore irure officia est officia id consectetur adipisicing sint nisi.
                  Minim ullamco est elit ex. Labore pariatur voluptate aute velit ullamco.'`,
            responsibilities: ['Frontend', 'Backend','']
		}
	];
	return (
		<section id={ESection.experience} className={classes.Experience}>
			{/* TODO <img></img> */}
			<h2>Experience</h2>

			<ExperienceTrack />
			<ExperienceTrack />
			<ExperienceTrack />
		</section>
	);
};

export default Experience;
