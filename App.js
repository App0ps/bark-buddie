import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB718Exx-blO5rPHrD1y0w1jq_icqUkyfs",
  authDomain: "barkbuddy-appops.firebaseapp.com",
  databaseURL: "https://barkbuddy-appops-default-rtdb.firebaseio.com",
  projectId: "barkbuddy-appops",
  storageBucket: "barkbuddy-appops.appspot.com",
  messagingSenderId: "105107500919",
  appId: "1:105107500919:web:51a6722761c1284809fb72",
  measurementId: "G-Q7K9Y1V4FG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  useEffect(() => {
    // Initialize Firebase when the component mounts
    // This ensures Firebase is initialized only once
    // and not on every render
    const initializeFirebase = async () => {
      // Your Firebase initialization code
    };

    initializeFirebase();

    // Clean up function
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your buddy!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
