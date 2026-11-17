import { StyleSheet, Text, View } from "react-native";

const Hobbies = () => {
  return (
    <View style={estilos.contenedor}>
      <Text>Hobbies</Text>
    </View>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: "center", justifyContent: "center" },
});
