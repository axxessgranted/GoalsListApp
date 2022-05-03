import { useState } from 'react';
import {
  Button,
  Modal,
  TextInput,
  StyleSheet,
  View,
  Image,
} from 'react-native';

const GoalInput = ({ addGoalHandler, onCancel, showModal }) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const onAddGoal = () => {
    addGoalHandler(goalText);
    setGoalText('');
  };

  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonGroupContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoal} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonGroupContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
