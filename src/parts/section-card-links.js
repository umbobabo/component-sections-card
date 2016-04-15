import React from 'react';
import SectionCardLink from './section-card-link';

export default function SectionCardLinks({ links }) {
  const renderedLinks = links.map((link, i) => {
    const commonProps = {
      unstyled: true,
      ...link,
    };
    let buttonClassName = 'sections-card__link';
    if (link.internal === false) {
      commonProps.target = '_blank';
      buttonClassName = `${ buttonClassName } sections-card__link--external`;
    }
    return (
      <SectionCardLink
        buttonClassName={buttonClassName}
        buttonProps={commonProps}
        key={`sections-card__link_${ i }`}
        title={link.title}
      />
    );
  });
  return (
    <ul className="list">
      {renderedLinks}
    </ul>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardLinks.propTypes = {
    links: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        href: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
      })
    ).isRequired,
  };
}
