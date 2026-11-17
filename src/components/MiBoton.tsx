import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  textoBoton: string;
  nombreIcono: NombreIcono;
  colorBoton?: string;
  onPress: () => void;
};

// Botón reutilizable: recibe el texto, el ícono, el color y la acción a ejecutar
const MiBoton = ({ textoBoton, nombreIcono, colorBoton = "#2563eb", onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={nombreIcono} size={18} color="#ffffff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4,
  },
  texto: { color: "#ffffff", fontWeight: "bold", fontSize: 15 },
});
