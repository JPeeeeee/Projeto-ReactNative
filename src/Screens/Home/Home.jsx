import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from 'react-native';
import style from "./styles";

export default function Home({ navigation }){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=20')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  return (
    <View style={style.container}>
      {isLoading ? <Text style={{
        fontSize: 40,
        fontFamily: 'Poppins-Bold'
      }}>Carregando...</Text> : 
      ( 
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Image source={{uri: `${item.url}`}} style={style.image}/>
          )}
        />
      )}
    </View>
  );
};