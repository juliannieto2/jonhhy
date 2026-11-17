import { Alert, Platform } from "react-native";

type Accion = { texto: string; onPress: () => void };

// En Android e iOS se usa Alert.alert.
// En la versión web, react-native-web no implementa Alert.alert (no hace nada),
// por eso se usan window.alert y window.confirm del navegador.
export const mostrarAlerta = (titulo: string, mensaje: string, accion?: Accion) => {
  if (Platform.OS === "web") {
    if (accion) {
      if (window.confirm(`${titulo}\n\n${mensaje}\n\n¿${accion.texto}?`)) accion.onPress();
    } else {
      window.alert(`${titulo}\n\n${mensaje}`);
    }
    return;
  }

  if (accion) {
    Alert.alert(titulo, mensaje, [
      { text: "Cerrar", style: "cancel" },
      { text: accion.texto, onPress: accion.onPress },
    ]);
  } else {
    Alert.alert(titulo, mensaje);
  }
};
