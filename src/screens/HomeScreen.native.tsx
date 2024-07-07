import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import Button from '../components/Button.native';

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = () => (
  <StyledView className="flex-1 justify-center items-center bg-gray-100">
    <StyledText className="text-black text-2xl">
      Welcome to the Home Screen
    </StyledText>
    <Button />
  </StyledView>
);

export default HomeScreen;
