import React from 'react';
import SectionCardLinks from './section-card-links';
import SectionCardTitle from './section-card-title';

export default function SectionCardList({ title, links, topic, prefix }) {
  const content = [];
  if (title) {
    content.push(
      <SectionCardTitle
        key={`section-title-${ topic }`}
        title={title}
        prefix={prefix}
      />
    );
  }
  content.push(
    <SectionCardLinks
      key={`section-links-${ topic }`}
      links={links}
      prefix={prefix}
    />
  );
  return (
    <div className={`${ prefix }__list-wrapper ${ prefix }__list-wrapper--${ topic }`}>
      {content}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardList.propTypes = {
    title: React.PropTypes.string,
    links: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        href: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
      })
    ).isRequired,
    topic: React.PropTypes.string,
    className: React.PropTypes.string,
    prefix: React.PropTypes.string,
  };
}
