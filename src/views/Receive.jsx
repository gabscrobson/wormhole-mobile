import Eitri from "eitri-bifrost";

export default function Receive() {
    const [code, setCode] = useState('')

    return (
        <Window bottomInset customColor="#0d0d0d" statusBarTextColor="white">
            <View marginTop="jumbo" padding="small">
                <Text color="neutral-100" marginBottom="medium" variant="h5">Digite o código do arquivo</Text>
                <View marginBottom='small' backgroundColor="neutral-100">
                    <Input
                        type='text'
                        inputMode='text'
                        value={code}
                        onChange={value => {
                            setCode(value)
                        }}
                        placeholder='Código do arquivo'
                    />
                </View>
                <Button block marginTop="small" label="Receber" onPress={() => {
                    Eitri.navigation.navigate({path: '/File', state: { code: code }})
                }} />
            </View>
            <Navbar selectedIcon="receive" />
        </Window>
    )
}