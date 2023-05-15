import React from 'react'
import SignupPage from '../component/Signupform'
import '../Styles/loginform.css'
import { Box } from '@chakra-ui/react'



const Signup = () => {
    return (
        <Box className='signuppage'>
            <SignupPage />
        </Box>
    )
}

export default Signup
