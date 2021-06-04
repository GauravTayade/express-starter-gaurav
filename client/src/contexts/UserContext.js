import React from 'react';

const UserContext = React.createContext({
    login:false,
    userInfo:{
        id:'demoid1979874',
        name:'',
        email:'',
    }
})

export default UserContext;
