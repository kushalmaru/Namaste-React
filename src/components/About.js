import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>About</h1>
        <h2>Hello World!</h2>
        {/* <User name={"Kushal Maru (functional)"}/> */}
        <UserClass name={"Kushal Maru (class)"}/>
      </div>
    );
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Hello World!</h2>
//       {/* <User name={"Kushal Maru (functional)"}/> */}
//       <UserClass name={"Kushal Maru (class)"}/>
//     </div>
//   );
// }

export default About;