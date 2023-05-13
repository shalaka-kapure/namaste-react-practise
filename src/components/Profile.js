// import { useState } from "react";
// const Profile = (props) => {
//  const [count, setCount] = useState(0);
//     return (
//       <div>
//        <h2>Profile Component</h2>
//        <h3>Name: {props.name}</h3>
// <h3>Count: {count}</h3>
// <button onClick={()=> setCount(1)}>Click Me!</button>
//       </div>;
//     )
// }

// export default Profile;

//Class based component
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    //constructor is used for initialisation
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //will be called after render() & best place to call an api
  }

  render() {
    return (
      <div>
        <h2>Profile Component</h2>
        <h3>Name: {this.props.name}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default Profile;
