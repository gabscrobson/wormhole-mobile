import Eitri from "eitri-bifrost";

export default function Home() {
    return (
        <Window bottomInset customColor="#0d0d0d" statusBarTextColor="white">
            <View color='neutral-100'>
                <View paddingHorizontal='small' paddingTop='nano' marginBottom='immense'>
                    <Text fontSize='big' fontWeight='bold' color='neutral-100' block textAlign="center" paddingTop='small'>
                        Wormhole
                    </Text>
                </View>
                <View paddingHorizontal='small' marginTop='immense'>
                    <Button block label="Enviar arquivo" onPress={() => Eitri.navigation.navigate({path: '/Send'})} />
                    <Button block marginTop="small" label="Receber arquivo" onPress={() => Eitri.navigation.navigate({path: '/Receive'})} />
                    <Button block variant="ghost" marginTop="small" label="Histórico" onPress={() => Eitri.navigation.navigate({path: '/Archive'})} />
                </View>
            </View>
        </Window>
    )
}

