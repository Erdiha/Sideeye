function page() {
  const user = {
    id: 1,
    username: "XXXX",
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
  };

  return (
    <div className="w-full h-full flex flex-col">
      <section className="w-full h-1/2"></section>
      <section className="w-full h-1/2"></section>
    </div>
  );
}

export default page;
