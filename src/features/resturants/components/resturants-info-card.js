import React from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'lamera',
    rating = 4,
    isClosedTemporary = false,
    icon,
    photos = [
      'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/slideshow/feature_-_Main_hall_1.jpg?1582043123',
    ],
    address = '100 some random street',
    isOpenNow = true,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    //
  },
  card: {
    backgroundColor: '#fff',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
});
