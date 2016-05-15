import React from 'react';
import YourComponent from '../../src/components/YourComponent.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('YourComponent', module)
  .add('with default color', () => (
    <YourComponent />
  ))
  .add('with red color', () => (
    <YourComponent color="red" />
  ));
