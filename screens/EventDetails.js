// screens/EventDetails.js
import React, { useState, useEffect }  from 'react';
import { View, Text, Image, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import api from "../api/api";
import { useSelector, useDispatch } from 'react-redux';

const EventDetails = ({ route, navigation }) => {
  const { event } = route.params;
  const dispatch = useDispatch();
    const id = useSelector((state) => state.user.id);
    const level = useSelector((state) => state.user.level);

    if(level == 1) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.eventName}>{event.name}</Text>
            <Text style={styles.eventCategory}>category：{event.category}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>responsible:</Text>
            <Text style={styles.infoValue}>{event.responsible}</Text>
          </View>
          <View style={styles.infoContainer}>
             <Text style={styles.infoLabel}>personalName:</Text>
             <Text style={styles.infoValue}>{event.personalName}</Text>
           </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>timePeriod:</Text>
            <Text style={styles.infoValue}>{event.timePeriod}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>date:</Text>
            <Text style={styles.infoValue}>{event.date}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>status:</Text>
            <Text style={styles.infoValue}>{event.status}</Text>
          </View>
        </View>
      );
    }

    if(level == 0) {
        const [name, setName] = useState(event.name)
        const [category, setCategory] = useState(event.category)
        const [responsible, setResponsible] = useState(event.responsible)
        const [personalName, setPersonalName] = useState(event.personalName)
        const [timePeriod, setTimePeriod] = useState(event.timePeriod)
        const [date, setDate] = useState(event.date)
        const [status, setStatus] = useState(event.status)
        const id = event.id
        const handleUpdate = () => {
                 api.post('/info/update', {id,name,category,responsible,personalName,timePeriod,date,status})
                              .then(async function(data){

                                    navigation.goBack()

                              })
                              .catch(error => {
                                console.error(error);
                              });
            }
            const handleDelete = () => {
                api.delete('/info/delete?id=' + event.id)
                      .then(async function(data){

                            navigation.goBack()

                      })
                      .catch(error => {
                        console.error(error);
                      });
            }
        return (
            <View style={styles.container2}>
              <View style={styles.infoContainer2}>
                  <Text style={styles.infoLabel2}>赛 事 名 称:</Text>
                  <TextInput
                          style={styles.input2}
                          placeholder="event name"
                          value={name}
                          onChangeText={setName}
                        />
            </View>

        <View style={styles.infoContainer2}>
                  <Text style={styles.infoLabel2}>类           别:</Text>
                  <TextInput
                          style={styles.input2}
                          placeholder="category"
                          value={category}
                          onChangeText={setCategory}
                        />
            </View>
        <View style={styles.infoContainer2}>
                  <Text style={styles.infoLabel2}>responsible:</Text>
                  <TextInput
                          style={styles.input2}
                          placeholder="responsible"
                          value={responsible}
                          onChangeText={setResponsible}
                        />
            </View>

        <View style={styles.infoContainer2}>
                  <Text style={styles.infoLabel2}>personalName:</Text>
                  <TextInput
                          style={styles.input2}
                          placeholder="personalName"
                          value={personalName}
                          onChangeText={setPersonalName}
                        />
            </View>
            <View style={styles.infoContainer2}>
                              <Text style={styles.infoLabel2}>timePeriod:</Text>
                              <TextInput
                                      style={styles.input2}
                                      placeholder="timePeriod"
                                      value={timePeriod}
                                      onChangeText={setTimePeriod}
                                    />
                        </View>
            <View style={styles.infoContainer2}>
                                          <Text style={styles.infoLabel2}>date:</Text>
                                          <TextInput
                                                  style={styles.input2}
                                                  placeholder="date"
                                                  value={date}
                                                  onChangeText={setDate}
                                                />
                                    </View>
            <View style={styles.infoContainer2}>
                                                      <Text style={styles.infoLabel2}>status:</Text>
                                                      <TextInput
                                                              style={styles.input2}
                                                              placeholder="status"
                                                              value={status}
                                                              onChangeText={setStatus}
                                                            />
                                                </View>
        <View style={styles.infoContainer1}>
                  <TouchableOpacity style={styles.updateButton} title="update" onPress={handleUpdate} ><Text>update</Text></TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} title="delete" onPress={handleDelete} ><Text>delete</Text></TouchableOpacity>
            </View>

            </View>
          );
    }

};

const styles = StyleSheet.create({
container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  updateButton:{
    marginLeft: 10, // 设置按钮距离左边的距离为 10 个像素
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3578e5', // 按钮的背景颜色
  },
  logoutButton:{
      marginLeft: 60, // 设置按钮距离左边的距离为 10 个像素
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#cccccc', // 按钮的背景颜色
    },
 infoContainer2: {
    flexDirection: 'row', // 让子组件水平排列
    alignItems: 'center', // 垂直居中对齐
    padding: 10, // 内边距
  },
 infoContainer1: {
    flexDirection: 'row', // 让子组件水平排列
    alignItems: 'center', // 垂直居中对齐
    padding: 10, // 内边距
    marginTop:70
  },
  infoLabel2: {
    fontSize: 20,
    marginRight: 10, // 用户名和输入框之间的间距
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input2: {
    padding: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1, // 输入框占据剩余空间
    borderWidth: 1, // 边框宽度
    padding: 10, // 输入框内边距
    borderRadius: 5, // 边框圆角
  },
  logout:{
    color: '#4CAF50',
    marginLeft: 10
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventCategory: {
    fontSize: 16,
    color: '#666',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height:'10%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
    padding: 15,
    margin: 10,
    borderRadius: 8, // 圆角边框
    elevation: 2, // 阴影效果
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
  },
  infoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 20,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
});

export default EventDetails;