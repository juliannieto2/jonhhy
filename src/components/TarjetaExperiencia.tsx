import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({ cargo, empresa, periodo, descripcion }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={20} color="#2563eb" />
        <Text style={estilos.cargo}>{cargo}</Text>
      </View>
      <Text style={estilos.empresa}>{empresa}</Text>
      <Text style={estilos.periodo}>{periodo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderLeftWidth: 4,
    borderLeftColor: "#2563eb",
  },
  encabezado: { flexDirection: "row", alignItems: "center", gap: 8 },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", flexShrink: 1 },
  empresa: { fontSize: 14, color: "#2563eb", marginTop: 4, fontWeight: "600" },
  periodo: { fontSize: 12, color: "#888888", marginBottom: 6 },
  descripcion: { fontSize: 14, color: "#475569", lineHeight: 20 },
});
