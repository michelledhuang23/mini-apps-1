import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      userId: null
    }
    this.getUsersPage = this.getUsersPage.bind(this);
    this.submitUsersInfo = this.submitUsersInfo.bind(this);
    this.submitAddressInfo = this.submitAddressInfo.bind(this);
    this.submitPaymentInfo = this.submitPaymentInfo.bind(this);
  }

  getCurrentPage() {
    switch (this.state.page) {
      case 'users':
        return <Form1 submitUsersInfo={this.submitUsersInfo}/>
      case 'address':
        return <Form2 submitAddressInfo={this.submitAddressInfo}/>
      case 'payment':
        return <Form3 submitPaymentInfo={this.submitPaymentInfo}/>
    }
  }

  getUsersPage() {
    this.setState({
      page: 'users'
    });
  }

  submitUsersInfo(inputs) {
    this.setState({
      page: 'address'
    });
    fetch('/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({
        userId: json.entryId
      })
    })
    .catch(() => {
      console.log('error!');
    });
  }

  submitAddressInfo(inputs) {
    this.setState({
      page: 'payment'
    });
    let values = [];
    let info = $(".address1, .address2, .city, .state, .zip-code, .phone-number");
    for (let i = 0; i < info.length; i++) {
      values.push(info[i].value);
    }
  }

  submitPaymentInfo(inputs) {
    this.setState({
      page: 'home',
      userId: null
    });
    let values = [];
    let info = $(".credit-card, .expiration-date, .CVV, .billing-zip-code");
    for (let i = 0; i < info.length; i++) {
      values.push(info[i].value);
    }
  }

  render() {
    const currentlyDisplayedForm = this.getCurrentPage();
    let button = this.state.page === 'home' ? <button onClick={this.getUsersPage}>Checkout</button> : null;
    return (<div>
        <h2>Multistep Checkout Experience</h2>
        {button}
      {currentlyDisplayedForm}
    </div>);
  }
}

class Form1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleButtonClick() {
    this.props.submitUsersInfo({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  }
  
  render() {
    return (<div className='users-info'>
      <h2>Create Account</h2>
      <div>
        <label>
          Name:
          <input type="text" className='name' onChange={this.handleNameChange}/>
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="text" className='email' onChange={this.handleEmailChange}/>
        </label>
      </div>

      <div>
        <label>
          Password:
          <input type="text" className='password' onChange={this.handlePasswordChange}/>
        </label>
      </div>
      <button className='users-button' onClick={this.handleButtonClick}>Submit</button>
    </div>);
  }
}

class Form2 extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div className='address-info'>
      <h2>Shipping Information</h2>
      <div>
        <label>
          Address 1:
          <input type="text" className='address1'/>
        </label>
      </div>

      <div>
        <label>
          Address 2:
          <input type="text" className='address2'/>
        </label>
      </div>

      <div>
        <label>
          City:
          <input type="text" className='city'/>
        </label>
      </div>

      <div>
        <label>
          State:
          <input type="text" className='state'/>
        </label>
      </div>

      <div>
        <label>
          Zip Code:
          <input type="text" className='zip-code'/>
        </label>
      </div>

      <div>
        <label>
          Phone Number:
          <input type="text" className='phone-number'/>
        </label>
      </div>
      <button className='address-button' onClick={this.props.submitAddressInfo}>Submit</button>
    </div>);
  }
}

class Form3 extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div className='payment-info'>
      <h2>Payment Information</h2>
      <div>
        <label>
          Credit Card #:
          <input type="text" className='credit-card'/>
        </label>
      </div>

      <div>
        <label>
          Expiration Date:
          <input type="text" className='expiration-date'/>
        </label>
      </div>

      <div>
        <label>
          CVV:
          <input type="text" className='CVV'/>
        </label>
      </div>

      <div>
        <label>
          Billing Zip Code:
          <input type="text" className='billing-zip-code'/>
        </label>
      </div>
      <button className='payment-button' onClick={this.props.submitPaymentInfo}>Submit</button>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));