import React from 'react';
import List from './section-card-list.js';

export default function SectionsCardWrapper(props) {
  let content = [];
  let joinContent = [];
  const { children, className } = props;
  const prefix = className ? `${ className }` : 'sections-card';
  React.Children.forEach(children, (child, key) => {
    if (child.type === List) {
      const contentSwitch =
        (<List
          key={key}
          topic={child.props.topic}
          links={child.props.links}
          title={child.props.title}
          prefix={prefix}
         />);
      if (child.props.wrapColumns) {
        joinContent.push(contentSwitch);
      } else {
        content.push(contentSwitch);
      }
    }
  });
  return (
    <nav role="nav" className={`${ prefix }`}>
      <div className={`${ prefix }__wrapper`}>
        <div className={`${ prefix }__menu`}>
          {joinContent[0] ?
            <div className={`${ prefix }__list ${ prefix }__list-wrapper--column-wrap`}>
              {joinContent}
            </div> :
          null}
          {content}
        </div>
      </div>
    </nav>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionsCardWrapper.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node),
    ]).isRequired,
    className: React.PropTypes.string,
  };
}
