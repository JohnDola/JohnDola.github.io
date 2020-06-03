import React from 'react';
import classes from './Contact.module.css';
import { ESection } from '../../common/sectionTitles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
	const iconSize = '2x';
	return (
		<section id={ESection.contact} className={classes.Contact}>
			<div className={classes.OneThird}>
				<p>Write a Message</p>
				<big>Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor.</big>
				<p>My Profiles in Social Media</p>
				<div className={classes.SocialMediaGroup}>
					<span>
						<a href="https://linkedin.com/in/john-dola">
							<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'linkedin' ]} />
						</a>
					</span>
					<span>
						<a href="https://https://www.xing.com/profile/JohnMarco_Dola/cv" >
						<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'xing' ]} />

						</a>
					</span>
					<span>
						<a href="" >
						<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'github' ]} />
						</a>
					</span>
				</div>
			</div>
			<div className={classes.TwoThird}>
				<input type="text" placeholder="Your name" />
				<input type="text" placeholder="Your e-mail" />
				<input type="text" placeholder="Subject" />
				<textarea type="text" placeholder="Message" />
				<button type="submit">Send a Message</button>
			</div>
		</section>
	);
};

export default Contact;
