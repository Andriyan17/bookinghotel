/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react';
import propType from "prop-types";
import { DateRange } from "react-date-range";
import formatDate from "utils/formatDate";
import icCalender from "assets/icons/icon-calendar.svg"
import "./index.scss"

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
    value.endDate ? ' - ' + formatDate(value.endDate) : ''
  }`;

  return (
    <div
      ref={refDate}
      className={['input-date mb-3', props.outerClassName].join(' ')}>
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={icCalender} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

Date.propType = {
    value: propType.object,
    onChange: propType.func,
    placeholder: propType.string,
    outerClassName: propType.string
}
