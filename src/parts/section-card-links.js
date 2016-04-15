import Button from '@economist/component-link-button';
import React from 'react';

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
      <li className="list__item" key={`sections-card__link_${ i }`}>
        <Button
          {...commonProps}
          unstyled
          key={`sections-card__link_${ i }`}
          className={buttonClassName}
        >
          {link.title}
        </Button>
      </li>
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
