import React from "react";
import { View, Text, TouchableOpacity, Share} from "react-native"
import styles from './style'

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu Imc de hoje é: " + props.resultImc
        })
    }

    return(
            <View style={styles.ResultImc}>
                <Text style={styles.information}>{props.messsageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text> 
                <View style={styles.boxShareButton}>
                    <TouchableOpacity style={styles.share}
                    onPress={onShare}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>                    
                </View>
            </View>
        );
}