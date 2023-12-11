import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import SearchBar from '../components/searchBar';
import BottomBar from '../components/bottomTab';

function Zhome() {
  const [data, set_data] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]);

  const [search, set_search] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [offset, setOffset] = useState(0);

  console.log(scrollDirection);

  const handleScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction =
      currentOffset > 0 && currentOffset > offset ? 'down' : 'up';

    // Update the scroll direction only if it has changed
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }

    // Update the offset
    setOffset(currentOffset);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../assets/mesh2.png')}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(247,244,244,0.8)',
          }}>
          {/*====search bar starts==== */}
          {scrollDirection == 'up' ? <SearchBar /> : null}

          {/*====search bar ends==== */}

          {/*====Property box starts==== */}
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            onScroll={handleScroll}
            ListHeaderComponent={
              <>
                <View
                  style={{
                    height: 50,
                    marginTop: '19%',

                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginLeft: '4%',
                      color: '#004F84',
                      fontWeight: 700,
                      fontSize: 32,
                      zIndex: 1,
                    }}>
                    Spaces
                  </Text>
                  <View
                    style={{
                      height: '50%',
                      width: 80,
                      backgroundColor: 'rgba(0, 125, 208, 1)',
                      position: 'absolute',
                      right: 20,
                      borderRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{color: 'white'}}>All : All</Text>

                    <FontAwesomeIcon
                      name="caret-down"
                      size={20}
                      color={'white'}
                    />
                  </View>
                </View>
              </>
            }
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 140,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: index == data.length - 1 ? 100 : 0,
                    marginTop: 20,
                    zIndex: 1,
                  }}>
                  <View
                    style={{
                      height: 140,
                      width: '94%',
                      borderRadius: 10,
                      backgroundColor: 'white',
                    }}>
                    {/*Title of property starts */}
                    <View
                      style={{
                        height: '40%',
                        width: '100%',

                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 28,
                          fontWeight: 600,
                          color: '#004F84',
                        }}>
                        Prestige Heights
                      </Text>
                    </View>
                    {/*Title of property ends */}
                    {/*no. of flats starts */}
                    <View
                      style={{
                        height: '15%',
                        width: '100%',

                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: -10,
                      }}>
                      <Text
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                          color: '#557184',
                        }}>
                        460 flats
                      </Text>
                      <View
                        style={{
                          height: 2,
                          width: 2,
                          backgroundColor: '#557184',
                          marginLeft: 10,
                        }}></View>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 14,
                          color: '#557184',
                        }}>
                        3 km
                      </Text>
                    </View>
                    {/*no. of flats ends */}
                    <View
                      style={{
                        height: '25%',

                        width: '100%',
                        marginTop: 5,
                      }}>
                      <View
                        style={{
                          height: '50%',
                          width: '100%',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            marginLeft: 15,
                            color: '#557184',
                          }}>
                          Min <Text style={{fontWeight: 'bold'}}>rs 700</Text> -
                          Campaign Type
                        </Text>
                      </View>
                      <View
                        style={{
                          height: '50%',
                          width: '100%',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            marginLeft: 15,
                            color: '#557184',
                          }}>
                          Max <Text style={{fontWeight: 'bold'}}>rs 9000</Text>{' '}
                          - Campaign Type
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: '20%',
                        width: '100%',

                        flexDirection: 'row',

                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../assets/offer3.png')}
                        style={{height: 20, width: 20, marginLeft: 15}}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          color: 'rgba(85, 113, 132, 1)',
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        1 offer{'   '}
                      </Text>
                      <Text style={{color: '#557184', fontSize: 12}}>&</Text>
                      <Image
                        source={require('../assets/deal3.png')}
                        style={{height: 20, width: 20, marginLeft: 15}}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          color: 'rgba(85, 113, 132, 1)',
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}>
                        2 deals
                      </Text>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: '#557184',
                          fontSize: 12,
                        }}>
                        already in place for you
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          {/*====Property box ends==== */}
          <View
            style={{
              height: 40,
              width: '100%',

              position: 'absolute',
              bottom: 90,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: '100%',
                width: 80,
                backgroundColor: '#007DD0',
                borderRadius: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={require('../assets/map.png')}
                style={{height: 20, width: 20}}
              />
              <View
                style={{
                  height: '60%',
                  width: 1,
                  backgroundColor: 'white',
                }}></View>
              <Image
                source={require('../assets/man.png')}
                style={{height: 20, width: 20}}
              />
            </View>
          </View>
          {/*====BottomBar starts==== */}
          <BottomBar />
          {/*====BottomBar ends==== */}
        </View>
      </ImageBackground>
    </View>
  );
}
export default Zhome;
