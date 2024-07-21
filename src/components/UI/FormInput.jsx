function FormInput({ label, name, type, defaultValue }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        className="input input-bordered "
        name={name}
        defaultValue={defaultValue}
      />
    </label>
  );
}
export default FormInput;
