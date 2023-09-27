import { Box } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Channel from '../Channel/Channel';
import Search from '../Search/Search';
import VideoDetails from '../video-details/video-details';
import Navbar from '../Navbar/Navbar';

function App() {
  return (<Box>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route index path='/channel/:id' element={<Channel/>} />
      <Route path='/search/:id' element={<Search/>} />
      <Route path='/video/:id' element={<VideoDetails/>} />
    </Routes>
  </Box>)
}

export default App;
