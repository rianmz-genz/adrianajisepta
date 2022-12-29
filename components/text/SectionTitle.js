const SectionTitle = ({ value, className = "" }) => {
  return (
    <h1
      itemProp="sectionTitle"
      className={`text-5xl text-gray-700 dark:text-white font-semibold font-source-sans leading-[60.34px] ${className}`}
    >
      {value}
    </h1>
  );
};

export default SectionTitle;
