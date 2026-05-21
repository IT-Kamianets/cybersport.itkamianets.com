import { LootItem } from '../loot.data';

export const plasticParts: LootItem = {
    id: 'plastic-parts',
    name: 'Plastic Parts',
    category: 'Material',
    rarity: 'Common',
    stackLimit: 50,
    sellValue: 50,
    foundIn: [
        'Scavenging: Industrial Drawer, Server Rack',
        'Recycling',
        'Sold by Celeste',
        'Scrappy'
    ],

    description: 'Plastic Parts is one of the five basic crafting materials. It is used to craft a wide range of items.',

    // Base material, cannot be broken down further.
    recyclesInto: [],

    image: 'https://arcraiders.wiki/w/images/c/c9/Plastic_Parts.png',
    icon: '🧱'
};