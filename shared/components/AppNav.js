import React from 'react';
import { Link } from 'react-router';

class AppNav extends React.Component {

  render() {
    // const c = 'red';
    return (
      <div className="red">
        <Link to="someplace">Some text goes here. And it works perfectly</Link>
      </div>
    );
  }

}

export default AppNav;
