export type NavItem = {
    name: string;
    route: string;
    icon: string;
    activeIcon: string;
};

export const navItems: NavItem[] = [
    {
        name: 'Home',
        route: '/app',
        icon: 'mdi:home-variant-outline',
        activeIcon: 'mdi:home-variant'
    },
    {
        name: 'Settings',
        route: '/app/settings',
        icon: 'mdi:settings-outline',
        activeIcon: 'mdi:settings'
    }
];