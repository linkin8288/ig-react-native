import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

// Divider as the white line on top
// PostHeader is the custom component which receive post as props
// PostHeader divided by 2 parts,
// small profile picture, name are one part ,three dots are the other part.

const Post = (post) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation= 'vertical' />
      <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}} >
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}} >{post.user}</Text>
    </View>

    <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
  </View>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',

  }
})

export default Post