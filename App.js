import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (goalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalText, id: `${goalText}-${Math.random().toString()}` },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHanlder = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        onCancel={endAddGoalHandler}
        showModal={modalVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(goalData) => {
            return (
              <GoalItem
                id={goalData.item.id}
                text={goalData.item.text}
                deleteItemHandler={deleteGoalHanlder}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
