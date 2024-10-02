import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Launching: undefined;
  Question: undefined;
  CorrectAnswer: undefined;
  IncorrectAnswer: undefined;
};

type QuestionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;

const QuestionScreen = () => {
    const navigation = useNavigation<QuestionScreenNavigationProp>();
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const checkAnswer = () => {
        if (selectedAnswer === '“122”') {
            navigation.navigate('CorrectAnswer');
        } else {
            navigation.navigate('IncorrectAnswer');
        }
    };

    return (
        <View style={styles.questionScreen}>
            <Image style={[styles.elitecodeLogoIcon, styles.question1Position]} resizeMode="cover" source={require("../../assets/logo.png")} />
            <Image style={styles.questionScreenChild} resizeMode="cover" source={require("../../assets/ellipse-4.svg")} />
            <Image style={styles.questionScreenItem} resizeMode="cover" source={require("../../assets/ellipse-3.svg")} />
            <Image style={styles.questionScreenInner} resizeMode="cover" source={require("../../assets/ellipse-2.svg")} />
            <Image style={styles.ellipseIcon} resizeMode="cover" source={require("../../assets/ellipse-1.svg")} />
            <View style={styles.rectangle}>
                <View style={styles.rectangle1} />
                <View style={[styles.question, styles.checkShadowBox]}>
                    <Text style={[styles.question1, styles.question1Position]}>
                        <Text style={[styles.whatIsThe, styles.answer1Typo]}>{`What is the output of the following code?
`}</Text>
                        <Text style={styles.consolelog12}>console.log(1 + “2” + “2”);</Text>
                    </Text>
                </View>
                <View style={styles.buttonLogic}>
                    <Pressable style={[styles.answerButton1, styles.answerShadowBox]} onPress={() => setSelectedAnswer('“122”')}>
                        <Text style={[styles.answer1, styles.answerPosition1]}>“122”</Text>
                    </Pressable>
                    <Pressable style={[styles.answerButton2, styles.answerShadowBox]} onPress={() => setSelectedAnswer('“32”')}>
                        <Text style={[styles.answer1, styles.answerPosition1]}>“32”</Text>
                    </Pressable>
                    <Pressable style={[styles.answerButton3, styles.answerShadowBox]} onPress={() => setSelectedAnswer('“14”')}>
                        <Text style={[styles.answer1, styles.answerPosition1]}>“14”</Text>
                    </Pressable>
                    <Pressable style={[styles.answerButton4, styles.answerShadowBox]} onPress={() => setSelectedAnswer('“NaN”')}>
                        <Text style={[styles.answer1, styles.answerPosition1]}>“NaN”</Text>
                    </Pressable>
                </View>
                <Pressable style={[styles.check, styles.checkShadowBox]} onPress={checkAnswer}>
                    <Text style={[styles.checkAnswer, styles.answerPosition1]}>CHECK ANSWER</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    question1Position: {
        left: "50%",
        position: "absolute"
    },
    checkShadowBox: {
        left: "7.14%",
        right: "6.25%",
        width: "86.61%",
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute"
    },
    answer1Typo: {
        fontFamily: "NunitoSans12pt-SemiBold",
        fontWeight: "600"
    },
    answerPosition1: {
        width: 250,
        textAlign: "center",
        color: "#fff",
        fontSize: 19,
        bottom: 0,
        marginLeft: -124.27,
        left: "50%",
        position: "absolute"
    },
    answerShadowBox: {
        backgroundColor: "rgba(254, 167, 4, 0.85)",
        width: "99.32%",
        height: "19.25%",
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
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
        top: "0%"
    },
    questionScreenChild: {
        top: 679,
        left: 342,
        width: 105,
        height: 107,
        position: "absolute"
    },
    questionScreenItem: {
        top: 786,
        left: -31,
        width: 125,
        height: 130,
        position: "absolute"
    },
    questionScreenInner: {
        top: 16,
        left: 306,
        width: 186,
        height: 186,
        position: "absolute"
    },
    ellipseIcon: {
        top: 86,
        left: -45,
        width: 172,
        height: 172,
        position: "absolute"
    },
    rectangle1: {
        height: "100%",
        backgroundColor: "#fdfdfe",
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        left: "0%",
        right: "0%",
        bottom: "0%",
        top: "0%",
        position: "absolute",
        width: "100%"
    },
    whatIsThe: {
        fontSize: 18
    },
    consolelog12: {
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "RobotoMono-Bold"
    },
    question1: {
        marginTop: -45.67,
        marginLeft: -109.62,
        top: "50%",
        color: "#000",
        textAlign: "left",
        width: 221,
        zIndex: 0
    },
    question: {
        height: "21.42%",
        top: "4.73%",
        bottom: "73.86%",
        backgroundColor: "rgba(217, 217, 217, 0.3)",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingVertical: 27
    },
    checkAnswer: {
        fontWeight: "900",
        fontFamily: "NunitoSans12pt-Black",
        height: 38
    },
    check: {
        height: "7.68%",
        top: "87.59%",
        bottom: "4.73%",
        backgroundColor: "#4e73ff",
        overflow: "hidden"
    },
    answer1: {
        height: 34,
        fontFamily: "NunitoSans12pt-SemiBold",
        fontWeight: "600"
    },
    answerButton1: {
        bottom: "80.75%",
        right: "0.68%",
        backgroundColor: "rgba(254, 167, 4, 0.85)",
        width: "99.32%",
        height: "19.25%",
        left: "0%",
        top: "0%"
    },
    answerButton4: {
        top: "80.75%",
        right: "0.68%",
        backgroundColor: "rgba(254, 167, 4, 0.85)",
        width: "99.32%",
        height: "19.25%",
        left: "0%",
        bottom: "0%"
    },
    answerButton2: {
        top: "26.92%",
        bottom: "53.83%",
        right: "0.68%",
        backgroundColor: "rgba(254, 167, 4, 0.85)",
        width: "99.32%",
        height: "19.25%",
        left: "0%"
    },
    answerButton3: {
        top: "53.83%",
        bottom: "26.92%",
        left: "0.68%",
        backgroundColor: "rgba(254, 167, 4, 0.85)",
        width: "99.32%",
        height: "19.25%",
        right: "0%"
    },
    buttonLogic: {
        top: 248,
        left: 22,
        width: 293,
        height: 242,
        position: "absolute"
    },
    rectangle: {
        top: 140,
        left: 28,
        width: 336,
        height: 677,
        position: "absolute"
    },
    questionScreen: {
        backgroundColor: "#0c0a1d",
        flex: 1,
        height: 852,
        overflow: "hidden",
        width: "100%"
    }
});

export default QuestionScreen;
