import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";

export default function App() {
  const [goals, setGoals] = useState("");
  const [displayGoals, setDisplayGoals] = useState([]);
  const inputHandle = (enteredText) => {
    setGoals(enteredText);
  };

  const clickHandler = () => {
    setDisplayGoals([...displayGoals, goals]);
    setGoals("");
  };

  const handleDelete = (index) => {
    let goals = [...displayGoals];
    goals.splice(index, 1);
    setDisplayGoals(goals);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          value={goals}
          onChangeText={inputHandle}
        />
        <Button title="Add Goal" onPress={clickHandler} />
      </View>
      <View style={styles.goalConatiner}>
        <Text style={styles.goalText}>List of Goals!!!</Text>
        <FlatList
          data={displayGoals}
          renderItem={(itemObject) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 10,
                  backgroundColor: "red",
                  borderRadius: 5,
                }}
              >
                <Pressable onPress={() => handleDelete(itemObject.index)} style={({pressed}) => pressed && styles.pressedItem} >
                  <Text style={{ color: "white", padding:10 }}>{itemObject.item}</Text>
                </Pressable>
                {/* <Button
                  title="Delete"
                  color="red"
                  onPress={() => handleDelete(itemObject.index)}
                /> */}
              </View>
            );
          }}
          // keyExtractor={(item,index) => {
          //   return item.id
          // }}
          style={{ flex: 2 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    width: "80%",
  },
  goalConatiner: {
    flex: 5,
    overflow: "scroll",
    // flexDirection: "column",
  },
  goalText: {
    fontSize: 24,
    marginVertical: 20,
    alignSelf: "center",
  },
  pressedItem:{
    opacity: 0.5,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: "100%"
  }
});
