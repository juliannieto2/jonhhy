import { StyleSheet, Text, View } from "react-native";

const Estudios = () => {
  return (
    <View style={estilos.contenedor}>
      <Text>Estudios</Text>
    </View>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: "center", justifyContent: "center" },
});
