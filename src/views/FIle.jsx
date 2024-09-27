import HeaderComponent from "../components/HeaderComponent";
import { CodeToFileName } from "../enums/Files";

export default function File(props) {
    const code = props.location.state.code
    const [countdown, setCountdown] = useState((24 * 60 * 60) - 17);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    async function downloadFIle() {
        await Eitri.fs.download({
            url: "blob:https://dash.cloudflare.com/18acfd9e-2964-4e62-9d7d-f1f9860891e7",
            fileName: "guiadomochileiro.pdf",
        })
    }

    return (
        <Window bottomInset customColor="#0d0d0d" statusBarTextColor="white">
            <HeaderComponent text="Digitar código" />
            <View marginTop="jumbo" padding="small" direction="column" alignItems="center" justifyContent="center">
                <Text color="neutral-100" marginBottom="medium" variant="h5">{CodeToFileName[code]}</Text>
                <Text block color="neutral-100" marginBottom="medium" variant="h6">{formatTime(countdown)}</Text>
                <Button marginTop="small" label="Download" onPress={downloadFIle} />
            </View>
            <Navbar selectedIcon="receive" />
        </Window>
    )
}