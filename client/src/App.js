import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  if (!users) {
    return null;
  }

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}

export default App;
