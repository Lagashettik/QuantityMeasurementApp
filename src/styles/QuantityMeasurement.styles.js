import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    parent_container: {
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    sub_container_blue: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignContent: 'space-between'
    },
    sub_container_white: {
        height: '40%',
        backgroundColor: 'white',
        paddingTop: '15%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 20
    },
    background_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignItems: 'center'

    },
    picker: {
        color: 'white',
        width: '30%',
        margin: '20%',
        fontFamily: 'Montserrat-Regular',
        position: 'absolute',
        transform: [
            { scaleX: 2 },
            { scaleY: 2 }
        ],
        flexDirection: 'column-reverse'
    },
    picker_container: {
        height: '30%',
        width: '80%',
        justifyContent: 'center'
    },
    unitconvertor_block: {
        alignContent: 'center',
        justifyContent: 'center',
        height: '40%'
    },
    image: {
        width: '20%',
        height: '10%',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop : '-10%'
    }

})