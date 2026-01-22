import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faPlus, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const AddProject = React.memo(() => {
    const navigation = useNavigation();
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedColor, setSelectedColor] = useState('#5c7cfa');
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
    const [goals, setGoals] = useState<string[]>([]);
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);
    const [newGoal, setNewGoal] = useState('');

    const availableColors = [
        '#ff6b6b', '#51cf66', '#5c7cfa', '#ffa94d', '#ff6b9d', '#74c0fc',
        '#f03e3e', '#37b24d', '#4263eb', '#fd7e14', '#e64980', '#339af0',
        '#c92a2a', '#2f9e44', '#364fc7', '#d9480f', '#c2255c', '#1971c2',
    ];

    const handleAddGoal = () => {
        if (newGoal.trim()) {
            if (goals.includes(newGoal.trim())) {
                Alert.alert('This goal already exists!');
                return;
            }
            setGoals([...goals, newGoal.trim()]);
            setNewGoal('');
            setShowAddGoalModal(false);
        }
    };

    const handleDeleteGoal = (goal: string) => {
        Alert.alert(
            'Delete Goal',
            `Are you sure you want to delete "${goal}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        setGoals(goals.filter(g => g !== goal));
                        if (selectedGoal === goal) {
                            setSelectedGoal(null);
                        }
                    },
                    style: 'destructive',
                },
            ],
        );
    };

    const handleCreateProject = () => {
        if (!projectName.trim()) {
            Alert.alert('Error', 'Please enter a project name');
            return;
        }

        // TODO: Save project to your data store
        console.log({
            projectName,
            description,
            color: selectedColor,
            goal: selectedGoal,
            goals,
        });

        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000000ff' }}>
            <SafeAreaView style={{ flex: 1 }}>
                {/* Header */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                }}>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>New Project</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faTimes} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                    {/* Project Name Section */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Project Name</Text>
                        <TextInput
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: '#444',
                                paddingVertical: 10,
                            }}
                            placeholder="Enter project name"
                            placeholderTextColor="#555"
                            value={projectName}
                            onChangeText={setProjectName}
                        />
                    </View>

                    {/* Description Section */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Description</Text>
                        <TextInput
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                borderWidth: 1,
                                borderColor: '#444',
                                borderRadius: 8,
                                paddingVertical: 12,
                                paddingHorizontal: 15,
                                minHeight: 100,
                                textAlignVertical: 'top',
                            }}
                            placeholder="Enter project description"
                            placeholderTextColor="#555"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />
                    </View>

                    {/* Color Picker Section */}
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 15 }}>Project Color</Text>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            {availableColors.map((color, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: 45,
                                        height: 45,
                                        borderRadius: 22.5,
                                        backgroundColor: color,
                                        margin: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: selectedColor === color ? 3 : 0,
                                        borderColor: '#fff',
                                    }}
                                    onPress={() => setSelectedColor(color)}
                                >
                                    {selectedColor === color && (
                                        <FontAwesomeIcon icon={faCheck} size={18} color="#fff" />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Goals Section */}
                    <View style={{ marginTop: 30 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 15,
                        }}>
                            <Text style={{ color: '#888', fontSize: 14 }}>Project Goals</Text>
                            <TouchableOpacity onPress={() => setShowAddGoalModal(true)}>
                                <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>

                        {goals.length === 0 ? (
                            <Text style={{ color: '#555', fontSize: 14, fontStyle: 'italic' }}>
                                No goals added yet. Tap + to add a goal.
                            </Text>
                        ) : (
                            goals.map((goal, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 15,
                                        backgroundColor: selectedGoal === goal ? '#2a2a2a' : 'transparent',
                                        paddingVertical: 12,
                                        paddingHorizontal: 15,
                                        borderRadius: 8,
                                        borderWidth: 1,
                                        borderColor: '#444',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => {
                                            setSelectedGoal(selectedGoal === goal ? null : goal);
                                        }}
                                    >
                                        <Text style={{
                                            color: selectedGoal === goal ? '#fff' : '#aaa',
                                            fontSize: 16,
                                            flex: 1,
                                        }}>
                                            {goal}
                                        </Text>
                                        {selectedGoal === goal && (
                                            <FontAwesomeIcon icon={faCheck} size={16} color="#51cf66" style={{ marginRight: 10 }} />
                                        )}
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleDeleteGoal(goal)}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} size={16} color="#ff6b6b" />
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}
                    </View>

                    {/* Create Project Button */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: 12,
                            paddingVertical: 18,
                            alignItems: 'center',
                            marginTop: 40,
                            marginBottom: 40,
                        }}
                        onPress={handleCreateProject}
                    >
                        <Text style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 'bold' }}>CREATE PROJECT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>

            {/* Add Goal Modal */}
            <Modal
                visible={showAddGoalModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowAddGoalModal(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: '#1a1a1a',
                        borderRadius: 12,
                        padding: 20,
                        width: '85%',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                                Add Goal
                            </Text>
                            <TouchableOpacity onPress={() => setShowAddGoalModal(false)}>
                                <FontAwesomeIcon icon={faTimes} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Goal Description</Text>
                        <TextInput
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                borderWidth: 1,
                                borderColor: '#444',
                                borderRadius: 8,
                                paddingVertical: 12,
                                paddingHorizontal: 15,
                                marginBottom: 20,
                            }}
                            placeholder="Enter goal description"
                            placeholderTextColor="#555"
                            value={newGoal}
                            onChangeText={setNewGoal}
                        />

                        <TouchableOpacity
                            style={{
                                backgroundColor: '#f0f0f0',
                                borderRadius: 8,
                                paddingVertical: 15,
                                alignItems: 'center',
                            }}
                            onPress={handleAddGoal}
                        >
                            <Text style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 'bold' }}>ADD GOAL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
});

export default AddProject;