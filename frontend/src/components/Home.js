import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Generation from './Generation.js';
import Dragon from './Dragon.js';
import AccountDragons from './AccountDragons';
import { logout } from '../actions/account';

class Home extends Component {
  render() {
    return(
      <div>
        <Button onClick={this.props.logout} className='logout-button'>Log Out</Button>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
        <AccountDragons />
      </div>
    );
  }
}

export default connect(null, { logout })(Home);