import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screen/HomeScreen";
import CameraBackScreen from "./Screen/CameraBackScreen";
import CameraFrontScreen from "./Screen/CameraFrontScreen";

// Stack for controlling pages
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      //Config screen here (Optional)
    }
  }
});

const CameraBackStack = createStackNavigator({
  CameraBack: {
    screen: CameraBackScreen,
    navigationOptions: {
      header: null
    }
  }
});

const CameraFrontStack = createStackNavigator({
  CameraFront: {
    screen: CameraFrontScreen
  }
});

// Switching navigator
const SwitchNavigator = createSwitchNavigator(
  {
    CameraBack: {
      screen: CameraBackStack
    },
    Home: {
      screen: HomeStack
    },
    CameraFont: {
      screen: CameraFrontStack
    }
  },
  {
    initialRouteName: "CameraFont"
  }
);

// Creating app
const AppNavigator = createAppContainer(SwitchNavigator);
export default AppNavigator;
