import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Images, Metrics } from '../Themes';

export default function ActionBar( {onPressNext} ) {
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity>
        <View style={styles.circle}>
          <Image style={styles.rewindIcon} source={Images.rewind} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNext}>
        <View style={styles.bigCircle}>
          <Image style={styles.nopeIcon} source={Images.nope} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.circle}>
          <Image style={styles.boostIcon} source={Images.boost} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNext}>
        <View style={styles.bigCircle}>  
          <Image style={styles.likeIcon} source={Images.like} />
        </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={onPressNext}>
        <View style={styles.circle}> 
          <Image style={styles.superLikeIcon} source={Images.superLike} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Metrics.navBarHeight * 1.5,
    width: Metrics.screenWidth * 0.8,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.navBarHeight,
    width: Metrics.navBarHeight,
    borderRadius: Metrics.navBarHeight * 0.5,
    backgroundColor: 'white',
  },
  bigCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.navBarHeight * 1.25,
    width: Metrics.navBarHeight * 1.25,
    borderRadius: Metrics.navBarHeight * 0.625,
    backgroundColor: 'white',
  },
  rewindIcon: {
    height: Metrics.navBarHeight * 0.65,
    aspectRatio: Metrics.rewindIconAspectRatio,
  },
  nopeIcon: {
    height: Metrics.navBarHeight * 0.65,
    aspectRatio: Metrics.nopeIconAspectRatio,
  },
  boostIcon: {
    height: Metrics.navBarHeight * 0.65,
    aspectRatio: Metrics.boostIconAspectRatio,
  },
  likeIcon: {
    height: Metrics.navBarHeight * 0.65,
    aspectRatio: Metrics.likeIconAspectRatio,
  },
  superLikeIcon: {
    height: Metrics.navBarHeight * 0.65,
    aspectRatio: Metrics.superLikeIconAspectRatio,
  },
});