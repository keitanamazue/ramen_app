export const Layout = (props) => {
  const { sidebar, main } = props;
  return (
    <div className="container mx-auto md:flex md:flex-row">
      <sidebar className="md:w-3/12 ">{sidebar}</sidebar>
      <main className="w-full mx-auto flex flex-col items-center justify-start md:w-9/12 md:justify-center">
        {main}
      </main>
    </div>
  );
};
