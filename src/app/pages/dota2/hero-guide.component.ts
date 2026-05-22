import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HEROES } from './heroes.data';

@Component({
    selector: 'app-dota2-hero-guide',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor, RouterLink],
    templateUrl: './hero-guide.component.html',
    styleUrls: ['./hero-guide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroGuideComponent {
    private readonly route = inject(ActivatedRoute);

    // Try to get hero from navigation state first, fall back to HEROES lookup by id param
    public hero: any = (history.state && history.state.hero) || null;

    constructor() {
        if (!this.hero) {
            const id = this.route.snapshot.paramMap.get('id');
            if (id) {
                this.hero = HEROES.find((h: any) => h.id === id) || null;
            }
        }
    }

    // Convert keys like 'item.bladeMail' or 'blink' to hyphenated filenames: 'blade-mail' or 'blink-dagger'
    public itemIcon(key: string) {
        if (!key) return '';
        const token = key.includes('.') ? key.split('.').pop()! : key;
        let name = token.replace(/_/g, '-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        if (name === 'blink') name = 'blink-dagger';
        // common alternative names
        if (name === 'blackkingbar') name = 'black-king-bar';
        return `https://uk.dotabuff.com/assets/items/${name}.jpg`;
    }

    public skillIcon(key: string) {
        if (!key) return '';
        const token = key.includes('.') ? key.split('.').pop()! : key;
        const name = token.replace(/_/g, '-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        return `https://uk.dotabuff.com/assets/abilities/${name}.jpg`;
    }

    public usePlaceholder(event: Event) {
        const img = event.target as HTMLImageElement;
        if (img && img.src && !img.dataset['fallback']) {
            img.dataset['fallback'] = '1';
            img.src = '/assets/dota2/placeholder-icon.svg';
        }
    }

    // Deterministic pseudo-random helpers based on hero id so each hero gets consistent stats
    private hashCode(str: string) {
        let h = 2166136261 >>> 0;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619) >>> 0;
        }
        return h;
    }

    private pickRange(id: string, min: number, max: number) {
        const h = this.hashCode(id);
        const v = min + (h % (max - min + 1));
        return v;
    }

    public derivedStats(hero: any) {
        if (!hero) return null;
        const id = hero.id || hero.name || String(hero);
        return {
            attackRange: hero.attackRange ?? this.pickRange(id + 'range', 150, 700),
            moveSpeed: hero.moveSpeed ?? this.pickRange(id + 'ms', 260, 330),
            strength: hero.strength ?? this.pickRange(id + 'str', 18, 30),
            agility: hero.agility ?? this.pickRange(id + 'agi', 15, 30),
            intelligence: hero.intelligence ?? this.pickRange(id + 'int', 12, 30),
            attackDamage: hero.attackDamage ?? this.pickRange(id + 'dmg', 20, 90),
            armor: hero.armor ?? Math.round((this.pickRange(id + 'arm', 0, 120) / 10) * 10) / 10, // 0.0 - 12.0
            magicResist: hero.magicResist ?? Math.round((this.pickRange(id + 'mr', 0, 35) / 100) * 10) / 10, // 0.0 - 0.35 as fraction
            attackSpeed: hero.attackSpeed ?? this.pickRange(id + 'as', 80, 200),
            difficulty: hero.difficulty ?? (['Easy', 'Medium', 'Hard'][this.hashCode(id + 'diff') % 3]),
        };
    }

    // Generate a 4-tier talent choice set (two choices per tier) deterministically per-hero
    public derivedTalents(hero: any) {
        if (!hero) return null;
        if (hero.talents && Array.isArray(hero.talents) && hero.talents.length) return hero.talents;
        const id = hero.id || hero.name || String(hero);
        const options = [
            (v: number) => `+${v} Strength`,
            (v: number) => `+${v} Agility`,
            (v: number) => `+${v} Intelligence`,
            (v: number) => `+${v} Attack Damage`,
            (v: number) => `+${v} Attack Speed`,
            (v: number) => `+${v}% Spell Amplify`,
            (v: number) => `+${v}% Status Resistance`,
            (v: number) => `+${v}% Magic Resistance`,
            (v: number) => `+${v} Movement Speed`,
            (v: number) => `+${v} Armor`,
            (v: number) => `+${v} Evasion`,
            (v: number) => `+${v} Health`,
            (v: number) => `+${v} Mana`,
            (v: number) => `-${v}% Respawn Time`,
        ];

        const tiers = [10, 15, 20, 25];
        const talents: Array<{ left: string; right: string; level: number }> = [];
        for (let i = 0; i < tiers.length; i++) {
            const tierKey = id + '_talent_' + i;
            const seed = this.hashCode(tierKey);
            const leftIdx = seed % options.length;
            let rightIdx = (seed >> 8) % options.length;
            if (rightIdx === leftIdx) rightIdx = (rightIdx + 1) % options.length;

            // value scales with tier
            const base = 5 + i * 5;
            const leftVal = base + (seed % (10 + i * 5));
            const rightVal = base + ((seed >> 4) % (12 + i * 6));

            talents.push({ left: options[leftIdx](leftVal), right: options[rightIdx](rightVal), level: tiers[i] });
        }

        return talents;
    }

    // Generate simple lore data when not provided on hero
    public derivedLore(hero: any) {
        if (!hero) return null;
        if (hero.lore) return hero.lore;
        const id = hero.id || hero.name || 'unknown';
        const seed = this.hashCode(id + '_lore');

        const bioTemplates = [
            `${hero.name} hails from the forgotten wilds, shaped by early conflict and driven by a singular purpose.`,
            `${hero.name} grew up among ancient ruins and learned to bend the elements to survive.`,
            `Once a simple warrior, ${hero.name} was transformed by destiny into a figure whispered about across the land.`,
            `${hero.name} is a veteran of many campaigns, known for decisive action and iron will.`,
            `${hero.name} searches for answers to a long-lost mystery tied to their origin and power.`,
        ];

        const factionsPool = ['Radiant', 'Dire', 'Neutral', 'Order of the Flame', 'The Forgotten', 'Guild of Mages', 'Warden Court'];
        const relationsPool = ['Allied with the Wardens', 'Rival of the Flame Order', 'Neutral toward the Guild of Mages', 'Sought by the King', 'Feared by bandits'];

        const bio = bioTemplates[seed % bioTemplates.length];
        // pick 1-2 factions
        const f1 = factionsPool[(seed >> 3) % factionsPool.length];
        const f2 = factionsPool[(seed >> 7) % factionsPool.length];
        const factions = f1 === f2 ? [f1] : [f1, f2];

        const rel1 = relationsPool[(seed >> 11) % relationsPool.length];
        const rel2 = relationsPool[(seed >> 17) % relationsPool.length];
        const relations = rel1 === rel2 ? [rel1] : [rel1, rel2];

        return {
            biography: bio,
            factions,
            relations,
        };
    }
}
