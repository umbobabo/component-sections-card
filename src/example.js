import React from 'react';
import SectionsCard from './index';
import sectionsCardData from './context';

export default (
  <SectionsCard.Main className="someprefix">
    <SectionsCard.List
      links={sectionsCardData.sections}
      title="Sections"
      topic="sections"
    />
    <SectionsCard.List
      links={sectionsCardData.media}
      title="Media"
      topic="media"
    />
    <SectionsCard.List
      links={sectionsCardData.blogs}
      title="Blogs"
      topic="blogs"
    />
  </SectionsCard.Main>
);
