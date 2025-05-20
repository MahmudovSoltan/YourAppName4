import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    style?: object;
    onPress?: () => void;
    styleText?: object;
    mode?:boolean
}

const Button = ({ title, style, onPress, styleText,mode }: ButtonProps) => {
    return (
        <TouchableOpacity hitSlop={20} style={[style, styles.button]} onPress={onPress}>
            <Text style={styleText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
})
export default Button
