import Chat from "./Chat";

function ChatList({ ...hookObject }) {
  const users = ["a", "b", "c", "d"];
  return (
    <main className="w-full h-full flex relative  items-center">
      <section
        style={{ boxShadow: "0px 0px 5px 5px var(--vintage-teal-50)" }}
        className=" hidden md:flex w-40 h-full  p-2  justify-center items-center flex-col md:h-[80vh]"
      >
        <h1 className="text-[--primary-text] w-full h-fit border-b-2">CHATS</h1>
        <ul className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <li className="bg-[--primary-dark] text-[--primary-text] w-[10rem] h-fit flex justify-start items-center  p-2  rounded translate-x-[100%] shadow-2xl border-4 border-[--vintage-teal-50] absolute">
            Abba
          </li>
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
      <section className=" h-full justify-center items-center flex w-full ">
        <Chat {...hookObject} />
      </section>
    </main>
  );
}

export default ChatList;
