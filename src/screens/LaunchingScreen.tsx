import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    Question: undefined;
    Launching: undefined;
};

type LaunchingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Launching'>;

type Props = {
    navigation: LaunchingScreenNavigationProp;
};

const LaunchingScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.launchingScreen}>
            <Image style={styles.elitecodeLogoIcon} resizeMode="cover" source={require("../../assets/logo.png")} />
            <Text style={[styles.launchingText, styles.getStartedTypo]}>
                The Fast + Fun Way to Nail Interviews with Gamified Microlearning
            </Text>
            <View style={styles.navigation}>
                <Pressable style={styles.navigationChild} onPress={() => navigation.navigate('Question')}>
                    <Text style={[styles.getStarted, styles.getStartedTypo]}>GET STARTED</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    getStartedTypo: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        left: "50%",
        position: "absolute"
    },
    elitecodeLogoIcon: {
        height: "36.38%",
        marginLeft: -155.5,
        top: "13.62%",
        bottom: "50%",
        borderRadius: 155,
        maxHeight: "100%",
        width: 310,
        left: "50%",
        position: "absolute"
    },
    launchingText: {
        height: "12.56%",
        marginLeft: -169.5,
        top: "47.65%",
        fontWeight: "600",
        fontFamily: "NunitoSans12pt-SemiBold",
        width: 338
    },
    navigationChild: {
        height: "82.75%",
        width: "86.91%",
        top: "7.44%",
        right: "6.69%",
        bottom: "9.81%",
        left: "6.4%",
        borderRadius: 20,
        backgroundColor: "#4e73ff",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        position: "absolute"
    },
    getStarted: {
        marginTop: -14.34,
        marginLeft: -111,
        top: "50%",
        fontWeight: "900",
        fontFamily: "NunitoSans12pt-Black",
        width: 238,
        height: 27
    },
    navigation: {
        height: "8.37%",
        width: "95.67%",
        top: "84.24%",
        right: "2.29%",
        bottom: "7.4%",
        left: "2.04%",
        position: "absolute",
        overflow: "hidden"
    },
    launchingScreen: {
        backgroundColor: "#0c0a1d",
        flex: 1,
        width: "100%",
		height: '100%',
        overflow: "hidden",
		
		
    }
});

export default LaunchingScreen;
