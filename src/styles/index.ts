import { Dimensions, StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    width100p: {
        width: '100%'
    },
    height200: {
        height: 200
    },
    padding10: {
        padding: 10
    },
    row: {
        flexDirection: 'row'
    },
    alignCenter: {
        alignItems: "center"
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifySpcBtwn: {
        justifyContent: 'space-between'
    },
    alignContentCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer: {
        backgroundColor: "red",
        position: 'absolute',
        top: 10,
        left: 0
    },
    cardContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.6, margin: 10,
        backgroundColor: "white", elevation: 5, borderRadius: 10,
        overflow: 'hidden', shadowColor: 'black'
    },
    colorWhite: {
        color: 'white'
    },
    colorBlack: {
        color: 'black'
    },
    colorGreen: {
        color: 'green'
    },
    textTitle: {
        fontSize: 17
    },
    textCaption: {
        fontSize: 14
    },
    textBold: {
        fontWeight: 'bold'
    },
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: 'lightgrey'
    }
})

export default Styles