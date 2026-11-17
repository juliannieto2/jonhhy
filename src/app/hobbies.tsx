import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Julian Nieto</Text>
        <Text style={estilos.subtitulo}>Intereses y Hobbies</Text>
      </View>

      <TarjetaHobby
        nombre="Fútbol"
        icono="football"
        descripcion="Juego con amigos los fines de semana."
        color="#22c55e"
      />
      <TarjetaHobby
        nombre="Videojuegos"
        icono="game-controller"
        descripcion="Juegos de estrategia y en línea."
        color="#8b5cf6"
      />
      <TarjetaHobby
        nombre="Música"
        icono="musical-notes"
        descripcion="Escuchar música mientras programo."
        color="#f97316"
      />
      <TarjetaHobby
        nombre="Programar proyectos personales"
        icono="code-slash"
        descripcion="Aprender tecnologías nuevas creando apps."
        color="#2563eb"
      />
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
});
