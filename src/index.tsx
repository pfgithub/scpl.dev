import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
if(!rootElement) {throw new Error("root element does not exist");}
if(rootElement.hasChildNodes()){
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}else{
	ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
