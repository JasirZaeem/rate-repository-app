import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "accessToken";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  getAccessToken = async () =>
    await AsyncStorage.getItem(`${this.namespace}:${TOKEN_KEY}`);

  setAccessToken = async (accessToken) =>
    await AsyncStorage.setItem(`${this.namespace}:${TOKEN_KEY}`, accessToken);

  removeAccessToken = async () =>
    await AsyncStorage.removeItem(`${this.namespace}:${TOKEN_KEY}`);
}

export default AuthStorage;
