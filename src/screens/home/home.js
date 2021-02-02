import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Slider,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import axios from 'axios';

import {Icon} from 'react-native-elements';

// import Slider from '@react-native-community/slider';

import {connect} from 'react-redux';
import Color from '../../constants/Color';
import LinearGradient from 'react-native-linear-gradient';
import GlobalButton from '../../components/GlobalButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';
// import ErrorModal from '../../components/ErrorModal';
const trackPlayerInit = async (url) => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: '1',
    url: url,
    type: 'default',
    title: 'My Title',
    album: 'My Album',
    artist: 'AI Generated Music',
  });

  return true;
};
const Home = ({navigation}) => {
  const [lyrics, setLyrics] = useState('');
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {position, duration} = useTrackPlayerProgress(250);
  const [musicData, setMusicData] = useState([]);
  const [songDuration, setSongDuration] = useState('0:00');
  // useEffect(() => {
  //   // if (isPlaying) {
  //   const startPlayer = async () => {
  //     let isInit = await trackPlayerInit();
  //     setIsTrackPlayerInit(isInit);
  //   };
  //   startPlayer();
  //   // }
  // }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };
  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  const slidingCompleted = async (value) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  const lyricsHandler = () => {
    const body = JSON.stringify({
      // user_id: await AsyncStorage.getItem('user_id'),
      // category_id: 6,
      // // sub_cateogory_id: 2,
      // // subCategory: 2,
      // post_id: id,
      // favorite: '1',
      lyrics: lyrics,
    });
    axios({
      method: 'POST',
      url: `http://192.168.18.49:3000/api/v1/song/get-song-by-lyrics`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);

        const startPlayer = async () => {
          let isInit = await trackPlayerInit(response.data.data);
          setIsTrackPlayerInit(isInit);
        };
        startPlayer();

        setLyrics('');
        setSongDuration(response.data.duration + '');

        // alert('Post has been favorited');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });
  };
  return (
    <View style={styles.container}>
      {/* {error !== '' && (
        <ErrorModal
          errorVisible={true}
          error={error}
          handleErrorClose={handleErrorClose}
        />
      )} */}
      <StatusBar backgroundColor={Color.linearColor1} />

      <LinearGradient
        colors={[Color.linearColor1, Color.linearColor2]}
        style={styles.Linear}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Image
            style={styles.imgMrcoupon}
            resizeMode="contain"
            source={require('../../assets/images/logo2.png')}
          /> */}
          <Text style={styles.txtLogin}>Home</Text>
          <View style={styles.viewSearch}>
            <FontAwesome name="music" color="#bbb" size={20} />
            <TextInput
              placeholderTextColor="#bbb"
              placeholder="Please type your lyrics"
              multiline={true}
              style={styles.inputStyle}
              // numberOfLines={4}
              value={lyrics}
              onChangeText={(text) => setLyrics(text)}
            />
          </View>

          {/* {emailErr && <Text style={styles.errTxt}>Invalid email</Text>} */}

          {/* {passwordErr && <Text style={styles.errTxt}>Invalid Password</Text>} */}
          {/* {errors ? (
            <Text style={styles.errTxt}>Invalid email or password</Text>
          ) : null} */}

          {/* {loading ? (
            <ActivityIndicator
              size="large"
              color="#fff"
              // style={{marginVertical: loading ? 20 : 0}}
            />
          ) : ( */}
          <GlobalButton
            // onPress={loginHandler}
            navigationProps={lyricsHandler}
            top={25}
            btnWidth={'100%'}
            buttonText="Generate Music"
          />
          <View style={styles.audioContainer}>
            <FontAwesome
              onPress={onButtonPressed}
              style={styles.fontAudio}
              name={isPlaying ? 'pause' : 'play'}
              color="white"
              size={20}
            />
            <Slider
              style={{width: '100%', height: 40, color: 'red'}}
              minimumValue={0}
              maximumValue={1}
              value={sliderValue}
              minimumTrackTintColor="#A159E9"
              maximumTrackTintColor="gray"
              onSlidingStart={slidingStarted}
              onSlidingComplete={slidingCompleted}
              thumbTintColor="white"
            />
          </View>
          {/* )} */}

          <View style={styles.viewLine} />
          <Text style={styles.dontHave}>
            {' '}
            Song Duration is: {Math.round(songDuration)} seconds
          </Text>

          <Text style={styles.dontHave}>
            Thank you for using our AI Model for Music Generation
          </Text>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

// const mapStateToProps = (state) => ({
//   loading: state.authReducer.loading,
//   isAuthenticated: state.authReducer.isAuthenticated,
//   user: state.authReducer.user,
//   error: state.authReducer.error,
// });

// export default connect(mapStateToProps, {login, clearError})(LoginScreen);
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errTxt: {
    fontSize: 12,
    color: 'red',
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
  },
  btnSignup: {
    marginTop: 3,
    alignSelf: 'center',
  },
  txtSignup: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
  },
  dontHave: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 15,
    color: Color.fontBlack,
    height: 100,
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    // textAlign: 'fl e'
    justifyContent: 'flex-start',
  },
  viewLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 10,
    alignSelf: 'center',
  },
  viewSearch: {
    width: '100%',
    // height: 50,
    backgroundColor: Color.whiteColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  txtLogin: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 50,
  },
  imgMrcoupon: {
    height: 50,
    width: 240,
    alignSelf: 'center',
    marginTop: 80,
  },
  Linear: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  audioContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    // flex: 0.45,
    marginTop: 40,
    backgroundColor: '#d0d2d3',
    borderRadius: 50,
    color: 'black',
    width: '100%',
  },
  fontAudio: {
    display: 'flex',
    flexDirection: 'column',
    textAlignVertical: 'center',
    color: '#A159E9',
  },
});
