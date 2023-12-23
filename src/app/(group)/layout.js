import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

const WithLayOut = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <h1>Footer</h1>
        </div>
    );
};

export default WithLayOut;