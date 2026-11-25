import PropTypes from "prop-types";
import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";

const iconPropTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Transaction: ({ size = 24, color = "currentColor", ...props }) => (
    <TransactionSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Balance: ({ size = 24, color = "currentColor", ...props }) => (
    <BalanceSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <BillSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <ExpenseSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <GoalSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <SettingSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Detail: ({ size = 24, color = "currentColor", ...props }) => (
    <DetailSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ChevronRightSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <LogoutSVG
      width={size}
      height={size}
      color={color}
      stroke={color}
      {...props}
    />
  ),
};

Icon.Overview.propTypes = iconPropTypes;
Icon.Transaction.propTypes = iconPropTypes;
Icon.Balance.propTypes = iconPropTypes;
Icon.Bill.propTypes = iconPropTypes;
Icon.Expense.propTypes = iconPropTypes;
Icon.Goal.propTypes = iconPropTypes;
Icon.Setting.propTypes = iconPropTypes;
Icon.Detail.propTypes = iconPropTypes;
Icon.ChevronRight.propTypes = iconPropTypes;
Icon.Logout.propTypes = iconPropTypes;

export default Icon;
