import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from '../video-card/video-card';
import ChannelCard from '../../channel-card/channel-card';
import Loader from '../loader/loader';

const Videos = ({videos}) => {
    if(!videos) return <Loader/>

    return (
        <Stack 
            width={'100%'} 
            direction={'row'} 
            flexWrap={'wrap'} 
            justifyContent={'start'} 
            alignItems={'center'}
            gap={2} 
            sx={{paddingLeft: {xs: '0',sm: '20px', md: '40px' }}}
        >
            {
                videos.map(item => (
                    <Box key={item.id.videoId} >
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard video={item} />}
                    </Box>
                ))
            }
        </Stack>
    );
}

export default Videos;
