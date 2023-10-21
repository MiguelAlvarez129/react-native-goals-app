import {FlatList, ListRenderItem} from 'react-native'
import ListItem from './ListItem'
import { GoalList } from '../App'

interface ListProps {
  list : GoalList[],
  removeGoalHandler: (item: string) => void
}

function List(props : ListProps) {
  const renderItem: ListRenderItem<GoalList> = ({item}) => (
    <ListItem itemData={item} removeGoalHandler={props.removeGoalHandler} /> 
  )
    return (
    <FlatList className='flex-col mt-4 mx-2 bg-primary dark:bg-slate-800 min-h-14 rounded-md' data={props.list} 
    keyExtractor={(item, index) => {
      return index.toString()
    }}
 
    renderItem={renderItem}
    />
  )
}

export default List