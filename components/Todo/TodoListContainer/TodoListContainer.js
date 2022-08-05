
import { Text, View, StyleSheet } from "react-native";
import TodoCard from "./TodoCard";


const TodoListContainer = ({todos}) => {
return (
    <View style = {styles.todolist__container}>
       {todos.map((todo) => {
        return (
            <TodoCard todo = {todo}/>
        )
       })}
    </View>
    )
}

const styles = StyleSheet.create({
    todolist__container:{
        height:30,
        height:'100%',
        marginTop:30
    }
})

export default TodoListContainer;