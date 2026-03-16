import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_KEY = '1d868d05865a228a5fb2fc24c37d7b36';
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr-FR&region=FR`;

type Movie = {
  id: number;
  title: string;
};

export const HomeScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [nbMovies, setNbMovies] = useState<number>();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  useEffect(() => {
    const n = movies.length;
    setNbMovies(n);
  }, [movies]);

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ alignSelf: 'center', fontSize: 20 }}>Recent movies</Text>
      <Text style={{ paddingBottom: 20, paddingTop: 20, paddingLeft: 20 }}>
        Number of movies: {nbMovies}
      </Text>

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
});
