import React, { } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class app extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View onClick={() => console.log('arif dongo')} style={styles.greetingBox}>
          <View onInput={e => {
            const inputEvent = e.nativeEvent.inputEvent;
            if (inputEvent.action === 'down' && inputEvent.button === 65) {
              // do something
              console.log('arief dongo')
            }
            console.log('action:',inputEvent.action)
            console.log('buttonClass: ',inputEvent)
            // console.log('buttonClass: ',e.button)
          }}>
            { /* ... */}
            <Text style={styles.greeting}>
              OJAN GOBLOK 2
          </Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('app', () => app);
