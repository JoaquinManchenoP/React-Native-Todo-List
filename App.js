import { StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity } from 'react-native';
import { useState } from "react";
import TodoListContainer from './components/Todo/TodoListContainer/TodoListContainer';

export default function App() {
  const [ todos, setTodos ] = useState([]);
  const [ inputPlaceholder, setInputPlaceholder ] = useState('Whats next to do ?');
  const [ inputValue, setInputValue ] = useState('');

  const handleTextChange = (e) => {
    setInputValue(e);
  }

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    console.log(todos);
    setInputValue('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.input__area}>
        <TextInput value = {inputValue} placeholder={inputPlaceholder} onFocus={(e) => e.target.placeholder = ''} 
          placeholderTextColor={'#63666A'}
          onChangeText={handleTextChange} 
          style={[styles.user__input, {
            marginRight:8
        }]}></TextInput>
       <TouchableOpacity style = {styles.button} onPress = {handleAddTodo}>
          <Text>Add Todo</Text>
       </TouchableOpacity>
      </View>
      <View style = {styles.todo__container}>
        <TodoListContainer todos = {todos}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 120,
    marginRight:10,
    marginLeft:10,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  user__input: {
    height: 40,
    width: '75%',
    backgroundColor:'#DCDCDC',
    opacity: 0.6,
    borderRadius:8,
    textAlign:'center'
  },
  input__area: {
    flexDirection: 'row',

  },
  button: {
    height:40,
    width:'25%',
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    borderRadius:10
  },
  todo__container: {
    flex:1,
  }
});
