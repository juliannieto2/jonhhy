import { Ionicons } from "@expo/vector-icons";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";
import { mostrarAlerta } from "../utils/alerta";

// Datos de contacto que se muestran en las alertas (Reto 2)
const contacto = {
  correo: "juliannieto321238@gmail.com",
  telefono: "+57 300 000 0000",
  linkedin: "https://www.linkedin.com/in/juliannieto",
  facebook: "https://www.facebook.com/juliannieto",
  github: "https://github.com/juliannieto2",
};

// Muestra el dato en una alerta y ofrece abrirlo (correo, teléfono o enlace)
const mostrarContacto = (titulo: string, dato: string, url: string) => {
  mostrarAlerta(titulo, dato, { texto: "Abrir", onPress: () => Linking.openURL(url) });
};

const Inicio = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Julian Nieto</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA en Análisis y Desarrollo de Software, apasionado por el
          desarrollo de aplicaciones móviles y web. Con habilidades en React Native,
          JavaScript, TypeScript, HTML5, CSS y gestión de bases de datos relacionales
          (MySQL) y no relacionales (MongoDB).
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8B464"
          onPress={() =>
            mostrarContacto("Correo", contacto.correo, `mailto:${contacto.correo}`)
          }
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#22c55e"
          onPress={() =>
            mostrarContacto("Teléfono", contacto.telefono, `tel:${contacto.telefono}`)
          }
        />
        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          onPress={() => mostrarContacto("LinkedIn", contacto.linkedin, contacto.linkedin)}
        />
        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877f2"
          onPress={() => mostrarContacto("Facebook", contacto.facebook, contacto.facebook)}
        />
        <MiBoton
          textoBoton="Repositorios GitHub"
          nombreIcono="logo-github"
          colorBoton="#24292f"
          onPress={() => mostrarContacto("GitHub", contacto.github, contacto.github)}
        />
      </View>
    </ScrollView>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});
