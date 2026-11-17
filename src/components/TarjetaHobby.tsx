import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  nombre: string;
  icono: NombreIcono;
  descripcion: string;
  color: string;
};

const TarjetaHobby = ({ nombre, icono, descripcion, color }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <View style={[estilos.circulo, { backgroundColor: color }]}>
        <Ionicons name={icono} size={26} color="#ffffff" />
      </View>
      <View style={estilos.textos}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </View>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  circulo: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  textos: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  descripcion: { fontSize: 13, color: "#64748b", marginTop: 2 },
});
