import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="content">
          <span className="credentials w-full">
            <div className="nav">
              <p>Login</p>
            </div>
            <span className="email flex gap-3">
              <Image src="/logo.svg" width={25} height={25} alt="logo" />
              <input
                type="email"
                name="login_id"
                id="login_id"
                placeholder="Enter your login id"
              />
            </span>
            <span className="password">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M12 16.5V14.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="password"
                name="login_id"
                id="login_id"
                placeholder="Enter your Password"
              />
            </span>
            <div className="login-btn flex justify-center items-center">
              <button className="px-4 py-2 rounded-full border-2 border-lime-700 text-lime-700 font-semibold hover:bg-blue-900 hover:text-white transition-all my-5 ">
                Login
              </button>
            </div>
          </span>
        </div>
      </main>
      <footer>
        <div className="credits">
          <a href="https://www.edupluscampus.com/" target="_blank">
            &copy;<p> 2024 Powered by Eduplus campus</p>
          </a>
        </div>
      </footer>
    </>
  );
}
