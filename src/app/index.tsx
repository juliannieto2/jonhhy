import { StyleSheet, Text, View } from "react-native";

const Inicio = () => {
  return (
    <View style={estilos.contenedor}>
      <Text>Hoja de Vida</Text>
    </View>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: "center", justifyContent: "center" },
});
