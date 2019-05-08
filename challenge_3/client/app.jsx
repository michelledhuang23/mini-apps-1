import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  constructor() {
    return super();
  }
  
  render() {
    return (<div>
      <h2>Multistep Checkout Experience</h2>
      <button>Checkout</button>
      <div className='usersInfo'><Form1 /></div>
      <div className='addressInfo'><Form2 /></div>
      <div className='paymentInfo'><Form3 /></div>
    </div>);
  }
}

class Form1 extends React.Component {

  constructor() {
    return super();
  }
  
  render() {
    return (<div>
      <h2>Create Account</h2>
      <div>
        <label>
          Name:
          <input type="text" className='name'/>
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="text" className='email'/>
        </label>
      </div>

      <div>
        <label>
          Password:
          <input type="text" className='password'/>
        </label>
      </div>
      <button className='usersButton'>Submit</button>
    </div>);
  }
}

class Form2 extends React.Component {

  constructor() {
    return super();
  }
  
  render() {
    return (<div>
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
          <input type="text" className='password'/>
        </label>
      </div>

      <div>
        <label>
          State:
          <input type="text" className='password'/>
        </label>
      </div>

      <div>
        <label>
          Zip Code:
          <input type="text" className='password'/>
        </label>
      </div>

      <div>
        <label>
          Phone Number:
          <input type="text" className='password'/>
        </label>
      </div>
      <button className='addressButton'>Submit</button>
    </div>);
  }
}

class Form3 extends React.Component {

  constructor() {
    return super();
  }
  
  render() {
    return (<div>
      <h2>Payment Information</h2>
      <div>
        <label>
          Credit Card #:
          <input type="text" className='creditCard'/>
        </label>
      </div>

      <div>
        <label>
          Expiration Date:
          <input type="text" className='expirationDate'/>
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
          <input type="text" className='billingZipCode'/>
        </label>
      </div>
      <button className='paymentButton'>Submit</button>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));