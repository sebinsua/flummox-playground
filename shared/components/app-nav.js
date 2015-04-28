import React from 'react';
import { Link } from 'react-router';

class AppNav extends React.Component {

  render() {
    // const c = 'red';
    return (
      <div className="red">
        <Link to="app">Home</Link>
        <Link to="someplace">Some place</Link>
      </div>
    );
  }

}

export default AppNav;
