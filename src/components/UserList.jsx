function UsersList({ data, loading, error }) {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  
  export default withDataFetching(UsersList, "https://jsonplaceholder.typicode.com/users");
  