const InputField = ({ label, type, value, onChange, placeholder, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-slate-300 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl bg-slate-800 border text-white placeholder-slate-500
        focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all
        ${error ? "border-red-500" : "border-slate-700"}`}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

export default InputField;
