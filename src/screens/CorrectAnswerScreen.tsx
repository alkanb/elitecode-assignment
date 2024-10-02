import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, Image, View } from "react-native";

const CorrectAnswerScreen = () => {
    // Animated value for sliding or scaling the badge
    const slideAnim = useRef(new Animated.Value(500)).current;  // Initially off-screen (500px below the view)
    const scaleAnim = useRef(new Animated.Value(0)).current;    // Initially scaled to 0 (invisible)

    useEffect(() => {
        // Slide in animation
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Scale (pop-in) animation
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.correctAnswerScreen}>
            <Text style={[styles.congratulations, styles.badgePosition]}>Congratulations!</Text>

            <Animated.Image
                style={[
                    styles.badgeGifIcon,
                    {
                        transform: [
                            { translateY: slideAnim },      // Slide in effect
                            { scale: scaleAnim },           // Pop-in effect
                        ],
                    },
                ]}
                resizeMode="cover"
                source={require("../../assets/badge.gif")}
            />

            <Text style={[styles.badge, styles.badgePosition]}>You earned the syntax master badge.</Text>

            <Image
                style={[styles.elitecodeLogoIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../../assets/logo.png")}
            />
            <Image style={styles.correctAnswerScreenChild} resizeMode="cover" source={require("../../assets/ellipse-2.svg")} />
            <Image style={styles.correctAnswerScreenItem} resizeMode="cover" source={require("../../assets/ellipse-1.svg")} />
            <Image style={styles.correctAnswerScreenInner} resizeMode="cover" source={require("../../assets/ellipse-4.svg")} />
            <Image style={styles.ellipseIcon} resizeMode="cover" source={require("../../assets/ellipse-3.svg")} />
        </View>
    );
};

const styles = StyleSheet.create({
    badgePosition: {
        textAlign: "center",
        color: "#fff",
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    iconPosition: {
        left: "50%",
        position: "absolute",
    },
    congratulations: {
        height: "5.16%",
        marginLeft: -134.5,
        fontSize: 32,
        fontWeight: "600",
        fontFamily: "NunitoSans12pt-SemiBold",
        width: 272,
    },
    badgeGifIcon: {
        marginTop: -223,
        marginLeft: -92.5,
        width: 188,
        height: 188,
        top: "50%",
        left: "50%",
    },
    badge: {
        marginTop: 68,
        marginLeft: -119.5,
        fontSize: 24,
        fontWeight: "500",
        fontFamily: "NunitoSans12pt-Medium",
        width: 242,
        height: 115,
    },
    elitecodeLogoIcon: {
        height: "13.38%",
        marginLeft: -57.5,
        top: "0%",
        bottom: "86.62%",
        borderRadius: 83,
        maxHeight: "100%",
        width: 114,
    },
    correctAnswerScreenChild: {
        top: 16,
        left: 306,
        width: 186,
        height: 186,
        position: "absolute",
    },
    correctAnswerScreenItem: {
        top: 86,
        left: -45,
        width: 172,
        height: 172,
        position: "absolute",
    },
    correctAnswerScreenInner: {
        top: 679,
        left: 342,
        width: 105,
        height: 107,
        position: "absolute",
    },
    ellipseIcon: {
        top: 786,
        left: -31,
        width: 125,
        height: 130,
        position: "absolute",
    },
    correctAnswerScreen: {
        backgroundColor: "#0c0a1d",
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
    },
});

export default CorrectAnswerScreen;
