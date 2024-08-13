import { StyleSheet } from "react-native";
import { spacing } from "../../utils/size";
import {bg} from '../../utils/color'


export const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginVertical: spacing.tiny,
    },
    cardContainer: {
        borderRadius: spacing.medium,
        justifyContent: 'center',
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        backgroundColor: bg.bgPrimary0,
        height: 150,
    },
    txtItem: {
        marginTop: spacing.medium,
        fontWeight: 'bold',
        fontSize: 14
    }
});