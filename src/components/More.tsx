export default function More() {
  return (
    <div className="border border-(--border-colour) rounded-lg flex justify-center items-center  bg-[rgb(235,235,235)] dark:bg-[rgb(20,20,20)] select-none cursor-not-allowed h-50 ">
      <h3 className="dark:text-[rgb(91,91,91)] text-[#858585] ">
        more
        <span className="dots">.</span>
        <span className="dots">.</span>
        <span className="dots">.</span>
      </h3>
    </div>
  );
}
