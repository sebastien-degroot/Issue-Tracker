import React from "react"; 
import { Container } from "react-bootstrap"; 
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {

    const { user }  = useAuth0(); 
    return (
        <Container className = "mb-5">
           <Container className = "mb-5">
               <h2>{user.name}</h2>
               <h2>{JSON.stringify(user, null, 2)}</h2>
           </Container>
        </Container>
    );
};

export default Profile; 