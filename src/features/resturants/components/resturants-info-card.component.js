import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  Icon,
  SectionEnd,
  RestaurantCard,
  Address,
  Info,
  Rating,
  RestaurantCardCover,
  Section,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'lamera',
    rating = 4,
    isClosedTemporary = true,
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/slideshow/feature_-_Main_hall_1.jpg?1582043123',
    ],
    address = '100 some random street',
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={'label'}>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporary && (
              <Text variant={'error'}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={'left'} size={'large'}>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position={'left'} size={'large'}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
