import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import {USERS} from '../../data/users'

// Scrollable effect
// Icons + name
const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        {USERS.map((story, index)=>(
          <View key={index} sytle={{alignItems: 'center'}}>
            <Image 
              soure={{uri: story.image}}
              style={styles.story}/>
            <Text>
              {
              story.user.length > 11 ? 
              story.user.slice(0, 10).toLocaleLowerCase() + '...' : 
              story.user.toLocaleLowerCase()
              }
            </Text>
          </View>
        ))}

      </ScrollView>
      <Text style={{color: 'white'}}>Stories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginleft: 6,
    borderWidth: 30,
    borderColor: '#ff8501',

  }
})

export default Stories