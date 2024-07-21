// src/_includes/customMarkdownEditor.js
import React from 'react';

const CustomMarkdownEditorControl = ({ value, onChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value.replace(/\n/g, ' |\n');
        onChange(newValue);
    };

    return <textarea value={value} onChange={handleChange} />;
};

const CustomMarkdownEditorPreview = ({ value }) => {
    return <div>{value}</div>;
};

export { CustomMarkdownEditorControl, CustomMarkdownEditorPreview };