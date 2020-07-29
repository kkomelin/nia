import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps } from '../../lib/helpers';
import '../../styles/init.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withA11y]
};

const sizeVariants = ['large'];

export const sizes = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          Button 1
        </Button>
      </div>
    ))}
    <Button onClick={action('clicked')} size="large" className="a1">
      Button 2
    </Button>
  </>
);

export const disabled = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
        <Button size={size} disabled={true}>
          Button
        </Button>
      </div>
    ))}
  </>
)

export const withIcon = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          <ShareIcon {...a11yIconHiddenProps} /> Button
        </Button>
      </div>
    ))}
  </>
)
