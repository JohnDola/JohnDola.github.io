import React from 'react';
import classes from './AboutMe.module.css';
import { ESection } from '../../common/sectionTitles';
const AboutMe = (props) => (
	<section id={ESection.aboutme} className={classes.AboutMe}>
		{/* TODO <img></img> */}
        {/* <img className={ classes.ScrollPictureAnimation} src="https://themes.muffingroup.com/be/resume/wp-content/uploads/2015/03/daniel-petterson.png"></img> */}
		<div className={classes.JohnDola}>
       
			<h2>John Marco Dola</h2>
			<p className={classes.SubHeader}>Full Stack Software Developer</p>
			<p>
				Est ad cillum id eiusmod incididunt sunt duis voluptate ut ut. Ex Lorem magna aliquip id sit consequat
				aliquip culpa. Cillum non est minim veniam culpa ex cillum adipisicing elit commodo. Excepteur voluptate
				reprehenderit id velit exercitation fugiat nostrud ea et adipisicing et. Deserunt qui ipsum dolore
				exercitation et ut dolor enim sint incididunt qui labore ullamco ut. Culpa eu consequat id eiusmod
				culpa. In est commodo laborum aliqua aliqua commodo laboris sunt eu quis. Dolore qui culpa deserunt ut
				
			</p>
            <p>nulla laborum labore ipsum veniam consectetur voluptate dolore sunt est. Officia deserunt sint ex sunt
				ea pariatur. Sunt laboris qui do nulla sint. Adipisicing est velit amet aliqua pariatur mollit
				reprehenderit occaecat reprehenderit. Voluptate duis dolor minim culpa tempor quis amet nostrud sint
				minim incididunt commodo labore. Consequat adipisicing amet eiusmod velit. Enim incididunt sint Lorem
				</p>
		</div>
	</section>
);

export default AboutMe;
