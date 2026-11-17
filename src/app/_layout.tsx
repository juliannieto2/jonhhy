import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ComponentProps } from "react";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

// Devuelve la función tabBarIcon para el ícono indicado.
// El color que entrega Tabs se convierte a string porque usamos colores hexadecimales.
const iconoPestana =
  (nombre: NombreIcono) =>
  ({ color, size }: { color: unknown; size: number }) => (
    <Ionicons name={nombre} size={size} color={color as string} />
  );

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#64748b",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", color: "#0f172a" },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        }}
      >
        {/* Pestaña de Inicio */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            headerTitle: "Datos Personales",
            tabBarIcon: iconoPestana("person-outline"),
          }}
        />

        {/* Pestaña de Estudios */}
        <Tabs.Screen
          name="estudios"
          options={{
            title: "Estudios",
            headerTitle: "Formación Académica",
            tabBarIcon: iconoPestana("school-outline"),
          }}
        />

        {/* Pestaña de Experiencia */}
        <Tabs.Screen
          name="experiencia"
          options={{
            title: "Experiencia",
            headerTitle: "Experiencia Laboral",
            tabBarIcon: iconoPestana("briefcase-outline"),
          }}
        />

        {/* Pestaña de Hobbies */}
        <Tabs.Screen
          name="hobbies"
          options={{
            title: "Hobbies",
            headerTitle: "Intereses y Hobbies",
            tabBarIcon: iconoPestana("heart-outline"),
          }}
        />
      </Tabs>
    </>
  );
}
