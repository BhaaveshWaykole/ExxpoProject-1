export function ScreenA({ navigation }) {
    function onPressHandler() {
      // navigation.replace('Screen_B');
      navigation.navigate('Screen_B');
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen A</Text>
        <Pressable style={styles.button} onPress={onPressHandler}>
          <Text style={styles.text}>Go To Screen B</Text>
        </Pressable>
      </View>
    );
  }