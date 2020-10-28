function NumberList(props) {
  const numbers = props.numbers;
  const ListItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{ListItems}</ul>;
}

// Inncorrect use of list

function ListItem(props) {
  const value = props.value;
  return <li key={value.toString()}>{value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

// correct use of keys

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;

// Keys Must Only Be Unique Among Siblings

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((Number) => Number * 2);
  console.log(doubled);
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Blog;

// Map in JSX

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
