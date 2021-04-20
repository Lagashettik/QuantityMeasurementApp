import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { styles } from '../styles/QuantityMeasurement.styles'
import { Picker } from '@react-native-picker/picker'
import UnitConverter from './UnitConverter';
import Statusbar from '../components/Statusbar'

export default class QuantityMeasurement extends Component {

    constructor() {
        super()
        this.state = {
            unitType: 'Length',
            unitOneValue: '',
            unitTwoValue: '',
            middle: 1,
            converterOne: 1,
            converterTwo: 1
        }
    }

    handlePicker = async (itemValue) => {
        await this.setState({
            unitType: itemValue
        })
    }

    setValues = {
        setUnitOneValue: async (value) => {
            await this.setState({
                unitOneValue: value
            })
        },

        setUnitTwoValue: (value) => {
            this.setState({
                unitTwoValue: value
            })
        },

        setMiddle: (value) => {
            this.setState({
                middle: value
            })
        },

        setConverterOne: (value) => {
            this.setState({
                converterOne: value
            })

        },

        setConverterTwo: (value) => {
            this.setState({
                converterTwo: value
            })
        }
    }

    getValues = {
        unitOneValue: () => this.state.unitOneValue,
        unitTwoValue: () => this.state.unitTwoValue,
        middle: () => this.state.middle,
        converterOne: () => this.state.converterOne,
        converterTwo: () => this.state.converterTwo
    }


    render() {
        return (
            <View style={styles.parent_container}>
                <View style={styles.sub_container_blue}>
                    <ImageBackground
                        source={require('../assets/3ShadeImage.jpg')}
                        style={styles.background_image} >
                        <Statusbar />
                        <View style={styles.picker_container}>
                            <Picker
                                style={styles.picker}
                                selectedValue={this.state.unitType}
                                onValueChange={this.handlePicker}>
                                <Picker.Item label="Length" value="Length" />
                                <Picker.Item label="Volume" value="Volume" />
                                <Picker.Item label="Tempature" value="Tempature" />
                            </Picker>
                        </View>
                        <View style={styles.unitconvertor_block}>
                            <UnitConverter
                                quantityType={this.state.unitType}
                                inputTextValue='from'
                                setValues={this.setValues}
                                getValues={this.getValues} />
                        </View>
                    </ImageBackground>
                </View>
                <Image
                    source={require('../assets/conversion.jpg')}
                    style={styles.image} />
                <View
                    style={styles.sub_container_white}>
                    <UnitConverter
                        quantityType={this.state.unitType}
                        inputTextValue=''
                        setValues={this.setValues}
                        getValues={this.getValues} />
                </View>
            </View>

        )
    }

}