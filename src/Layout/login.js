import React, { useState, useEffect } from 'react';

const HomePage = () => {

    const [userData, setUserData] = useState(0);

    useEffect(() => {
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            window.location.reload();
        }
    }, [userData]);

    const loginhandle = () => {
        setUserData(1)
    }
    return (
        <React.Fragment>
            Home Page
                <button onClick={loginhandle}>Login</button>
        </React.Fragment>
    )
}

export default HomePage;