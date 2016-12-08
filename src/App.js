import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4568';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organizations: []
    }
  }

  organizationsList(){
    return (
      <ul>
        {this.state.organizations.map(organization =>
          <li key={organization.id}>{organization.name}
            <div>
            {organization.phone}
            </div>
            <div>
            {organization.address}
            </div>
          </li>
        )}
      </ul>
    );
  }

  componentDidMount() {
      axios.get('/organizations')
        .then(response => response.data)
          .then(organizations => {
            this.setState({ organizations });
            console.log(organizations)
          })
        .catch(err => {
          console.error(err);
        });
    }

  render() {
    return (
      <div>
      {this.organizationsList()}
      </div>
    );
  }
}

export default App;
