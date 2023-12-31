import { ActivityIndicator, View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'
import { SafeAreaView } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { ENDPOINTS } from '../api/constants';
import axios from 'axios';
import moment from 'moment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FList from './FList'
import All from './All'
import { AuthContext } from '../../App';


import ResultCard from './ResultCard'
import TopNavigator from '../navigator/TopNavigator'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const Musiclist = () =>{
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);
    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,}]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,alignItems:'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt }]}>978 founds</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setselect(!select)}>
                            <Icon name='reader' size={22} color={select ? Colors.primary : theme.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setisSelect(!isSelect)}
                            style={{ marginLeft: 10 }}>
                            <Icon name={isSelect ? 'grid' : 'grid-outline'} size={22} color={isSelect ? Colors.primary : theme.disable} />
                        </TouchableOpacity>

                    </View>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ padding: 5 ,marginTop:10}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m2.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>International Concert</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Sun, Dec 23 • 19.00 - 23.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Grand Park, New York</Text>
                                    <TouchableOpacity onPress={() => setL1(!L1)}>
                                        <Icon name={L1 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m3.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>Jazz Music Festival</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Tue, Dec 16 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>New Avenue, Washing...</Text>
                                    <TouchableOpacity onPress={() => setL2(!L2)}>
                                        <Icon name={L2 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m4.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>DJ Music Competition</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Thu, Dec 20 • 17.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Hall, California</Text>
                                    <TouchableOpacity onPress={() => setL3(!L3)}>
                                        <Icon name={L3 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 ,marginBottom:20}}>
                        <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.borderbg, borderRadius: 20, padding: 10 }]}>
                            <Image source={require('../../assets/image/m5.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: theme.txt, }]}>National Music Fest</Text>
                                <Text style={[style.r12, { color: Colors.primary, marginTop: 8 }]}>Wed, Dec 18 • 18.00 - 22.00 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Icon name='location' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.r12, { color: theme.disable2, flex: 1, marginHorizontal: 10, }]}>Central Park, Chicago</Text>
                                    <TouchableOpacity onPress={() => setL4(!L4)}>
                                        <Icon name={L4 ? 'heart' : 'heart-outline'} size={20} color={Colors.primary}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
        </SafeAreaView>    
    )
}



export default function Resultlist() {
    const theme = useContext(themeContext);
    const { signOut } = React.useContext(AuthContext);
    const navigation = useNavigation();
    const [select, setselect] = useState(false);
    const [isSelect, setisSelect] = useState(false);
    const [L1, setL1] = useState(false);
    const [L2, setL2] = useState(false);
    const [L3, setL3] = useState(false);
    const [L4, setL4] = useState(false);
    const [L5, setL5] = useState(false);
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)

    const [loading, onLoading] = useState(false);
    const [error, onError] = useState('');
    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');

    const searchEvent = async () => {
  
        try {
          if(query.length < 4) {
            onError("Please enter more than 4 characters");
            return
          }

          onLoading(true);

          const jsonValue = await AsyncStorage.getItem('userDetails');
          const parsedValue = JSON.parse(jsonValue);

          var config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${parsedValue.token}`
            }
          };
          
          var url = `${ENDPOINTS.events + (parsedValue.user.country ? (`?country=${parsedValue.user.country}&search=${query}`) : (``))}`;
      
          axios.get(url, config)
          .then(async (res) => {
            onLoading(false);
            setList(res.data.data);
          })
          .catch(error => {
            console.log(error);
            
            if (error.response) {
                if(error.response.status === 403) {
                    signOut();
                    return;
                }
  
              onLoading(false);
              onError(error.response.data.msg);
            } else if (error.request) {
              console.log(error.request);
              onLoading(false);
              onError('Problem signing in. Please try later!');
            } else {
              onLoading(false);
              onError('Problem signing in. Please try later!');
            }
          });
          
        } catch (error) {
          onLoading(false);
          console.log(error);
        }
      };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:30}]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title={<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.input, paddingHorizontal: 10, borderRadius: 12, height: 50 }}>
                        {/* <Icon name='search' size={20} color={theme.disable} /> */}
                        <TextInput placeholder='Launch Party' placeholderTextColor={Colors.disable} selectionColor={Colors.primary} style={[style.r14, { color: theme.txt }]} onChangeText={setQuery} />
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity /* onPress={() => this.RBSheet.open()} */ onPress={() => searchEvent()}>
                                <RBSheet ref={ref => {
                                    this.RBSheet = ref;
                                }}
                                    height={550}
                                    openDuration={100}
                                    customStyles={{
                                        container: {
                                            borderTopRightRadius: 20,
                                            borderTopLeftRadius: 20,
                                            backgroundColor: theme.bg
                                        }
                                    }}>
                                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Filter</Text>
                                        <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={[style.b18, { color: theme.txt }]}>Event Category</Text>
                                            <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                                        </View>
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{ marginVertical: 20 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity onPress={() => setT1(!T1)}
                                                    style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, backgroundColor: T1 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T1 ? Colors.secondary : Colors.primary }]}>✅ All</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setT2(!T2)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, marginHorizontal: 10, backgroundColor: T2 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T2 ? Colors.secondary : Colors.primary }]}>🎵 Music</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setT3(!T3)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, backgroundColor: T3 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T3 ? Colors.secondary : Colors.primary }]}>💼 Workshops</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setT4(!T4)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, marginHorizontal: 10, backgroundColor: T4 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T5 ? Colors.secondary : Colors.primary }]}>🎨 Art</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setT5(!T5)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, backgroundColor: T5 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T5 ? Colors.secondary : Colors.primary }]}>🍕 Food & Drink</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setT6(!T6)} style={{ paddingVertical: 5, paddingHorizontal: 15, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, marginLeft: 10, backgroundColor: T6 ? Colors.primary : theme.bg }}>
                                                    <Text style={[style.b16, { color: T6 ? Colors.secondary : Colors.primary }]}>🧥 Fashion</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </ScrollView>
                                        <Text style={[style.b18, { color: theme.txt }]}>Ticket Price Range</Text>
                                        <ImageBackground source={theme.linebg} resizeMode='stretch' style={{ height: height / 200, width: width / 1.1, marginTop: 40 }}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <View>
                                                    <Image source={require('../../assets/image/Ellipse.png')} resizeMode='stretch' style={{ height: height / 50, width: width / 24, marginLeft: 65, marginTop: -8 }} />
                                                    <Image source={require('../../assets/image/20.png')} resizeMode='stretch' style={{ height: height / 40, width: width / 16, marginLeft: 55, marginTop: -40 }} />
                                                </View>
                                                <Image source={require('../../assets/image/Line2.png')} resizeMode='stretch' style={{ height: height / 200, width: width / 2.5, marginLeft: -3 }} />
                                                <View>
                                                    <Image source={require('../../assets/image/Ellipse.png')} resizeMode='stretch' style={{ height: height / 50, width: width / 24, marginLeft: -8, marginTop: -8 }} />
                                                    <Image source={require('../../assets/image/50.png')} resizeMode='stretch' style={{ height: height / 40, width: width / 16, marginLeft: -14, marginTop: -40 }} />
                                                </View>
                                            </View>

                                        </ImageBackground>
                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Location</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <View style={[style.txtinput, { backgroundColor: theme.btn, borderColor: theme.input, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                                                <Text style={[style.b14, { color: theme.txt }]}>New York, United States</Text>
                                                <Icon name='caret-down-outline' size={20} color={theme.txt} />
                                            </View>
                                        </View>

                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Event Location Range (km)</Text>
                                        <ImageBackground source={theme.linebg} resizeMode='stretch' style={{ height: height / 200, width: width / 1.1, marginTop: 40 }}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <View>
                                                    <Image source={require('../../assets/image/Ellipse.png')} resizeMode='stretch' style={{ height: height / 50, width: width / 24, marginLeft: 66, marginTop: -8 }} />
                                                    <Image source={require('../../assets/image/5.png')} resizeMode='stretch' style={{ height: height / 40, width: width / 16, marginLeft: 55, marginTop: -40 }} />
                                                </View>
                                                <Image source={require('../../assets/image/Line2.png')} resizeMode='stretch' style={{ height: height / 200, width: width / 1.99, marginLeft: -3 }} />
                                                <View>
                                                    <Image source={require('../../assets/image/Ellipse.png')} resizeMode='stretch' style={{ height: height / 50, width: width / 24, marginLeft: -8, marginTop: -8 }} />
                                                    <Image source={require('../../assets/image/40.png')} resizeMode='stretch' style={{ height: height / 40, width: width / 16, marginLeft: -12, marginTop: -40 }} />
                                                </View>
                                            </View>

                                        </ImageBackground>

                                        <View style={[style.divider, { marginVertical: 15, backgroundColor: theme.border }]}></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                                            <View style={{ flex: 1 }}>
                                                <TouchableOpacity onPress={() => this.RBSheet.close()}
                                                    style={[style.btn, { backgroundColor: theme.btn }]}>
                                                    <Text style={[style.btntxt, { color: Colors.primary }]}>Reset</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginHorizontal: 10 }}></View>
                                            <View style={{ flex: 1 }}>
                                                <TouchableOpacity onPress={() => navigation.navigate('Resultlist')}
                                                    style={style.btn}>
                                                    <Text style={style.btntxt}>Apply</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </RBSheet>
                                {/* <Image source={require('../../assets/image/Filter.png')} resizeMode='stretch' style={{ height: height / 35, width: width / 19 }} /> */}

                                <Icon name='search' size={20} color={Colors.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>}
                    // titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                    {/* <TopNavigator></TopNavigator> */}

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}} nestedScrollEnabled={true}>

                    {
                        loading ? (
                            <View style={{ width: '100%', height: '100%', paddingTop: '30%' }}>
                                <ActivityIndicator size="large" color="#584CF4" />
                            </View>
                        ) : (
                            <>
                                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{ marginVertical: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginRight: 20 }}>
                                            <TouchableOpacity onPress={()=>setT1(!T1)}
                                            style={{ padding: 20, borderColor: theme.disable, borderWidth: 1, borderRadius: 50, backgroundColor:T1?Colors.primary:theme.bg}}>

                                                <Icon name='checkbox-outline' size={30} color={T1 ? '#fff': theme.disable}></Icon>
                                            </TouchableOpacity>
                                            <Text style={[style.b16, { color: T1 ? Colors.primary:theme.disable, textAlign: 'center', marginTop: 10 }]}>All</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={()=>setT2(!T2)}
                                            style={{ padding: 20, borderColor: theme.disable, borderWidth: 1, borderRadius: 50, backgroundColor:T2?Colors.primary:theme.bg}}>

                                                <Icon name='calendar-outline' size={30} color={T2 ? '#fff': theme.disable}></Icon>
                                            </TouchableOpacity>
                                            <Text style={[style.b16, { color: T2 ? Colors.primary:theme.disable, textAlign: 'center', marginTop: 10 }]}>Events</Text>
                                        </View>
                                    </View>
                                </ScrollView> */}

                                {
                                    list.length > 0 ? (
                                        <View style={{flexDirection:'row', flexWrap: 'wrap', width: '100%'}}>
                                            {
                                                list.map((item, index) => (
                                                    <TouchableOpacity style={[{padding:5, width: "50%"}]} activeOpacity={0.9} key={index} onPress={() => navigation.navigate('EventDetail', { itemObj: item })}>
                                                        <View style={[style.shadow,{padding:10,backgroundColor:theme.borderbg,borderRadius:15, flex: 1}]}>
                                                            <ImageBackground source={{ uri: item.image[0] }}
                                                            resizeMode='stretch'
                                                            imageStyle={{ borderRadius: 20}}
                                                            style={{height: height/6}}></ImageBackground>
                                                            <Text style={[style.b18,{color:theme.txt,marginTop:5}]}>{item.eventName}</Text>
                                                            <Text style={[style.r12,{color:Colors.primary,marginVertical:5}]}>{moment.utc(item.eventDate).local().format('MMM DD, YYYY')}</Text>
                                                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                                                <Icon name='location' size={20} color={Colors.primary}></Icon>
                                                                <Text style={[style.r12,{color:theme.disable2,flex:1,marginHorizontal:10,}]}>{item.location ? (item.location.length > 10 ? `${item.location.substring(0, 10)}...` : item.location) : 'No Location'}</Text>
                                                                <View>
                                                                <Icon name='list-circle-outline' size={20} color={Colors.primary}></Icon>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    ) : (
                                        <View style={{ height: '80%', width: '100%', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/noevents.png')} resizeMode='stretch' style={{width:width/1.5, height:height/4.2, marginTop: '30%' }}></Image>

                                            {
                                                error && error.length > 0 ? (
                                                    <Text style={{ color: 'red', marginTop: 20, textAlign: 'center' }}>{error}</Text>
                                                ) : (
                                                    null
                                                )
                                            }
                                        </View>
                                    )
                                }

                                <View style={{ marginTop: 100, marginBottom: 30 }} />
                            </>
                        )
                    }

                    </ScrollView>

 

            </View>
        </SafeAreaView>
    )
}