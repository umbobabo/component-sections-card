import React from 'react';

export default function SectionCardTitle({ title }) {
  return (
    <h4 className="sections-card__header">
      {title}
    </h4>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardTitle.propTypes = {
    title: React.PropTypes.string,
  };
}
