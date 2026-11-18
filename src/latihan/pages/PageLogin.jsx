import PropTypes from "prop-types";
import TemplateCenter from "../templates/TemplateCenter";
import OrganismLoginPanel from "../organisms/OrganismLoginPanel";

const PageLogin = ({ onRegister }) => {
  return (
    <TemplateCenter>
      <OrganismLoginPanel onRegister={onRegister} />
    </TemplateCenter>
  );
};

PageLogin.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default PageLogin;