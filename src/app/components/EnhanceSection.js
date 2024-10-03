import { Button, List, ListItem, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const enhance=[
    {
        id:0,
        path:"/images/Alternator-pully.svg",
        partName:'Alternator Pulley',
        price:"SAR 349",
        discountPrice:"SAR 399",
        discountPercentage:'12% off'

    },
    {
        id:1,
        path:"/images/drive-chain.svg",
        partName:'Drive Chain',
        price:"SAR 499",
        discountPrice:"SAR 549",
        discountPercentage:'10% off'

    },

    {
        id:2,
        path:"/images/engine-controll-unit.svg",
        partName:"Car Engine control unit Electronic control unit",
        price:"SAR 149",
        discountPrice:"SAR 179",
        discountPercentage:"17% off"

    }
    ,
    {
        id:3,
        path:"/images/roller.svg",
        partName:"Roller",
        price:"SAR 199",
        discountPrice:"SAR 229",
        discountPercentage:"13% off"

    }
    ,
    {
        id:4,
        path:"/images/engine-bearing.svg",
        partName:"Engine Bearing",
        price:"SAR 549",
        discountPrice:"SAR 599",
        discountPercentage:"8% off"

    }
    ,
    {
        id:5,
        path:"/images/wheel-bearing.svg",
        partName:"Wheel Bearing",
        price:"SAR 399",
        discountPrice:"SAR 449",
        discountPercentage:"11% off"

    }
    ,
    {
        id:5,
        path:"/images/wheel-bearing.svg",
        partName:"Wheel Bearing",
        price:"SAR 399",
        discountPrice:"SAR 449",
        discountPercentage:"11% off"

    }
    ,
    {
        id:5,
        path:"/images/wheel-bearing.svg",
        partName:"Wheel Bearing",
        price:"SAR 399",
        discountPrice:"SAR 449",
        discountPercentage:"11% off"

    }
   



]

const EnhanceSection = () => {
  return (
    <Stack>
         <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>Enhances your car Performance With Engine Part</Typography>
        <Typography variant="subtitle2" sx={{color:"#1781F8"}}>View All</Typography>
        </Stack>

    
    
        <Stack  display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={2}>
            {enhance.map((each, index) => (
              


                  <Stack  display="flex" justifyContent="center" flexDirection="column" key={index} height={370} width={250}>
                      <Image src={each.path} alt="" height={200} width={250} />
                      <Stack>
                          <Typography variant='subtitle1'>{ each.partName}</Typography>
                          <Stack display={'flex'} flexDirection={'row'} gap={1}>

                          <Typography variant='subtitle2' fontWeight={'600'}>{each.price}</Typography>
                          <Typography variant='subtitle2'  fontWeight={'500'} sx={{ textDecoration: 'line-through' }}>{each.discountPrice}</Typography>
          
                          <Typography  variant='subtitle2'  gutterBottom={2} color={'#34C759'}>{each.discountPercentage}</Typography>
                          </Stack>

                          </Stack>
                          <Button variant="contained"   startIcon={<AddIcon />}>ADD TO CART</Button>
          
                      </Stack>
              

            ))}
          

        </Stack>
    </Stack>



   
  )
}

export default EnhanceSection