import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import flyd from "flyd";

const createActions = update => ({
  increase: () => update(model => {
    model.value = model.value + 1;
    return model;
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

const createView = actions => model => (
  <View style={styles.container}>
    <Text>Temperature: {model.value}&deg;C</Text>
    <Button onPress={actions.increase} title="Increase"/>
  </View>
);

const update = flyd.stream();
const models = flyd.scan((model, func) => func(model), { value: 20 }, update);

const view = createView(createActions(update));

export default class App extends React.Component {
  componentWillMount() {
    const self = this;
    models.map(model => self.setState({ model }));
  }

  render() {
    const model = this.state.model;
    return view(model);
  }
}
