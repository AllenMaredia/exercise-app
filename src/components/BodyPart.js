import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import chestIcon from '../assets/icons/chest.png';
import backIcon from '../assets/icons/back.png';
import waistIcon from '../assets/icons/waist.png';
import upperLegsIcon from '../assets/icons/upper-legs.png';
import lowerLegsIcon from '../assets/icons/lower-legs.png';
import neckIcon from '../assets/icons/neck.png';
import shouldersIcon from '../assets/icons/shoulders.png';
import lowerArmsIcon from '../assets/icons/lower-arms.png';
import upperArmsIcon from '../assets/icons/upper-arms.png';
import cardioIcon from '../assets/icons/cardio.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type='button'
        justifyContent='center'
        alignItems='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width:'270px',
            height:'280px',
            cursor: 'pointer',
            gap: '47px'
         }}
         onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
         }}
    >
        {
          item === 'chest' ? <img src={chestIcon} alt='chest' style={{width:'80px', height:'80px'}}/>
        : item ==='back' ? <img src={backIcon} alt='back' style={{width:'80px', height:'80px'}}/>
        : item ==='waist' ? <img src={waistIcon} alt='waist' style={{width:'80px', height:'80px'}}/>
        : item ==='upper legs' ? <img src={upperLegsIcon} alt='upper-legs' style={{width:'80px', height:'80px'}}/>
        : item ==='lower legs' ? <img src={lowerLegsIcon} alt='lower-legs' style={{width:'80px', height:'80px'}}/>
        : item ==='neck' ? <img src={neckIcon} alt='neck' style={{width:'80px', height:'80px'}}/>
        : item ==='shoulders' ? <img src={shouldersIcon} alt='shoulders' style={{width:'80px', height:'80px'}}/>
        : item ==='lower arms' ? <img src={lowerArmsIcon} alt='lower-arms' style={{width:'80px', height:'80px'}}/>
        : item ==='upper arms' ? <img src={upperArmsIcon} alt='upper-arms' style={{width:'80px', height:'80px'}}/>
        : item ==='cardio' ? <img src={cardioIcon} alt='cardio' style={{width:'80px', height:'80px'}}/>
        :
        <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}}/>
        }
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart