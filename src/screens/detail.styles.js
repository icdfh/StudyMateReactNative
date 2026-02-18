import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    marginBottom: 24,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primaryText,
  },
});
