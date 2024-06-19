CMS.registerWidget('tagSelect', window.createClass({
    getInitialState: function() {
        return {
            value: this.props.value || []
        };
    },
    handleChange: function(e) {
        const options = Array.from(e.target.options);
        const value = options.filter(option => option.selected).map(option => option.value);
        if (!value.includes('post')) {
            value.push('post');
        }
        this.setState({ value });
        this.props.onChange(value);
    },
    render: function() {
        const { field } = this.props;
        const options = field.get('options');
        return h('select', {
            multiple: true,
            onChange: this.handleChange,
            value: this.state.value
        },
            options.map(option => h('option', { key: option, value: option }, option))
        );
    }
}));
