import PropTypes from "prop-types";

const TemplateCenter = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-01">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
};

TemplateCenter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateCenter;