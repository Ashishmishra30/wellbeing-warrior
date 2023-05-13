import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../Styles/loginform.css'
import { Toaster, toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

type LoginCredentials = {
    email: string;
    password: string;
};

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        console.log(credentials)
        // Perform client-side validation
        if (!credentials.email || !credentials.password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            // Make POST request to the server
            const response = await fetch('https://hackthon.onrender.com/api/users/login', {
                // mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                // Successful login
                const data = await response.json();
                console.log('Login successful:', data);
                toast.success("Login Successful..!!")
                return <Navigate to={"/"}/>
            } else {
                // Login failed
                const errorData = await response.json();
                setError(errorData.message);
                toast.error('An error occurred while signing up')
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred while logging in');
            toast.error('An error occurred while signing up')
        }
    };

    return (
        <>
        <Toaster/>
        <Box className='logincontainer'>
            <Box><Heading className='loginheading'>Sign In</Heading></Box>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Box>
                    <Text className='labels'>Email:</Text>
                    <Input
                        className='inputs'
                        placeholder='Enter Username'
                        type="text"
                        name="email"
                        value={credentials.email}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='labels'>Password:</Text>
                    <Input
                        className='inputs'
                        placeholder='Enter Password'
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                </Box>
                <Button backgroundColor={"black"} marginTop={"5%"} color={"#ffdc10"} type="submit">Sign In</Button>
            </form>
        </Box>
        </>
    );
};

export default LoginPage;

