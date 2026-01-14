import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Switch, Modal, Platform, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faPlus, faChevronDown, faCheck, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LKText } from '../../components/General';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const AddTask = React.memo(() => {
    const navigation = useNavigation();
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [alarmEnabled, setAlarmEnabled] = useState(false);
    const [isGroupTask, setIsGroupTask] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPriority, setSelectedPriority] = useState<'Low' | 'High'>('High');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showPriorityModal, setShowPriorityModal] = useState(false);
    const [showFriendSelector, setShowFriendSelector] = useState(false);
    const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#ff6b6b');


    // Mock friends data - replace with your actual friends data
    const friends = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
        { id: '3', name: 'Mike Johnson' },
        { id: '4', name: 'Sarah Williams' },
        { id: '5', name: 'Tom Brown' },
    ];

    const [categories, setCategories] = useState([
        { name: 'Work', color: '#ff6b6b' },
        { name: 'Healthy', color: '#51cf66' },
        { name: 'Education', color: '#5c7cfa' },
        { name: 'Daily Challenge', color: '#ffa94d' },
        { name: 'Sport', color: '#ff6b9d' },
        { name: 'Treatment', color: '#74c0fc' },
    ]);

    const availableColors = [
        '#ff6b6b', '#51cf66', '#5c7cfa', '#ffa94d', '#ff6b9d', '#74c0fc',
        '#f03e3e', '#37b24d', '#4263eb', '#fd7e14', '#e64980', '#339af0',
        '#c92a2a', '#2f9e44', '#364fc7', '#d9480f', '#c2255c', '#1971c2',
    ];

    const handleDeleteCategory = (categoryName: string) => {
        Alert.alert(
            'Delete Category',
            `Are you sure you want to delete "${categoryName}"?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        setCategories(categories.filter(cat => cat.name !== categoryName));
                        // If the deleted category was selected, unselect it
                        if (selectedCategory === categoryName) {
                            setSelectedCategory(null);
                        }
                    },
                    style: 'destructive',
                },
            ],
        );
    };

    const formatDate = (date: Date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        const dayName = days[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const displayHours = hours % 12 || 12;

        return `${dayName}, ${month}/${day}/${year} ${displayHours}.${minutes}${ampm}`;
    };

    const onDateChange = (event: any, selectedDate?: Date) => {
        if (event.type === 'dismissed') {
            setShowDatePicker(false);
            return;
        }

        const currentDate = selectedDate || new Date();

        if (Platform.OS === 'android') {
            setShowDatePicker(false);
            setSelectedDate(currentDate);
            setTimeout(() => setShowTimePicker(true), 500);
        } else {
            setSelectedDate(currentDate);
        }
    };

    const onTimeChange = (event: any, selectedTime?: Date) => {
        if (event.type === 'dismissed') {
            setShowTimePicker(false);
            return;
        }

        const currentTime = selectedTime || selectedDate;

        if (Platform.OS === 'android') {
            setShowTimePicker(false);
        }

        setSelectedDate(currentTime);
    };

    const handleDatePress = () => {
        if (Platform.OS === 'ios') {
            setShowDatePicker(true);
        } else {
            setShowDatePicker(true);
        }
    };

    const handleGroupTaskToggle = (value: boolean) => {
        setIsGroupTask(value);
        if (value) {
            setShowFriendSelector(true);
        } else {
            setSelectedFriends([]);
        }
    };

    const toggleFriendSelection = (friendId: string) => {
        setSelectedFriends(prev => {
            if (prev.includes(friendId)) {
                return prev.filter(id => id !== friendId);
            } else {
                return [...prev, friendId];
            }
        });
    };

    const handleFriendSelectionDone = () => {
        if (selectedFriends.length === 0) {
            setIsGroupTask(false);
        }
        setShowFriendSelector(false);
    };

    // ...existing code...

    const handleAddCategory = () => {
        if (newCategoryName.trim()) {
            // Check if category with the same name already exists
            const categoryExists = categories.some(
                category => category.name.toLowerCase() === newCategoryName.trim().toLowerCase()
            );

            if (categoryExists) {
                // You can add an alert or toast notification here
                Alert.alert('A category with this name already exists!');
                return;
            }

            setCategories([...categories, { name: newCategoryName.trim(), color: selectedColor }]);
            setNewCategoryName('');
            setSelectedColor('#ff6b6b');
            setShowAddCategoryModal(false);
        }
    };

    // ...existing code...

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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>New Task</Text>
                        <FontAwesomeIcon icon={faChevronDown} size={16} color="#888" style={{ marginLeft: 10 }} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faTimes} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                    {/* Description Section */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Description</Text>
                        <TextInput
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: '#444',
                                paddingVertical: 10,
                            }}
                            placeholder="Enter task description"
                            placeholderTextColor="#555"
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    {/* Location Section */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Location</Text>
                        <TextInput
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: '#444',
                                paddingVertical: 10,
                            }}
                            placeholder="Enter location or address"
                            placeholderTextColor="#555"
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>

                    {/* Categories Section */}
                    <View style={{ marginTop: 30 }}>

                        {/* Categories Section */}
                        <View style={{ marginTop: 30 }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 15,
                            }}>
                                <Text style={{ color: '#888', fontSize: 14 }}>Categories</Text>
                                <TouchableOpacity onPress={() => setShowAddCategoryModal(true)}>
                                    <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>

                            {categories.map((category, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 20,
                                        backgroundColor: selectedCategory === category.name ? '#2a2a2a' : 'transparent',
                                        paddingVertical: 8,
                                        paddingHorizontal: 10,
                                        borderRadius: 8,
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        onPress={() => {
                                            // Toggle selection - if already selected, unselect it
                                            if (selectedCategory === category.name) {
                                                setSelectedCategory(null);
                                            } else {
                                                setSelectedCategory(category.name);
                                            }
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: 4,
                                                height: 20,
                                                backgroundColor: category.color,
                                                borderRadius: 2,
                                                marginRight: 15,
                                            }}
                                        />
                                        <Text style={{
                                            color: selectedCategory === category.name ? '#fff' : '#aaa',
                                            fontSize: 16,
                                            fontWeight: selectedCategory === category.name ? 'bold' : 'normal',
                                            flex: 1,
                                        }}>
                                            {category.name}
                                        </Text>
                                        {selectedCategory === category.name && (
                                            <FontAwesomeIcon icon={faCheck} size={16} color="#51cf66" />
                                        )}
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleDeleteCategory(category.name)}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <FontAwesomeIcon icon={faTimes} size={16} color="#ff6b6b" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>

                        {/* Group Task Section */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 20,
                            marginBottom: 20,
                        }}>
                            <View>
                                <Text style={{ color: '#888', fontSize: 16 }}>Group Task</Text>
                                {isGroupTask && selectedFriends.length > 0 && (
                                    <Text style={{ color: '#ffa94d', fontSize: 12, marginTop: 4 }}>
                                        {selectedFriends.length} friend{selectedFriends.length > 1 ? 's' : ''} selected
                                    </Text>
                                )}
                            </View>
                            <Switch
                                value={isGroupTask}
                                onValueChange={handleGroupTaskToggle}
                                trackColor={{ false: '#3e3e3e', true: '#ffa94d' }}
                                thumbColor={isGroupTask ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        {/* Alarm Section */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                            <Text style={{ color: '#888', fontSize: 16 }}>Alarm</Text>
                            <Switch
                                value={alarmEnabled}
                                onValueChange={setAlarmEnabled}
                                trackColor={{ false: '#3e3e3e', true: '#5c7cfa' }}
                                thumbColor={alarmEnabled ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        {/* Date Section */}
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20,
                            }}
                            onPress={handleDatePress}
                        >
                            <Text style={{ color: '#888', fontSize: 16 }}>Date</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 14, marginRight: 10 }}>
                                    {formatDate(selectedDate)}
                                </Text>
                                <FontAwesomeIcon icon={faChevronDown} size={14} color="#888" />
                            </View>
                        </TouchableOpacity>

                        {/* Date Picker */}
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode={Platform.OS === 'ios' ? 'datetime' : 'date'}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={onDateChange}
                                textColor="#fff"
                                minimumDate={new Date()}
                            />
                        )}

                        {/* Time Picker (Android only) */}
                        {showTimePicker && Platform.OS === 'android' && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="time"
                                display="default"
                                onChange={onTimeChange}
                                textColor="#fff"
                            />
                        )}

                        {/* Priority Section */}
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 40,
                            }}
                            onPress={() => setShowPriorityModal(true)}
                        >
                            <Text style={{ color: '#888', fontSize: 16 }}>Priority</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    color: selectedPriority === 'High' ? '#ff6b9d' : '#51cf66',
                                    fontSize: 14,
                                    marginRight: 10
                                }}>
                                    {selectedPriority}
                                </Text>
                                <FontAwesomeIcon icon={faChevronDown} size={14} color="#888" />
                            </View>
                        </TouchableOpacity>

                        {/* Create Task Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#f0f0f0',
                                borderRadius: 12,
                                paddingVertical: 18,
                                alignItems: 'center',
                                marginBottom: 40,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 'bold' }}>CREATE TASK</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* Priority Modal */}
            <Modal
                visible={showPriorityModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowPriorityModal(false)}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    activeOpacity={1}
                    onPress={() => setShowPriorityModal(false)}
                >
                    <View style={{
                        backgroundColor: '#2a2a2a',
                        borderRadius: 12,
                        padding: 20,
                        width: '80%',
                    }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
                            Select Priority
                        </Text>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: '#444',
                            }}
                            onPress={() => {
                                setSelectedPriority('Low');
                                setShowPriorityModal(false);
                            }}
                        >
                            <Text style={{ color: '#51cf66', fontSize: 16 }}>Low</Text>
                            {selectedPriority === 'Low' && (
                                <FontAwesomeIcon icon={faCheck} size={16} color="#51cf66" />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 15,
                            }}
                            onPress={() => {
                                setSelectedPriority('High');
                                setShowPriorityModal(false);
                            }}
                        >
                            <Text style={{ color: '#ff6b9d', fontSize: 16 }}>High</Text>
                            {selectedPriority === 'High' && (
                                <FontAwesomeIcon icon={faCheck} size={16} color="#ff6b9d" />
                            )}
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Add Category Modal */}
            <Modal
                visible={showAddCategoryModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowAddCategoryModal(false)}
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
                                Add Category
                            </Text>
                            <TouchableOpacity onPress={() => setShowAddCategoryModal(false)}>
                                <FontAwesomeIcon icon={faTimes} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>

                        {/* Category Name Input */}
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Category Name</Text>
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
                            placeholder="Enter category name"
                            placeholderTextColor="#555"
                            value={newCategoryName}
                            onChangeText={setNewCategoryName}
                        />

                        {/* Color Picker */}
                        <Text style={{ color: '#888', fontSize: 14, marginBottom: 10 }}>Select Color</Text>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginBottom: 20,
                        }}>
                            {availableColors.map((color, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 20,
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
                                        <FontAwesomeIcon icon={faCheck} size={16} color="#fff" />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Add Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#f0f0f0',
                                borderRadius: 8,
                                paddingVertical: 15,
                                alignItems: 'center',
                            }}
                            onPress={handleAddCategory}
                        >
                            <Text style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 'bold' }}>ADD CATEGORY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Friend Selector Modal */}
            <Modal
                visible={showFriendSelector}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowFriendSelector(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        backgroundColor: '#1a1a1a',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingTop: 20,
                        paddingBottom: 40,
                        maxHeight: '80%',
                    }}>
                        {/* Header */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            marginBottom: 20,
                        }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
                                Select Friends
                            </Text>
                            <TouchableOpacity onPress={handleFriendSelectionDone}>
                                <Text style={{ color: '#ffa94d', fontSize: 16, fontWeight: 'bold' }}>Done</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Friends List */}
                        <FlatList
                            data={friends}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingVertical: 15,
                                        paddingHorizontal: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#2a2a2a',
                                    }}
                                    onPress={() => toggleFriendSelection(item.id)}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 20,
                                            backgroundColor: '#3a3a3a',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: 15,
                                        }}>
                                            <FontAwesomeIcon icon={faUser} size={18} color="#888" />
                                        </View>
                                        <Text style={{ color: '#fff', fontSize: 16 }}>{item.name}</Text>
                                    </View>
                                    {selectedFriends.includes(item.id) && (
                                        <FontAwesomeIcon icon={faCheck} size={20} color="#ffa94d" />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
});

const styles = StyleSheet.create({
    button: {
        width: 150,
        padding: 20,
        borderRadius: 60,
        backgroundColor: '#4f6792ff',
        height: 60
    }
});

export default AddTask;