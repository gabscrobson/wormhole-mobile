import { useEffect, useState } from 'react';
import sendIcon from "../assets/images/send.svg";
import sendIconSelected from "../assets/images/sendSelected.svg";
import receiveIcon from "../assets/images/receive.svg";
import receiveIconSelected from "../assets/images/receiveSelected.svg";
import archiveIcon from "../assets/images/archive.svg";
import archiveIconSelected from "../assets/images/archiveSelected.svg";
import Eitri from "eitri-bifrost";

export const NavbarIcons = Object.freeze({
    SEND: 'send',
    RECEIVE: 'receive',
    ARCHIVE: 'archive',
})

const icons = {
    'send': { default: sendIcon, selected: sendIconSelected},
    'receive': { default: receiveIcon, selected: receiveIconSelected},
    'archive': { default: archiveIcon, selected: archiveIconSelected},
};

export default function Navbar(props) {
    return (
        <View height="75px" borderTopWidth="hairline" borderColor="neutral-100" backgroundColor="neutral-900" direction="row" alignItems="center" justifyContent="around" position="fixed" bottom={0} width='100%'>
            <Touchable onPress={() => Eitri.navigation.navigate({ path: '/Send' })}>
                <Stack display="flex" alignItems="center">
                    <Image width={30} height={30} src={props.selectedIcon === NavbarIcons.SEND ? icons.send.selected : icons.send.default} />
                    <Text color="neutral-100" fontSize={6}>
                        Enviar
                    </Text>
                </Stack>
            </Touchable>
            <Touchable onPress={() => Eitri.navigation.navigate({ path: '/Receive' })}>
                <Stack display="flex" alignItems="center">
                    <Image width={30} height={30} src={props.selectedIcon === NavbarIcons.RECEIVE ? icons.receive.selected : icons.receive.default} />
                    <Text color="neutral-100" fontSize={6}>
                        Receber
                    </Text>
                </Stack>
            </Touchable>
            <Touchable onPress={() => Eitri.navigation.navigate({ path: '/Archive' })}>
                <Stack display="flex" alignItems="center">
                    <Image width={30} height={30} src={props.selectedIcon === NavbarIcons.ARCHIVE ? icons.archive.selected : icons.archive.default} />
                    <Text color="neutral-100" fontSize={6}>
                        Histórico
                    </Text>
                </Stack>
            </Touchable>
        </View>
    );
}
