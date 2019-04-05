export const onNavigate = {
  Login: () => ({ update, navigation }) => update(Object.assign({ login: {} }, navigation))
}
