import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Animated,
  StatusBar,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../constants/Color';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.7);
  }
  componentWillMount() {
    this.spring();
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    }, 3000);
  }
  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Color.linearColor1, Color.linearColor2]}
          style={styles.Linear}>
          <StatusBar hidden={true} />

          {/* <Animated.View style={{transform: [{scale: this.springValue}]}}> */}
          <Image
            style={{width: 300, height: 300}}
            // '../../as'
            source={require('../../assets/images/logo2.png')}
            resizeMode="contain"
          />
          {/* </Animated.View> */}
          {/* </ImageBackground> */}
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  Linear: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
