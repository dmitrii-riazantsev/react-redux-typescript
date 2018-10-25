import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';


var applicationContainer = document.getElementById('application-root');
var application = <Hello compiler='TypeScript' framework='React'/>;
ReactDOM.render(application, applicationContainer);