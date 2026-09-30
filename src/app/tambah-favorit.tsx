// app/tambah-favorit.tsx
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function ModalTambahFavorit() {
    return (
        <View style={{ padding: 16 }}>
            <Text style={{ marginBottom: 16 }}>
                Tambahkan kota ini ke daftar favorit?
            </Text>

            <Button
                title="Simpan"
                onPress={() => router.back()}
            />

            <View style={{ marginTop: 8 }}>
                <Button
                    title="Batal"
                    onPress={() => router.back()}
                />
            </View>
        </View>
    );
}