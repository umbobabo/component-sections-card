import Button from '@economist/component-link-button';
import React from 'react';

export default class SectionsCard extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object, // eslint-disable-line id-blacklist
      titles: React.PropTypes.shape({
        blogs: React.PropTypes.string,
        sections: React.PropTypes.string,
      }),
    };
  }

  static get defaultProps() {
    return {
      titles: {
        blogs: 'Blogs',
      },
    };
  }

  targetIfNeeded({ internal }) {
    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  }
  renderListContent(linkList = []) {
    return linkList.map((link, i) => {
      const commonProps = {
        unstyled: true,
        ...link,
      };
      let className = 'sections-card__link';
      if (link.internal === false) {
        commonProps.target = '_blank';
        className = `${ className } sections-card__link--external`;
      }
      return (
        <li className="list__item" key={`sections-card__link_${ i }`}>
          <Button
            {...commonProps}
            unstyled
            key={`sections-card__link_${ i }`}
            className={className}
          >
            {link.title}
          </Button>
        </li>
      );
    });
  }
  render() {
    const sectionsCardData = this.props.data;
    const { titles } = this.props;
    const sections = [];
    if (titles.sections) {
      sections.push(
        <h4 className="sections-card__header" key="sections-card__header">
          {titles.sections}
        </h4>
      );
    }
    sections.push(
      <ul className="list" key="sections-card__sections">
        {this.renderListContent(sectionsCardData.sections)}
      </ul>
    );
    const blogs = [];
    if (titles.blogs) {
      blogs.push(
        <h4 className="sections-card__header" key="sections-card__header">
          {titles.blogs}
        </h4>
      );
    }
    blogs.push(
      <ul className="list" key="sections-card__blogs">
        {this.renderListContent(sectionsCardData.blogs)}
      </ul>
    );
    return (
      <nav role="nav" className="sections-card">
        <div className="sections-card__wrapper">
          <div className="sections-card__menu">
            <div className="sections-card__list sections-card__list-sections">
              {sections}
            </div>
            <div className="sections-card__list sections-card__list-media">
              <ul className="list">
                {this.renderListContent(sectionsCardData.media)}
              </ul>
            </div>
            <div className="sections-card__list sections-card__list-blogs">
              {blogs}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
