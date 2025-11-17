import { useEffect, useRef } from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const NetWorkWatcher = () => {
  const online = useNetworkStatus();
  const shownRef = useRef<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (online && !shownRef.current) {
      shownRef.current = true;
      toast.success(t("toastify.network_online"));
    } else if (!online && shownRef.current) {
      shownRef.current = false;
      toast.error(t("toastify.network_offline"));
    }
  }, [online]);

  return null;
};

export default NetWorkWatcher;
