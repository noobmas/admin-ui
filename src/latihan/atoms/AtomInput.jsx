import PropTypes from "prop-types";

function AtomInput({ type = "text", ...props }) {
  return (
    <>
      <input
        type={type}
        {...props}
        className={`border border-gray-01 rounded-md p-2 ${props.className ?? ""}`}
      />
    </>
  );
}

AtomInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default AtomInput;