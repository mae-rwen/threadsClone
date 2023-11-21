import { View } from 'react-native'
import React from 'react'
import { Thread } from '../types/threads'
import { Text } from './Themed'

export default function ThreadsItem(thread: Thread): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
    </View>
  )
}