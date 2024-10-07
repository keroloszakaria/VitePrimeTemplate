import { icons } from "@/plugins/icons";
export const sidebarLinks = [
  {
    separator: true,
  },
  {
    items: [
      {
        label: "الصفحة الرئيسية",
        icon: icons.dashboard,
        customIcon: true,
      },
      {
        label: "المناسبات",
        icon: icons.calendar,
        customIcon: true,
      },
      {
        label: "المسئوولين",
        icon: icons.users,
        customIcon: true,
      },
      {
        label: "الإعدادات",
        icon: icons.settings,
        customIcon: true,
        children: [
          {
            label: "الصفحة الرئيسية",
            icon: icons.dashboard,
            customIcon: true,
          },
          {
            label: "المناسبات",
            icon: icons.calendar,
            customIcon: true,
          },
          {
            label: "المسئوولين",
            icon: icons.calendar,
            customIcon: true,
          },
        ],
      },
    ],
  },
];
