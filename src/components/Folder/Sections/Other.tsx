export function Other() {
  return (
    <>
      <div className="other-content">
        <h2 className="text-4xl font-bold mb-4 pl-2">Other</h2>
        <p>
          other stuff
        </p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            React
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            CSS
          </span>
        </div>
      </div>
    </>
  );
}
