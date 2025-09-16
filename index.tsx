import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SERVER_URL = "https://zorrilla-classmanagement-server.vercel.app/users"



export default function App() {
  const [lastName, setLastName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [section, setSection] = useState(``);
  const [status, setStatus] = useState(``);
  const [message,setMessage] = useState(``);


const handlePresent = async() => {
  setMessage("Present");
  try {
    const response = await fetch (SERVER_URL,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        lastName : lastName,
        firstName : firstName,
        section : section,
        status : "Present",
      }),
    });
    if (!response.ok) {
      throw new Error ("Server not responding");
    }

    const result = await response.json();
    setMessage("Attendance is Submitted");
    setFirstName("");
    setLastName("");
    setSection("");



  }
  catch(error){
    console.error(error);
    setMessage(`Server Error or Connection Failed`)
  }

};


const handleAbsent = async() => {
  setMessage("Absent");
  try {
    const response = await fetch (SERVER_URL,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        lastName : lastName,
        firstName : firstName,
        section : section,
        status : "Absent",
      }),
    });
    if (!response.ok) {
      throw new Error ("Server not responding");
    }

    const result = await response.json();
    setMessage("Attendance is Submitted");
    setFirstName("");
    setLastName("");
    setSection("");
    


  }
  catch(error){
    console.error(error);
    setMessage(`Server Error or Connection Failed`)
  }

};



  return (
    <View style={styles.container}>
      
      {/* Label + Input Fields */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lastname:</Text>
        <TextInput value={lastName}
        onChangeText={setLastName}
        style={styles.input} placeholder="Enter text..." />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Firstname:</Text>
        <TextInput value={firstName}
        onChangeText={setFirstName}
        style={styles.input} placeholder="Enter text..." />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Section:</Text>
        <TextInput value={section}
        onChangeText={setSection}
        style={styles.input} placeholder="Enter text..." />
      </View>

      <Text>
        {message}
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress ={handlePresent}>
          <Text style={styles.buttonContainer}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={handleAbsent}>
          <Text style={styles.buttonContainer}>Absent</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

// -------------------- Styles --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf0f6',
    padding: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4a9d2ff',
    borderRadius: 12,
    paddingVertical: 16, // increased for taller box
    paddingHorizontal: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: '50%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 12,
    width: 80,
  },
  input: {
    flex: 1,
    height: 100, // increased height
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#fdfdfd',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    width: '200%',
    gap: 150,
  },
});


