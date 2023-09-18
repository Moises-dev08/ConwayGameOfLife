import React, { useState, useEffect } from 'react';

import 'react-native-get-random-values';
import { View, TouchableOpacity , Text} from 'react-native';
import { v4 as uuid } from 'uuid';

import { generateRandomGrid, getNextGeneration } from '../../../utils/functions';
import * as strings from '../../../utils/strings'
import * as Colors from '../../../styles/colors'

import styles from './styles'

type CellValue = 'O' | 'X';

type Grid = CellValue[][];

const Home = () => {
  const [grid, setGrid] = useState<Grid>(() => generateRandomGrid());

  const handleOnPress = () => setGrid(generateRandomGrid());

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((currentGrid) => getNextGeneration(currentGrid));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>{strings.instruction}</Text>
        </View>
      <View style={styles.grid}>
        {grid?.map((row) => (
          <View key={uuid()} style={styles.row}>
            {row?.map((cell: CellValue) => (
              <View
                key={uuid()}
                style={[
                  styles.cell,
                  { backgroundColor: cell === 'O' ? Colors.yellow : Colors.white },
                ]}
              />
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleOnPress}
      >
        <Text style={styles.buttonText}>{strings.reset_button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
