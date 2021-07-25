import React from 'react';
import { FormControl, FilledInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
 filledInput: {
  height: 50,
  background: '#E9EEF9',
  borderRadius: 5,
  fontSize: 13,
  fontWeight: 'bold',
  color: '#99A9C4',
  letterSpacing: 0,
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 20,
 },
 input: {
  '&::placeholder': {
   color: '#ADC0DE',
   opacity: 1,
  },
 },
}));

type SearchProps = {
 handleChange: (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => void;
};

export const Search = ({ handleChange }: SearchProps) => {
 const classes = useStyles();

 const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
 };

 return (
  <form onSubmit={(e) => handleSubmit(e)}>
   <FormControl fullWidth hiddenLabel>
    <FilledInput
     name="search"
     onChange={(e) => handleChange(e)}
     classes={{ root: classes.filledInput, input: classes.input }}
     disableUnderline
     placeholder="Search"
     startAdornment={
      <InputAdornment position="start">
       <SearchIcon />
      </InputAdornment>
     }
    ></FilledInput>
   </FormControl>
  </form>
 );
};
