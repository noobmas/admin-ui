import PropTypes from "prop-types";

function AtomLabel({ children, ...props }) {
  return (
    <>
      <label {...props} className={`me-1 ${props.className ?? ""}`}>
        {children}
      </label>
    </>
  );
}

AtomLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AtomLabel;