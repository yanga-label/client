import React from 'react';

import { CustomButtonContainer } from './CustomButtonClassic.style';

const CustomButtonClassic = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButtonClassic;