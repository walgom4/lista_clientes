import React from 'react';

const SideBar = (props) => {
  const { children } = props;

  return (
    <div className='app-sidebar sidebar-shadow'>
      <div className='scrollbar-sidebar'>
        <div className='app-sidebar__inner'>{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
