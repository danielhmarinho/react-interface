import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <form>
                <label>Name:<input type="text" name="name"/></label>
                <label>Name:<input type="text" name="name"/></label>
                <label>Name:<input type="text" name="name"/></label>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        );
    }
}

export default LoginForm;