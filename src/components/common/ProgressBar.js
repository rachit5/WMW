import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import { View } from 'react-native';
const ProgressBar = ({visible,textContent}) => {
    return(
        <View style={{ flex: 1 }}>
            <Spinner visible={visible} textContent={textContent} color={'#f00'} />
        </View>
    );
}
export { ProgressBar };