import React from 'react';
import { StyleSheet, Text, View,TextInput,TextInputProps } from 'react-native';
import { Formik, Field, Form } from "formik";


class Info extends React.Component {



    render() {


        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Formik
                    initialValues={{ name: "Nome", email: "Email" }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Text>Nome</Text>
                        <Field name="name" type="text" />
                        <Text>Email</Text>
                        <Field name="email" type="email"/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

            </View>
        );
    }
}

// ...

export default Info;