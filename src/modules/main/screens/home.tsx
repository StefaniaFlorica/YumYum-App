import {StyleSheet, View, Text, Pressable} from 'react-native';
import {HomeTabBarRoutes} from '../navigation/routes/home-tab-bar-routes';
import {useState} from 'react';
import Modal from 'react-native-modal';

/*
  endpoint: https://6453db48c18adbbdfea9924a.mockapi.io/recipes?
  queryParams: search, page, limit, field_name
*/

export const RecipesScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{HomeTabBarRoutes.Home}</Text>
      <Pressable style={styles.button} onPress={toggleModal}>
        <Text>Modal</Text>
      </Pressable>
      <Modal 
      isVisible={isModalVisible} 
      onBackdropPress={toggleModal} 
      animationIn='slideInUp'
      animationOut='slideOutDown'
      style={styles.modal}>
        <View style={styles.view}>
          <Text>Hello!</Text>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal:{
    margin:0,
    justifyContent:'flex-end'
  },
  view: {
    width: '100%',
    height: '60%',
    backgroundColor:'#dcdcdc',
    borderRadius: 36,
    alignItems:'center',
    justifyContent:'center'
  },

  button: {
    margin: 30,
    marginBottom: 100,
    backgroundColor: '#FFC173',
    borderRadius: 20,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
