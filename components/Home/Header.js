import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// Instagram loo
// Icons, Icons, Icons
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image 
          style={styles.logo} 
          source={require('../../assets/instagram.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer} >
        <TouchableOpacity>
          <Image
            source={require('../../assets/plus.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            source={require('../../assets/heart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
        <Image
            source={require('../../assets/message.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',

  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  }

})

export default Header