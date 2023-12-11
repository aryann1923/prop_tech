import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function BottomBar() {
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        elevation: 10,
        borderTopColor: 'gray',
      }}>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '33.33%',

          borderTopLeftRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/home2.png')}
          style={{height: 20, width: 20, objectFit: 'cover'}}
        />
        <Text style={{color: 'rgba(85, 113, 132, 1)', fontWeight: 'bold'}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '33.33%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/offer2.png')}
          style={{height: 20, width: 20, objectFit: 'cover'}}
        />
        <Text style={{color: 'rgba(85, 113, 132, 1)'}}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '33.33%',

          borderTopRightRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/deal1.png')}
          style={{height: 20, width: 20, objectFit: 'cover'}}
        />
        <Text style={{color: 'rgba(85, 113, 132, 1)'}}>Deals</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomBar;
