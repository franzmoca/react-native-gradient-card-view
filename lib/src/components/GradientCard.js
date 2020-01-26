import React from "react";
import { View } from "react-native";
import styles, {
  _shadowStyle,
  _imageStyle,
  _gradientColors,
  _outerContainer
} from "./styles/GradientCard.style";
import { LinearGradient } from "expo-linear-gradient";

const GradientCard = props => {
  const {
    end,
    start,
    width,
    style,
    height,
    shadowColor,
    shadowStyle,
    borderRadius,
    outerContainer,
    innerContainer,
    gradientColors,
    children
  } = props;

  return (
    <View style={[style, shadowStyle || _shadowStyle(shadowColor)]}>
      <LinearGradient
        start={start || [0, 0]}
        end={end || [1, 0]}
        colors={gradientColors || _gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
        {children}
        </View>
      </LinearGradient>
    </View>
  );
};

export default GradientCard;
