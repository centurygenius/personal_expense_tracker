import { StyleSheet, Dimensions, View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'

// const { width, height } = Dimensions.get{"window"};

export const styles= StyleSheet.create({
  
  container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        textAlign: "left"
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "blue",
   textAlign: "left",
   marginTop: 10,
   
  },
  description: {
    fontSize: 16,
    color: "Black",
    marginTop: 10,
    textAlign: "left"
  },
  inputContainer: {
   width: 350,
   height: 40,
   borderRadius: 10,
   backgroundColor: "#D3D3D3",
   paddingHorizontal: 20,
   marginTop: 5,
  },
  button: {
    width: 200,
   height: 40,
   borderRadius: 10,
   backgroundColor: "blue",
   paddingHorizontal: 20,
   justifyContent: "center",
   alignItems: "center",
   textAlign: "center",
   marginTop: 20,
  },
  inputtext: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
}) 

