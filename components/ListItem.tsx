import { View, Text, Pressable } from "react-native";

interface ListItemProps {
  itemData : {goal: string, id: string},
  removeGoalHandler : (id : string) => void,
}

export default function ListItem(props : ListItemProps) {
  return (
    <View className="bg-secondary dark:bg-primary mx-1 my-1 h-9 rounded-sm justify-center ">
        <Pressable android_ripple={{color: "#DDDDDD"}} onPress={() => props.removeGoalHandler(props.itemData.id)}>
        <Text className='font-bold p-2 text-primary dark:text-gray-800'>
          {props.itemData.goal}
        </Text>
      </Pressable>
    </View>
  )
}
