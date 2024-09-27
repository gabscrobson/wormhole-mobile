import Eitri from "eitri-bifrost";
import ArrowLeftImage from "../assets/images/arrow_left.png"

export default function HeaderComponent(props) {
    const onBackClick = () => {
        Eitri.navigation.back();
    }

    return (
        <View backgroundColor="neutral-900">
            <View topInset />
            <View direction='row' justifyContent='start' alignItems='center' padding='nano' minHeight={60} backgroundColor="neutral-900">
                <Touchable width={50} onPress={onBackClick}>
                    <Image src={ArrowLeftImage} cover width={40} />
                </Touchable>
                <Text wide textAlign='left' color='neutral-100' fontWeight='bold' fontSize='small'>{props.text}</Text>
            </View>
        </View>

    )
}