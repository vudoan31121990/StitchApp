import React, { useEffect, useState } from 'react';
import { Layout, Button, Toggle, Text, Spinner } from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';
import { EmailInput } from '../../components/EmailInput/EmailInput';
import { PasswordInput } from '../../components/PasswordInput/Password';
import { ModalService } from '../../components/ModalService/ModalService';
import { styles } from './AccountPage.style';

export const AccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [adminChecked, setAdminChecked] = useState(false);
    const [onSignUp, setSignUp] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isUserNotFound, setUserNotFound] = useState(false);
    const [isWrongInfo, setWrongInfo] = useState(false);
    const [isUserExist, setUserExist] = useState(false);
    const [isWrongInfoSignup, setWrongInfoSignup] = useState(false);

    useEffect(() => {
        setLogin(false);
    },[])

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const onCheckedChange = (isChecked) => {
        setAdminChecked(isChecked);
    };

    const signUpUser = () => {
        setLoading(true);
        checkValidPassword(password)
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setLoading(false);
                setLogin(true);
            }).catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setUserExist(true);
                }
                if (error.code === 'auth/invalid-email') {
                    setWrongInfoSignup(true);
                }
                setLogin(false);
                setLoading(false);
            })

    };

    const signInUser = () => {
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoading(false);
                setLogin(true);
            }).catch(error => {
                if (error.code === 'auth/user-not-found') {
                    setUserNotFound(true);
                }
                if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
                    setWrongInfo(true);
                }
                setLogin(false);
                setLoading(false);
            }) 
    };

    const signOutUser = () => {
        setLoading(true);
        auth()
            .signOut()
            .then(() => {
                setLoading(false);
                setLogin(false);
            })
    };

    const backToLogin = () => {
        setLogin(false);
        setSignUp(false);
        setLoading(false);
    };

    const checkValidPassword = (value) => {
        if (value.length < 8) {
            setWrongInfoSignup(true);
        }
    }

    return (
        <>
            {!isLogin && !isLoading
                ? <Layout style={styles.container}>
                    <EmailInput
                        value={email}
                        label="Email"
                        placeHolder="Enter Your Email"
                        setValue={value => setEmail(value)} />
                    <PasswordInput
                        value={password}
                        label="Password"
                        placeHolder="Enter Your Password"
                        setValue={value => setPassword(value)}
                        secureTextEntry={secureTextEntry}
                        toggleSecureEntry={toggleSecureEntry}
                    />
                    {!onSignUp
                        ? <>
                            <Toggle
                                style={styles.toggle}
                                checked={adminChecked}
                                onChange={onCheckedChange}>
                                {adminChecked ? 'Admin' : 'Guest'}
                            </Toggle>
                            <Button
                                activeOpacity={0.6}
                                style={styles.signInButton}
                                onPress={() => { signInUser() }}>
                                {adminChecked ? 'Admin Login' : 'Login'}
                            </Button>
                        </>
                        : <>
                        <Button
                            activeOpacity={0.6}
                            style={styles.signUpButton}
                            appearance="ghost"
                            onPress={() => { signUpUser() }}>
                                SignUp
                        </Button>
                        <Button
                            activeOpacity={0.6}
                            style={styles.signInButton}
                            onPress={() => { backToLogin() }}>
                            Back To Login
                        </Button>
                        </>
                    }
                    {!adminChecked && !onSignUp
                        ? <Button
                            activeOpacity={0.6}
                            style={styles.signUpButton}
                            appearance="ghost"
                            onPress={() => { setSignUp(true) }}>
                            First-time User
                            </Button>
                        : null
                    }
                    <ModalService
                        isVisible={isUserNotFound || isWrongInfo}
                        hasImage={false}
                        nameService={isUserNotFound ? 'User Not Found' : 'Wrong Email/Password'}
                        description="Please check your email or password and try again!"
                        onClose={() => {
                            setUserNotFound(false)
                            setWrongInfo(false)
                        }} />
                    <ModalService
                        isVisible={isUserExist || isWrongInfoSignup}
                        hasImage={false}
                        nameService={isUserExist ? 'User Already Signed Up' : 'Wrong Email/Password'}
                        description="Please use your correct email and password to sign up!"
                        onClose={() => {
                            setUserExist(false)
                            setWrongInfoSignup(false)
                        }} />
                </Layout>
                : <>
                    {isLoading
                        ? <Layout style={styles.container}><Spinner /></Layout>
                        : <Layout style={styles.container}>
                            <Text>Welcome User</Text>
                            <Button
                                activeOpacity={0.6}
                                style={styles.signInButton}
                                onPress={() => { signOutUser() }}>
                                SignOut
                            </Button>
                        </Layout>
                    }
                </>
                
            }
        </>
    )
};