import React from "react";
import { styles } from "@/styles/appstyles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const [amount, setAmount] = useState ("");
  const [amount1, setAmount1] = useState ("");
  const [amount2, setAmount2] = useState ("");
  const [amount3, setAmount3] = useState ("");
 const [amount4, setAmount4] = useState ("");

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Record your daily expenses</Text>
      </View>

      <View>
       <Text style={styles.description}>Total Expenses</Text>
      <TextInput 
      style={styles.inputContainer}
      value={amount4}
      inputMode="decimal"
      onChange={(e) => setAmount4(e.nativeEvent.text)}
      placeholderTextColor= "black" 
      />
      </View>

      <View>
      <Text style={styles.description}>Food</Text>
      <TextInput 
      style={styles.inputContainer}
      value={amount}
      onChange={(e) => setAmount(e.nativeEvent.text)}
      inputMode="decimal"
      placeholder="Enter Amount"
      placeholderTextColor= "black" 
      />
      </View>
      <View>
      <Text style={styles.description}>Bills</Text>
      <TextInput 
      style={styles.inputContainer}
      value={amount1}
      inputMode="decimal"
      onChange={(e) => setAmount1(e.nativeEvent.text)}
      placeholder="Enter Amount"
      placeholderTextColor= "black" 
      />
      </View>
      <View>
      <Text style={styles.description}>Utilities</Text>
      <TextInput 
      style={styles.inputContainer}
      value={amount2}
      inputMode="decimal"
      onChange={(e) => setAmount2(e.nativeEvent.text)}
      placeholder="Enter Amount"
      placeholderTextColor= "black" 
      />
      </View>

      <View>
      <Text style={styles.description}>Other Expenses</Text>
      <TextInput 
      style={styles.inputContainer}
      value={amount3}
      inputMode="decimal"
      onChange={(e) => setAmount3(e.nativeEvent.text)}
      placeholder="Enter Amount"
      placeholderTextColor= "black" 
      />
      </View>

      <TouchableOpacity 
      style={styles.button}
       onPress={() => console.log('Button Pressed')}
      >
      <Text style={styles.inputtext}>Add Expenses</Text>
    </TouchableOpacity>

      
    </View>
    </SafeAreaProvider>
  );
}
