import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View} from 'react-native';
import Button from './components/Button';
import GoalInput from './components/GoalInput';
import List from './components/List';
import Navbar from './components/Navbar';
import { AntDesign } from '@expo/vector-icons'; 
import { useColorScheme } from 'nativewind/dist/use-color-scheme';

export interface GoalList {
  goal: string, 
  id: string
}


export default function App() {
  const [goalList, setGoalList] = useState<GoalList[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const { colorScheme } = useColorScheme();

  const addGoalHandler = (goal : string) : void => {
    setGoalList((currentGoalList : GoalList[]) => [...currentGoalList, {goal, id: Math.random().toString()}])
  }

  const removeGoalHandler = (id : string) : void => {
    setGoalList((goalList : GoalList[]) => {
      return goalList.filter((item: GoalList) => item.id != id)
    })
  }

  return (
    <View className="flex-1 flex-col justify-start bg-primary dark:bg-gray-800">
      <Navbar/>
      <StatusBar style={`${colorScheme === 'dark' ? 'light' : 'dark'}`} />
      <View className='h-14 px-2'>
        <Button text="Add New Goal" onPressHandler={() => setShowModal(true)}>
          <AntDesign name="Trophy" size={24} color={`${ colorScheme === 'dark' ? '#FFFFFF' : '#DB6C79'}`} />
        </Button>
      </View>
      <GoalInput addGoalHandler={addGoalHandler} visible={showModal} closeModal={() => setShowModal(false)}  />
      <List list={goalList} removeGoalHandler={removeGoalHandler} />
    </View>
  );
}
