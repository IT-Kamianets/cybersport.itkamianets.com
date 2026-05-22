import { LootItem } from '../loot.data';

export const wires: LootItem = {
    id: 'wires',
    name: 'Wires',
    category: 'Material',
    rarity: 'Uncommon',
    stackLimit: 15,
    sellValue: 200,
    foundIn: [
        'Scavenging: Server Rack, Power Distribution Box, Oscilloscope, Heater, Generator Fuse Box',
        'Recycling',
        'Sold by Celeste'
    ],

    description: 'Wires is an Uncommon item that is primarily used to craft Weapon Mods. It is required to complete the quests After Rain Comes and Eyes On The Prize, and for the Expedition project.',

    recyclesInto: [
        { itemId: 'rubber-parts', itemName: 'Rubber Parts', yieldAmount: 2 }
    ],

    image: 'https://arcraiders.wiki/w/images/3/39/Wires.png',
    icon: '〰️'
};
