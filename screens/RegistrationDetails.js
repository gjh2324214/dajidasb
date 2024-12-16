// screens/RegistrationDetails.js
import React from 'react';
import { View, Text,Button, Image, StyleSheet,Alert } from 'react-native';
import api from "../api/api"

const RegistrationDetails = ({ route,navigation }) => {
  const {item} = route.params;
  const handleRegis = () => {
      api.post('/registration/registration',{'id': item.id,'eventId':item.eventId, 'userId': item.userId})
          .then(function(data){
           if(data){
              Alert.alert('success');
              navigation.goBack();
             }
          })
          .catch(error => {
            console.error(error);
          });
    };

    const handleApprove = () => {
          api.post('/registration/approve',{'id': item.id,'eventId':item.eventId, 'userId': item.userId})
              .then(function(data){
               if(data){
                  Alert.alert('success');
                  navigation.goBack();
                 }
              })
              .catch(error => {
                console.error(error);
              });
        };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventType}>category: {item.category}</Text>
      <Text style={styles.athleteName}>username: {item.username}</Text>
      <Text style={styles.phone}>phone: {item.phone}</Text>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.statusText}>Status: {item.status}</Text>
      <Text style={styles.resultText}>Result: {item.result}</Text>
      <View style={styles.buttonContainer}>
                  <Button paddingRight='10' title="registration" onPress={handleRegis} />
                </View>
       <View style={styles.buttonContainer}>
                         <Button paddingRight='10' title="approve" onPress={handleApprove} />
                       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height:'90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  eventType: {
    fontSize: 16,
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  athleteName: {
    fontSize: 18,
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  phone: {
    fontSize: 16,
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  statusText: {
    fontSize: 16,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
  resultText: {
    fontSize: 16,
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
            padding: 15,
            margin: 10,
            borderRadius: 8, // 圆角边框
            elevation: 2, // 阴影效果
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 2, height: 2 },
  },
    buttonContainer:{
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度

              margin: 10,
              borderRadius: 8, // 圆角边框
              elevation: 2, // 阴影效果
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 2, height: 2 },
    }
});

export default RegistrationDetails;