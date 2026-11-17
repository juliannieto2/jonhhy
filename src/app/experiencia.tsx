import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Julian Nieto</Text>
        <Text style={estilos.subtitulo}>Experiencia Laboral</Text>
      </View>

      <TarjetaExperiencia
        cargo="Desarrollador Full Stack (Proyecto Formativo)"
        empresa="SENA - CGMLTI"
        periodo="2025 - Actualidad"
        descripcion="Desarrollo del proyecto formativo con React, React Native y Node.js. Diseño de la base de datos, control de versiones con Git y trabajo en equipo con metodologías ágiles."
      />
      <TarjetaExperiencia
        cargo="Desarrollador de Aplicaciones Móviles"
        empresa="Proyectos académicos"
        periodo="2025"
        descripcion="Creación de aplicaciones con Expo y React Native: navegación por pestañas, componentes reutilizables y consumo de APIs."
      />
      <TarjetaExperiencia
        cargo="Auxiliar de Soporte Técnico"
        empresa="Tecnoservicios S.A.S."
        periodo="2023 - 2024"
        descripcion="Mantenimiento preventivo y correctivo de equipos, instalación de software y atención a usuarios."
      />
    </ScrollView>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
});
