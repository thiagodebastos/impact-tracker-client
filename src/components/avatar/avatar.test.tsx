import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Avatar } from './index';

describe('Avatar component', () => {
    it('renders correctly', () => {
        const testRenderer = TestRenderer.create(<Avatar />);
        const tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders fallback avatar image when both no image and user name are supplied', () => {
        const testRenderer = TestRenderer.create(<Avatar />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType('svg'));
    });

    it('renders user initials when no image supplied but user name is', () => {
        const userName = 'Thiago de Bastos';
        const userInitials = 'TB';
        const testRenderer = TestRenderer.create(<Avatar name={userName} />);
        const testInstance = testRenderer.root;
        const divInstance = testInstance.findByProps({
            'data-test-id': 'avatar-fallback-initials',
        });

        expect(divInstance.children).toContain(userInitials);
    });
});
