import React from 'react';

export default function User() {
  const user = {
    name: 'Joe Smith',
    email: 'joesmith@hello.com',
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
