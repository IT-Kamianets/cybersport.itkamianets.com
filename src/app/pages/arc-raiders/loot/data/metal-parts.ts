import { LootItem } from '../loot.data';

export const metalParts: LootItem = {
	id: 'metal-parts',
	name: 'Metal Parts',
	category: 'Material',
	rarity: 'Common',
	stackLimit: 50, // Extracted from the bottom of Page 1
	sellValue: 75,  // Extracted from the bottom of Page 1
	
	foundIn: [
		'Scavenging: Metal Crate, Car Hood, Server Rack, Seed Vault',
		'Recycling junk items',
		'Sold by Celeste',
		'Scrappy'
	],
	
	description: 'Metal Parts is one of the five basic crafting materials. It is used to craft a wide range of items. Commonly found in Mechanical, Industrial, Electrical, and Technological areas.',
	
	// Because this is a base material, it cannot be broken down further.
	// The "Recycled From" tables in the PDF are handled automatically by our SSOT Reverse Lookups!
	recyclesInto: [], 
	
	image: 'https://arcraiders.wiki/w/images/8/89/Metal_Parts.png',
	icon: '⚙️'
};