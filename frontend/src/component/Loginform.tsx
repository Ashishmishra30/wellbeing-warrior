import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../Styles/loginform.css'

type LoginCredentials = {
    username: string;
    password: string;
};

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        username: '',
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
        if (!credentials.username || !credentials.password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            // Make POST request to the server
            const response = await fetch('/api/login', {
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
            } else {
                // Login failed
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <Box className='logincontainer'>
            <Box><Heading className='heading'>Sign In</Heading></Box>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Box>
                    <Text className='labels'>Username:</Text>
                    <Input
                        className='inputs'
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='labels'>Password:</Text>
                    <Input
                        className='inputs'
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                </Box>
                <Button backgroundColor={"black"} marginTop={"5%"} color={"#ffdc10"} type="submit">Sign In</Button>
            </form>
        </Box>
    );
};

export default LoginPage;

