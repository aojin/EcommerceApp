import React from 'react';
import Button from '../components/Button.web';

const HomeScreen = () => (
  <div className="flex w-full flex-col justify-center items-center bg-gray-100 h-screen gap-4">
    <p className="text-black text-3xl">Welcome to the Home Screen</p>
    <Button />
  </div>
);

export default HomeScreen;
