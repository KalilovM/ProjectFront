function Login() {
  return (
    <div className={"h-screen w-full min-w-[400px] overflow-x-hidden flex justify-center items-center"}>
      <div className={"mt-20 max-w-[510px] mx-auto text-white w-full"}>
        <div className={"w-full bg-gray-800 rounded-sm mx-auto my-0 p-10 flex flex-col items-start justify-center"}>
          <h2 className={"text-2xl"}>Login</h2>
          <form className={"pt-8 w-full"}>
            <fieldset className={"border-none p-0"}>
              <div>
                <label className={"text-sm font-bold mb-3 inline-block w-full align-baseline"}>Email</label>
                <input type="email" className={"w-full h-10 border border-gray-700 px-3.5 py-0 overflow-visible text-black"}/>
              </div>
              <div className={"mt-7"}>
                <button type={"submit"} className={"bg-blue-500 text-white w-full p-0 h-12 rounded-sm flex items-center border-0 justify-center text-center"}>Login</button>
                <a href="#" className={"text-blue-500 text-sm mt-3.5 "}>Forgot password?</a>
              </div>
            </fieldset>
          </form>
        </div>
        <div className={"mt-4 py-3.5 text-center text-sm bg-gray-800"}>
          Have no account yet?&nbsp;
          <a href="#" className={"text-blue-500"}>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;