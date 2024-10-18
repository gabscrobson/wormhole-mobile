import { useState } from "react";
import Eitri from "eitri-bifrost";
import sendIcon from "../assets/images/send.svg";
import { Files } from "../enums/Files";
import qrCodeImage from "../assets/images/files/qrcode.png";

export default function Send() {
    const [isUploading, setIsUploading] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    async function handleSelectFile() {
        let selectedFile = await Eitri.fs.openFilePicker({
            fileExtension: ["pdf", "jpg", "png", "txt"],
            maxSize: 6291456,
            allowsMultipleSelection: false
        });
        setFile(selectedFile[0]);

        console.log(selectedFile);
        console.log(selectedFile.fileName);

        setIsUploading(true);
        setProgress(0);

        // Simulate a 6-second loading bar
        let interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    return 100;
                }
                return prev + 1.67; // 100 / 60 = 1.67 (approx)
            });
        }, 100); // 100ms interval for 6 seconds total

        setIsReady(true);
    }

    return (
        <Window bottomInset customColor="#0d0d0d" statusBarTextColor="white">
            <View marginTop="jumbo" padding="small"> 
                <Modal
                    show={showModal}
                    title={closeModal}
                >
                    <View alignItems="center" justifyContent="center">
                        <Image width={200} height={200} src={qrCodeImage} box textAlign="center" />
                        <Button block size="micro" width="100" label='OK' onPress={closeModal} marginTop="small"></Button>
                    </View>
                </Modal>

                <View height="10em" borderStyle="dashed" borderWidth="hairline" borderRadius="small" borderColor="neutral-100" direction="column" alignItems="center" justifyContent="center">
                    {isUploading ? (
                        <>
                            <Image width={50} height={50} src={sendIcon} box textAlign="center" />
                            <Text color="neutral-100">{`Enviando ${file.fileName}...`}</Text>
                            <View borderRadius="pill" backgroundColor="neutral-700" height={16} width="12em">
                                <View borderRadius="pill" width={`${progress}%`} height='100%' backgroundColor='primary-300' />
                            </View>
                        </>
                    ) : isReady ? (
                        <View marginTop="small" direction="column" alignItems="center" justifyContent="center">
                            <Text color="neutral-100">{`Código do arquivo: ${Files[file.fileName]}`}</Text>
                            <Button block size="micro" marginTop="small" label="QRcode" onPress={openModal} />
                            <Button block size="micro" variant="ghost" marginTop="small" label="Continue" onPress={() => {
                                setIsReady(false);
                            }} />
                        </View>
                    ) : (
                        <>
                            <Image width={50} height={50} src={sendIcon} box textAlign="center" />
                            <Text color="neutral-100" box textAlign="center">Escolha um arquivo para enviar</Text>
                        </>
                    )}
                </View>
                <Button block variant="ghost" marginTop="small" label="Selecionar Arquivo" onPress={handleSelectFile} />
                <Button block variant="ghost" marginTop="small" label="Colar arquivo" />
            </View>
            <Navbar selectedIcon="send" />
        </Window>
    );
}