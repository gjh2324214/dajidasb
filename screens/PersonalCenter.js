// screens/PersonalCenter.js
import React, { useState, useEffect }  from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import api from "../api/api"


const PersonalCenter = ({ navigation }) => {
const id = useSelector((state) => state.user.id);
    const level = useSelector((state) => state.user.level);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  // 假设你有一个状态来存储头像的URI，这里我们使用一个占位符图片
  const [avatarUri, setAvatarUri] = useState('https://via.placeholder.com/150');

      useEffect(() => {
        const fetchData = async () => {
          try {
            // 如果数据存在，则更新状态1
            if (id !== null) {
              api.get('/user/getUserInfo?id='+id)
                      .then(async function(data){
                        if(data.id != 0) {
                            setName(data.userName)
                            setPhone(data.phone)
                            setEmail(data.email)
                            setGender(data.sex)
                            setAvatarUri(data.avatar)
                        } else {
                            alert('资料有误，请重新登录再查看！');
                        }
                      })
                      .catch(error => {
                        console.error(error);
                      });
            }
          } catch (error) {
            // 处理错误
            console.error('Error fetching data from AsyncStorage:', error);
          }
        };

        fetchData();
      }, []); // 空依赖数组确保这个 effect 只在组件挂载时运行一次


  const handleUpdate = async () => {
    // 在这里添加更新个人资料的逻辑
    api.post('/user/updateUserInfo', {'id': id,'userName':name,'email': email,'phone':phone,'sex':gender,'avatar':avatarUri})
                          .then(async function(data){

                           if(data){
                            Alert.alert('更新成功', '你的个人资料已更新。');
                           }
                          })
                          .catch(error => {
                            console.error(error);
                          });


  };
const handleLogout = ()=>{
    navigation.popToTop();
};
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>name:</Text>
          <TextInput
                  style={styles.input}
                  placeholder="name"
                  value={name}
                  onChangeText={setName}
                />
    </View>

<View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>phone:</Text>
          <TextInput
                  style={styles.input}
                  placeholder="phone"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
    </View>
<View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>email:</Text>
          <TextInput
                  style={styles.input}
                  placeholder="email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
    </View>

<View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>gender:</Text>
          <TextInput
                  style={styles.input}
                  placeholder="gender"
                  value={gender}
                  onChangeText={setGender}
                />
    </View>
<View style={styles.infoContainer1}>
          <TouchableOpacity style={styles.updateButton} title="update" onPress={handleUpdate} ><Text>update</Text></TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} title="close" onPress={handleLogout} ><Text>close</Text></TouchableOpacity>
    </View>

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
 infoContainer: {
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
  infoLabel: {
    fontSize: 20,
    marginRight: 10, // 用户名和输入框之间的间距
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
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
  }
});

export default PersonalCenter;