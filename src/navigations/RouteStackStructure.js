import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuDrawerStructure from "./MenuDrawerStructure";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import MovieListsScreen from "../screens/MovieListsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UpdateUserScreen from "../screens/UpdateUserScreen";
import CreateListsScreen from "../screens/CreateListScreen";
import ManageListsScreen from "../screens/ManageListsScreen";
import EditListScreen from "../screens/EditListScreen";

const Stack = createStackNavigator();

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting logged user data with AsyncStorage");
  }
};

export const homeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Peliculas", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: "Detalle de la Pelicula", //Set Header Title
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
        }}
      />
    </Stack.Navigator>
  );
};

export const registerScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Registrarse", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const loginScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Iniciar sesion", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const logoutScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          title: "Cerrar sesion", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const movieListsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lists"
        component={MovieListsScreen}
        options={{
          title: "Ver listas de Pelis", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
        }}
      />
    </Stack.Navigator>
  );
};

export const createListsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Createlists"
        component={CreateListsScreen}
        options={{
          title: "Crear listas de Pelis", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
        }}
      />
    </Stack.Navigator>
  );
};

export const profileScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const manageListsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Managelists"
        component={ManageListsScreen}
        options={{
          title: "Administrar mis listas de Pelis", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color            
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="EditList"
        component={EditListScreen}
        options={{
          title: "Edita tu lista", //Set Header Title
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};


export const updateUserScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Update"
        component={UpdateUserScreen}
        options={{
          title: "Configuración", //Set Header Title
          headerLeft: () => (
            <MenuDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#cfcba7", //Set Header color
          },
          headerTintColor: "#333", //Set Header text color            
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

