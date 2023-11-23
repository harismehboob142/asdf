import { ROUTES } from "./Routes";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
} from "@tabler/icons-react";

export const Navbartabs = [
  { link: ROUTES.HOME, label: "Add Inventory", icon: IconBellRinging },
  { link: "/asdf", label: "View Inventory", icon: IconReceipt2 },
  { link: "", label: "Buy/Sell", icon: IconFingerprint },
  { link: "", label: "Pendings", icon: IconKey },
  { link: "", label: "Vault", icon: IconDatabaseImport },
  { link: "", label: "divider", icon: IconKey },
  { link: ROUTES.PURCHASED_ORDERS, label: "Purchased Orders", icon: Icon2fa },
  { link: "", label: "Sold Orders", icon: IconSettings },
  { link: "", label: "My Store", icon: IconSettings },
  { link: "", label: "divider", icon: IconKey },
  { link: "", label: "Create New", icon: IconSettings },
  { link: "", label: "Messages", icon: IconSettings },
];

export const tabs = [];
