// screens/ScoreDetails.js
import React,{useState} from 'react';
import { View, Text, Image, StyleSheet ,TextInput,TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import api from "../api/api"

const ScoreDetails = ({ route,navigation }) => {
  const { item } = route.params;
  console.log(item)
  const id = item.id
  const level = useSelector((state) => state.user.level);
  if(level == 0) {
  const [score, setScore] = useState(item.score)
  const handleUpdate = () => {
                   api.post('/score/update', {id,score})
                                .then(async function(data){

                                      navigation.goBack()

                                })
                                .catch(error => {
                                  console.error(error);
                                });
              }
              const handleDelete = () => {
                  api.delete('/score/delete?id=' + item.id)
                        .then(async function(data){

                              navigation.goBack()

                        })
                        .catch(error => {
                          console.error(error);
                        });
              }
  return (
  <View style={styles.container}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventType}>category: {item.category}</Text>
        <Text style={styles.athleteName}>username: {item.username}</Text>
        <Text style={styles.phone}>phone: {item.phone}</Text>
        <Text style={styles.phone}>score：
        <TextInput style={styles.input2} value={score}
                                                                          onChangeText={setScore} />

        </Text>

        <View style={styles.infoContainer1}>
                          <TouchableOpacity style={styles.updateButton} title="update" onPress={handleUpdate} ><Text>update</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.logoutButton} title="delete" onPress={handleDelete} ><Text>delete</Text></TouchableOpacity>
                    </View>
      </View>
      );
  } else {
  return (
  <View style={styles.container}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventType}>category: {item.category}</Text>
        <Text style={styles.athleteName}>username: {item.username}</Text>
        <Text style={styles.phone}>phone: {item.phone}</Text>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.score}>score: {item.score}</Text>
      </View>
      );
  }



};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
        padding: 15,
        margin: 10,
        borderRadius: 8, // 圆角边框
        elevation: 2, // 阴影效果
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
  },
  infoContainer1: {
      flexDirection: 'row', // 让子组件水平排列
      alignItems: 'center', // 垂直居中对齐
      padding: 10, // 内边距
      marginTop:70
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
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
        marginTop:70,
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
  score: {
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
});

export default ScoreDetails;