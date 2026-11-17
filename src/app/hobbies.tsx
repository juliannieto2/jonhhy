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
        <Text style={estilos.ayuda}>Toca una tarjeta para ver más detalles</Text>
      </View>

      <TarjetaHobby
        nombre="Fútbol"
        icono="football"
        descripcion="Juego con amigos los fines de semana."
        color="#22c55e"
        detalle="Juego como mediocampista desde el colegio. Me ayuda a trabajar en equipo y a despejar la mente después de clase."
      />
      <TarjetaHobby
        nombre="Videojuegos"
        icono="game-controller"
        descripcion="Juegos de estrategia y en línea."
        color="#8b5cf6"
        detalle="Me gustan los juegos de estrategia y los multijugador en línea. También me interesa cómo se desarrollan los videojuegos."
      />
      <TarjetaHobby
        nombre="Música"
        icono="musical-notes"
        descripcion="Escuchar música mientras programo."
        color="#f97316"
        detalle="Escucho rock, reggaetón y lo-fi. La música me ayuda a concentrarme cuando estoy programando."
      />
      <TarjetaHobby
        nombre="Programar proyectos personales"
        icono="code-slash"
        descripcion="Aprender tecnologías nuevas creando apps."
        color="#2563eb"
        detalle="En mi tiempo libre practico creando apps con React Native y Node.js y las subo a mi GitHub."
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
  ayuda: { fontSize: 12, color: "#94a3b8", marginTop: 4 },
});
