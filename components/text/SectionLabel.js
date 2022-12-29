const SectionLabel = ({ value, className = "" }) => {
  return (
    <p
      itemProp="sectionLabel"
      className={`text-indigo-500 text-2xl font-semibold font-source-sans ${className}`}
    >
      {value}
    </p>
  );
};

export default SectionLabel;
