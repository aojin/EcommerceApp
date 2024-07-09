import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';
import 'nativewind';

const { height: screenHeight } = Dimensions.get('window');

const data = [
  { title: 'Image 1', url: 'https://via.placeholder.com/300x200' },
  { title: 'Image 2', url: 'https://via.placeholder.com/300x200' },
  { title: 'Image 3', url: 'https://via.placeholder.com/300x200' },
];

const CustomDot = ({ isActive, onPress, setIsAutoplay }) => (
  <TouchableOpacity
    onPress={() => {
      onPress();
      setIsAutoplay(false);
    }}
    style={{
      margin: 5,
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: isActive ? 'blue' : 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'transparent' }}>•</Text>
  </TouchableOpacity>
);

CustomDot.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  setIsAutoplay: PropTypes.func.isRequired,
};

const CarouselComponent = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const swiperRef = useRef(null);

  return (
    <View style={{ width: '100%', height: (screenHeight * 2) / 3 }}>
      <Swiper
        ref={swiperRef}
        containerStyle={{ width: '100%', height: '100%' }}
        controlsProps={{
          dotsTouchable: true,
          prevPos: false,
          nextPos: false,
          DotComponent: (props) => (
            <CustomDot {...props} setIsAutoplay={setIsAutoplay} />
          ),
        }}
        loop
        timeout={isAutoplay ? 5 : 0} // 10 seconds timer, stops on dot click
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={{ uri: item.url }}
              style={{ width: '100%', height: '75%', borderRadius: 8 }}
            />
            {/* <Text style={{ position: 'absolute', bottom: 16, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
              {item.title}
            </Text> */}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default CarouselComponent;
