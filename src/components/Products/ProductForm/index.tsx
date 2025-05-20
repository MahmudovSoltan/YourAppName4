import { TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../ui/button';
import { useGlobalContext } from '../../../Provider/GlobalProvider';

const ProductForm = () => {
    const [form, setForm] = useState({
        image: '',
        name: '',
        price: ''
    })
    const { addProduct } = useGlobalContext()
    const handleChange = (name: string, value: string) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = () => {
        addProduct(form)
        //  setForm({
        //     image: '',
        //     name: '',
        //     price: ''
        //  })
    }
    return (
        <KeyboardAvoidingView

            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

            style={styles.container}>
            <TextInput
                placeholder='Product Image URL'
                style={styles.input}
                onChangeText={(text) => handleChange('image', text)}
                value={form.image}
            />
            <TextInput
                placeholder='Product Name'
                style={styles.input}
                onChangeText={(text) => handleChange('name', text)}
                value={form.name}
            />
            <TextInput
                placeholder='Product Price'
                style={styles.input}
                onChangeText={(text) => handleChange('price', text)}
                value={form.price}
                keyboardType='numeric'
            />
            <Button
                title='Add Product'
                style={{ backgroundColor: '#000' }}
                styleText={{ color: '#fff' }}
                onPress={handleSubmit}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f5",
        paddingBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
});

export default ProductForm