import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './examples/01-default/template.marko';
import code from '!raw-loader!./examples/01-default/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-alert-dialog',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether dialog is open.',
            table: {
                disable: true,
            },
        },
        'confirm-text': {
            control: { type: 'text' },
            description: 'Text for confirm button',
        },
        header: {
            name: '@header',
            table: {
                category: '@attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    header: {
        renderBody: `Heading Text`,
    },
    renderBody: `Body Content`,
};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
