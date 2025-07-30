import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const BlogDetail = ({ route, navigation }) => {
  const [postLoaded, setPostLoaded] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postID, setPostID] = useState('');
  const { width } = useWindowDimensions();
  const { blogId } = route.params;

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts/${blogId}`,
      );
      const post = await response.json();
      setPostTitle(post.title);
      setPostImage(post.featured_image);
      setPostContent(post.content);
      setPostID(post.ID);
    } catch (err) {
      console.error(err);
    } finally {
      setPostLoaded(true);
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blogTagStyles = {
    img: { display: 'none' },
    a: { textDecorationLine: 'none', color: 'whitesmoke' },
    h1: { color: 'whitesmoke' },
    div: { color: 'whitesmoke' },
  };
  const blogClassStyles = {
    blTitle: { marginLeft: 'auto', marginRight: 'auto' },
    blContent: { marginLeft: 10, marginRight: 10 },
    blBack: { marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 },
  };

  const postDetails = {
    html: `
      <div class="blTitle">
           <h1>${postTitle}</h1>
      </div>
      <div class="blContent">
        ${postContent}
      </div>
      <div class="blTitle">
        <a href=${postID}>
          <h2>GO BACK</h2>
        </a>
      </div>
    `,
  };

  const rendererProps = {
    a: {
      onPress(event, url, htmlAtribs, target) {
        navigation.navigate('Blog');
      },
    },
  };

  return (
    <View style={styles.blogDetailContainer}>
      {postLoaded && (
        <ScrollView>
          <Image style={styles.detailImage} source={{ uri: postImage }} />

          <RenderHtml
            source={postDetails}
            tagsStyles={blogTagStyles}
            classesStyles={blogClassStyles}
            renderersProps={rendererProps}
            contentWidth={width}
          />
        </ScrollView>
      )}
      {!postLoaded && (
        <View>
          <Text>LOADING</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  blogDetailContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  detailImage: {
    width: '100%',
    height: 200,
  },
});

export default BlogDetail;
