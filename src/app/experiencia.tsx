import { StyleSheet, Text, View } from "react-native";

const Experiencia = () => {
  return (
    <View style={estilos.contenedor}>
      <Text>Experiencia</Text>
    </View>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: "center", justifyContent: "center" },
});
