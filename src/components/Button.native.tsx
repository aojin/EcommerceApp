import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

const Button = () => (
  <StyledButton className="bg-blue-500 p-4 rounded-lg">
    <StyledText className="text-white text-center">Press me</StyledText>
  </StyledButton>
);

export default Button;
