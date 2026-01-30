import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { LKText } from '../../components/General';

const TaskScreen = React.memo(() => {
    // ============================================
    // STATE MANAGEMENT
    // ============================================

    // TODO: Create state for dropdown menu visibility
    // HINT: const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)

    // TODO: Create state to track current view ('tasks' or 'projects')
    // HINT: const [currentView, setCurrentView] = useState('tasks');
    const [currentView, setCurrentView] = useState('tasks');

    // TODO: Create state for tasks array (fetch from API later)
    // HINT: const [tasks, setTasks] = useState([
    //   { id: 1, description: 'Soccer practice', category: 'Sports', categoryColor: '#51cf66', dueDate: '3:00 PM' },
    //   { id: 2, description: 'Math homework', category: 'School', categoryColor: '#ffd43b', dueDate: '5:00 PM' },
    // ]);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: ' Soccer practice',
            category: 'Sports',
            categoryColor: '#51cf66',
            dueDate: '3:00 PM'
        },
        {
            id: 2,
            description: ' Math homework',
            category: 'School',
            categoryColor: '#ffd43b',
            dueDate: '5:00 PM'
        }
    ])

    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    // TODO: Function to toggle dropdown menu
    // const toggleDropdown = () => {
    //   // Toggle showDropdown state between true/false
    // };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    // TODO: Function to switch between Tasks and Projects view
    // const switchView = (view: 'tasks' | 'projects') => {
    //   // Set currentView to the selected view
    //   // Close the dropdown menu
    // };
    const switchView = (view: 'tasks' | 'projects') => {
        setCurrentView(view);
        setShowDropdown(false);
    }

    // TODO: Function to render each task card with category color border
    // const renderTaskCard = (task) => {
    //   return (
    //     <TouchableOpacity 
    //       key={task.id}
    //       style={[styles.taskCard, { borderColor: task.categoryColor }]}
    //       onPress={() => {/* TODO: Open task detail modal */}}
    //     >
    //       {/* TODO: Display task description */}
    //       {/* TODO: Display category with colored indicator */}
    //       {/* TODO: Display due date/time */}
    //     </TouchableOpacity>
    //   );
    // };

    const renderTaskCard = (task) => {
        return (
            <TouchableOpacity
                key={task.id}
                style={[styles.taskCard, { borderColor: task.categoryColor }]}
                onPress={() => {/* TODO: Open task detail modal */ }}
            >
                {/* TODO: Display task description */}
                <Text style={styles.taskDescription}>{task.description}</Text>
                {/* TODO: Display category with colored indicator */}
                <View style={styles.categoryContainer}>
                    {/* Colored circle indicator */}
                    <View
                        style={[
                            styles.categoryDot,
                            { backgroundColor: task.categoryColor }
                        ]}
                    />
                    {/* Category name text */}
                    <Text style={styles.categoryText}>
                        {task.category}
                    </Text>
                </View>
                {/* TODO: Display due date/time */}
            </TouchableOpacity>
        )
    }



    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: .85 }}
            colors={['#000000ff', '#000000ff']}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>

                {/* ============================================ */}
                {/* HEADER WITH DROPDOWN */}
                {/* ============================================ */}
                <View style={styles.headerContainer}>

                    {/* TODO: Create touchable header that opens dropdown */}
                    {/* HINT: Use TouchableOpacity with onPress={toggleDropdown} */}
                    {/* Display: Current view name (Tasks or Projects) with down arrow icon */}
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => {/* TODO: Call toggleDropdown function */ }}
                    >
                        {/* TODO: Show current view text (e.g., "Tasks" or "Projects") */}
                        {/* TODO: Add down arrow icon (▼) next to text */}
                        {/* HINT: Use LKText component for styling */}
                    </TouchableOpacity>

                    {/* ============================================ */}
                    {/* DROPDOWN MENU */}
                    {/* ============================================ */}
                    {/* TODO: Conditionally render dropdown when showDropdown is true */}
                    {/* HINT: {showDropdown && ( ... )} */}
                    {/* showDropdown && (
                        <View style={styles.dropdownMenu}>
                            
                            TODO: Option 1 - Tasks
                            <TouchableOpacity 
                                style={styles.dropdownItem}
                                onPress={() => switchView('tasks')}
                            >
                                <Text style={styles.dropdownText}>Tasks</Text>
                            </TouchableOpacity>

                            TODO: Option 2 - Projects
                            <TouchableOpacity 
                                style={styles.dropdownItem}
                                onPress={() => switchView('projects')}
                            >
                                <Text style={styles.dropdownText}>Projects</Text>
                            </TouchableOpacity>

                        </View>
                    ) */}

                </View>

                {/* ============================================ */}
                {/* MAIN CONTENT AREA */}
                {/* ============================================ */}
                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>

                    {/* TODO: Conditionally render based on currentView */}
                    {/* If currentView === 'tasks', show tasks list */}
                    {/* If currentView === 'projects', show projects list */}

                    {/* ============================================ */}
                    {/* TASKS VIEW */}
                    {/* ============================================ */}
                    {/* TODO: Check if currentView === 'tasks' */}
                    {/* currentView === 'tasks' && (
                        <View style={styles.contentContainer}>
                            
                            TODO: Section header
                            <LKText weight={'bold'} style={styles.sectionTitle}>
                                My Tasks
                            </LKText>

                            TODO: Map through tasks array and render each task card
                            {tasks.map((task) => (
                                
                                TODO: Task Card Component
                                <TouchableOpacity 
                                    key={task.id}
                                    style={[
                                        styles.taskCard,
                                        { 
                                            TODO: Set border color from task.categoryColor
                                            borderColor: task.categoryColor,
                                            TODO: Make border width 2-3px and add glow effect
                                            borderWidth: 3,
                                            TODO: Add shadow/elevation for illumination effect
                                        }
                                    ]}
                                    onPress={() => {
                                        TODO: Open modal with task details
                                        (We'll implement this later)
                                    }}
                                >
                                    
                                    TODO: Task Description
                                    <Text style={styles.taskDescription}>
                                        {task.description}
                                    </Text>

                                    TODO: Category Badge with colored dot
                                    <View style={styles.categoryContainer}>
                                        TODO: Colored circle indicator
                                        <View 
                                            style={[
                                                styles.categoryDot,
                                                { backgroundColor: task.categoryColor }
                                            ]}
                                        />
                                        TODO: Category name text
                                        <Text style={styles.categoryText}>
                                            {task.category}
                                        </Text>
                                    </View>

                                    TODO: Due Date/Time
                                    <Text style={styles.dueDate}>
                                        {task.dueDate}
                                    </Text>

                                </TouchableOpacity>
                            ))}

                        </View>
                    ) */}

                    {/* ============================================ */}
                    {/* PROJECTS VIEW */}
                    {/* ============================================ */}
                    {/* TODO: Check if currentView === 'projects' */}
                    {/* currentView === 'projects' && (
                        <View style={styles.contentContainer}>
                            
                            TODO: Section header
                            <LKText weight={'bold'} style={styles.sectionTitle}>
                                My Projects
                            </LKText>

                            TODO: Map through projects array (similar structure to tasks)
                            TODO: Each project card with colored border based on category

                        </View>
                    ) */}

                </ScrollView>

            </SafeAreaView>
        </LinearGradient>
    );
});

// ============================================
// STYLES
// ============================================
const styles = StyleSheet.create({

    // TODO: Header container styles
    headerContainer: {
        // TODO: Add padding, flexDirection, alignItems, justifyContent
        // TODO: Make it stick to top with position or padding
    },

    // TODO: Header button (Tasks/Projects dropdown trigger)
    headerButton: {
        // TODO: Style the touchable area
        // TODO: Add padding, flexDirection: 'row', alignItems: 'center'
    },

    // TODO: Dropdown menu container
    dropdownMenu: {
        // TODO: Position absolute to overlay content
        // TODO: Background color (semi-transparent or solid)
        // TODO: Border radius, padding
        // TODO: Shadow/elevation for depth
        // TODO: Top position below header
    },

    // TODO: Individual dropdown item
    dropdownItem: {
        // TODO: Padding for touchable area
        // TODO: Border bottom between items (optional)
    },

    // TODO: Dropdown text style
    dropdownText: {
        // TODO: Font size, color, weight
    },

    // TODO: Main content container
    contentContainer: {
        // TODO: Padding, margin
    },

    // TODO: Section title (e.g., "My Tasks")
    sectionTitle: {
        // TODO: Font size, color, margin bottom
    },

    // TODO: Task card container
    taskCard: {
        // TODO: Background color (#1a1a1a or dark gray)
        // TODO: Border radius (12-16)
        // TODO: Padding (15-20)
        // TODO: Margin bottom for spacing between cards
        // TODO: Border width (2-3)
        // TODO: Add shadow for iOS (shadowColor, shadowOffset, shadowOpacity, shadowRadius)
        // TODO: Add elevation for Android
    },

    // TODO: Task description text
    taskDescription: {
        // TODO: Font size (16-18)
        // TODO: Color (white)
        // TODO: Font weight (500-600)
        // TODO: Margin bottom
    },

    // TODO: Category container (colored dot + text)
    categoryContainer: {
        // TODO: flexDirection: 'row'
        // TODO: alignItems: 'center'
        // TODO: Margin vertical
    },

    // TODO: Colored dot indicator
    categoryDot: {
        // TODO: Width and height (8-10)
        // TODO: Border radius (make it circular)
        // TODO: Margin right
    },

    // TODO: Category text
    categoryText: {
        // TODO: Font size (12-14)
        // TODO: Color (#888 or light gray)
    },

    // TODO: Due date text
    dueDate: {
        // TODO: Font size (12-14)
        // TODO: Color (#888 or light gray)
        // TODO: Margin top
    },

});

export default TaskScreen;