<<<<<<< Updated upstream
// pages/index.js
import { motion } from "framer-motion";
import Head from "next/head";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SideEye - Your Secret Is Ours</title>
        <meta
          name="description"
          content="SideEye - The discreet chat app where your secret is safe with us. We store no personal data unless it's asked!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-sm max-w-full"
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-blue-500">SideEye</span>
          </h1>
          <p className="text-xl">
            Your secret is ours! We chat stores no personal data unless it's
            asked.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </motion.div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
=======
const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SideEye - Your Secret Is Ours</title>
        <meta
          name="description"
          content="SideEye - The discreet chat app where your secret is safe with us. We store no personal data unless it's asked!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-sm max-w-full"
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-blue-500">SideEye</span>
          </h1>
          <p className="text-xl">
            Your secret is ours! We chat stores no personal data unless it's
            asked.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </motion.div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};
>>>>>>> Stashed changes

export default Landing;
