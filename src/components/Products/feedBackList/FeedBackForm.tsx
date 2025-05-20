import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../ui/button'
import { useGlobalContext } from '../../../Provider/GlobalProvider'
const initialState = {
    name: '',
    feedback: '',
}
const FeedBackForm = () => {
    const [data, setData] = useState(initialState);
    const [err, setErr] = useState({
        name: false,
        feedback: false,
    });
    const { addProduct } = useGlobalContext();
    const handleSubmit = () => {
        const newErr = {
            name: data.name === '',
            feedback: data.feedback === '',
        };

        setErr(newErr);

        const isValid = !newErr.name && !newErr.feedback;

        if (isValid) {
            console.log('Form submitted successfully');
            // Form göndərmə əməliyyatları
            addProduct(data); // Yeni məhsulu əlavə edin
            setData(initialState); // Formu sıfırlayın
        }
    };

    return (
        <View>
            <Text style={styles.title}>Feedback Form</Text>
            <View style={[styles.inputContainer, err.name ? styles.errInput : null]}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={data.name}
                    onChangeText={(text) => setData({ ...data, name: text })}
                />
            </View>
            {err.name && <Text style={{ color: 'red' }}>Name is required</Text>}
            <View style={[styles.inputContainer, { marginTop: 20 }, err.feedback ? styles.errInput : null]}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your feedback"
                    multiline
                    numberOfLines={4}
                    value={data.feedback}
                    onChangeText={(text) => setData({ ...data, feedback: text })}
                />
            </View>
            {err.feedback && <Text style={{ color: 'red' }}>Feedback is required</Text>}
            <Button title="submit" style={styles.button} styleText={styles.buttonText} onPress={handleSubmit} />
        </View>
    )
}

export default FeedBackForm

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    inputContainer: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
    },
    input: {
        textAlignVertical: 'top',
        color: '#000',
        paddingLeft: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errInput: {
        borderColor: 'red',
    }
});