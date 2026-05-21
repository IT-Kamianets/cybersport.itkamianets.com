import { LootItem } from '../loot.data';

export const scrapMetal: LootItem = {
	id: 'scrap-metal',
	name: 'Scrap Metal',
	category: 'Material',
	rarity: 'Common',
	stackLimit: 20,
	sellValue: 5,
	foundIn: ['All Zones', 'Recycled from various loot'],
	description: 'Basic metallic scrap. The foundation of almost all basic crafting in Speranza.',
	image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Scrap+Metal',
	icon: '🔩'
};
