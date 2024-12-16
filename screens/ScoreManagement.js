import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import api from "../api/api";
import { useFocusEffect } from '@react-navigation/native';
import AddScoreModal from './AddScoreModal';
import { useSelector } from 'react-redux';

const ScoreManagement = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const level = useSelector((state) => state.user.level);

  const fetchData = async () => {
    try {
      const response = await api.get('/score/get');
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch data");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const handleAddCompetition = async (name, personalName, score) => {
    try {
      const response = await api.post('/score/add', { name, personalName, score });
      if (response.code === '1000') {
        Alert.alert(response.msg);
      } else if (response.code === '0') {
        setModalVisible(false);
        fetchData(); // Refresh data after adding a score
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to add score");
    }
  };

  return (
    <View style={styles.container3}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ScoreDetails', { item })}
          >
            <View style={styles.leftContainer}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text style={styles.eventType}>category: {item.category}</Text>
              <Text style={styles.athleteName}>username: {item.username}</Text>
              <Text style={styles.phone}>phone: {item.phone}</Text>
              <Text style={styles.score}>score: {item.score}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            </View>
          </TouchableOpacity>
        )}
      />
      {level === 0 && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      )}
      <AddScoreModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddCompetition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flex: 1,
  },
  add:{
      fontSize: 16
    },
    container3: {
        flex: 1,
      },
  floatingButton: {
        position: 'absolute',
        bottom: 60,
        right: 40,
        padding: 20,
        backgroundColor: '#3578e5',
        borderRadius: 40,
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
  score: {
    fontSize: 14,
    color: '#555',
  },
});

export default ScoreManagement;