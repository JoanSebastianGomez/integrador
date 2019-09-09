import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import Input from '../utils/forms/input'
class AuthForm extends Component {

  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
    form: {
      email: {

        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 6
        }


      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: 'password'
        }
      }
    }
  }
  changeFormType = () => {
    const type=this.state.type;
    this.setState({
      type: type==='Login'?'Register':'Login',
      action: type==='Login'?'Register':'Login',
      actionMode: type==='Login'?'I want to Login':'I want to register'


    })

  }


  submitUser = () => {


  }

  formHasErrors = () => {

    if (this.state.hasErrors == true) {
      return (
        <View style={styles.errorContainer} >
          <Text style={styles.errorLabel} >opps, Check your info</Text>
        </View>


      )
    }
  }

  confirmPassword = () => {
    if (this.state.type != 'Login') {
      return (<Input
        placeholder="confirm  your password"
        placeholderTextColor="black"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput("confirmPassword", value)}
        secureTextEntry
      />)

    }


  }

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;
    this.setState({
      form: formCopy
    })
  }

  render() {
    return (<View>

      <Input
        placeholder="Enter email"
        placeholderTextColor="black"
        type={this.state.form.email.type}
        value={this.state.form.email.value}
        autoCapitalize={"none"}
        keyboardType="email-address"
        onChangeText={value => this.updateInput("email", value)}
      />

      <Input
        placeholder="Enter your password"
        placeholderTextColor="black"
        type={this.state.form.password.type}
        value={this.state.form.password.value}
        onChangeText={value => this.updateInput("password", value)}
        secureTextEntry
      />

      {this.confirmPassword()}
      {this.formHasErrors()}
      <View style={{ marginTop: 20 }}>
        <Button
          style={styles.button}
          title={this.state.action}
          onPress={this.submitUser}
        />

      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          style={styles.button}
          title={this.state.actionMode}
          onPress={this.changeFormType}
        />

      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          style={styles.button}
          title="next window"
          onPress={()=>this.props.goNext()}
        />

      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({

  errorContainer: {
    backgroundColor: 'black',
    marginBottom: 10,
    marginTop: 30,
    padding: 10
  },
  errorLabel: {

    color: 'red',
    textAlignVertical: 'center',
    textAlign: 'center'
  },

  button: {

    marginBottom: 10,
    marginTop: 20
  }

})

export default AuthForm;

