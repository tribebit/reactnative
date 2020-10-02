import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/form/form.js';
import { theme } from './src/themes.js';
import { GlobalStyles } from './src/global.js';
import { ThemeProvider } from 'styled-components';
import { Burger } from './src/components/burger/burger.js';
import { Menu } from './src/components/menu/menu.js';
export default function App() {

      return (
          <ThemeProvider theme={theme}>
            <GlobalStyles />

             <View >
                <Form></Form>
                <StatusBar style="auto" />
              </View>
            
          </ThemeProvider>
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
