import { LootItem } from '../loot.data';

export const rubberParts: LootItem = {
    id: 'rubber-parts',
    name: 'Rubber Parts',
    category: 'Material',
    rarity: 'Common',
    stackLimit: 50,
    sellValue: 50,
    foundIn: [
        'Scavenging',
        'Recycling',
        'Sold by Celeste',
        'Scrappy'
    ],

    description: 'Rubber Parts is one of the five basic crafting materials. It is used to craft a wide range of items.',

    recyclesInto: [],

    image: 'https://arcraiders.wiki/w/images/9/93/Rubber_Parts.png',
    icon: '🔘'
};
