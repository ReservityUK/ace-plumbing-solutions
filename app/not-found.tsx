export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
      <a href="/" className="text-blue-600 hover:underline">Return Home</a>
    </div>
  );
}