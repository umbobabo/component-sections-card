import Button from '@economist/component-link-button';
import List from '@economist/component-list';
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

  shouldComponentUpdate() {
    return false;
  }

  targetIfNeeded({ internal }) {
    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  }
  renderListContent(linkList) {
    return linkList.map((link, i) => {
      const commonProps = {
        key: `${ i }`,
        unstyled: true,
        ...link,
      };
      if (link.internal === false) {
        return (
          <Button
            key={`sections-card__link_${ i }`}
            className="sections-card__link sections-card__link--external"
            {...commonProps}
            target="_blank"
            unstyled
          >
            {link.title}
          </Button>
        );
      }
      return (
        <Button
          key={`sections-card__link_${ i }`}
          className="sections-card__link"
          {...commonProps}
          unstyled
        >
        {link.title}
      </Button>);
    });
  }
  render() {
    const sectionsCardData = this.props.data;
    const { titles } = this.props;
    const sections = [];
    if (titles.sections) {
      sections.push(<h4 className="sections-card__header">{titles.sections}</h4>);
    }
    sections.push(
      <List>
        {this.renderListContent(sectionsCardData.sections)}
      </List>
    );
    const blogs = [];
    if (titles.blogs) {
      blogs.push(<h4 className="sections-card__header">{titles.blogs}</h4>);
    }
    blogs.push(
      <List>
        {this.renderListContent(sectionsCardData.blogs)}
      </List>
    );
    return (
      <nav role="nav" className="sections-card">
        <div className="sections-card__wrapper">
          <div className="sections-card__menu">
            <div className="sections-card__list sections-card__list-sections">
              {sections}
            </div>
            <div className="sections-card__list sections-card__list-media">
              <List>
                {this.renderListContent(sectionsCardData.media)}
              </List>
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
