import React from 'react';
import SectionsCard from './index';
import sectionsCardData from './context';

sectionsCardData.media.map((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

export default (
  <SectionsCard data={sectionsCardData} />
);
