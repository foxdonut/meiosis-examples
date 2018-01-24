import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import flyd from "flyd";

const update = flyd.stream();
const initialModel = { counter: 0 };
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const actions = {
  incr: () => update(model => {
    model.counter++;
    return model;
  })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default class App extends React.Component {
  componentWillMount() {
    const self = this;
    models.map(model => self.setState({ model }));
  }

  render() {
    const model = this.state.model;

    return (
      <View style={styles.container}>
        <Text>Counter:</Text>
        <Text>{model.counter}</Text>
        <Button onPress={actions.incr} title="Increment"></Button>
      </View>
    );
  }
}