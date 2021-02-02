import React, {useState, useRef} from 'react';
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

import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import {CheckBox} from 'react-native-elements';
import {connect} from 'react-redux';
// import {register, clearError} from '../../redux/actions/AuthActions';

import Color from '../../constants/Color';
import LinearGradient from 'react-native-linear-gradient';
import GlobalButton from '../../components/GlobalButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import ErrorModal from '../../components/ErrorModal';

const Signup = ({
  // register,
  // error,
  // isAuthenticated,
  // token,
  navigation,
  // loading,
  // clearError,
}) => {
  const [checkedEmail, setcheckedEmail] = useState('');
  const [checkedTerms, setcheckedTerms] = useState('');

  const [visible, setvisible] = useState(false);
  const [phone, setphone] = useState('');
  const [cca2, setcca2] = useState('AE');
  const [countryCode, setcountryCode] = useState('353');

  const [nameErr, setnameErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [phoneNumberErr, setphoneNumberErr] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  // counrt picker work
  const onPressFlag = () => {
    // setFormData({
    //   ...formData,
    //   phoneNumber: '',
    // });
    setvisible(true);
  };
  const phoneref = useRef();

  const handleSelectCountry = (country) => {
    // console.log(country);
    // console.log(phoneref.current.getISOCode('af'));
    // console.log(phoneref.current.selectCountry('af'));
    // phoneref.current.selectCountry(country.cca2.toLowerCase());
    setcca2(country.cca2);
    setcountryCode(country.callingCode[0]);
    if (countryCode !== country.callingCode[0]) {
      setFormData({
        ...formData,
        phoneNumber: '',
      });
    }
  };

  const CountryPickerref = useRef();

  // const handleErrorClose = () => {
  //   clearError();
  // };

  const {name, email, phoneNumber, password} = formData;

  const handleOnTextChange = (name, value) => {
    // console.log(value);
    setFormData({...formData, [name]: value});
  };

  // console.log(phoneNumber, 'phoneeeeeee');
  const signupHandler = async (e) => {
    // if (
    //   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
    //   email === '' ||
    //   email === ' '
    // ) {
    //   setemailErr(true);
    // } else {
    //   setemailErr(false);
    // }
    // if (name === '' || name === ' ') {
    //   setnameErr(true);
    // } else {
    //   setnameErr(false);
    // }
    // if (phoneNumber === '' || phoneNumber === ' ' || phoneNumber.length <= 1) {
    //   setphoneNumberErr(true);
    // } else {
    //   setphoneNumberErr(false);
    // }
    // if (password === '' || password === ' ') {
    //   setpasswordErr(true);
    // } else {
    //   setpasswordErr(false);
    // }
    // if (
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
    //   email !== '' &&
    //   email !== ' ' &&
    //   phoneNumber !== '' &&
    //   phoneNumber !== ' ' &&
    //   password !== '' &&
    //   password !== ' ' &&
    //   name !== ' ' &&
    //   name !== '' &&
    //   phoneNumber.length > 1
    // ) {
    //   register(
    //     name,
    //     email.trim().toLowerCase(),
    //     phoneNumber,
    //     password,
    //     navigation,
    //   );
    // }
    // }
    // navigation.navigate('Subsription') ;
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
          <Text style={styles.txtLogin}>SIGNUP</Text>
          <View style={styles.viewSearch}>
            <AntDesign name="user" color="#bbb" size={20} />
            <TextInput
              placeholderTextColor="#bbb"
              placeholder="Full Name"
              value={name}
              onChangeText={(text) => handleOnTextChange('name', text)}
              onChange={() => {
                if (name === '' || name === ' ') {
                  setnameErr(true);
                } else {
                  setnameErr(false);
                }
              }}
              onBlur={() => {
                if (name === '' || name === ' ') {
                  setnameErr(true);
                } else {
                  setnameErr(false);
                }
              }}
              style={styles.inputStyle}
            />
          </View>
          {/* {nameErr && <Text style={styles.errTxt}>Full Name is required</Text>} */}

          <View style={styles.viewSearch}>
            <FontAwesome name="at" color="#bbb" size={20} />
            <TextInput
              placeholderTextColor="#bbb"
              placeholder="Email Address"
              value={email}
              onChangeText={(text) => handleOnTextChange('email', text)}
              onChange={() => {
                if (
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    email,
                  ) ||
                  email === '' ||
                  email === ' '
                ) {
                  setemailErr(true);
                } else {
                  setemailErr(false);
                }
              }}
              onBlur={() => {
                if (
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    email,
                  ) ||
                  email === '' ||
                  email === ' '
                ) {
                  setemailErr(true);
                } else {
                  setemailErr(false);
                }
              }}
              style={styles.inputStyle}
            />
          </View>
          {emailErr && (
            <Text style={styles.errTxt}>Email Format is invalid</Text>
          )}

          <View style={styles.viewPhoneInput}>
            <Entypo
              name="phone"
              size={17}
              color="#BCBCBC"
              style={{marginHorizontal: 12}}
            />
            <PhoneInput
              ref={phoneref}
              onPressFlag={onPressFlag}
              value={`+${countryCode}`}
              textProps={{
                placeholder: 'Phone number',
                placeholderTextColor: '#BCBCBC',
              }}
              onChangePhoneNumber={(value) => {
                handleOnTextChange('phoneNumber', value);
                if (
                  phoneNumber === '' ||
                  phoneNumber === ' ' ||
                  phoneNumber.length <= 1
                ) {
                  setphoneNumberErr(true);
                } else {
                  setphoneNumberErr(false);
                }
              }}
              initialCountry="ae"
            />
            <CountryPicker
              ref={CountryPickerref}
              onSelect={(value) => handleSelectCountry(value)}
              translation="eng"
              cca2={cca2}
              withCallingCode={true}
              withCloseButton={true}
              visible={visible}
              modalProps={visible}
              onClose={() => setvisible(false)}
              onOpen={() => setvisible(false)}
              {...{
                withFilter: true,
                withFlag: true,
                withCurrencyButton: true,
                withCallingCodeButton: true,
                withCountryNameButton: true,
                withAlphaFilter: true,
                withCallingCode: true,
                allowZeroAfterCountryCode: false,
              }}>
              <View />
            </CountryPicker>
          </View>
          {phoneNumberErr && (
            <Text style={styles.errTxt}>Phone number is required</Text>
          )}

          <View style={styles.viewSearch}>
            <AntDesign name="lock" color="#bbb" size={20} />
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#bbb"
              placeholder="Password"
              value={password}
              onChangeText={(text) => handleOnTextChange('password', text)}
              onChange={() => {
                if (password === '' || password === ' ') {
                  setpasswordErr(true);
                } else {
                  setpasswordErr(false);
                }
              }}
              onBlur={() => {
                if (password === '' || password === ' ') {
                  setpasswordErr(true);
                } else {
                  setpasswordErr(false);
                }
              }}
              style={styles.inputStyle}
            />
          </View>
          {passwordErr && (
            <Text style={styles.errTxt}>Password is required</Text>
          )}
          {/* <View style={styles.viewCheckbox}>
            <CheckBox
              containerStyle={{
                padding: 0,
                marginLeft: 0,
                marginRight: 0,
              }}
              size={22} 
              checked={checkedEmail}
              onPress={() => setcheckedEmail(!checkedEmail)}
              // title={sub.name}
            />
            <Text style={{color: '#fff', marginHorizontal: 5}}>
              Get premium discounts on your email
            </Text>
          </View> */}
          <View style={styles.viewCheckbox}>
            <CheckBox
              containerStyle={{
                padding: 0,
                marginLeft: 0,
                marginRight: 0,
              }}
              size={22}
              checked={checkedTerms}
              onPress={() => setcheckedTerms(!checkedTerms)}
              // title={sub.name}
            />
            <TouchableOpacity>
              <Text style={{color: '#fff', marginHorizontal: 5}}>
                I have read and agree with terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
          {/* {loading ? (
            <ActivityIndicator
              size="large"
              color="#fff"
              style={{marginTop: loading ? 15 : 0}}
            />
          ) : ( */}
          <GlobalButton
            navigationProps={signupHandler}
            // onPress={onSubmit}
            top={15}
            btnWidth={'100%'}
            buttonText="SIGNUP"
          />
          {/* )} */}

          <Text style={styles.dontHave}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.btnSignup}>
            <Text style={styles.txtSignup}>LOGIN</Text>
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
//   error: state.authReducer.error,
//   isAuthenticated: state.authReducer.isAuthenticated,
//   loading: state.authReducer.loading,
//   token: state.authReducer.token,
// });

// export default connect(mapStateToProps, {register, clearError})(Signup);
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCheckbox: {
    flexDirection: 'row',
    // backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
    width: '100%',
    // marginBottom: 0,
  },
  viewPhoneInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 50,
    alignSelf: 'center',
    borderBottomColor: 'rgba(34, 34, 34, 0.3)',
    borderBottomWidth: 1,
    marginTop: 20,
    borderRadius: 7,
  },
  // viewCountryCodePhonenumber: {
  //   width: '100%',
  //   height: 50,
  //   backgroundColor: '#fff',
  //   marginRight: '3%',
  //   justifyContent: 'center',
  //   paddingHorizontal: 5,
  //   borderRadius: 7,
  //   marginTop: 20,
  // },
  errTxt: {
    fontSize: 12,
    color: 'red',
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  btnSignup: {
    marginTop: 3,
    alignSelf: 'center',
    marginBottom: 20,
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
    marginTop: 20,
  },
  Linear: {
    flex: 1,
    paddingHorizontal: '5%',
  },
});
