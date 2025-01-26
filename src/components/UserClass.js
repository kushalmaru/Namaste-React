import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // count: 0
            userInfo: {
                name: "Dummy Name",
                location: "Default",
            },
        };
    }


    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kushalmaru");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        // console.log(json); 
        
    }


    render() {
        return (
            <div className="user-card">
                {/* <h1>Count = {this.state.count}</h1> */}
                {/* <button onClick={() => {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                    // this.state.count = this.state.count + 1;

                    //USE setState() method to update state variables
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count increase</button> */}
                
                <h1>Name : {this.state.userInfo.name}</h1>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Leetcode : @kushalmaru</h4>
            </div>
        );
    }
}

export default UserClass;