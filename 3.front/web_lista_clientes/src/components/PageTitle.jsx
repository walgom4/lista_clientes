import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChartBar, FaHome } from 'react-icons/fa';
import '../assets/styles/components/PageTitle.scss';

const PageTitle = (props) => {
  const { breadCrumbs } = props;
  console.log(breadCrumbs);

  let { title } = props;

  const lastCrumb = breadCrumbs.filter((item) => item.last)[0];
  const breadCrumbMobile = breadCrumbs.filter(
    (item) => item.order === (lastCrumb.order - 1).toString(),
  )[0];

  if (!title) {
    title = lastCrumb.name;
  }

  const listLinks = breadCrumbs.map((item, index) => {
    return item.link && !item.last ? (
      <Link key={index} to={item.link} className={`bread-crumb z-index-${6 - item.order}`}>
        {item.link !== '/' ? item.name : <FaHome className='nav-link-icon ' />}
      </Link>
    ) : (
      <div className='bread-active bread-crumb' key={index}>
        {item.link !== '/' ? item.name : <FaHome className='nav-link-icon ' />}
      </div>
    );
  });

  return (
    <>
      <div className='app-page-title'>
        <div className='page-title-wrapper'>
          <div className='page-title-heading'>
            <div className='page-title-icon'>
              <FaChartBar className='text-info' />
            </div>
            <div>
              {title}
              <div className='page-title-subheading'>{listLinks}</div>
              <div className='page-title-subheading-mobile'>
                {breadCrumbMobile && (
                  <Link to={breadCrumbMobile.link}>{`< ${breadCrumbMobile.name}`}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { breadCrumbs } = state.layout;
  return {
    breadCrumbs,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
