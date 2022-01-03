import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationsSVG from '../components/svgs/Notifications';
import SearchSVG from '../components/svgs/Search';
import Carousel from 'react-native-snap-carousel';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RightArrowSVG from '../components/svgs/RightArrow';
import ClockSVG from '../components/svgs/Clock';
import StarSVG from '../components/svgs/Star';
import { useNavigation } from '@react-navigation/native';
import { categories, dishes } from '../fakedata/fakeData';

const Main = () => {
  const navigation = useNavigation();

  // Category Hooks
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Render Category Function
  const renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategoryIndex(index)}
        style={{
          backgroundColor:
            index === activeCategoryIndex ? '#B1DB5A' : '#2C2C2C',
          ...renderCategoryItemStyles.touchableOpacity,
        }}
      >
        <View
          style={{
            borderColor: index === activeCategoryIndex ? '#2C2C2C' : '#fff',
            ...renderCategoryItemStyles.view,
          }}
        >
          {item.icon}
        </View>
        <Text
          style={{
            fontFamily: 'DMSans_500Medium',
            color: index === activeCategoryIndex ? '#2C2C2C' : '#fff',
          }}
        >
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  // Popular Dishes Hooks

  // Render Dish Item Function
  const renderDishItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.push('Card', { item })}
          style={renderDishItemStyles.touchableOpacity}
        >
          <ImageBackground
            source={item.backgroundImage}
            style={renderDishItemStyles.imageBackground}
          />
          <View style={renderDishItemStyles.durationView}>
            <ClockSVG size={12} fill={'#fff'} />
            <Text
              style={{
                fontFamily: 'DMSans_500Medium',
                color: '#fff',
                marginLeft: 5,
              }}
            >
              {item.duration} min
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'DMSans_700Bold',
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: '#BCBCBC',
              fontSize: 14,
              fontFamily: 'DMSans_500Medium',
              marginTop: 5,
            }}
          >
            {item.description}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: '#B1DB5A',
                paddingHorizontal: 12,
                paddingVertical: 3,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: 'DMSans_700Bold',
                  fontSize: 17,
                  color: '#202020',
                }}
              >
                ${item.price}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}
            >
              <StarSVG size={16} fill={'#F9CA24'} />
              <Text
                style={{
                  fontFamily: 'DMSans_500Medium',
                  fontSize: 14,
                  color: '#fff',
                  marginLeft: 4,
                }}
              >
                {item.rating}
              </Text>
              <Text
                style={{
                  fontFamily: 'DMSans_500Medium',
                  fontSize: 13,
                  color: '#D6D6D6',
                  marginLeft: 4,
                }}
              >
                ({item.ratingCount})
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#202020' }}>
      <ScrollView style={{ paddingVertical: 5 }}>
        {/* Header */}
        <View style={headerStyles.view}>
          <TouchableOpacity>
            <SearchSVG size={30} fill={'#fff'} />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <NotificationsSVG size={30} fill={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/photos/avatar.png')}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Header Text */}
        <View style={{ marginTop: 10, paddingHorizontal: 30 }}>
          <Text
            style={{
              fontSize: 28,
              color: '#fff',
              fontFamily: 'DMSans_700Bold',
            }}
          >
            Let's Eat
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: '#fff',
              fontFamily: 'DMSans_700Bold',
            }}
          >
            Healthy Food
          </Text>
        </View>

        {/* Category Carousel */}
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
          <Carousel
            layout={'default'}
            data={categories}
            sliderWidth={150}
            itemWidth={95}
            renderItem={renderCategoryItem}
            inactiveSlideScale={1}
          />
        </View>

        {/* Popular Dishes */}
        <View style={popularDishesStyles.view}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'DMSans_700Bold',
              color: '#fff',
            }}
          >
            Popular Dishes
          </Text>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#FF8533',
                fontFamily: 'DMSans_500Medium',
                marginRight: 2,
              }}
            >
              View all
            </Text>
            <RightArrowSVG size={15} fill={'#FF8533'} />
          </TouchableOpacity>
        </View>

        {/* Popular Dishesh Carousel */}
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
          <Carousel
            layout={'default'}
            data={dishes}
            sliderWidth={245}
            itemWidth={186} // margin (16px each)
            renderItem={renderDishItem}
            inactiveSlideScale={1}
          />
        </View>

        {/* Discover New Places */}
        <Text
          style={{
            fontFamily: 'DMSans_700Bold',
            fontSize: 22,
            color: '#fff',
            marginLeft: 30,
            marginTop: 15,
          }}
        >
          Discover New Places
        </Text>

        {/* Places */}
        <View style={placesStyles.view}>
          <TouchableOpacity style={placesStyles.touchableOpacity}>
            <ImageBackground
              source={require('../assets/icons/place-1.png')}
              style={placesStyles.imageBackground}
            />
          </TouchableOpacity>
          <TouchableOpacity style={placesStyles.touchableOpacity}>
            <ImageBackground
              source={require('../assets/icons/place-2.png')}
              style={placesStyles.imageBackground}
            />
          </TouchableOpacity>
          <TouchableOpacity style={placesStyles.touchableOpacity}>
            <ImageBackground
              source={require('../assets/icons/place-3.png')}
              style={placesStyles.imageBackground}
            />
          </TouchableOpacity>
          <TouchableOpacity style={placesStyles.touchableOpacity}>
            <ImageBackground
              source={require('../assets/icons/place-4.png')}
              style={placesStyles.imageBackground}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const renderCategoryItemStyles = StyleSheet.create({
  touchableOpacity: {
    borderRadius: 999,
    height: 120,
    width: 75,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  view: {
    backgroundColor: '#2C2C2C',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const renderDishItemStyles = StyleSheet.create({
  touchableOpacity: {
    height: 170,
    width: 170,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  durationView: {
    position: 'absolute',
    top: 5,
    left: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 6,
    backgroundColor: '#FF8533',
    borderRadius: 15,
  },
});

const headerStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

const popularDishesStyles = StyleSheet.create({
  view: {
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});

const placesStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  touchableOpacity: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: '#fff',
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});

export default Main;
