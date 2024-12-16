// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text ,TouchableOpacity} from 'react-native';
import api from "../api/api";
import { useSelector, useDispatch } from 'react-redux';
import { updateRole, updateUsername, updatePassword,updateUserId ,updateUserLevel,getRole} from '../store/userSlice';

const LoginScreen = ({ navigation }) => {

 const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username);
    const password = useSelector((state) => state.user.password);
  const handleLogin = () => {

    api.post('/user/login', {'userName': username, 'password': password})
      .then(async function(data){
        if(data.id != 0) {
            if(role !== data.level) {
                alert('current user is' + (data.level === 1 ? 'other': "admin") + ',please retry select');
            } else {
            dispatch(updateUserId(data.id))
            dispatch(updateUserLevel(data.level))
                navigation.navigate('Home');
            }

        } else {
            alert('username or password error');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event System</Text>
      <TextInput
        style={styles.input}
        placeholder="please input username"
        value={username}
        onChangeText={(text) => dispatch(updateUsername(text))}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="please input password"
        value={password}
        onChangeText={(text) => dispatch(updatePassword(text))}
        secureTextEntry
      />

       <View style={styles.radioContainer}>
               <TouchableOpacity
                 style={[styles.radioButton, role === 1 ? styles.selected : null]}
                 onPress={() => dispatch(updateRole(1))}
               >

               </TouchableOpacity>
               <Text style={styles.radioText}>普通用户</Text>
               <TouchableOpacity
                 style={[styles.radioButton, role === 0 ? styles.selected : null]}
                 onPress={() => dispatch(updateRole(0))}
               >

               </TouchableOpacity>
               <Text style={styles.radioText}>管理员</Text>
             </View>
    <Button title="login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   radioText: {
      fontSize: 16,
      marginLeft: 10,
    },
  title: {
    fontSize: 24,
    marginBottom: 200,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
    radioContainer: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom:20
    },
    radioButton: {
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
      borderRadius: 10,
    },
    selected: {
      borderWidth: 2,
      borderColor: 'blue',
    },
    radioText: {
      fontSize: 16,
      marginRight: 20
    },

});

export default LoginScreen;