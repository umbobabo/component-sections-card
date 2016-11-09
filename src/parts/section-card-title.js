import React from 'react';

export default function SectionCardTitle({ title, prefix }) {
  return (
    <h4 className={`${ prefix }__list-header`}>
      {title}
    </h4>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardTitle.propTypes = {
    title: React.PropTypes.string,
    prefix: React.PropTypes.string,
  };
}
