import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Profiles, Metrics } from './App/Themes';
import { NavBar, ProfileCard, ActionBar } from './App/Components/';

export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage, setProfileImage] = useState(haroldProfile.image);
  const [name, setName] = useState(haroldProfile.name);
  const [age, setAge] = useState(haroldProfile.age);
  const [occupation, setOccupation] = useState(haroldProfile.occupation);

  let loadNewProfile = () => {
    const newProfile = Profiles.random();
    setProfileImage(newProfile.image);
    setName(newProfile.name);
    setAge(newProfile.age);
    setOccupation(newProfile.occupation);
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ProfileCard 
        profileImage={profileImage} name={name} 
        age={age} occupation={occupation}
      />
      <ActionBar onPressNext={loadNewProfile} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Metrics.lightBackground,
  },
});