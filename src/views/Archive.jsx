import { useState, useEffect } from 'react';

export default function Archive() {
    const [harryPotterTime, setHarryPotterTime] = useState(24 * 60 * 60 - 72); // 24 hours in seconds
    const [guiaDoMochileiroTime, setGuiaDoMochileiroTime] = useState(24 * 60 * 60 - 25); // 24 hours in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setHarryPotterTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
            setGuiaDoMochileiroTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Window bottomInset customColor="#0d0d0d" statusBarTextColor="white">
            <View marginTop="jumbo" padding="small" direction="column" alignItems="center" justifyContent="center" gap="3rem">
                <View direction="column" alignItems="center" justifyContent="center">
                    <Text color="neutral-100" marginBottom="medium" variant="h5">harrypotter.txt</Text>
                    <Text color="neutral-100" marginBottom="medium" variant="h6">{formatTime(harryPotterTime)}</Text>
                    <View direction="row" gap="1em">
                        <Button marginTop="small" label="Download"/>
                        <Button marginTop="small" label="Delete" variant="ghost" />
                    </View>
                </View>
                
                <View direction="column" alignItems="center" justifyContent="center">
                    <Text color="neutral-100" marginBottom="medium" variant="h5">guiadomochileiro.txt</Text>
                    <Text color="neutral-100" marginBottom="medium" variant="h6">{formatTime(guiaDoMochileiroTime)}</Text>
                    <View direction="row" gap="1em">
                        <Button marginTop="small" label="Download"/>
                        <Button marginTop="small" label="Delete" variant="ghost" />
                    </View>
                </View>
            </View>
            <Navbar selectedIcon="archive" />
        </Window>
    );
}