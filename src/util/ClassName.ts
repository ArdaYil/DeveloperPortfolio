const ClassName = (...classNames: Array<string | undefined>) => {
  return classNames.join(" ").trim();
};

export default ClassName;
