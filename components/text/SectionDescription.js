const SectionDescription = ({ value, className = "" }) => {
  return (
    <p
      itemProp="sectionDescription"
      className={`text-xl text-gray-600 dark:text-white/[.75] ${className}`}
    >
      {value}
    </p>
  );
};

export default SectionDescription;
