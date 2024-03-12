export const UserShape = () => {
  const user = [
    {
      id: 1,
      username: "Erdi",
      email: "john@example.com",
      password: "XXXXXX",
      profile_picture: "https://example.com/john.jpg",
      bio: "John Doe is a software engineer.",
      website: "XXXXXXXXXXXXXXXXXXXXXXX",
      location: "New York, NY",
      followers: 100,
      following: 50,
      posts: [
        { id: 1, title: "Post 1", content: "This is the content of post 1." },
        { id: 2, title: "Post 2", content: "This is the content of post 2." },
      ],
    },
  ];
  return (
    <div className="w-full h-full flex flex-col z-50 relative bg-transparent justify-center items-center">
      {user.map((item, index) => (
        <ul
          key={index}
          className="flex flex-col justify-center items-center w-full h-full text-white"
        >
          <li>{item.username}</li>
          <li>{item.email}</li>
          <li>{item.profile_picture}</li>
          <li>{item.location}</li>
          <li>{item.following}</li>
          <li>{item.website}</li>
        </ul>
      ))}
    </div>
  );
};
