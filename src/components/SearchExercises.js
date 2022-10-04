import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions);
      //console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);

    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' sx={{fontSize: {xs:'30px',lg:'44px'}}} mb='50px' textAlign='center'>
        Search For Any <br /> Exercise
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: { fontWeight:'700', border:'none', borderRadius:'4px'},
            width: {xs:'350px', lg:'800px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search'
          type='text'
        />
        <Button className='search-btn' sx={{
          bgcolor: '#ff2625',
          color:'#fff',
          textTransform:'none',
          width:{xs:'80px', lg:'175px'},
          fontSize:{xs:'14px', lg:'20px'},
          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} 
          setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises