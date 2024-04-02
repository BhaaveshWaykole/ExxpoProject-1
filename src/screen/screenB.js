export function ScreenB({ navigation }) {
    function onPressHandler() {
      // navigation.navigate('Screen_A');/
      navigation.goBack();
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable style={styles.button} onPress={onPressHandler}>
          <Text style={styles.text}>Go To Screen A</Text>
        </Pressable>
      </View>
    )
  }