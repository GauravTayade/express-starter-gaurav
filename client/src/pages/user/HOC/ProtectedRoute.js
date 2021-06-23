import React,{useContext} from 'react';
import UserContext from "../../../contexts/UserContext";
import {Route,useHistory} from 'react-router-dom';


const ProtectedRoute = ({component:Component,...rest})=>{

  let history = useHistory();
  const userContext = useContext(UserContext);

  return(
    <Route
      {...rest}
      render={props=>{
      if(userContext.login === true){
        return <Component {...rest} {...props}/>;
      }else{
        return (
          history.push("/login")
        );
      }
    }}
    />
  )
}

export default ProtectedRoute;
