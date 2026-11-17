import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Julian Nieto</Text>
        <Text style={estilos.subtitulo}>Estudios</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Institución Educativa Municipal"
          anio={2022}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Curso de Inglés A2"
          institucion="SENA - Formación Complementaria"
          anio={2024}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Fundamentos de Programación en JavaScript"
          institucion="SENA - Formación Virtual"
          anio={2024}
          enCurso={false}
        />
        {/* Formación actual en el SENA: se resalta con enCurso={true} */}
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA - CGMLTI"
          anio={2025}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: { backgroundColor: "#ffffff", padding: 12, borderRadius: 12, elevation: 1 },
});
