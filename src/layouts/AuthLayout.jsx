 export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg animate-fadeIn">
        {/* Logo or App Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo192.png"
            alt="App Logo"
            className="w-16 h-16 mb-3"
          />
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>

        {children}
      </div>
    </div>
  );
}
