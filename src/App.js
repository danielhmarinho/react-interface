import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

const App = () => (
    <MuiThemeProvider>
        <div>
            <div><Navbar/></div>
            
        </div>
    </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
    <App/>, document.getElementById('root'));

export default App;
