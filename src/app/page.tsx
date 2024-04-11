import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <div className="logo">
            <a href="https://www.edupluscampus.com/" target="_blank">
              <div className="educampus"></div>
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="content">
          <span className="credentials">
            <div className="nav">
              <p>Login</p>
            </div>
            <span className="email flex gap-3 ">
              <Image src="/logo.svg" width={25} height={25} alt="logo" />
              <input
                type="search"
                name="login_id"
                className="login_id"
                placeholder="Enter your login id"
              />
            </span>
          </span>
        </div>
        <div className="credits"></div>
      </main>
    </>
  );
}
