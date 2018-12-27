import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import flyd from "flyd";

const createActions = update => ({
  increase: () => update(state => {
    state.value = state.value + 1;
    return state;
  })
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const createView = actions => state => (
  <View style={styles.container}>
    <Text>Temperature: {state.value}&deg;C</Text>
    <Button onPress={actions.increase} title="Increase"/>
  </View>
);

const update = flyd.stream();
const states = flyd.scan((state, func) => func(state), { value: 20 }, update);

const view = createView(createActions(update));

export default class App extends React.Component {
  componentWillMount() {
    const self = this;
    states.map(state => self.setState(state));
  }

  render() {
    const state = this.state;
    return view(state);
  }
}
