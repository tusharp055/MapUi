import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select, Button } from 'antd';
import { selectRegion } from '../store/actions';

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionSelect = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadClick = () => {
    if (selectedRegion) {
      dispatch(selectRegion(selectedRegion));
    }
  };

  return (
    <div className="form-input">
      <Select
        style={{ width: 200 }}
        onChange={handleRegionSelect}
        placeholder="Select a region"
        value={selectedRegion}
      >
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadClick}>Load</Button>
    </div>
  );
};

export default FormInput;
  