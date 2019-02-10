import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import Data from './Data/Data';

class App extends Component {

  state = { 
    loginDataEmail:'', loginPassword: '', loginTableName:'',
    serviceEmail: '', serviceApiKey: '', serviceCurrentId: '',
    error: "" 
  }

  emailChangedHandler = (event) => {
    this.setState({ loginDataEmail: event.target.value  });
  }

  passwordChangedHandler = (event) => {
    this.setState({ loginPassword: event.target.value });
  }

  tableNameChangedHandler = (event) => {
    this.setState({ loginTableName: event.target.value });
  }

  currentIdChangedHandler = (event) => {
    this.setState({ serviceCurrentId: event.target.value });
  }

  createUserHandler = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://arcane-peak-14291.herokuapp.com/v1/new";
    const response = await fetch(proxyurl + url, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.loginDataEmail,
        password: this.state.loginPassword,
        tableName: this.state.loginTableName
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
    const json = await response.json()
    const status = response.status;
    console.log(status);
    console.log(json);
    if (status !== 202) {
      console.log('error');
      this.setState({ error: 'Error: ' + status });
    } else {
      console.log('success');
      this.setState({ serviceEmail: this.state.loginDataEmail });
      this.setState({ serviceApiKey: json.apiKey });
      this.setState({ serviceEmail: this.state.loginDataEmail });
      this.currentHandler();
    }
  }

  loginHandler = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://arcane-peak-14291.herokuapp.com/v1/login";
    const response = await fetch(proxyurl + url, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.loginDataEmail,
        password: this.state.loginPassword,
        tableName: this.state.loginTableName
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
    const json = await response.json()
    const status = response.status;
    console.log(status);
    console.log(json);
    if (status !== 202) {
      console.log('error');
      this.setState({ error: 'Error: ' + status });
    } else {
      console.log('success');
      this.setState({ serviceEmail: this.state.loginDataEmail });
      this.setState({ serviceApiKey: json.apiKey });
      this.currentHandler();
    }
  }

  currentHandler = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://arcane-peak-14291.herokuapp.com/v1/current";
    const response = await fetch(proxyurl + url, {
      method: 'POST',
      body: JSON.stringify({
        apiKey: this.state.serviceApiKey
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
    const json = await response.json()
    const status = response.status;
    console.log(status);
    console.log(json);

    if (status !== 202) {
      console.log('');
      this.setState({ error: 'Error: ' + status });
    } else {
      console.log('success');
      this.setState({ serviceCurrentId: json });
    }
  }

  nextHandler = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://arcane-peak-14291.herokuapp.com/v1/next";
    const response = await fetch(proxyurl + url, {
      method: 'POST',
      body: JSON.stringify({
        apiKey: this.state.serviceApiKey
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
    const json = await response.json()
    const status = response.status;
    console.log(status);
    console.log(json);

    if (status !== 202) {
      console.log('');
      this.setState({ error: 'Error: ' + status });
    } else {
      console.log('success');
      this.setState({ serviceCurrentId: json });
    }
  }

  resetHandler = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://arcane-peak-14291.herokuapp.com/v1/reset?newId=" + this.state.serviceCurrentId;
    const response = await fetch(proxyurl + url, {
      method: 'PUT',
      body: JSON.stringify({
        apiKey: this.state.serviceApiKey
      }),
      headers:{ 'Content-Type': 'application/json' }
    });
    const json = await response.json()
    const status = response.status;
    console.log(status);
    console.log(json);

    if (status !== 202) {
      console.log('');
      this.setState({ error: 'Error: ' + status });
    } else {
      console.log('success');
      this.setState({ serviceCurrentId: json });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Id as a Service</h1>
        <Login 
          email={this.state.loginDataEmail}
          password={this.state.loginPassword}
          tableName={this.state.loginTableName}
          emailChange={this.emailChangedHandler} 
          passwordChange={this.passwordChangedHandler} 
          tableNameChange={this.tableNameChangedHandler}
          error={this.state.error}
          loginClick={this.loginHandler}
          CreateUserClick={this.createUserHandler} />
        <Data 
          email={this.state.serviceEmail}
          api={this.state.serviceApiKey}
          current={this.state.serviceCurrentId} 
          currentIdChange={this.currentIdChangedHandler} 
          generateClick={this.nextHandler}
          resetClick={this.resetHandler} />
      </div>
    );
  }
}

export default App;