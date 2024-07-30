function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        className={`input input-bordered ${size}`}
        name={name}
        defaultValue={defaultValue}
      />
    </label>
  );
}
export default FormInput;
