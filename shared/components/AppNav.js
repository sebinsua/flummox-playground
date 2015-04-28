import React from 'react';
import { Link } from 'react-router';

class AppNav extends React.Component {

  render() {
    return (
      <div>
        <Link to="someplace">Some text goes here. And it works perfectly</Link>
      </div>
    );
  }

}

export default AppNav;
