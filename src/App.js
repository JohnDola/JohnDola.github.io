import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollPage from './components/ScrollPage/scrollpage';
import TitleBar from './components/titlebar/titlebar';
import TypeWriter from './components/TypeWriter/typewriter';
library.add(fab);

function App() {
	return (
		<div className="App">
			<TitleBar />
			<ScrollPage>
				<TypeWriter />
				<p>Hi I'm John Marco Dola</p>
				<p>I'm a Freelance Full Stack Software Developer</p>
				<p>I Code for Mobile or Desktop devices, I love and enjoy what I do.</p>
			</ScrollPage>
			<ScrollPage>2</ScrollPage>
			<ScrollPage>3</ScrollPage>
		</div>
	);
}

export default App;
