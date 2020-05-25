import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollPage from './components/ScrollPage/scrollpage';
import TitleBar from './components/titlebar/titlebar';
import TypeWriter from './components/TypeWriter/typewriter';
import ScrollButton from './components/ui/scrollbutton/scrollbutton';
library.add(fab);

function App() {
	const [disableScrollButton, setDisableScrollButton] = useState(true)

const setIsReady = () => {
	setDisableScrollButton(false);
}

	return (
		<div className="App">
			<TitleBar />
			<ScrollPage>
				<TypeWriter invokeSetIsReady = {setIsReady}  />
				<ScrollButton isTypeWriteActive={disableScrollButton}></ScrollButton>
			</ScrollPage>
			<ScrollPage>2</ScrollPage>
			<ScrollPage>3</ScrollPage>
		</div>
	);
}

export default App;
