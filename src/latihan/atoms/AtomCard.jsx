import PropTypes from "prop-types";

function AtomCard({ children, className = "" }) {
  return (
    <>
      <div
        className={`bg-gray-06 border border-gray-01 p-5 rounded-lg shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

AtomCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AtomCard;