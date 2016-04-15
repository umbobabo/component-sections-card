import React from 'react';
import SectionCardList from './parts/section-card-list';

export default function SectionsCard({ data, titles }) { // eslint-disable-line id-blacklist
  const links = data; // eslint-disable-line id-blacklist
  return (
    <nav role="nav" className="sections-card">
      <div className="sections-card__wrapper">
        <div className="sections-card__menu">
          <SectionCardList topic="sections" links={links.sections} title={titles.sections} />
          <SectionCardList topic="media" links={links.media} />
          <SectionCardList topic="blogs" links={links.blogs} title={titles.blogs} />
        </div>
      </div>
    </nav>
  );
}

SectionsCard.defaultProps = {
  titles: {
    blogs: 'Blogs',
  },
};


if (process.env.NODE_ENV !== 'production') {
  SectionsCard.propTypes = {
    data: React.PropTypes.shape({ // eslint-disable-line id-blacklist
      blogs: SectionCardList.propTypes.links,
      media: SectionCardList.propTypes.links,
      sections: SectionCardList.propTypes.links,
    }).isRequired, // eslint-disable-line id-blacklist
    titles: React.PropTypes.shape({
      blogs: React.PropTypes.string,
      sections: React.PropTypes.string,
    }).isRequired,
  };
}
