import PropTypes from "prop-types";

const variants = {
  primary: "bg-primary",
  secondary: "bg-neutral-700",
  danger: "bg-red-600",
};

function AtomButton({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <>
      <button
        type={type}
        {...props}
        className={[
          "px-8 py-2 rounded-md text-white",
          variants[variant] ?? variants.primary,
          className,
        ].join(" ")}
      >
        {children}
      </button>
    </>
  );
}

AtomButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(Object.keys(variants)),
  className: PropTypes.string,
};

export default AtomButton;