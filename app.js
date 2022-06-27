import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window')
const customWidth = width
import Svg, {
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop, } from "react-native-svg";

const Union = (props) => (
  <Svg
    width={376}
    height={748}
    viewBox="0 0 376 748"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M240.64 33.7113C245.197 43.2554 253.762 51.3919 264.338 51.3919H345.5C362.069 51.3919 375.5 64.8234 375.5 81.3919V726.392C375.5 737.99 366.098 747.392 354.5 747.392H21.5C9.90202 747.392 0.5 737.99 0.5 726.392V81.3919C0.5 64.8234 13.9315 51.3919 30.5 51.3919H111.661C122.237 51.3919 130.802 43.2554 135.359 33.7113C144.738 14.0707 164.784 0.500977 188 0.500977C211.216 0.500977 231.262 14.0707 240.64 33.7113Z"
      fill="blue"
    />
  </Svg>
);

const MySvg = (props) => (
  <Svg
    width={376}
    height={272}
    viewBox="0 0 376 272"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.5 0.391602H375.5V178.392C375.5 203.244 355.353 223.392 330.5 223.392H45.5C20.6472 223.392 0.5 203.244 0.5 178.392V0.391602Z"
      fill="#01A9B4"
    />
    <G opacity={0.7}>
      <Rect
        x={-122.5}
        y={113.649}
        width={428.778}
        height={147.122}
        transform="rotate(-34.0073 -122.5 113.649)"
        fill="url(#paint0_linear_2219_8078)"
      />
      <Rect
        x={-27.5}
        y={130.842}
        width={345.536}
        height={147.122}
        transform="rotate(-34.0073 -27.5 130.842)"
        fill="url(#paint1_linear_2219_8078)"
      />
      <Rect
        x={39.5}
        y={149.649}
        width={345.536}
        height={147.122}
        transform="rotate(-34.0073 39.5 149.649)"
        fill="url(#paint2_linear_2219_8078)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_2219_8078"
        x1={91.8888}
        y1={113.649}
        x2={91.8888}
        y2={260.771}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02868E" stopOpacity={0.34} />
        <Stop offset={1} stopColor="#232A37" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2219_8078"
        x1={145.268}
        y1={130.842}
        x2={145.268}
        y2={277.964}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02868E" stopOpacity={0.4} />
        <Stop offset={1} stopColor="#00CFDC" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2219_8078"
        x1={212.268}
        y1={149.649}
        x2={212.268}
        y2={296.771}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02868E" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#00CFDC" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default function App() {
  return (
    <>
    <View style={styles.section1Container}>
      <View style={{ position: 'absolute', left: 0, right: 0, top: - (height * 0.33)}}>
        <MySvg height={height} width={customWidth + 2}/>
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
