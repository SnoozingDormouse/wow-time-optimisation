export interface SideMenuNode {
    name: string;
    url: string;
    children?: SideMenuNode[];
}

export const TREE_DATA: SideMenuNode[] = [
    {
        name: 'Home',
        url: '/home'
    },
    {
        name: 'Flying',
        url: '/summary-flying',
            children: [
                {name: 'Shadowlands', url: '/shadowlands-flying'},
                {name: 'Battle For Azeroth', url: '/bfa-flying'},
                {name: 'Legion', url: '/legion-flying'},
                {name: 'Warlords of Draenor', url: '/wod-flying'},
                {name: 'Mists of Pandaria', url: '/mop-flying'},
                {name: 'Cataclysm', url: '/cata-flying'},
                {name: 'Wrath of the Lich King', url: '/wotlk-flying'},
                {name: 'The Burning Crusade', url: '/tbc-flying'},
                {name: 'Azeroth', url: '/azeroth-flying'}
            ]
    },
    {
        name: 'Pet Battles',
        url: ''
    },
    {
        name: 'Reputation',
        url: '/summary-reputation',
        children: [
            {name: 'Shadowlands', url: '/shadowlands-rep'},
            {name: 'Battle For Azeroth', url: '/bfa-rep'},
            {name: 'Legion', url: '/legion-rep'},
            {name: 'Warlords of Draenor', url: '/wod-rep'},
            {name: 'Mists of Pandaria', url: '/mop-rep'},
            {name: 'Cataclysm', url: '/cata-rep'},
            {name: 'Wrath of the Lich King', url: '/wotlk-rep'},
            {name: 'The Burning Crusade', url: '/tbc-rep'},
            {name: 'Azeroth', url: '/azeroth-rep'}
        ]
    }
];
