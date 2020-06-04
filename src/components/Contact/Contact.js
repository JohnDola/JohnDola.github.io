import React, { useState } from 'react';
import classes from './Contact.module.css';
import { ESection } from '../../common/sectionTitles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebaseAxiosAPI from '../../services/FirebaseAxios';

const Contact = (props) => {
	const [ contact, setContact ] = useState({ name: '', subject: '', email: '', phone: '', message: '' });
	const resetContact = () => setContact({ name: '', subject: '', email: '', phone: '', message: '' });

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		setContact({...contact,
			[name]: value
		});
	};
	const sendEmailRequest = () => {
		return firebaseAxiosAPI
			.post('sendMail', contact)
			.then((res) => {
				console.log(res);
				alert('Your email has been sent');
			})
			.catch((err) => {
				console.log(err);
			}).finally(() => {
				resetContact()
			})
	};
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
						<a href="https://https://www.xing.com/profile/JohnMarco_Dola/cv">
							<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'xing' ]} />
						</a>
					</span>
					<span>
						<a href="https://github.com/JohnDola">
							<FontAwesomeIcon size={iconSize} icon={[ 'fab', 'github' ]} />
						</a>
					</span>
				</div>
			</div>
			<div className={classes.TwoThird}>
				<input
					value={contact.name}
					onChange={handleInputChange}
					name="name"
					type="text"
					placeholder="Your name"
				/>
				<input
					value={contact.email}
					onChange={handleInputChange}
					name="email"
					type="email"
					placeholder="Your e-mail"
				/>
				<input
					value={contact.subject}
					onChange={handleInputChange}
					name="subject"
					type="text"
					placeholder="Subject"
				/>
				<textarea
					value={contact.message}
					onChange={handleInputChange}
					name="message"
					type="text"
					placeholder="Message"
				/>
				<button onClick={sendEmailRequest} >Send a Message</button>
			</div>
		</section>
	);
};

export default Contact;
