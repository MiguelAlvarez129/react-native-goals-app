import React, {useState} from 'react'
import { TextInput, View, Image, Modal } from 'react-native'
import Button from './Button'

interface GoalInputProps {
  visible: boolean,
  addGoalHandler:  (goal: string) => void, 
  closeModal: () => void,
}

function GoalInput(props : GoalInputProps) {
  const [goal, setGoal] = useState<string>('')

  const onChangeTextHandler = (text: string) : void => {
    setGoal(text)
  }  

  const addGoal = () => {
    props.addGoalHandler(goal)
    setGoal('')
    props.closeModal()
  }

  return (
    <Modal animationType={"slide"} visible={props.visible}>
      <View className='flex-col flex-1 justify-center items-center bg-secondary dark:bg-slate-900'>
        <View className='w-50 h-50 rounded-full mb-10'>
          <Image 
          source={require('../assets/goal.png')} 
          className="w-40 h-40"/>
        </View>
        <View className='flex-row px-2 h-12 '>
          <TextInput className="bg-primary h-12 rounded-sm px-2 mr-1 flex-1 text-md font-bold border-secondary border-2" placeholder='Enter Your New Goal!' onChangeText={onChangeTextHandler} value={goal}/>
        </View>
        <View className='flex-row h-12 mt-4 px-2'>
          <Button text="Add Goal" onPressHandler={addGoal} />
          <View className='w-2'/>
          <Button text="Cancel" onPressHandler={props.closeModal} inverted={true}/>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput