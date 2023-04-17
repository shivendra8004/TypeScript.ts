type StatusProps = {
  status: string;
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "error") {
    message = "Error in fetching data";
  } else {
    message = "Data fetched successfully!";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
