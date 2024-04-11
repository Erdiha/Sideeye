import Thumbnail from "../userComponent/profile/Thumbnail";

function ChatList(hookObjects) {
  console.log("hookObject", hookObjects);
  const { allUsers, user, session, setClickedUser } = hookObjects;
  console.log("user in chatlist", allUsers[0], user);

  return (
    <main className="w-full h-full flex relative  items-center">
      <section className=" hidden md:flex w-40 h-full  p-2  justify-center items-center flex-col md:h-[80vh]">
        <h1 className="text-[--primary-text] w-full h-fit border-b-2">CHATS</h1>
        <ul className="w-full h-full flex flex-col gap-2 justify-center items-center">
          {allUsers.map(
            (user) =>
              user.id !== session.user.id && (
                <button className={``} onClick={() => setClickedUser(user.id)}>
                  <span className="flex bg-white">
                    <Thumbnail type="chatlist" imgSrc="/me.jpg" />
                  </span>
                  <li className="relative"></li>
                </button>
              )
          )}
        </ul>
      </section>
    </main>
  );
}

export default ChatList;
