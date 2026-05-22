import { Enemy } from '../enemies.data';

export const rocketeer: Enemy = {
	id: 'rocketeer',
	name: 'Rocketeer',
	threatLevel: 'Heavy / Elite',
	mobility: 'Aerial',
	damageType: 'Explosive',
	armor: 'Heavy',
	health: 1100,
	primaryAttack: 'Missile Barrage',
	weaknesses: ['Thrusters'],
	xpGained: [
		{ action: 'Destroy', xp: 500 },
		{ action: 'Scavenging Chassis', xp: 600 },
		{ action: 'Scavenging Thruster', xp: 500 }
	],
	overview: 'The Rocketeer is a large, flying ARC machine that often spells doom to any unlucky Raider unable to escape its airborne wrath. It\'s typically deployed in locations of high value.',
	tactics: [
		'Aims 4 yellow lasers that, once lined up, turns red a moment before firing 1-4 missiles. Each missile dealing a significant amount of damage and can down a Raider in as few as two hits.',
		'Before fighting, seek shelter in buildings or behind substantial cover. Aim for the thrusters while focusing on two in particular.',
		'If you manage to get higher than it or to ride the Rocketeer, you can shoot or stick a grenade to the top of its thrusters, since they don\'t have any armor.',
		'Another way to effectively damage the Rocketeer is shooting off its "eyebrow" preferably with a high ARC Armor Penetration stat weapon.',
		'Landing a few Snap Blast Grenades on top of it can take it out easily.',
		'When the Rocketeer\'s laser disappears (signaling a full lock-on), dodge roll or get behind cover immediately. Use caution, as its rockets still do splash damage.',
		'A Showstopper grenade will take this ARC to the ground for a few seconds if you hit a thruster, allowing the Raider to attach mines to it or ride it.'
	],
	achievementTips: [
		'Similar to other flying ARC, it is possible to ride on top of a Rocketeer. This can be done directly with the Snap Hook or careful positioning.',
		'Stunning the Rocketeer with a Showstopper or Hornet Driver will cause it to fall to the ground, allowing any Raider to climb on easily.',
		'Dealing 50 damage to any enemy while on top of a Rocketeer will grant the "Death From Above" achievement.'
	],
	lootDropIds: [
		'arc-powercell', 'heavy-ammo', 'arc-alloy', 'electrical-components', 
		'advanced-arc-powercell', 'arc-circuitry', 'arc-motion-core', 
		'heavy-gun-parts', 'rocketeer-driver'
	],
	keyDropId: 'rocketeer-driver',
	lore: 'Looming grimly in the skies, the Rocketeer is a large, heavily-armored, long-range artillery machine, dominating open spaces with its powerful missile launchers. It can target Raiders from afar, creating hazardous zones that force Raiders to stay on the move or seek cover.\n\nARC seems to station Rocketeers in key areas; guarding high-threat locations, or just roaming and making life miserable for Raiders. They are able to eliminate fortified human resistance points in otherwise hard-to-reach locations.\n\nLike the Wasp and the Hornet, it sports thrusters to stay airborne. While these thrusters are technically weak spots, they are large and take a significant amount of firepower to destroy.',
	image: 'https://arcraiders.wiki/w/images/5/57/ARC_Rocketeer.png',
	icon: '🚀'
};
