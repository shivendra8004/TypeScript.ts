const Person = (props: { personName: { first: string; last: string } }) => {
  return (
    <div>
      <h2>
        {props.personName.first}&nbsp;{props.personName.last}
      </h2>
    </div>
  );
};

export default Person;
