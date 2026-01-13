import { styles } from "@/styles/appstyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const [amount, setAmount] = useState ("");
  const [title, setTitle] = useState ("");
  const [expenses, setExpenses] = useState<{ id: number; title: string; amount: string }[]>([]);

  // Load expenses from AsyncStorage on mount
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const stored = await AsyncStorage.getItem("expenses");
        if (stored) {
          setExpenses(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Failed to load expenses", error);
      }
    };
    loadExpenses();
  }, []);

  const handleAddExpense = async () => {
    try {
      if (!amount || !title) {
        alert("Please enter an amount and title");
        return;
      }

      // Generate incremental ID: max existing ID + 1, or 1 if empty
      const newId = expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1;

      const newExpense = { id: newId, title, amount };

      // Update local state
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);

      // Save to AsyncStorage
      await AsyncStorage.setItem("expenses", JSON.stringify(updatedExpenses));

      // Clear input fields
      setTitle('');
      setAmount('');

      console.log('New expense: ', newExpense);
      console.log('Updated expenses: ', expenses);
    } catch (error) {
      console.log(error);
    }
  };
  // Calculate total
  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <View>
      <Text style={styles.title}>Record your daily expenses</Text>
      </View>

      <View>
       <Text style={styles.description}>Total Expenses: ₦{total.toFixed(2)}</Text>
      {/* <TextInput 
      style={styles.inputContainer}
      value={amount4}
      inputMode="decimal"
      onChange={(e) => setAmount4(e.nativeEvent.text)}
      placeholderTextColor= "black" 
      /> */}
      </View>

      <view>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.expenseContainer}>
              <Text style={styles.expenseTitle}>{item.title.toUpperCase()} : ₦{item.amount}</Text>
              
            </View>
          )}
          style={styles.list}
          contentContainerStyle={expenses.length === 0 ? styles.emptyContainer : null}
          ListEmptyComponent={<Text style={styles.emptyText}>No expenses yet</Text>}
        />
      </view>



      <View>
        <Text style={styles.description}>Title</Text>
        <TextInput 
        style={styles.inputContainer}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter Title"
        placeholderTextColor= "gray"
        />
      </View>
      <View>
        <Text style={styles.description}>Amount</Text>
        <TextInput 
        style={styles.inputContainer}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter Amount"
        placeholderTextColor= "gray" 
        />
      </View>
      
      
      <TouchableOpacity 
       style={styles.button}
       onPress={handleAddExpense}
      >
       <Text style={styles.inputtext}>Add Expense</Text>
      </TouchableOpacity>

      
    </View>
    </SafeAreaProvider>
  );
}
