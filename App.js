import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./Screen/HomeScreen";
import CameraBackScreen from "./Screen/CameraBackScreen";
import CameraFrontScreen from "./Screen/CameraFrontScreen";

// Switching navigator
const SwitchNavigator = createSwitchNavigator(
  {
    CameraBack: {
      screen: CameraBackScreen
    },
    Home: {
      screen: HomeScreen
    },
    CameraFront: {
      screen: CameraFrontScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

// Creating app
const AppNavigator = createAppContainer(SwitchNavigator);
export default AppNavigator;
