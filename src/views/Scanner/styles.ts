import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2CA58D",
        justifyContent: "space-around",
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 40,
        color: "#fff",
      },
      subtitle: {
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 10,
      },
      button: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: "#0a2342",
        borderRadius: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
      },
      productContainer: {
        flex: 1,
        alignItems: "center",
      },
      productPrice: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#0a2342",
      },
      productName: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0a2342",
      },
      productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
      productImageContainer: {
        marginVertical: 30,
        width: 350,
        height: 350,
      }

})