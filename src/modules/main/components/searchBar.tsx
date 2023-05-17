import {StyleSheet, TextInput, View} from 'react-native';
import {SearchIcon} from '../../../assets/icons';
import {useDebounce} from 'use-debounce';
import {useEffect, useState} from 'react';
interface Props {
  onSearchChange: (value: string) => void;
}
export const SearchBar = (props: Props) => {
  const [searchState, setSearchState] = useState('');
  const searchVal = useDebounce<string>(searchState, 1000);
  useEffect(() => {
    props.onSearchChange(searchVal[0].trim());
  }, [searchVal]);
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize="none" placeholder='type a keyword...' style={styles.input} onChangeText={setSearchState}>
        {' '}
      </TextInput>
      <SearchIcon height={20} width={20} fill="#f2732e" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    width: 250,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 8,
  },
  input: {
    width: 200,
    height: 40,
  },
});
