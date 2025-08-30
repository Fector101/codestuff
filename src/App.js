import { useState, useEffect } from "react";
import "./styles.css";
import BtmNav from "./components/BtmNav.js";
import SettingsScreen from "./screens/Settings.js";
export default function App() {
  const [current_screen, setCurrentScreen] = useState("link");
  return (
    <>
      <SettingsScreen />
      <BtmNav
        current_screen={current_screen}
        setCurrentScreen={setCurrentScreen}
      />
    </>
  );
}
