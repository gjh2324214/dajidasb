// AddCompetitionModal.js
import React, { useState } from 'react';
import { View, Text, TextInput,Button, TouchableOpacity, Modal, StyleSheet ,Platform,
                                                                             DateTimePickerModal,
                                                                             DateTimePicker} from 'react-native';


const AddCompetitionModal = ({ visible, onClose, onAdd }) => {
  const [name, setCompetitionName] = useState('');
  const [category, setCategory] = useState('');
  const [responsible, setOrganizer] = useState('');
  const [personalName, setAthleteName] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState('');
 const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text marginBottom='20' marginLeft='90'>add event</Text>
          <TextInput
            placeholder="event name"
            value={name}
            onChangeText={setCompetitionName}
            style={styles.input}
          />
          <TextInput
            placeholder="category"
            value={category}
            onChangeText={setCategory}
            style={styles.input}
          />
          <TextInput
            placeholder="responsible"
            value={responsible}
            onChangeText={setOrganizer}
            style={styles.input}
          />
          <TextInput
            placeholder="personal name"
            value={personalName}
            onChangeText={setAthleteName}
            style={styles.input}
          />
          <TextInput
            placeholder="time period"
            value={timePeriod}
            onChangeText={setTimePeriod}
            style={styles.input}
          />
          {Platform.OS === 'ios' ? (
                     <DateTimePicker
                       style={styles.input}
                       value={date}
                       mode="date"
                       onChange={handleDateChange}
                     />
                   ) : (
                     <Button
                       title="select date"
                       onPress={() => handleDateChange()}
                     />
                   )}
          <TextInput
            placeholder="status"
            value={status}
            onChangeText={setStatus}
            style={styles.input}
          />
          <View style={styles.infoContainer4}>
                    <TouchableOpacity style={styles.saveButton} title="ok" onPress={() => onAdd(name, category, responsible, personalName, timePeriod, date, status)} ><Text>ok</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.closeButton} title="close" onPress={onClose} ><Text>close</Text></TouchableOpacity>
              </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
 saveButton:{
    marginLeft: 10, // 设置按钮距离左边的距离为 10 个像素
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3578e5', // 按钮的背景颜色
  },
  infoContainer4: {
      flexDirection: 'row', // 让子组件水平排列
      alignItems: 'center', // 垂直居中对齐
      padding: 10, // 内边距
      marginTop:70
    },
  closeButton:{
      marginLeft: 60, // 设置按钮距离左边的距离为 10 个像素
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#cccccc', // 按钮的背景颜色
    },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    width: '80%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default AddCompetitionModal;