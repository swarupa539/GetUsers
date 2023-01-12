import React,{ useEffect, useState }from 'react';
import User from '../Types/User';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/system';

const Users = () => {
const [userData, setData] = useState<User[]>([]);
  useEffect(() => {
    axios.get('https://reqres.in/api/users/')
      .then(response => {
        console.log("Getting Users data from :::", response.data)
        setData(response.data.data)
      }).catch(err => console.log(err))
  }, [])

     return(
     <ImageList sx={{ width: 1200, height: 760,paddingLeft:20,paddingBottom:2}} 
     cols={3} rowHeight={160}>
      {userData.map((item) => (
        <Box
        border={1}
        borderLeft={1}
        borderRight={1}
        borderColor="primary.main"
        sx={{ width: 200, height: 250}}>
        <ImageListItem key={item.avatar}>
        <img
           src={`${item.avatar}?w=14&h=14`}
           srcSet={`${item.avatar}?w=14&h=14&dpr=1 1x`}
           alt={item.email}
           loading="lazy"
           style={{ width: '130px', height:'130px',alignSelf: 'center',paddingTop: '10px'}}
        />
        <ImageListItemBar title={item.first_name} position="below" style={{alignContent:'center'}} />
        <ImageListItemBar title={item.last_name} position="below" style={{alignContent:'center'}} />
        <ImageListItemBar subtitle={<span>{item.email}</span>} position="below" style={{alignContent:'center'}} />
        </ImageListItem>
        </Box>
      ))}
    </ImageList>
     );
  }
  export default Users;
