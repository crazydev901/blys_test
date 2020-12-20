import React from "react";
import {
    Platform,
    View,
    Text,
    ActivityIndicator,
    ViewPropTypes,
    StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const Loader = (props) => {
    const { show, style = {}, transparent = false, vertical, text } = props;
    if (show)
        return (
            <View
                style={[
                    styles.container,
                    style,
                    transparent && {
                        backgroundColor: "transparent"
                    }
                ]}
            >
                {/* <View
                    style={[
                        styles.loader,
                        vertical === false && {
                            flexDirection: "row"
                        }
                    ]}
                > */}
                    <ActivityIndicator
                        size={vertical === false ? "small" : "large"}
                        color={"#005996"}
                    />
                    {text ? (
                        <Text
                            style={[
                                styles.loaderText,
                                vertical === false && {
                                    paddingTop: 0,
                                    paddingLeft: 5
                                }
                            ]}
                        >
                            {text}
                        </Text>
                    ) : null}
                {/* </View> */}
            </View>
        );
    return null;
};

Loader.propTypes = {
    ...ViewPropTypes,
    transparent: PropTypes.bool
};
export default Loader;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0007",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100000
    },
    loader: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#005996",
        borderRadius: 5,
        ...Platform.select({
            ios: {
                shadowColor: "rgba(0,0,0, 0.7)",
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.7
            },
            android: {
                elevation: 20
            }
        })
    },
    loaderText: {
        fontSize: 14,
        paddingTop: 5,
        color: "#fff"
    }
});
