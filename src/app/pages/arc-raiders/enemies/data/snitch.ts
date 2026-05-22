import { Enemy } from '../enemies.data';

export const snitch: Enemy = {
	id: 'snitch',
	name: 'Snitch',
	threatLevel: 'Standard',
	mobility: 'Aerial',
	damageType: 'Energy/Laser',
	armor: 'None',
	health: 158,
	primaryAttack: 'None',
	abilities: ['Summon ARC'],
	weaknesses: ['Thrusters'],
	xpGained: [
		{ action: 'Destroy', xp: 100 },
		{ action: 'Scavenging Core', xp: 200 }
	],
	overview: 'The Snitch is a small, unarmed ARC reconnaissance drone that diligently searches the environment for Raider activity. Its wide-angle scanner projects a visible beam resembling a spotlight, which the drone uses to detects targets. Once a Raider is spotted, the Snitch alerts nearby ARC and calls down reinforcements from orbit before making its escape.',
	tactics: [
		'The Snitch relies on four unarmored thrusters for flight and stabilization. Destroying multiple thrusters in any combination will destabilize the drone, causing it to lose flight control and spiral into the ground. Each collision with the environment inflicts heavy damage, with a high probability of permanently disabling or destroying the machine.',
		'A few well-placed shots with a Weapon that fires Medium or Heavy Ammo is usually enough to destroy a Snitch before it begins calling for reinforcements.',
		'Hiding in heavy foliage may be enough to avoid being spotted by its scanner.',
		'Reinforcements are only guaranteed to appear after the Snitch begins the third in its series of calls.',
		'Snitches become significantly harder to hit when their thrusters are destroyed, as their flight becomes erratic and unpredictable.'
	],
	lootDropIds: [
		'arc-powercell', 'arc-alloy', 'snitch-scanner', 
		'arc-synthetic-resin', 'arc-thermo-lining', 'sensors'
	],
	keyDropId: 'snitch-scanner',
	lore: 'Pesky and vigilant, the Snitch is an unarmed reconnaissance drone, equipped with advanced scanning technology. They are frequently found patrolling strategic areas or scouting ahead for other enemy units. If it detects any human threat, it calls in reinforcements from orbit.\n\nThe purpose of the Snitch seems to be to uphold communication networks and coordinate orbital drops. Shani refers to them as ARC\'s "eyes in the sky"; calling in reinforcements and maintaining operational awareness.\n\nThe ability to call in reinforcements make Snitches a high-priority target for Raiders who want to avoid escalating encounters. However, some Raiders have been known to intentionally aggravate it in a bid to conveniently harvest Wasp and Hornet Drivers.',
	image: 'https://arcraiders.wiki/w/images/c/c6/ARC_Snitch.png',
	icon: '👁️'
};
