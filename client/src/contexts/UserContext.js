import React from 'react';

const UserContext = React.createContext({
    login:false,
    userInfo:{
        name:'',
        email:'',
    }
})

export default UserContext;
