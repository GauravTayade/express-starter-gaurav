import React from 'react';

const UserContext = React.createContext({
    login:false,
    userInfo:{
        id:'',
        name:'',
        email:'',
    }
})

export default UserContext;
