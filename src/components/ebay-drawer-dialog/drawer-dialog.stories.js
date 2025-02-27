import Readme from './README.md';
import Component from './examples/01-default/template.marko';
import code from './examples/01-default/template.marko?raw';

export default {
    title: 'ebay-drawer-dialog',
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
        noHandle: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether handle will be shown or not.',
        },
        expanded: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'Whether the drawer is expanded to full height or max 50%',
        },
        focus: {
            control: { type: 'text' },
            description:
                'An id for an element which will receive focus when the drawer opens (defaults to close button).',
        },
        a11yCloseText: {
            control: { type: 'text' },
            description: 'A11y text for close button and mask.',
        },
        a11yMinimizeText: {
            control: { type: 'text' },
            description:
                'A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer.',
        },
        a11yMaximizeText: {
            control: { type: 'text' },
            description:
                'A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer.',
        },

        header: {
            name: '@header',
            table: {
                category: '@attribute tags',
            },
        },
        footer: {
            name: '@footer',
            table: {
                category: '@attribute tags',
            },
        },
        onOpen: {
            action: 'on-open',
            description: 'Triggered on drawer opened',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onClose: {
            action: 'on-close',
            description:
                'Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onExpanded: {
            action: 'on-expanded',
            description:
                'drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
        onCollapsed: {
            action: 'on-collapsed',
            description:
                'drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ originalEvent }',
                },
            },
        },
    },
};

export const Standard = (args) => ({ input: args });
Standard.args = {
    header: {
        renderBody: 'Heading Text',
    },
    renderBody: `Body Content`,
    footer: {
        renderBody: `Footer Text`,
    },
};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
