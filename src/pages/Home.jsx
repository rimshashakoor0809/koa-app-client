import { Box, Card, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { FlexCenter, FlexTextColumn } from '../components/flex'
import { ArtTrack } from '@mui/icons-material';
const { styled } = require("@mui/system");

const MyBox = styled(Box)({
  width: '100%',
  height: 'auto',
  backgroundColor: '#fcfcfc',
  padding: 14,
  display: 'flex',
  borderRadius: 15,
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
});

const Home = () => {
  return (
    <Paper sx={{
      padding: '2rem',
      margin:'1rem',
      borderRadius: '15px',
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;'
        
      }}
    >
      <FlexTextColumn gap={2}>

      <FlexCenter>
        <Typography variant='h1'>BTS WORLD</Typography>
        </FlexCenter>
        
      <Divider />
      
        <Grid border='1px solid red'
          container
          spacing={3}>
          
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>

            <MyBox >
              <FlexCenter paddingY={2}
                sx={{
              background: '#159957',
              background: '-webkit-linear-gradient(to right, #155799, #159957)',
              background: 'linear-gradient(to right, #155799, #159957)'
                }}
                borderRadius={3}
              >
                <ArtTrack sx={{color:'#ccc' , fontSize:'12rem'}} />

              </FlexCenter>
              <FlexTextColumn>
              <Typography>10th August 2023</Typography>
                <Typography variant='h3'>This is Demo Blog</Typography>
                
                
              </FlexTextColumn>

            </MyBox>
                      
          </Grid>
          </Grid>

      </FlexTextColumn>
      </Paper>
  )
}

export default Home