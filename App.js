import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TextInput,
    SafeAreaView,
    Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const AddTodoScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header Container */}
                <View style={styles.headerContainer}>
                    {/* Back to Home Button */}
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#007bff" />
                        <Text style={styles.backButtonText}>Home</Text>
                    </TouchableOpacity>
                </View>

                {/* Main Title */}
                <Text style={styles.mainTitle}>Add New Todo</Text>

                {/* Separator Line */}
                <View style={styles.separator} />

                {/* Smaller Title */}
                <Text style={styles.screenTitle}>Add New Todo</Text>

                {/* Title Input Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="My new todo title"
                    />
                </View>

                {/* Description Input Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.multilineInput]}
                        placeholder="This is the description of my new todo. It support multiple line input"
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="close-circle-outline" size={24} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                        onPress={() => { }}
                    >
                        <Ionicons name="checkmark-circle-outline" size={24} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const HomeScreen = ({ navigation }) => {
    const todos = ['Buy milk', 'Buy bread', 'Buy eggs'];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Home Title */}
                <Text style={styles.homeTitle}>Home</Text>

                {/* Title */}
                <Text style={styles.title}>My Todo List</Text>

                {/* Separation Line */}
                <View style={styles.separator} />

                {/* Todo List */}
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.todoItemContainer}>
                            <Text style={styles.todoItem}>{item}</Text>
                        </View>
                    )}
                />

                {/* Customized Add New Todo Button */}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddTodo')}
                >
                    <Ionicons name="add-circle-outline" size={24} color="white" style={styles.buttonIcon} />
                    <Text style={styles.addButtonText}>Add New Todo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        justifyContent: 'flex-start',
    },
    homeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#000000',
        marginBottom: 20,
    },
    todoList: {
        marginTop: 20,
    },
    todoItemContainer: {
        backgroundColor: '#d0e8f2',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    todoItem: {
        fontSize: 18,
        color: '#000000',
    },
    addButton: {
        backgroundColor: '#64dd17', // Green
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40, // Keep the add new todo above the button
    },
    addButtonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    buttonIcon: {
        marginRight: 8,
    },
    // AddTodoScreen Styles
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 'auto',
    },
    backButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    multilineInput: {
        minHeight: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },
    cancelButton: {
        backgroundColor: '#aaaaaa',
    },
    saveButton: {
        backgroundColor: '#64dd17',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default App;
