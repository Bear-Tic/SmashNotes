import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const CustomtInput = ({ variant, label, fullWidth, className }) => {
  const CssTextField = withStyles({
    root: {
      '& label': {
        color: '#F9F9F9',
      },
      '& label.Mui-focused': {
        color: '#F9F9F9',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#F9F9F9',
        },
        '&:hover fieldset': {
          borderColor: '#F9F9F9',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#F9F9F9',
        },
      },
    },
  })(TextField);

  return (
    <CssTextField className={`${className}`} fullWidth={fullWidth} variant={variant} label={label} />
  );
};

export default CustomtInput;