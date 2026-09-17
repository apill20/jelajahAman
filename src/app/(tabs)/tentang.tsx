// app/(tabs)/tentang.tsx
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "../../constants/styles";

export default function TabTentang() {
    return (
        <SafeAreaView style={{ flex: 1, padding: spacing.sedang }}>
            <Text
                accessibilityLabel="Judul halaman Tentang"
                style={{
                    fontSize: typeScale.judul,
                    marginBottom: spacing.kecil,
                }}
            >
                Tentang Jelajah Aman
            </Text>

            <Text
                style={{
                    fontSize: typeScale.isi,
                    marginBottom: spacing.kecil,
                }}
            >

                Jelajah Aman adalah aplikasi untuk membantu pengguna
                melihat informasi cuaca berdasarkan kota yang dipilih.
            </Text>
        </SafeAreaView>
    );
}