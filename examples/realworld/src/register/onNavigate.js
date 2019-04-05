export const onNavigate = {
  Register: () => ({ update, navigation }) => update(Object.assign({ register: {} }, navigation))
}
