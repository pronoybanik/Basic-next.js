import React from 'react';

const loadSingleUserData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: 'no-cache'
    })
    return res.json()
};

export default loadSingleUserData;