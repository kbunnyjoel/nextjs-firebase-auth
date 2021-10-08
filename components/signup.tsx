import { Box, Button, Card, Text, CardBody, CardFooter, CardHeader, Form, FormField, TextInput, MaskedInput } from 'grommet'
import { Favorite, ShareOption, MailOption } from 'grommet-icons';
import React, { useState } from 'react'

const signUp = () => {

    const [value, setValue] = useState({});
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');



    return (
        <Box direction="column" align="center">
            <Card direction="column" height="auto" width="medium">
                <CardHeader justify="center" pad="medium"><Text weight={700} size="xlarge">Sign Up</Text></CardHeader>
                <CardBody pad="medium">
                    <Form
                        validate="blur"
                        value={value}
                        onChange={nextValue => setValue(nextValue)}
                        onSubmit={({ value }) => { }}
                    >
                        <FormField name="email" htmlFor="email" label="Email"
                            required>
                            <MaskedInput
                                name="email"
                                icon={<MailOption />}
                                mask={[
                                    { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                                    { fixed: '@' },
                                    { regexp: /^[\w]+$/, placeholder: 'my' },
                                    { fixed: '.' },
                                    { regexp: /^[\w]+$/, placeholder: 'com' },
                                ]}
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </FormField>
                        <FormField name="password" htmlFor="password" label="Password" required>
                            <TextInput value={password}
                                onChange={event => setPassword(event.target.value)}
                                type="password" id="password" name="password" />
                        </FormField>
                        <FormField name="confirmpassword" htmlFor="password"
                            label="Password Confirmation" required>
                            <TextInput value={confirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                                type="password" id="confirmpassword" name="confirmpassword" />
                        </FormField>
                        <CardFooter justify="center" pad={{ horizontal: "small", vertical: "medium" }}>
                            <Button type="submit" size="large" primary label="Sign Up" />
                        </CardFooter>
                    </Form>
                </CardBody>
            </Card>
            <Text size="large" margin={{top:"medium"}}>Already have an account? Log In</Text>
        </Box>

    )
}

export default signUp;