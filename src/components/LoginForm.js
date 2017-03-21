import React from 'react';
import Paper from 'material-ui/Paper';
import './../styles/navbar.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <Paper style={{width: "35%", margin: "100px auto", padding: "10px"}}zDepth={5}>
                <form>
                    <div className="w3-group">
                        <label className="w3-label w3-validate">Email<input className="w3-input" type="text"/></label>
                    </div>
                    <div className="w3-group">
                        <label className="w3-label w3-validate">Password<input className="w3-input" type="text"/></label>
                    </div>
                    <a className="w3-btn">Login</a>
                </form>
              </Paper>
            </div>
        );
    }
}

export default LoginForm;
