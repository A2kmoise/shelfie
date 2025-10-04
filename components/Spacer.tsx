import React from "react";
import { View } from "react-native";

type SpacerProp =  {
    width?: number | `${number}%`;
    height?: number | `${number}%`;
};


const Spacer = ({width = "100%", height = 40}: SpacerProp) => {

    return(
        <View style={{ width, height }} />
  
    )
}

export default Spacer