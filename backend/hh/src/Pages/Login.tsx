import React from 'react'
import LoginPage from '../component/Loginform'
import { Box, Flex } from '@chakra-ui/react'
import '../Styles/loginform.css'



const Login = () => {
    return (
        <Flex className='loginpage'>
            <Box><LoginPage /></Box>
        </Flex>
    )
}

export default Login
