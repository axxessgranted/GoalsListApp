import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ id, text, deleteItemHandler }) => {
  return (
    /* Extra View to support rounded corners for iOS */
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteItemHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
