import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

class AuthLoading extends React.Component {

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap = () => {
    if (!this.props.isRegistered) {
      this.props.navigation.navigate('Register');
    } else if (!this.props.isLoggedIn) {
      this.props.navigation.navigate('Login');
    } else {
      this.props.navigation.navigate('App')
    }
  };

  render() { 
    return (
      <View style={{height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
        <ActivityIndicator size={75} />
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isRegistered: state.auth.isRegistered,
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, null)(AuthLoading);
