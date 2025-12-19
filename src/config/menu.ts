import {
    Wrench,
    BookOpen,
    ShoppingBag,
    CreditCard,
    Package,
    Briefcase,
    Users,
    Wallet,
    Factory,
    PieChart,
    CheckCircle,
    FolderOpen,
    Headphones,
    Settings,
    ArrowLeft,
    ArrowRight,
    FileText,
    UserPlus,
    Star,
    ClipboardList,
    Receipt,
    Heart,
    Coins,
    DollarSignIcon
} from 'lucide-react';

export const MENU_DATA = [
    {
        category: "PUBLIC",
        isOpen: true, // Default terbuka
        items: [
            { name: "Home", icon: Wrench, href: "/home" },
            {
                name: "Accounting",
                icon: BookOpen,
                href: "/accounting",
                items: [
                    { name: "Payables", icon: ArrowLeft, href: "/payables" },
                    { name: "Receivables", icon: ArrowRight, href: "/receivables" },
                    { name: "Financial Reports", icon: FileText, href: "/reports" },
                ]
            },
            { name: "Buying", icon: DollarSignIcon, href: "/buying" },
            { name: "Selling", icon: CreditCard, href: "/selling" },
            { name: "Stock", icon: Package, href: "/stock" },
            { name: "Assets", icon: ShoppingBag, href: "/assets" }, // Ikon tas belanja/tote bag
            {
                name: "HR",
                icon: Briefcase,
                href: "/hr",
                isOpen: true, // Terbuka sesuai Gambar 2
                items: [
                    { name: "Recruitment", icon: Users, href: "/recruitment" },
                    { name: "Employee Lifecycle", icon: UserPlus, href: "/lifecycle" },
                    { name: "Performance", icon: Star, href: "/performance" },
                    { name: "Shift & Attendance", icon: ClipboardList, href: "/attendance" },
                    { name: "Expense Claims", icon: Receipt, href: "/expense" },
                    { name: "Leaves", icon: Heart, href: "/leaves" },
                ]
            },
            {
                name: "Payroll",
                icon: Wallet,
                href: "/payroll",
                items: [
                    { name: "Salary Payout", icon: Coins, href: "/payout" },
                    { name: "Tax & Benefits", icon: PieChart, href: "/tax" },
                ]
            },
            { name: "Manufacturing", icon: Factory, href: "/manufacturing" },
            { name: "CRM", icon: PieChart, href: "/crm" },
            { name: "Quality", icon: CheckCircle, href: "/quality" },
            { name: "Projects", icon: FolderOpen, href: "/projects" },
            { name: "Support", icon: Headphones, href: "/support" },
            { name: "ERPNext Settings", icon: Settings, href: "/settings" },
        ]
    }
];