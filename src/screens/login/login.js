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
} from 'react-native';
import {connect} from 'react-redux';
import Color from '../../constants/Color';
import LinearGradient from 'react-native-linear-gradient';
import GlobalButton from '../../components/GlobalButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import ErrorModal from '../../components/ErrorModal';

const Login = ({
  // user,
  // loading,
  // isAuthenticated,
  // error,
  // login,
  navigation,
  // clearError,
}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const loginHandler = () => {
    // alert('dssda');
    // if (email == '' || email == ' ') {
    //   setemailErr(true);
    // } else {
    //   setemailErr(false);
    // }
    // if (password == '' || password == ' ') {
    //   setpasswordErr(true);
    // } else {
    //   setpasswordErr(false);
    // }
    // if (emailErr == false && passwordErr == false) {
    // login(email, password);
    // login(email.trim().toLowerCase(), password, navigation);
    // }
    // navigation.navigate('RestaurantDetail');
    // alert('dasddsaasddasasddsa');
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
          <Image
            style={styles.imgMrcoupon}
            resizeMode="contain"
            source={require('../../assets/images/logo2.png')}
          />
          <Text style={styles.txtLogin}>LOGIN</Text>
          <View style={styles.viewSearch}>
            <FontAwesome name="at" color="#bbb" size={20} />
            <TextInput
              placeholderTextColor="#bbb"
              placeholder="Email Address"
              style={styles.inputStyle}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* {emailErr && <Text style={styles.errTxt}>Invalid email</Text>} */}

          <View style={styles.viewSearch}>
            <AntDesign name="lock" color="#bbb" size={20} />
            <TextInput
              placeholderTextColor="#bbb"
              placeholder="Password"
              secureTextEntry={true}
              style={styles.inputStyle}
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
          </View>
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
            navigationProps={loginHandler}
            top={25}
            btnWidth={'100%'}
            buttonText="LOGIN"
          />
          {/* )} */}
          <Text style={styles.dontHave}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.btnSignup}>
            <Text style={styles.txtSignup}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PhoneResetPassword')}
            style={styles.btnSignup}>
            <Text style={styles.txtSignup}>Forget Password</Text>
          </TouchableOpacity>
          {/* <View style={styles.viewLine} />
          <Text style={styles.dontHave}>
            By creating an account, you agree to our
          </Text>
          <TouchableOpacity style={[styles.btnSignup, {marginBottom: 30}]}>
            <Text style={styles.txtSignup}>Terms and conditions</Text>
          </TouchableOpacity> */}
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
export default Login;
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
    color: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 15,
    color: Color.fontBlack,
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
    height: 50,
    backgroundColor: Color.whiteColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 20,
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
});
