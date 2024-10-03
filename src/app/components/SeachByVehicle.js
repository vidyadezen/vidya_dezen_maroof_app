import { InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SeachByVehicle = () => {
  return (
    <Stack sx={{backgroundColor:"#101828", color:'white'}}>
        <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4'>Search By Vehicles</Typography>
            <Stack flexDirection={'row'} alignItems={'center'}>
                <InputLabel>VIN Number :</InputLabel>

            <TextField label="Outlined" 
            />
            <SearchIcon />
            </Stack>


        </Stack>
        

    </Stack>
  )
}

export default SeachByVehicle