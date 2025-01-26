import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Name : {name}</h1>
            <h3>Location : India</h3>
            <h4>Leetcode : @kushalmaru</h4>
        </div>
    );
};

export default User;