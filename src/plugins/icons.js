import logo from "@/assets/images/svg/logo.svg?raw";
import dashboard from "@/assets/images/svg/dashboard.svg?raw";
import calendar from "@/assets/images/svg/calendar.svg?raw";
import settings from "@/assets/images/svg/settings.svg?raw";
import users from "@/assets/images/svg/users.svg?raw";

export const icons = {
  logo,
  dashboard,
  calendar,
  settings,
  users,
};

export default {
  install(app) {
    app.config.globalProperties.icons = icons;
  },
};
