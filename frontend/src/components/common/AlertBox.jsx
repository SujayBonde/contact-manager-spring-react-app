const AlertBox = ({ type, message }) => {
  if (!message) return null;
  const styles = {
    error: "bg-red-900/40 border border-red-500 text-red-300",
    success: "bg-green-900/40 border border-green-500 text-green-300",
    info: "bg-blue-900/40 border border-blue-500 text-blue-300",
  };
  return (
    <div className={`rounded-xl px-4 py-3 text-sm mb-4 ${styles[type]}`}>
      {message}
    </div>
  );
};

export default AlertBox;
