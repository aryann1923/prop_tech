import {View, Text, Image, TextInput} from 'react-native';

function SearchBar() {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%',
        position: 'absolute',
        zIndex: 2,
      }}>
      <View
        style={{
          height: 50,
          width: '90%',
          backgroundColor: '#FFF',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <View
          style={{
            height: '100%',
            width: '20%',

            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
          }}>
          <Image
            source={require('../assets/eu.webp')}
            style={{
              height: 45,
              width: 45,
              marginLeft: '5%',
              borderRadius: 10,
            }}
          />
        </View>
        <TextInput
          style={{
            height: '100%',
            width: '60%',

            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: 'gray',
          }}
          placeholder="search"
          placeholderTextColor={'gray'}
          cursorColor={'gray'}
        />
        <View
          style={{
            height: '100%',
            width: '20%',

            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
          }}>
          <Image
            source={require('../assets/mesh2.png')}
            style={{
              height: 45,
              width: 45,
              position: 'absolute',
              right: '5%',
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default SearchBar;
