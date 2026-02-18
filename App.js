import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootTabs from "./src/navigation/RootTabs";
import { FavoritesProvider } from "./src/context/FavouritesContext";

export default function App(){
  return(
    <FavoritesProvider>
      <NavigationContainer>
        <RootTabs/>
      </NavigationContainer>
    </FavoritesProvider>

  )
}