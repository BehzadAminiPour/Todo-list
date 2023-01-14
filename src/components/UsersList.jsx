import { List } from "reactstrap";

const UsersList = (props) => {
  return (
    <>
      <List type="unstyled" className="list-group">
        {props.onSave.map((data) => (
          <li key={data.id} className="list-group-item bg-dark my-1 text-light">
            {data.name} ({data.age} Years old)
          </li>
        ))}
      </List>
    </>
  );
};

export default UsersList;
