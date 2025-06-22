import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Kitten from '../../../assets/images/Kitten';
import Sun from '@/assets/images/Sun';
import Cloud from '@/assets/images/Cloud';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF8308',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          height: 80,
          borderTopWidth: 0,
          paddingTop: 20,
        },
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <Svg
              width="100%"
              height="100%"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
            <Path
              d="
                M0,60
                C0,20 400,20 400,60
                L400,100
                L0,100
                Z
              "
              fill="#07CB89"
            />
            </Svg>
          </View>
        ),
        tabBarItemStyle: {
          width: 80,
          alignItems: 'center',
          justifyContent: 'center', 
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name='(main)/index'
        options={{
          title: 'Main',
          tabBarIcon: ({ color }) => (
            <View style={styles.IconContainer}>
              <Sun fill={color} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="kitten/index"
        options={{
          title: '',
          tabBarIcon: () => (
            <View style={styles.IconContainer}>
              <Kitten />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="breakaway/index"
        options={{
          title: 'Breakaway',
          tabBarIcon: ({ color }) => (
            <View style={styles.sunIconContainer}>
              <Cloud fill={color}/>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    position: 'absolute',
    borderRadius: 100,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  sunIconContainer: {
    position: 'absolute',
    borderRadius: 100,
    padding: 32,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});