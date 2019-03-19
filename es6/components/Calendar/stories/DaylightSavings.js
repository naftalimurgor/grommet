import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Calendar, Grommet } from 'grommet';
import { grommet } from 'grommet/themes'; // DSTCalendar has dates specifically chosen to identify issues with
// crossing the daylight savings time boundary (from California).

var DSTCalendar = function DSTCalendar() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Calendar, {
    date: "2018-11-04T07:00:00.000Z",
    bounds: ['2013-11-06', '2018-12-06']
  })));
};

storiesOf('Calendar', module).add('Daylight Savings Time', function () {
  return React.createElement(DSTCalendar, null);
});