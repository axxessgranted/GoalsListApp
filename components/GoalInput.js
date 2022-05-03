import { useState } from 'react';
import { Button, Modal, TextInput, StyleSheet, View } from 'react-native';

const GoalInput = ({ addGoalHandler, showModal }) => {
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
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonGroupContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonGroupContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
