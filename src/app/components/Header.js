import { Button, FormControl, InputLabel, NativeSelect, Select, Stack } from '@mui/material'
import Image from 'next/image'
// import Badge from '@mui/joy/Badge';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Stack display={'flex'}  flexDirection={'row'} justifyContent={"space-between"} alignItems={'center'}>
        <Stack display={'flex'}  flexDirection={'row'} justifyContent={"space-between"} alignItems={'center'} gap={2}>
            <Image src="/images/Maroof-Logo_03.svg" alt="maroof-logo" height={58} width={58} />
            <Stack   display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'}>
            <WhereToVoteOutlinedIcon />

            <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  Delivery Address
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>Jeddah</option>
    <option value={20}>Jeddah</option>
    <option value={30}>Jeddah</option>
  </NativeSelect>
</FormControl>

</Stack>
            
        </Stack>
        <Stack display={'flex'}  flexDirection={'row'} justifyContent={"space-between"} alignItems={'center'} gap={2}>
            <Image src="/images/trans-icon.svg" height={23} width={29} alt="translate" />
            <Button variant="contained" sx={{}}>Signing</Button>
            <MenuIcon />
        </Stack>

    </Stack>
  )
}

export default Header