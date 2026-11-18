import PropTypes from "prop-types";
import AtomCard from "../atoms/AtomCard";
import AtomButton from "../atoms/AtomButton";
import MoleculeFormField from "../molecules/MoleculeFormField";
import TemplateCenter from "../templates/TemplateCenter";

const OrganismRegisterPanel = ({ onCancel }) => {
  return (
    <TemplateCenter>
      <AtomCard>
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-neutral-400">
            Daftar akun baru untuk mulai menggunakan layanan.
          </p>
        </div>

        <form className="p-5">
          <MoleculeFormField id="name" label="Nama Lengkap" type="text" />
          <br />
          <MoleculeFormField id="email" label="Email" type="email" />
          <br />
          <MoleculeFormField id="password" label="Password" type="password" />
          <br />
          <MoleculeFormField id="confirmPassword" label="Confirm Password" type="password" />
          <br />
          <AtomButton type="submit" variant="primary">
            Register
          </AtomButton>
          <AtomButton type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </AtomButton>
        </form>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Dengan mendaftar, kamu menyetujui ketentuan layanan kami.
        </p>
      </AtomCard>
    </TemplateCenter>
  );
};

OrganismRegisterPanel.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default OrganismRegisterPanel;
