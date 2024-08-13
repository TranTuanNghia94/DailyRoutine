import { StyleSheet } from "react-native";
import {spacing} from '../../utils/size'
import {bg} from '../../utils/color'


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
        marginTop: spacing.small,
    }
});