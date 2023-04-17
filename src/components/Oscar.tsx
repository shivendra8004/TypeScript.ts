type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
// Here we are trying to pass a component as a children of another component
