// components/IndikatorAQI.tsx
import { View, Text } from "react-native";
import { LaporanUdara } from "../types/cuaca";

export default function IndikatorAQI({ kota, indeksAQI, tingkat, diperbaruiPada }: LaporanUdara) {
  // Menentukan warna teks/border berdasarkan tingkat AQI
  let warnaTingkat = "green"; // Default untuk "BAIK"
  
  if (tingkat === "SEDANG") {
    warnaTingkat = "gold";
  } else if (tingkat === "TIDAK_SEHAT") {
    warnaTingkat = "orange";
  } else if (tingkat === "BERBAHAYA") {
    warnaTingkat = "red";
  }

  return (
    <View style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: warnaTingkat, backgroundColor: "#fff" }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{kota}</Text>
      <Text>Indeks AQI: {indeksAQI}</Text>
      <Text style={{ color: warnaTingkat, fontWeight: "bold", marginTop: 4 }}>
        Status: {tingkat}
      </Text>
      
      {/* Menampilkan waktu update HANYA jika datanya ada (karena opsional) */}
      {diperbaruiPada && (
        <Text style={{ fontSize: 12, color: "gray", marginTop: 8 }}>
          Diperbarui: {diperbaruiPada}
        </Text>
      )}
    </View>
  );
}