import Thumbnail from "../userComponent/profile/Thumbnail";

function ChatList({ ...hookObject }) {
  const { allUsers, user, session } = hookObject;
  console.log("user in chatlist", allUsers, user, session);

  return (
    <main className="w-full h-full flex relative  items-center">
      <section className=" hidden md:flex w-40 h-full  p-2  justify-center items-center flex-col md:h-[80vh]">
        <h1 className="text-[--primary-text] w-full h-fit border-b-2">CHATS</h1>
        <ul className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <span className="flex bg-white">
            <Thumbnail type="chatlist" imgSrc="/me.jpg" />
          </span>
          <li className="relative">Abba</li>

          <li className="bg-gray-300 w-full h-fit flex justify-center items-center ">
            Babba
          </li>
          <li className="bg-gray-300 w-full h-fit flex justify-center items-center">
            Cabba
          </li>
          <li className="bg-gray-300 w-full h-fit flex justify-center items-center">
            Dabba
          </li>
          <li className="bg-gray-300 w-full h-fit flex justify-center items-center">
            Eabba
          </li>
        </ul>
      </section>
    </main>
  );
}

export default ChatList;
