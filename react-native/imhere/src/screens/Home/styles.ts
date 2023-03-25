import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    flex: 1,
    fontSize: 16,
    height: 56,
    marginRight: 12,
    padding: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#31cf67',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  form: {
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: 36,
    width: '100%',
  }
});
