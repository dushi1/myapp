import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import { CardItem } from './src/components';

export interface DataProps {
  slug_id: string;
  cover_image_url: string | undefined;
  description: string;
  about: string;
  title: string;
  must_see: boolean;
  likely_to_sell_out: boolean;
  top_seller: boolean;
  free_cancellation: boolean;
}


const App: React.FC = () => {
  const [data, setData] = useState<DataProps[] | undefined>([])
  useEffect(() => {
    fetch('https://sandbox.musement.com/api/v3/activities').then((resp) => {
      return resp.json()
    }).then(resp => {
      setData(resp.data);
    })
  }, [])

  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={key => key.slug_id}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', }}
          horizontal
          data={data} renderItem={(item) => {
            return <CardItem data={item.item} />
          }} />
      </View>
    </SafeAreaView>
  );
};

export default App;
