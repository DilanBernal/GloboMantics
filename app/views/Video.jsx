import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const TubeItem = props => {
  const videoChoice = () => {
    props.chooseVid(props.id);
  };
  return (
    <TouchableWithoutFeedback onPress={videoChoice}>
      <View style={styles.videoContainer}>
        <Image style={styles.image} source={{ uri: props.imageSrc }} />
        <Text style={(styles.title, styles.textWhite)}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    paddingTop: 20,
    alignItems: 'center',
    borderTopColor: '#000',
    borderTopWidth: 2,
  },
  listContainer: {
    paddingTop: 30,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
  },
  textWhite: {
    color: 'whitesmoke',
  },
});

const Video = ({ navigation }) => {
  const [listLoaded, setListLoaded] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const getVids = async () => {
    try {
      const response = await fetch(
        'https://www.gogleapis.com/youtube/v3/search?part=snippet&q=rupatrupa&key=AIzaSyAhkqRTT527DrgOiheEzcws7ppQxJ2u8fA',
      );
      const vids = await response.json();
      setVideoList(Array.from(vids.item));
    } catch (err) {
      console.error(err);
    } finally {
      setListLoaded(true);
    }
  };

  useEffect(() => {
    getVids();
  }, []);

  const selectVid = vidID => {
    navigation.navigate('VideoDetail', { vidId: vidID });
  };

  return (
    <View>
      {listLoaded && (
        <View>
          <FlatList
            data={videoList}
            renderItem={({ item }) => (
              <TubeItem
                id={item.id.videoId}
                title={item.snippet.title}
                imageSrc={item.snippet.thumbnails.high.url}
                chooseVid={selectVid}
              />
            )}
          />
        </View>
      )}

      {!listLoaded && (
        <View style={styles.listContainer}>
          <Text style={styles.textWhite}>LOADING...</Text>
        </View>
      )}
    </View>
  );
};

export default Video;
