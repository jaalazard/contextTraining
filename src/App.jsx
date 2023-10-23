import { useState } from "react";
import "./App.css";
import CurrentUserContext from "./contexts/CurrentUser";
import UserProfile from "./components/UserProfile";
import ButtonColorContext from "./contexts/ButtonColor";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [color, setColor] = useState('green');

  return (
    <>
      <CurrentUserContext.Provider value={{ isOnline, setIsOnline }}>
        <ButtonColorContext.Provider value={{ color, setColor }}>
          <UserProfile />
        </ButtonColorContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
