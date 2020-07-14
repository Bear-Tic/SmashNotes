import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';

export const Icon = ({ size, icon: IconEl, ...props }) => (
  <Box {...props}>
    <Box as={IconEl} size={size} />
  </Box>
);

Icon.propTypes = {
  icon: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  icon: () => null,
  size: '',
};
