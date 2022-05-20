import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    Pressable,
    Linking,
} from 'react-native';

// O SafeAreaView protege nosso componente de sair para uma área que não tenha acesso (por exemplo, a parte superior do telefone, que fica uma barrinha no meio da tela)

const colorGitHub = '#010409';
const colorFontGH = '#C9D1D9';
const colorDarkGreen = '#016c30';
const colorLightGreen = '#22f122';
const colorRed = 'red';
const imageProfileGH = 'https://avatars.githubusercontent.com/u/81321335?v=4';
const urlToMyGH = 'https://github.com/Carol-Rodrigues';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log("Verificando link");
        const res = await Linking.canOpenURL(urlToMyGH);
        if (res) {
            console.log("Link aprovado");
            await Linking.openURL(urlToMyGH);
        }
    }

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
        <View style={style.content}>
            <Image
            source={{uri: imageProfileGH}}
            style={style.avatar}
            accessibilityLabel="Foto de Carol com fundo azul"
            />            
            <Text
            accessibilityLabel="Nome: Carolina Rodrigues"
            style={[style.defaultText, style.name]}>
                Carolina Rodrigues
            </Text>
            <Text
            accessibilityLabel="Nickname: Carol-Rodrigues"
            style={[style.defaultText, style.nickname]}>
                Carol-Rodrigues
            </Text>
            <Text
            accessibilityLabel="Descrição: Full Stack Web Developer | Software Engineering Student @42sp"
            style={[style.defaultText, style.description]}>
                Full Stack Web Developer | Software Engineering Student @42sp
            </Text>
            {/* DIO */}
            <View style={[style.changeFlex, style.firstCircle]}>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            {/* Botão */}
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Nossas views começam como COLUNAS. Para trocar isso, precisamos alterar o flex direction para row.
        backgroundColor: colorGitHub,
        flex: 1, //Expandir para a tela toda
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200, //valor em pixels
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGH,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: '#4F565E',
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4F565E',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    darkCircle: {
        borderRadius: 6,
        backgroundColor: colorDarkGreen,
        width: 15,
        height: 15,
        margin: 1,
    },
    lightCircle: {
        borderRadius: 6,
        backgroundColor: colorLightGreen,
        width: 15,
        height: 15,
        margin: 1,
    },
    redCircle: {
        borderRadius: 6,
        backgroundColor: colorRed,
        width: 15,
        height: 15,
        margin: 1,
    },
    firstCircle: {
        marginTop: 15,
    },
    changeFlex: {
        flexDirection: 'row',
    },
});