import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TextInput } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index';
import { ENTRIES1, ENTRIES2 } from '../static/entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class MyCarousel extends Component {

  constructor(props) {
    console.log('here');
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null,
    };
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  get example1() {
    const { slider1ActiveSlide, slider1Ref } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => {
            if (!this.state.slider1Ref) {
              this.setState({ slider1Ref: c });
            }
          }}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          sliderHeight={sliderWidth}
          itemWidth={itemWidth}
          itemHeight={itemWidth}
          vertical={true}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={false}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />

      </View>
    );
  }

  get example2() {
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          data={ENTRIES2}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          sliderHeight={sliderWidth}
          itemWidth={itemWidth}
          itemHeight={itemWidth}
          vertical={true}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
  // <ScrollView
  //   style={styles.scrollview}
  //   contentContainerStyle={styles.scrollviewContentContainer}
  //   indicatorStyle={'white'}
  //   scrollEventThrottle={200}
  //   directionalLockEnabled={true}>
  //
  // </ScrollView>

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
        />
              {this.example1}

      </View>
    );
  }
}
