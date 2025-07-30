import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const BlogItem = props => {
  const { width } = useWindowDimensions();

  const renderersProps = {
    a: {
      onPress(event, url, htmlAtribs, atarget) {
        props.choosePost(props.id);
      },
    },
  };

  const blogItems = {
    html: `
    <div class="container">
      <a href="${props.id}" ">
        <img src="${props.imgSrc}"/>
        <h1>${props.title}</h1>
        ${props.excerpt}
      </a>
    <div />
    <style>
      .container {
        margin: 20px;
        text-align: center;
      }
      a{
        text-decoration-line: none;
      }
    </style>
    `,
  };
  const blogClassStyles = {
    container: { margin: '20px', textAlign: 'center' },
  };
  const blogTagsStyles = {
    a: { color: 'white' },
    h1: { color: 'white' },
    p: { color: 'whitesmoke' },
  };

  return (
    <View style={styles.blogItem}>
      <RenderHtml
        source={blogItems}
        renderersProps={renderersProps}
        contentWidth={width}
        classesStyles={blogClassStyles}
        tagsStyles={blogTagsStyles}
      />
    </View>
  );
};

const Blog = ({ navigation }) => {
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts',
      );
      const globo = await response.json();
      setBlogList(Array.from(globo.posts));
    } catch (err) {
      console.error(err);
    } finally {
      setBlogLoaded(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const chooseBlog = blogId => {
    navigation.navigate('BlogDetail', { blogId: blogId });
  };

  return (
    <View>
      {blogLoaded && (
        <View style={styles.blogLoaded}>
          <FlatList
            data={blogList}
            keyExtractor={item => item.ID.toString()}
            renderItem={({ item }) => (
              <BlogItem
                id={item.ID}
                title={item.title}
                imgSrc={item.featured_image}
                excerpt={item.excerpt}
                choosePost={chooseBlog}
              />
            )}
          />
        </View>
      )}
      {!blogLoaded && (
        <View style={styles.blogNotLoaded}>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  blogItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000ff',
    borderStyle: 'solid',
  },
  blogLoaded: {
    paddingTop: 40,
  },
  blogNotLoaded: {
    paddingTop: 30,
  },
});
export default Blog;
