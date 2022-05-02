import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalText, id: `${goalText}-${Math.random().toString()}` },
    ]);
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
      <GoalInput addGoalHandler={addGoalHandler} />
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
