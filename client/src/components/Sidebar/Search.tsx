import React from 'react';
import { FormControl, FilledInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles((theme) => ({
 filledInput: {
  height: 50,
  background: '#E9EEF9',
  borderRadius: 5,
  fontSize: theme.typography.fontSize,
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
  letterSpacing: 0,
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2.5),
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
