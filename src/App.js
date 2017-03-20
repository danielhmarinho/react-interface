import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerMenu from './components/DrawerMenu';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './components/Navbar';

const App = () => (
    <MuiThemeProvider>
        <div>
            <div><Navbar/></div>
            <div><DrawerMenu/></div>
        </div>
    </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
    <App/>, document.getElementById('root'));

export default App;
