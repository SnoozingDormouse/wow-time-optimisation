export interface ExpansionPanelNode {
    name: string;
    children?: ExpansionPanelNode[];
}

export const TREE_DATA: ExpansionPanelNode[] = [
    {
        name: 'Battle For Azeroth Pathfinder, Part One',
        children: [
            {
                name: 'Battle for Azeroth Explorer',
                children: [
                    {
                        name: 'Explore Tiragarde Sound',
                        children: [
                            { name: 'Anglepoint Wharf' },
                            { name: 'Boralus' },
                            { name: 'Fernwood Ridge' },
                            { name: 'Freehold' },
                            { name: 'Norwington Estate' },
                            { name: 'Krakenbane Cove' },
                            { name: 'Abandoned Junkheap' },
                            { name: 'Kennings Lodge' },
                            { name: 'The Wailing Tideway' },
                            { name: 'Vigil Hill' },
                            { name: 'Waning Glacier' },
                        ]
                    },
                    {
                        name: 'Explore Drustvar',
                        children: [
                            { name: '' }
                        ]
                    },
                    {
                        name: 'Explore Stormsong Valley',
                        children: [
                            { name: '' }
                        ]
                    },
                    {
                        name: 'Explore Zuldazar',
                        children: [
                            { name: '' }
                        ]
                    },
                    {
                        name: 'Explore Nazmir',
                        children: [
                            { name: '' }
                        ]
                    },
                    {
                        name: 'Explore Vol\'dun',
                        children: [
                            { name: '' }
                        ]
                    }
                ]
            },
            {
                name: 'Azerothian Diplomat',
                children: [
                    { name: '' }
                ]
            },
            {
                name: 'Wide World of Quests',
                children: [
                    { name: '' }
                ]
            },
            {
                name: 'Complete Zone Questlines',
                children: [
                    { name: '' }
                ]
            },
            {
                name: 'War Campaign',
                children: [
                    { name: '' }
                ]
            }
        ]
    }
];
