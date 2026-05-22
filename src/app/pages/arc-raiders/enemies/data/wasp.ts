import { Enemy } from '../enemies.data';

export const wasp: Enemy = {
	id: 'wasp',
	name: 'Wasp',
	threatLevel: 'Standard',
	mobility: 'Aerial',
	damageType: 'Energy/Laser',
	armor: 'None',
	health: 110,
	primaryAttack: 'Projectile volley',
	weaknesses: ['Thrusters'],
	xpGained: [
		{ action: 'Destroy', xp: 100 },
		{ action: 'Scavenging Chassis', xp: 200 }
	],
	overview: 'The Wasp is a small, agile ARC drone equipped with a rapid-fire machine gun capable of shredding the toughest Raider shields in seconds. Swarms of Wasps frequently patrol large, outdoor areas, supported by Hornets and Fireflies.',
	tactics: [
		'Upon entering combat mode, the Wasp aims a red laser at its target before unleashing a volley of light projectiles. It hovers momentarily to stabilize its aim before quickly repositioning.',
		'The Wasp uses four thrusters for flight and stabilization. Destroying multiple thrusters destabilizes the drone, causing it to lose control of its flight. In this state, each collision with the environment inflicts heavy damage, often permanently disabling or destroying the machine.',
		'Destroyed Wasps are good sources of Light Ammo.',
		'Wasps become significantly harder to hit when their thrusters are destroyed, as their flight becomes erratic.',
		'A Lure Grenade can buy enough time to escape persistent swarms.'
	],
	lootDropIds: [
		'arc-powercell', 'light-ammo', 'arc-alloy', 'simple-gun-parts', 
		'arc-synthetic-resin', 'arc-thermo-lining', 'wasp-driver'
	],
	keyDropId: 'wasp-driver',
	lore: 'The Wasp is a small, thruster-powered drone, flying in tidy patrols with other Wasps and the occasional Hornet. When engaged, they switch to erratic flight patterns, making them a challenging target. They are equipped with light guns, and seem to actively scan for potential threats, sometimes mistaking humanoid statues for Raiders.\n\nWasps are often observed patrolling the skies in predictable patterns, seemingly serving as the first line of security for ARC\'s probing and extraction operations. They scan for any human activity that could interfere with their operations, and seem drawn to areas with regular Raider activity.\n\nThe Wasp\'s thrusters are exposed and unarmored, giving practiced Raiders a surefire way to send them crashing down.\n\nWhile the innards of the drone are fairly simple, its central drive and power unit are worth tearing out. Raiders have shot at it for a makeshift explosive, and various tinkerers of Toledo have been known to use it to craft more advanced contraptions.',
	image: 'https://arcraiders.wiki/w/images/f/fe/Wasp_Codex.png',
	icon: '🚁'
};
