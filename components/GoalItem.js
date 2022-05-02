import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ id, text, deleteItemHandler }) => {
  return (
    <Pressable onPress={deleteItemHandler.bind(this, id)}>
      {/* Extra View to support rounded corners for iOS */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
