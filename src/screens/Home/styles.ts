import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  event: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  date: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: "#1f1e25",
    heigh: 56,
    flex: 0.95,
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
  emptyText: {
    color: "#fdfcfe",
    textAlign: "center",
    fontSize: 14,
    // width: '80%'
  },
});
