import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';
import CategoryItem from '../categoy-item/category-item.component'
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <CategoryItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps, {selectDirectorySections})(Directory);