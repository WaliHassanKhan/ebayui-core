const Expander = require('makeup-expander');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');

module.exports = {
    handleExpand() {
        this.getComponent('options').elementScroll();
        this.emit('expand');
    },

    handleCollapse() {
        this.emit('collapse');
    },

    handleListboxChange(event) {
        if (event.wasClicked) {
            this._expander.expanded = false;
        }
        const selectedIndex = event.index;
        this.state.selectedIndex = selectedIndex;
        this.emit('change', event);
    },

    onCreate() {
        this.state = {
            selectedIndex: 0,
        };
    },

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(
            0,
            input.options.findIndex((option) => option.selected)
        );
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupMakeup() {
        const { input } = this;

        if (input.options.length && !input.disabled) {
            const container = this.getEl('container');

            this._expander = new Expander(container, {
                autoCollapse: true,
                expandOnClick: true,
                simulateSpacebarClick: true,
                contentSelector: '.listbox-button__listbox',
                hostSelector: '.listbox-button__control',
                expandedClass: 'listbox-button--expanded',
                focusManagement: 'content',
            });

            scrollKeyPreventer.add(this.getEl('button'));
        }
    },

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.destroy();
            this._expander = undefined;
        }
    },
};
