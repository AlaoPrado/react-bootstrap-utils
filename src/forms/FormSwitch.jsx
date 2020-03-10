import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext, handleInputChange } from './form-helpers';

export function FormSwitch({ id, name, required, trueLabel, falseLabel }) {
  const formState = useContext(FormContext);
  const value = formState.getValue(name) || false;

  return (
    <div className="custom-control custom-switch">
      <input
        {...{ required, name, id }}
        type="checkbox"
        className="custom-control-input"
        onChange={handleInputChange.bind(null, formState)}
        checked={value}
      />
      <label className="custom-control-label" htmlFor={id}>
        {(trueLabel || falseLabel) && (value ? trueLabel : falseLabel)}
      </label>
    </div>
  );
}

FormSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trueLabel: PropTypes.string,
  falseLabel: PropTypes.string,
  required: PropTypes.any,
};
