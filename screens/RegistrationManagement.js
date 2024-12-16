// screens/RegistrationManagement.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,Button, Image, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from "../api/api"


const RegistrationManagement = ({ navigation }) => {

const [data, setData] = useState([]);
useFocusEffect(
  React.useCallback(() => {
    // 执行你需要的操作，比如重新获取数据
    api.get('/registration/get')
        .then(async function(data){

         if(data){
          setData(data);
         }
        })
        .catch(error => {
          console.error(error);
        });
    return () => {
      // 清理操作
    };
  }, [])
);
  useEffect(() => {
          const fetchData = async () => {
            try {
              api.get('/registration/get')
                                        .then(async function(data){

                                         if(data){
                                          setData(data);
                                         }
                                        })
                                        .catch(error => {
                                          console.error(error);
                                        });
            } catch (error) {
              // 处理错误

              console.error('Error fetching data from AsyncStorage:', error);
            }
          };

          fetchData();
        }, []); // 空依赖数组确保这个 effect 只在组件挂载时运行一次
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('RegistrationDetails', { item })}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventType}>category: {item.category}</Text>
            <Text style={styles.athleteName}>username: {item.username}</Text>
            <Text style={styles.phone}>phone: {item.phone}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventType: {
    fontSize: 14,
    color: '#555',
  },
  athleteName: {
    fontSize: 16,
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 14,
    color: '#555',
  },
  resultText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 50
  },

});

export default RegistrationManagement;