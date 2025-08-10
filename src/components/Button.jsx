// src/components/Button.jsx
export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-accent text-dark font-semibold px-4 py-2 rounded shadow hover:bg-yellow-400 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
