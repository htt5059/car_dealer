import React, { useState } from 'react';

import Header from '../Header/Header';

const Register = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>Registration Page</div>
    )
}

export default Register;