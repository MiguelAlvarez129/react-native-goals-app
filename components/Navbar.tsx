import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { useColorScheme } from 'nativewind';

function Navbar() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className='h-12 my-10 w-full flex-row justify-between items-center px-4 pb-2 border-b-secondary border-b-2 dark:border-b-primary'>
      <Text className='text-xl font-bold text-secondary dark:text-primary'> To Do List</Text>
      <TouchableOpacity onPress={toggleColorScheme} className=' rounded-full h-10 w-10 flex-0 justify-center items-center'>
        {colorScheme == 'dark' ? <Feather name="sun" size={24} color="#F2F7F2" /> :  <Feather name="moon" size={32} color="#125e8a" />}

      </TouchableOpacity>
    </View>
  )
}

export default Navbar