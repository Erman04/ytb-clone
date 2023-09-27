import { Box, Stack } from '@mui/material';
import React from 'react';
// import { useParams } from 'react-router-dom';
// import { logo } from '../../accepts/images/youtube-logo-png-2065.png';
import SearchBar from '../SearchBar/SearchBar';
import { colors } from '../../Constants/colors';
import { Link } from 'react-router-dom';
import { logo } from '../../Constants';

const Navbar = () => {
    return (
        <Stack 
            direction={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'} 
            p={2} 
            px={3}
            sx={{position:'sticky', 
            top: 0 , 
            zIndex: 0,
            backgroundColor: colors.primary,
            height: '10vh'
            }}>
            <Link to={'/'}>
                <img 
                src={logo}  
                alt='Logo' 
                height={30}
                />  
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    );
}

export default Navbar;
