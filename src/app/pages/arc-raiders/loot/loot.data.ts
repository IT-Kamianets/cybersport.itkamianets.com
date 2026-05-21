export interface LootRecycleYield {
	itemId: string;
	itemName: string;
	yieldAmount: number;
}

export interface LootItem {
	id: string;
	name: string;
	category: 'Material' | 'Recyclable' | 'Valuable' | 'Key' | 'Core';
	rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
	stackLimit: number;
	sellValue: number;
	foundIn: string[];
	description: string;
	image: string;
	icon: string;
	recyclesInto?: LootRecycleYield[];
}

export const LOOT: LootItem[] = [
	{
		id: 'magnetic-accelerator',
		name: 'Magnetic Accelerator',
		category: 'Valuable',
		rarity: 'Epic',
		stackLimit: 5,
		sellValue: 1650,
		foundIn: ['Buried City (Tech Labs)', 'Dropped by Bastions'],
		description: 'A heavy, highly advanced linear acceleration component. While too complex to be repurposed by standard Raiders, Speranza engineers pay a premium for intact units.',
		image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Magnetic+Accelerator',
		icon: '🧲'
	},
	{
		id: 'ion-sputter',
		name: 'Ion Sputter',
		category: 'Recyclable',
		rarity: 'Epic',
		stackLimit: 3,
		sellValue: 400,
		foundIn: ['Industrial Zones', 'Dam Battlegrounds'],
		description: 'A delicate mechanism used by ARC machines for atmospheric processing. It can be sold as-is, or dismantled into extremely useful crafting components.',
		image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Ion+Sputter',
		icon: '🔋',
		recyclesInto: [
			{ itemId: 'voltage-converter', itemName: 'Voltage Converter', yieldAmount: 1 },
			{ itemId: 'scrap-metal', itemName: 'Scrap Metal', yieldAmount: 5 }
		]
	},
	{
		id: 'blue-access-keycard',
		name: 'Blue Access Keycard',
		category: 'Key',
		rarity: 'Rare',
		stackLimit: 1,
		sellValue: 100,
		foundIn: ['High-Tier Military Crates', 'Dropped by ARC Snitches'],
		description: 'An encrypted Old World access card. Grants access to secure extraction points and hidden bunkers.',
		image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Blue+Keycard',
		icon: '🔑'
	},
	{
		id: 'synthetic-polymer',
		name: 'Synthetic Polymer',
		category: 'Material',
		rarity: 'Uncommon',
		stackLimit: 10,
		sellValue: 25,
		foundIn: ['All Zones (Toolboxes)', 'Industrial Areas'],
		description: 'A versatile, lightweight plastic compound essential for crafting weapons and specialized gear.',
		image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Synthetic+Polymer',
		icon: '⚙️'
	},
	{
		id: 'voltage-converter',
		name: 'Voltage Converter',
		category: 'Material',
		rarity: 'Rare',
		stackLimit: 5,
		sellValue: 120,
		foundIn: ['Recycled from Advanced ARC Tech'],
		description: 'A high-grade electrical component essential for crafting advanced gear and energy weapons.',
		image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Voltage+Converter',
		icon: '🔌'
	},
	{
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
	}
];
