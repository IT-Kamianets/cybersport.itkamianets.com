import { Enemy } from '../enemies.data';

export const snitch: Enemy = {
	id: 'snitch',
	name: 'Snitch Drone',
	threatLevel: 'Standard',
	mobility: 'Aerial',
	damageType: 'Energy/Laser',
	armorType: 'Light Shielding',
	primaryAttack: 'Target Designator (Calls Reinforcements)',
	secondaryAttack: 'Light Plasma Volley',
	spawnsIn: 'Open fields, patrolling extraction zones',
	overview: 'The Snitch is a scout drone that patrols the skies. While its offensive capabilities are minimal, it serves as the eyes of the ARC network. If it spots a Raider, it will paint the target with a laser and call in drop-pods containing heavier combat units.',
	behavior: [
		{ mode: 'Search Pattern', description: 'Flies in large circular patterns scanning the ground with a sweeping blue cone.' },
		{ mode: 'Alert Mode', description: 'Cone turns red, it emits a loud siren, and begins dodging incoming fire while summoning reinforcements.' }
	],
	weakPoints: [
		{ point: 'Rotor Hubs', description: 'Destroying any of the four rotor hubs will send the drone crashing to the ground.' }
	],
	tactics: 'Stealth is preferred. If you must engage, coordinate with your squad to destroy it instantly before it can finish its alert broadcast. Smoke grenades break its line of sight and interrupt the summoning sequence.',
	lootDrops: {
		guaranteed: '5x Scrap Metal, 1x Energy Cell.',
		common: 'Sensor Optics.',
		rare: 'Pristine ARC Communication Array.'
	},
	lore: '"The Snitch doesn\'t kill you. It just invites the guys who will." - Resistance Radio Broadcast',
	primaryWeakness: 'Coordinated Burst Fire',
	keyDrop: 'Sensor Optics',
	image: 'https://arcraiders.wiki/w/images/c/c6/ARC_Snitch.png',
	icon: '💀💀'
};
