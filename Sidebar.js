import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from './store/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };

  return (
    <aside>
      {/* Your sidebar content goes here */}
      <label>
        Night Mode
        <input type="checkbox" checked={nightMode} onChange={handleNightModeToggle} />
      </label>
    </aside>
  );
};

export default Sidebar;
