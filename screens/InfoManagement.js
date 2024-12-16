// screens/InfoManagement.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import api from "../api/api"
import AddCompetitionModal from './AddCompetitionModal';
import { useSelector, useDispatch } from 'react-redux';
const Stack = createStackNavigator();

// 赛事数据示例
let events = [

];

const InfoManagement = ({ navigation }) => {
    const [data, setData] = useState([]);
    useFocusEffect(
      React.useCallback(() => {
        // 执行你需要的操作，比如重新获取数据
        api.get('/info/get')
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
              api.get('/info/get')
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

        const [modalVisible, setModalVisible] = useState(false);
        const handleAddCompetition = (name, category, responsible, personalName, timePeriod, date, status) => {
            // 这里添加实际添加比赛的逻辑
            api.post('/info/add', {name, category, responsible, personalName, timePeriod, date, status})
                            .then(async function(data){
                                setModalVisible(false);
                                api.get('/info/get')
                                        .then(async function(data){

                                         if(data){
                                          setData(data);
                                         }
                                        })
                                        .catch(error => {
                                          console.error(error);
                                        });
                            })
                            .catch(error => {
                              console.error(error);
                            });

          };
  const level = useSelector((state) => state.user.level);
    if(level===0) {
        return (
            <View style={styles.container3}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate('EventDetails', { event: item })}
                >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.detail}>responsible: {item.responsible}</Text>
                  <Text style={styles.detail}>timePeriod: {item.timePeriod}</Text>
                  <Text style={styles.detail}>date: {item.date}</Text>
                  <Text style={styles.detail}>status: {item.status}</Text>
                </TouchableOpacity>
              )}
            />

            {/* 悬浮添加按钮 */}
                  <TouchableOpacity
                          style={styles.floatingButton}
                          onPress={() => setModalVisible(true)}
                        >
                          <Text style={styles.add}>+</Text>
                        </TouchableOpacity>

                  {/* 模态框 */}
                  <AddCompetitionModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onAdd={handleAddCompetition}
                  />
            </View>
          );
    } else{
        return (
            <View style={styles.container3}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate('EventDetails', { event: item })}
                >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.detail}>responsible: {item.responsible}</Text>
                  <Text style={styles.detail}>timePeriod: {item.timePeriod}</Text>
                  <Text style={styles.detail}>date: {item.date}</Text>
                  <Text style={styles.detail}>status: {item.status}</Text>
                </TouchableOpacity>
              )}
            />


            </View>
          );
    }

};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // 白色背景，80%透明度
    padding: 15,
    margin: 10,
    borderRadius: 8, // 圆角边框
    elevation: 2, // 阴影效果
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    color: '#777',
  },
});

export default InfoManagement;