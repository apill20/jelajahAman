// app/detail/[kota].tsx
import { Button, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import WeatherCard from "../../../components/WeatherCard";

export default function HalamanDetail() {
    const { kota } = useLocalSearchParams<{ kota: string }>();
    const router = useRouter();

    return (
    <View style={{ padding: 16,gap: 16 }}>
            <WeatherCard kota={kota} suhu={29} tingkatAQI="BAIK" />

            <View style={{ marginTop: 16 }}>
                <Button
                    title="Tambah Favorit"
                    onPress={() => router.push("/tambah-favorit")}
                    accessibilityLabel="Tambah kota ke favorit"
                />
            </View>
    </View>
    );
}