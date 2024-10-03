import { Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';

const customeServices=[
    {
        id:1,
        title:"Periodic Services",
        desc:"8 Services Included",
        path:"/images/periodic-serive.svg"
    }
    ,
    {
        id:2,
        title:"AC Service & Repair",
        desc:"8 Services Included",

        path:"/images/AC&Repair-services.svg"
    }
    ,
    {
        id:3,
        title:"Tyres & Wheel Care",
        desc:"8 Services Included",

        path:"/images/tyres&wheels-services.svg"
    }
    ,
    {
        id:4,
        title:"Batteries",
        desc:"8 Services Included",

        path:"/images/Batteries-service.svg"
    }
    ,
    {
        id:5,
        title:"Denting & Painting",
        desc:"8 Services Included",

        path:"/images/denting-paiting-services.svg"
    }
    ,
    {
        id:6,
        title:"Car Spa & Cleaning",
        desc:"8 Services Included",

        path:"/images/car-spa-cleaning-service.svg"
    }
    ,
    {
        id:7,
        title:"Detailing Services",
        desc:"8 Services Included",

        path:"/images/detailing-service.svg"
    }
    ,
    {
        id:8,
        title:"Suspension & Fitments",
        desc:"8 Services Included",

        path:"/images/suspension-fitment-service.svg"
    }
    


]

const CurateCustomeService = () => {
  return (
    <Stack>
        <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>Curate Custom Services</Typography>
        <Typography variant="subtitle2" sx={{color:"#1781F8"}}>View All</Typography>
        </Stack>
        <Stack display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={2}>
            {customeServices.map((each, index) => (
                  <Stack  key={index} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} height={100} width={290}>
                  <Image src={each.path} alt="" height={40} width={40} />
                  <Stack>
                      <Typography variant="subtitle1">{each.title}</Typography>
                      <Typography variant="subtitle2">{each.desc}</Typography>
                  </Stack>
                  <KeyboardArrowRightIcon />
                
              </Stack>

            ))}
          
        </Stack>
    </Stack>
  )
}

export default CurateCustomeService