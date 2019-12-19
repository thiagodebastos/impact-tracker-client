import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';
import '../src/styles/tailwind.css';

addDecorator(withInfo);
addDecorator(withKnobs);

configure([requireContext('../src/components', true, /stories\.(tsx|mdx)/)], module);
