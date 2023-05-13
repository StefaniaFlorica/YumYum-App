import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FilterIcon} from '../../../assets/icons';
import {useEffect, useState} from 'react';
import Modal from 'react-native-modal/dist/modal';
import {initialDifficulties, initialKcals} from '../helpers/modalUtils';

interface Props {
  setFilters: (difficulty: string, kcal: string) => void;
}

interface IFilter {
  name: string;
  selected: boolean;
}

export const FilterModal = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [difficulty, setDifficulty] = useState('');
  const [kcal, setKcal] = useState('');

  const [difficulties, setDifficulties] =
    useState<IFilter[]>(initialDifficulties);
  const [kcals, setKcals] = useState<IFilter[]>(initialKcals);

  useEffect(() => {
    console.debug('din modal: ', difficulty, kcal);
    props.setFilters(difficulty, kcal);
  }, [difficulty, kcal]);

  useEffect(() => {
    console.log('on useeff: ', difficulties);
  }, [JSON.stringify(difficulties)]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    //props.setFilters(difficulty, kcal);
  };
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}>
        <View style={styles.view}>
          <View style={styles.filterContainer}>
            <Text style={styles.title}>Difficulty</Text>
            <View style={styles.pillContainer}>
              {difficulties.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.pill,
                    {backgroundColor: item.selected ? '#F6A376' : '#f2732e'},
                  ]}
                  onPress={() => {
                    const updatedDifficulties = difficulties.map((d, idx) => {
                      if (idx === index) {
                        const newVal = !d.selected;
                        return { ...d, selected: newVal };
                      } else {
                        return { ...d, selected: false };
                      }
                    });
                    setDifficulty(updatedDifficulties[index].selected ? item.name.trim() : '');
                    setDifficulties(updatedDifficulties);
                  }
                  }>
                  <Text style={styles.pillText}>{item.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.title}>Kcal</Text>
            <View style={styles.pillContainer}>
              {kcals.map((item, index) => (
                <Pressable
                  key={item.name}
                  style={[
                    styles.pill,
                    {backgroundColor: item.selected ? '#F6A376' : '#f2732e'},
                  ]}
                  onPress={() => {
                    const updatedKcals = kcals.map((d, idx) => {
                      if (idx === index) {
                        const newVal = !d.selected;
                        return { ...d, selected: newVal };
                      } else {
                        return { ...d, selected: false };
                      }
                    });
                    setKcal(updatedKcals[index].selected ? item.name.trim() : '');
                    setKcals(updatedKcals);
                  }}
                  >
                  <Text style={styles.pillText}>{item.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
      <FilterIcon width={28} height={28} fill="#f2732e" onPress={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: '80%',
  },
  title: {
    fontSize: 30,
    marginBottom: 12,
    textAlign: 'left',
    fontWeight: 'bold',
    width: '80%',
  },
  pillText: {
    textAlign: 'center',
    color: 'white',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 2,
  },
  pill: {
    padding: 4,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  pillContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f5f7f9',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  view: {
    width: '100%',
    height: '40%',
    backgroundColor: '#f5f7f9',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
