"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var objectOptions = [{
  label: 'Male',
  value: 1
}, {
  label: 'Female',
  value: 2
}, {
  label: 'Non Binary',
  value: 3
}, {
  label: 'Other',
  value: 4
}];

var OptionsFromObject = function OptionsFromObject() {
  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  return _react["default"].createElement(_grommet.Grommet, {
    theme: _grommet.grommet
  }, _react["default"].createElement(_grommet.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, _react["default"].createElement(_grommet.Select, {
    id: "select",
    name: "select",
    placeholder: "Select",
    labelKey: "label",
    value: value,
    options: objectOptions,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValue(option);
    }
  })));
};

(0, _react2.storiesOf)('Select', module).add('Options from object', function () {
  return _react["default"].createElement(OptionsFromObject, null);
});