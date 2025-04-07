export default function LoginPage() {
    return (
      <main className="flex justify-center items-center min-h-screen ">
        <div className="p-6 rounded-xl shadow-lg bg-[#102D53] w-[300px]">
          <h2 className="text-2xl font-bold mb-4 text-center bg-[linear-gradient(to_right,#C29226,#B27D0F,#D9B14A,#B27D0F,#C29226,#C7972B,#FADE7B)] bg-clip-text text-transparent">Login</h2>
          <form>
            <input type="email" placeholder="Email" className="w-full p-2 border mb-3 rounded text-gray-400" />
            <input type="password" placeholder="Password" className="w-full p-2 border mb-3 rounded text-gray-400" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Log In
            </button>
          </form>
        </div>
      </main>
    );
  }