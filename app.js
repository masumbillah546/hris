import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Mysvg from './assets/Group1000002720.svg'
import Union from './assets/Union.svg'

// const image = { uri: 'https://reactjs.org/logo-og.png'}
// const image = require('./assets/Group1000002720.png')
// const Union = require('./assets/Union.png')
const { height, width } = Dimensions.get('window')
const customWidth = width


export default function App() {
  return (
    <>
    <View style={styles.section1Container}>
      <View style={{ position: 'absolute', left: 0, right: 0, top: - (height * 0.33)}}>
        <Mysvg height={height} width={width + 2}/>
      </View>
      <View style={styles.backButtonContainer}>
        <Text>Back</Text>
      </View>
    </View>
    <View style={styles.section2Container}>
      <View style={styles.employeeCard}>
        <Union height= {height} width= {customWidth + 2} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.employeeImage}
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        />
      </View>
      <View style={styles.employeeNameContainer}>
        <Text style={styles.employeeNameStyle}>Md. Masum Billah</Text>
        <Text style={styles.designation}>Jr. Programmer</Text>
      </View>
      <View style={{
          position: 'absolute',
          top: - (height * 0.04),
          zIndex: 1,
          height: '100%',
          width : width - 40,
      }}>
        <View style={styles.container3}>
          <ScrollView showsVerticalScrollIndicator= {false} style={styles.infoContainer}>
            { [1,2,3,4,5,6,7,8].map((item, i) => (
            <View key={item} style={{...styles.info, borderTopWidth: i === 0 ? 0 : 1, }}>
              <View style={{ marginRight: 6, flex: 1}}><Text style={styles.infoLabel}>Label</Text></View>
              <View style={{ marginLeft: 6, flex: 1 }}><Text style={styles.infoValue}>Value</Text></View>
            </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.activityButtonStyle}>
            <Text style={styles.activityButtonLabel}>View Activity</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  section1Container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section2Container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: - (height * 0.274),
    zIndex: 1,
    height: customWidth * 0.3,
    width:  customWidth * 0.3,
    borderRadius: 100,
    overflow: 'hidden'
  },
  employeeImage: {
    height: '100%',
    width: '100%',
  },
  container3: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    zIndex: 2,
    top: (height * 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  employeeCard: {
    position: 'absolute',
    top: - (height * 0.29),
  },
  employeeNameContainer: {
    position: 'absolute',
    top: - (height * 0.12),
    zIndex: 1,
    alignItems: 'center'
  },
  employeeNameStyle: {
    fontSize: 18,
    color: 'rgba(30, 35, 45, 0.7)',
    fontWeight: '500',
  },
  designation: {
    fontSize: 14,
    color: 'rgba(30, 35, 45, 0.6)',
  },
  activityButtonStyle: {
    backgroundColor: '#01A9B4',
    position: 'absolute',
    bottom: 0,
    width: width - 40,
    padding: 16,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 6,
  },
  activityButtonLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  infoContainer: {
    backgroundColor: '#F6F6F6CC',
    maxHeight: height * 0.44,
    width: width - 40,
    borderRadius: 7,
    padding: 12,
  },
  info: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#C2C2C21A',
  },
  infoLabel: {
    color: 'rgba(110, 107, 123, 0.8)',
    fontSize: 14,
  },
  infoValue: {
    color: '#6E6B7B',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
