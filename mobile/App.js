import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./src/redux/reducers/reducer";
import AppNavigator from "./src/AppNavigator";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { LogBox, StatusBar, View, YellowBox } from "react-native";
import createSagaMiddleware from "redux-saga";
import saga from "./src/redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(saga);

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}
