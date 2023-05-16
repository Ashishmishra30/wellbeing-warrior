import { Box, Button, Heading, Input, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../Styles/loginform.css'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


type SignupData = {
    username: string;
    email: string;
    password: string;
    goal: string;
    height: string,
    weight: string,
    age: string,
    active: string,
    workout: string
};

//

const SignupPage: React.FC = () => {
    const [signupData, setSignupData] = useState<SignupData>({
        username: '',
        email: '',
        password: '',
        goal: '',
        height: '',
        weight: '',
        age: '',
        active: '',
        workout: ''
    });
    const [error, setError] = useState<string>('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setSignupData((prevSignupData) => ({
            ...prevSignupData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        // Perform client-side validation
        if (!signupData.username || !signupData.email || !signupData.password || !signupData.goal || !signupData.height || !signupData.weight || !signupData.age || !signupData.active || !signupData.workout) {
            setError('Please fill in all fields');
            return;
        }
        console.log(signupData)

        try {
            // Make POST request to the server
            const response = await fetch('https://hackthon.onrender.com/api/users/register', {
                // mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });

            if (response.ok) {
                // Successful signup
                const data = await response.json();
                console.log('Signup successful:', data);
                toast.success("Registration Successful..!!")
                localStorage.setItem("username",(signupData.username))
                navigate('/login')
            } else {
                // Signup failed
                const errorData = await response.json();
                console.log(errorData)
                setError(errorData.message);
                toast.error("errorData.message")
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred while signing up');
            toast.error('An error occurred while signing up')
        }

        setSignupData({
            username: '',
            email: '',
            password: '',
            goal: '',
            height: '',
            weight: '',
            age: '',
            active: '',
            workout: ''
        })
    };
    const navigate=useNavigate()
    return (
        <>
         <Toaster/>
        <Box className='signupcontainer'>
            <Heading className='heading'>Signup</Heading>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <Box>
                    <Text className='signuplabels'>Name:</Text>
                    <Input
                        type="text"
                        className='inputs'
                        placeholder='Enter Fullname'
                        name="username"
                        value={signupData.username}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>Email:</Text>
                    <Input
                        type="email"
                        className='inputs'
                        placeholder='Enter Email'
                        name="email"
                        value={signupData.email}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>Password:</Text>
                    <Input
                        type="password"
                        className='inputs'
                        placeholder='Enter Password'
                        name="password"
                        value={signupData.password}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>What Is Your Goal ?</Text>
                    <Select placeholder='Select A Goal' name="goal" value={signupData.goal} onChange={handleInputChange}>

                        <option value="weightgain">Weight Gain</option>
                        <option value="weightloss">Weight Loss</option>
                    </Select>
                </Box>
                <Box>
                    <Text className='signuplabels'>Height:</Text>
                    <Input
                        type="text"
                        className='inputs'
                        name="height"
                        placeholder='Enter Height In cms'
                        value={signupData.height}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>Weight:</Text>
                    <Input
                        type="text"
                        className='inputs'
                        placeholder='Enter Weight In kgs'
                        name="weight"
                        value={signupData.weight}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>Age:</Text>
                    <Input
                        type="text"
                        name="age"
                        className='inputs'
                        placeholder='Enter Your Age'
                        value={signupData.age}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <Text className='signuplabels'>How Active You Are ?</Text>
                    <Select placeholder='Select option' name="active" value={signupData.active} onChange={handleInputChange}>

                        <option value="notactive">Not Active</option>
                        <option value="lessactive">Less Active</option>
                        <option value="active">Active</option>
                        <option value="veryactive">Very Active</option>
                    </Select>
                </Box>
                <Box>
                    <Text className='signuplabels'>How Many Days Do You Workout In A Week ?</Text>
                    <Select placeholder='Select Role' name="workout" value={signupData.workout} onChange={handleInputChange}>

                        <option value="lessthan2">less than 2</option>
                        <option value="3to5">3 to 5</option>
                        <option value="morethan5">more than 5</option>
                    </Select>
                </Box>
                <Button backgroundColor={"black"} marginTop={"5%"} color={"#ffdc10"} type="submit">Sign Up</Button>
            </form>
        </Box>
        </>
    );
};

export default SignupPage;