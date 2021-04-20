import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/UnitConvertor.styles'
import { Unit } from '../../service/dataControler'
import { TextInput } from 'react-native-paper'

export default class UnitConverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            converter: 1,
            side: this.props.inputTextValue
        }
    }

    static getDerivedStateFromProps(props, state) {
        
        if (state.side == 'from') {
            return {
                data: String(props.getValues.unitOneValue()),
                converter: props.getValues.converterOne()
            }
        }
        else {
            return {
                data: props.getValues.unitTwoValue(),
                converter: props.getValues.converterTwo()
            }

        }

    }

    handlePicker = async (itemValue) => {
        if (this.props.inputTextValue == 'from') {
            if (this.props.getValues.unitOneValue != 0) {
                await this.props.setValues.setConverterOne(itemValue)
                await this.convertToBase();
            }
            }
        else {
            await this.props.setValues.setConverterTwo(itemValue)
            this.state.data = await this.convertToValue()
        }
    }

    handleTextBlue = async(value) => {
        const textRegex = new RegExp("^[0-9]{0,}$");

        if (!textRegex.test(value)) {
            this.props.setValues.setUnitOneValue('')
            console.error("Enter Numbers only")
            this.setState({
                data: ''
            })
        } else {
            this.props.setValues.setUnitOneValue(Number(value))
            this.setState({
                data: value
            })
        }
        this.convertToBase()
    }


    convertToBase = async () => {
        let converter = this.props.getValues.converterOne()
        let value = 0
        switch (converter) {
            case 3: value = Number(this.props.getValues.unitOneValue()) + 273.15
                break;
            case 2: value = Number(this.props.getValues.unitOneValue())
                break;
            case 4: value = ((Number(this.props.getValues.unitOneValue()) - 32) * 1.8)
                break;
            default: value = Number(this.props.getValues.unitOneValue()) * converter
        }
        await this.props.setValues.setMiddle(value)

    }

    convertToValue = async () => {
        if (this.state.converter != 1) {
            let converter = this.props.getValues.converterTwo()
            if (converter == 2 || converter == 3 || converter == 4) {
                await this.props.setValues.setUnitOneValue(this.props.getValues.middle())
            }
            else {
                converter = this.props.getValues.middle() / this.props.getValues.converterTwo()
                await this.props.setValues.setUnitTwoValue(converter)
            }
            return converter
        }
        else return this.state.converter
    }

    converterValue = () => {
        if (this.props.inputTextValue == 'from')
            return this.props.getValues.converterOne()
        else
            return this.props.getValues.converterTwo()
    }

    render() {

        return (

            <View style={this.props.inputTextValue == 'from' ? styles.view_blue : styles.view}>
                {
                    this.props.inputTextValue == 'from' ?
                        <TextInput
                            mode='flat'
                            value={String(this.state.data)}
                            placeholder={"Input"}
                            onChangeText={this.handleTextBlue}
                            selectionColor='white'
                            underlineColor='white'
                            placeholderTextColor='white'
                            style={styles.inputText_blue}
                        /> : <TextInput
                            mode='flat'
                            value={String(this.state.data)}
                            placeholder={"Input"}
                            // onChangeText={this.state.data}
                            selectionColor='blue'
                            underlineColor='blue'
                            placeholderTextColor='blue'
                            style={styles.inputText_blue}
                        />
                }
                <Picker
                    style={this.props.inputTextValue == 'from' ? styles.picker_blue : styles.picker_white}
                    mode='dropdown'
                    selectedValue={this.converterValue}
                    onValueChange={this.handlePicker}>
                    {
                        this.props.quantityType == 'Length' ?
                            Unit.Length.map((item, index) => <Picker.Item label={item.unit} value={item.value} key={index} />)
                            : this.props.quantityType == 'Volume' ?
                                Unit.Volume.map((item, index) => <Picker.Item label={item.unit} value={item.value} key={index} />)
                                : Unit.Temprature.map((item, index) => <Picker.Item label={item.unit} value={item.value} key={index} />)
                    }

                </Picker>
            </View>

        )
    }
}