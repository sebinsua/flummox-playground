import React from 'react/addons';

class SomeplaceHandler extends React.Component {

  static willTransitionTo(transition) {
    console.log("transitioning?");
    console.log(transition);
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <span>You have reached some place.</span>
      </div>
    );
  }
}

export default SomeplaceHandler;
