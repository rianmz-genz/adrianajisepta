const ButtonAnchor = (props) => {
  const themeStyle = (() => {
    switch (props.theme) {
      case "primary":
        return "bg-indigo-500 text-white hover:bg-indigo-600";
      case "secondary":
        return "bg-indigo-100 text-indigo-500 hover:bg-indigo-200";
    }
  })();
  return (
    <a
      itemProp="url"
      className={`flex gap-2 justify-center px-7 py-3 rounded transition-all duration-300 ${themeStyle} ${props.className}`}
      {...props}
    />
  );
};

export default ButtonAnchor;
