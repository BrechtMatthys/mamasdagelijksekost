const CustomMarkdownEditor = {
    controlComponent: ({ value, onChange }) => {
      const handleChange = (e) => {
        const newValue = e.target.value.replace(/\n/g, ' |\n');
        onChange(newValue);
      };
  
      return <textarea value={value} onChange={handleChange} />;
    },
  };
  
  export default CustomMarkdownEditor;