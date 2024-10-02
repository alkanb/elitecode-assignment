import React, { useRef, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, Image, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Launching: undefined;
    Question: undefined;
    CorrectAnswer: undefined;
    IncorrectAnswer: undefined;
};

type NavigationType = StackNavigationProp<RootStackParamList, 'IncorrectAnswer'>;

const IncorrectAnswerScreen = () => {
    const navigation = useNavigation<NavigationType>();

    // Animated values for shaking and fading
    const shakeAnim = useRef(new Animated.Value(0)).current; // For shaking
    const fadeAnim = useRef(new Animated.Value(0)).current; // For fading

    useEffect(() => {
        // Trigger the shaking effect
        Animated.sequence([
            Animated.timing(shakeAnim, {
                toValue: 10, // Shake to the right
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: -10, // Shake to the left
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 10, // Shake to the right again
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 0, // Return to original position
                duration: 100,
                useNativeDriver: true,
            })
        ]).start();

        // Trigger the fading effect
        Animated.timing(fadeAnim, {
            toValue: 1, // Fade in
            duration: 1500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.incorrectAnswerScreen}>
            {/* Fading effect for hint message */}
            <Animated.Text style={[styles.hint, styles.hintPosition, { opacity: fadeAnim }]}>
                <Text style={styles.hint1}>Hint: </Text>
                <Text style={styles.thinkAboutHow}>Think about how JavaScript handles different data types.</Text>
            </Animated.Text>

            <Pressable 
                style={styles.retry} 
                onPress={() => navigation.navigate('Question')}
            >
                <Text style={[styles.retry1, styles.hintPosition]}>RETRY</Text>
            </Pressable>

            <Image style={styles.elitecodeLogoIcon} resizeMode="cover" source={require("../../assets/logo.png")} />
            <Image style={styles.incorrectAnswerScreenChild} resizeMode="cover" source={require("../../assets/ellipse-2.svg")} />
            <Image style={styles.incorrectAnswerScreenItem} resizeMode="cover" source={require("../../assets/ellipse-1.svg")} />
            <Image style={styles.incorrectAnswerScreenInner} resizeMode="cover" source={require("../../assets/ellipse-4.svg")} />
            <Image style={styles.ellipseIcon} resizeMode="cover" source={require("../../assets/ellipse-3.svg")} />

            {/* Shaking effect for try again message */}
            <Animated.View style={[styles.component1, styles.component1Layout, { transform: [{ translateX: shakeAnim }] }]}>
                <Text style={[styles.tryAgain, styles.tryAgainTypo]}>Oops! Try again.</Text>
                <Text style={[styles.oopsThatsNot, styles.tryAgainTypo]}>Oops! That’s not quite right.</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
  	hintPosition: {
    		textAlign: "center",
    		color: "#fff",
    		left: "50%",
    		position: "absolute"
  	},
  	component1Layout: {
    		height: 92,
    		position: "absolute"
  	},
  	tryAgainTypo: {
    		fontFamily: "NunitoSans12pt-SemiBold",
    		fontWeight: "400",
    		height: "100%",
    		width: 272,
    		top: "0%",
    		textAlign: "center",
    		color: "#fff",
    		left: "50%",
    		position: "absolute"
  	},
  	hint1: {
    		fontWeight: "700",
    		fontFamily: "NunitoSans12pt-Bold"
  	},
  	thinkAboutHow: {
    		fontStyle: "italic",
    		fontWeight: "500",
    		fontFamily: "NunitoSans12pt-MediumItalic"
  	},
  	hint: {
    		marginTop: 105,
    		marginLeft: -134.5,
    		fontSize: 17,
    		width: 271,
    		height: 115,
    		top: "50%",
    		textAlign: "center",
    		color: "#fff",
    		left: "50%"
  	},
  	retry1: {
    		marginLeft: -124.5,
    		bottom: 2,
    		fontSize: 19,
    		fontWeight: "900",
    		fontFamily: "NunitoSans12pt-Black",
    		width: 250,
    		height: 34
  	},
  	retry: {
    		height: "5.99%",
    		width: "74.05%",
    		top: "88.15%",
    		right: "10.18%",
    		bottom: "5.87%",
    		left: "15.78%",
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderRadius: 20,
    		backgroundColor: "rgba(254, 167, 4, 0.85)",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	elitecodeLogoIcon: {
    		height: "13.38%",
    		marginLeft: -57.5,
    		bottom: "86.62%",
    		borderRadius: 83,
    		maxHeight: "100%",
    		width: 114,
    		top: "0%",
    		left: "50%",
    		position: "absolute"
  	},
  	incorrectAnswerScreenChild: {
    		top: 16,
    		left: 306,
    		width: 186,
    		height: 186,
    		position: "absolute"
  	},
  	incorrectAnswerScreenItem: {
    		top: 86,
    		left: -45,
    		width: 172,
    		height: 172,
    		position: "absolute"
  	},
  	incorrectAnswerScreenInner: {
    		top: 679,
    		left: 342,
    		width: 105,
    		height: 107,
    		position: "absolute"
  	},
  	ellipseIcon: {
    		top: 786,
    		left: -31,
    		width: 125,
    		height: 130,
    		position: "absolute"
  	},
  	tryAgain: {
    		marginLeft: -136,
    		fontSize: 40
  	},
  	component1Child: {
    		top: 0,
    		left: -103,
    		width: 98
  	},
  	oopsThatsNot: {
    		marginLeft: -414,
    		fontSize: 32
  	},
  	component1: {
    		marginTop: -78,
    		marginLeft: -135.5,
    		width: 272,
    		height: 92,
    		left: "50%",
    		top: "50%",
    		overflow: "hidden"
  	},
  	incorrectAnswerScreen: {
    		backgroundColor: "#0c0a1d",
    		flex: 1,
    		width: "100%",
    		height: 852,
    		overflow: "hidden"
  	}
});

export default IncorrectAnswerScreen;
