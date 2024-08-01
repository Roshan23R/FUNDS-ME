export default function Page() {
  return (
    <div className="bg-grey-300 flex min-h-screen items-center p-4 font-mono lg:justify-center  ">
      <div className="bg-grey-300 max flex flex-col overflow-hidden rounded-xl text-white shadow-xl md:flex-1 md:flex-row lg:max-w-screen-sm">
        <div className="bg- p-5 md:flex-1">
          <h3 className="my-4 text-2xl font-semibold  text-white ">Logged In</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold ">
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="rounded border border-gray-300 bg-transparent px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold ">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="rounded border border-gray-300 bg-transparent px-4 py-2 transition duration-300 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px w-14 bg-gray-400"></span>
                <span className="font-normal ">or Sign-up</span>
                <span className="h-px w-14 bg-gray-400"></span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
