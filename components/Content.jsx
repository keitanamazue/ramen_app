export const Content = (props) => {
  const { header, children } = props;
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-start md:w-9/12 md:justify-center ">
      <div className="w-full">{header}</div>
      <div className="flex flex-col items-center mt-42">{children}</div>
    </div>
  );
};
