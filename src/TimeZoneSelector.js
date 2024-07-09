import React, { useState } from 'react';
import Select from 'react-select';

const TimeZoneSelector = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'America/New_York', label: 'New York (EST)' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Europe/Paris', label: 'Paris (CET)' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
    // Add more options as needed
  ];

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value); // Pass selected timezone value to parent component
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select timezone..."
    />
  );
};

export default TimeZoneSelector;
