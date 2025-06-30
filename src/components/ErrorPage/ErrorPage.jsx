import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Animated 404 Text */}
        <div className="animate-bounce">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Gradient Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
