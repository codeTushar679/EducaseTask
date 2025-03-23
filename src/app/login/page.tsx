import Link from "next/link";


const LoginPage = () => {

  return (
    <div className="h-190 w-90 rounded-xl bg-[#FBFBFB] drop-shadow-xl border border-[#BCCCDC] flex justify-center p-5">
      <div className="mt-5 flex justify-start flex-col">
        <h2 className="text-2xl font-medium">Signin to your <br /> PopX account</h2>
        <p className="text-gray-500 mb-5 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque.
        </p>

        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-9 p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        <div className="mb-4">
          <label className="text-[#7743DB] text-sm font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-9 p-2 border border-gray-300 rounded mt-1 outline-[#BCCCDC]"
          />
        </div>

        <Link href="/profile"
          className="flex justify-center items-center p-2 rounded bg-[#C8C6C6] text-white cursor-pointer">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
