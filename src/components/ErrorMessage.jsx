export default function ErrorMessage({ message }) {
  return (
    <h2 className="error">
      <span>⛔️</span> {message}
    </h2>
  );
}