import React from 'react';
import SectionCardLink from './section-card-link';

export default function SectionCardLinks({ links, prefix }) {
  const renderedLinks = links.map((link, i) => {
    const commonProps = {
      unstyled: true,
      ...link,
    };
    let buttonClassName = `${ prefix }__link`;
    if (link.internal === false) {
      commonProps.target = '_blank';
      buttonClassName = `${ buttonClassName } ${ prefix }__link--external`;
    }
    return (
      <SectionCardLink
        buttonClassName={buttonClassName}
        buttonProps={commonProps}
        key={`${ prefix }__link_${ i }`}
        title={link.title}
        prefix={prefix}
      />
    );
  });
  return (
    <ul className={`${ prefix }__list`}>
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
    prefix: React.PropTypes.string,
  };
}
