export const sidebarMenu = [
    {
        section: "PUBLIC",
        items: [
            {
                label: "Home",
                icon: "Wrench",
                href: "/",
            },
            {
                label: "Accounting",
                icon: "Wallet",
                children: [
                    { label: "Payables", icon: "ArrowLeft", href: "/payables" },
                    { label: "Receivables", icon: "ArrowRight", href: "/receivables" },
                    { label: "Financial Reports", icon: "FileText", href: "/reports" },
                ],
            },
            {
                label: "Buying",
                icon: "ShoppingCart",
            },
            {
                label: "Selling",
                icon: "ShoppingBag",
            },
            {
                label: "Stock",
                icon: "Boxes",
            },
            {
                label: "Assets",
                icon: "PackageSearch",
            },
            {
                label: "HR",
                icon: "Briefcase",
                children: [
                    { label: "Recruitment", icon: "Users", href: "/recruitment" },
                    { label: "Employee Lifecycle", icon: "UserCog", href: "/employee" },
                    { label: "Performance", icon: "Star", href: "/performance" },
                    { label: "Shift & Attendance", icon: "Clock", href: "/shift" },
                    { label: "Expense Claims", icon: "Receipt", href: "/expense" },
                    { label: "Leaves", icon: "Heart", href: "/leaves" },
                ],
            },
        ],
    },
];
