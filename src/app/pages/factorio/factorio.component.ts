import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-factorio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './factorio.component.html',
    styleUrls: ['./factorio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactorioComponent {
    public currentTab: 'overview' | 'planets' | 'guides' | 'achievements' = 'overview';
    public lang: 'en' | 'ua' = 'ua';
    public activeGuideTab: 'beginner' | 'intermediate' | 'pro' = 'beginner';

    public readonly heroImage = 'assets/hero.jpg';

    public selectTab(tab: 'overview' | 'planets' | 'guides' | 'achievements'): void {
        this.currentTab = tab;
    }

    public setLang(l: 'en' | 'ua'): void {
        this.lang = l;
    }

    public setGuideTab(tab: 'beginner' | 'intermediate' | 'pro'): void {
        this.activeGuideTab = tab;
    }

    public t(en: string, ua: string): string {
        return this.lang === 'en' ? en : ua;
    }

    public planets = [
        {
            name: { en: 'Vulcanus', ua: 'Вулканус' },
            icon: '🌋',
            tag: { en: 'Volcanic Planet', ua: 'Вулканічна Планета' },
            resources: ['Tungsten', 'Calcite', 'Coal'],
            desc: {
                en: 'A volcanic industrial planet with rivers of molten lava and extreme temperature hazards. Rich in tungsten and calcite ores. Home to the terrifying Demolisher worms — massive armored creatures that patrol the surface and can destroy your factory if provoked.',
                ua: 'Вулканічна промислова планета з річками розплавленої лави та екстремальними температурами. Багата на вольфрам і кальцит. Тут живуть жахливі черви-Деструктори — масивні броньовані істоти, що патрулюють поверхню і можуть знищити твою фабрику.'
            },
            mobs: {
                en: 'Demolisher Worm — a giant armored worm, extremely resilient. Attacks anything in its path. Cannot be killed easily — requires artillery or large turret arrays.',
                ua: 'Черв\'як-Деструктор — гігантський броньований черв, надзвичайно витривалий. Атакує все на своєму шляху. Вбити непросто — потрібна артилерія або великі вежі.'
            },
            tip: { en: '💡 Tip: Build your base far from Demolisher patrol routes initially.', ua: '💡 Порада: Спочатку будуй базу далеко від маршрутів Деструкторів.' },
        },
        {
            name: { en: 'Fulgora', ua: 'Фулгора' },
            icon: '⚡',
            tag: { en: 'Storm Planet', ua: 'Планета Гроз' },
            resources: ['Holmium', 'Scrap Metal', 'Ice'],
            desc: {
                en: 'A barren lightning-storm planet where constant electrical storms make solar power unreliable. Rich in holmium and scrap metal from ancient ruins. Managing your power grid is literally a matter of survival here.',
                ua: 'Безплідна планета з постійними грозами, де сонячна енергія ненадійна. Багата на гольмій і металобрухт із давніх руїн. Управління енергосіткою тут буквально питання виживання.'
            },
            mobs: {
                en: 'No traditional enemies — the lightning storms themselves are your main hazard, plus power outages that disable your defenses.',
                ua: 'Немає традиційних ворогів — блискавки самі по собі є головною загрозою, а також відключення електрики, що вимикає захист.'
            },
            tip: { en: '💡 Tip: Build accumulator banks to survive lightning blackouts.', ua: '💡 Порада: Будуй банки акумуляторів щоб пережити блекаути від блискавок.' },
        },
        {
            name: { en: 'Gleba', ua: 'Глеба' },
            icon: '🌿',
            tag: { en: 'Bio Planet', ua: 'Біологічна Планета' },
            resources: ['Nutrients', 'Bioflux', 'Seeds'],
            desc: {
                en: 'A swampy biological planet where resources are living organisms. Pentapods — spider-like alien creatures — build nests and attack your factory. Resources here are grown, not mined: agricultural science is key.',
                ua: 'Болотиста біологічна планета де ресурси — живі організми. Пентаподи — павукоподібні прибульці — будують гнізда і атакують фабрику. Ресурси тут вирощують, а не добувають: агронаука — ключ до успіху.'
            },
            mobs: {
                en: 'Pentapods — fast spider-like creatures that attack in swarms. Spoilage of bioproducts in your factory also spawns enemies if left unmanaged.',
                ua: 'Пентаподи — швидкі павукоподібні істоти що атакують зграями. Псування біопродуктів на фабриці також породжує ворогів якщо не стежити.'
            },
            tip: { en: '💡 Tip: Never let bioproducts spoil — build fast belt lines to processing.', ua: '💡 Порада: Ніколи не давай біопродуктам псуватись — будуй швидкі стрічки до переробки.' },
        },
        {
            name: { en: 'Aquilo', ua: 'Акіло' },
            icon: '❄️',
            tag: { en: 'Frozen Planet', ua: 'Крижана Планета' },
            resources: ['Fluorine', 'Ammonia', 'Ice'],
            desc: {
                en: 'A frozen ammonia-ocean planet — the final frontier. Extremely cold environment requires heated pipes and buildings. Produces the rarest resources needed for legendary-quality items.',
                ua: 'Замерзла планета з аміачним океаном — фінальний рубіж. Надхолодне середовище вимагає обігрівальних труб і будівель. Виробляє найрідкісніші ресурси для легендарних предметів.'
            },
            mobs: {
                en: 'No traditional enemies. The cold itself is lethal — pipes freeze, buildings shut down, and the player dies from hypothermia without heated suits.',
                ua: 'Немає традиційних ворогів. Холод сам по собі смертельний — труби замерзають, будівлі зупиняються, гравець гине від переохолодження без термокостюму.'
            },
            tip: { en: '💡 Tip: Always bring heated pipe networks before any other infrastructure.', ua: '💡 Порада: Завжди спочатку будуй обігрівальні трубопроводи перед будь-якою іншою інфраструктурою.' },
        }
    ];

    public guides = {
        beginner: [
            { en: 'Start by mining iron and copper by hand, then immediately build a stone furnace to smelt ores automatically.', ua: 'Починай з ручного видобутку заліза і міді, потім одразу будуй кам\'яну піч для автоматичної плавки.' },
            { en: 'Place a burner mining drill on an iron ore patch — it runs on coal and mines automatically.', ua: 'Постав бурильну установку на залізну руду — вона працює на вугіллі і видобуває автоматично.' },
            { en: 'Build inserters to move items between machines and chests — they are the backbone of automation.', ua: 'Будуй маніпулятори для переміщення предметів між машинами і скринями — вони основа автоматизації.' },
            { en: 'Research basic technologies in the lab: automation, logistics, and electronics come first.', ua: 'Досліджуй базові технології в лабораторії: спочатку автоматизація, логістика, електроніка.' },
            { en: 'Build a small bus: 4 lanes of iron plates, copper plates, steel, and green circuits — this feeds all your assemblers.', ua: 'Побудуй маленьку шину: 4 стрічки залізних пластин, мідних пластин, сталі і зелених мікросхем — це живить усі збірники.' },
        ],
        intermediate: [
            { en: 'Set up a train network: use rail signals to allow multiple trains on the same track without crashes.', ua: 'Налаштуй залізничну мережу: використовуй залізничні сигнали щоб кілька поїздів їхали без зіткнень.' },
            { en: 'Use circuit networks: connect storage tanks and pumps with combinators to automate fluid management.', ua: 'Використовуй схемні мережі: з\'єднай ємності і насоси з комбінаторами для автоматизації рідин.' },
            { en: 'Build oil refining: crack heavy oil into light oil and then into petroleum gas for advanced production.', ua: 'Будуй нафтопереробку: розщеплюй важку нафту на легку, потім на нафтовий газ для просунутого виробництва.' },
            { en: 'Use roboports and construction robots to build blueprints automatically — this massively speeds up expansion.', ua: 'Використовуй робопорти і будівельних роботів для автоматичного будівництва за кресленнями — це різко прискорює розширення.' },
            { en: 'Create a proper defense perimeter with walls, turrets, and laser towers. Biters get stronger over time!', ua: 'Створи нормальний захисний периметр зі стінами, вежами і лазерними вежами. Жуки стають сильнішими з часом!' },
        ],
        pro: [
            { en: 'Calculate exact production ratios: 1 electric mining drill produces 0.5/s iron ore, 1 stone furnace smelts 0.3125/s — plan your factory mathematically.', ua: 'Розрахуй точні виробничі пропорції: 1 електрична бурильна установка видобуває 0.5/с руди, 1 кам\'яна піч плавить 0.3125/с — плануй фабрику математично.' },
            { en: 'Use productivity modules in assemblers and speed modules in beacons — this is the most efficient late-game combination.', ua: 'Використовуй модулі продуктивності в збірниках і модулі швидкості в маяках — це найефективніша комбінація в пізній грі.' },
            { en: 'Build a megabase producing 1000+ science packs per minute — requires optimized bus, separate production islands, and heavy use of logistics robots.', ua: 'Побудуй мегабазу що виробляє 1000+ наукових пакетів за хвилину — потрібна оптимізована шина, окремі виробничі острівці і масове використання роботів.' },
            { en: 'On Space Platforms: manage asteroid mining logistics carefully — wrong belt layouts cause platforms to run out of materials mid-flight.', ua: 'На космічних платформах: ретельно керуй логістикою видобутку астероїдів — неправильне розташування стрічок призведе до нестачі матеріалів під час польоту.' },
            { en: 'For legendary quality: use quality modules on Fulgora recyclers to cycle items up to legendary tier. This requires specific crafting loops.', ua: 'Для легендарної якості: використовуй модулі якості на переробниках Фулгори щоб підвищувати предмети до легендарного рівня. Це потребує специфічних циклів виробництва.' },
        ]
    };

    public achievements = [
        { name: 'There is no spoon', desc: { en: 'Launch a rocket in under 8 hours. Requires perfect play from minute one.', ua: 'Запусти ракету менш ніж за 8 годин. Вимагає ідеальної гри з першої хвилини.' }, hard: true },
        { name: 'Lazy Bastard', desc: { en: 'Win while crafting fewer than 111 items by hand. Forces total automation mastery.', ua: 'Перемогти видобувши менше 111 предметів вручну. Вимагає повного опанування автоматизації.' }, hard: true },
        { name: 'Steam All the Way', desc: { en: 'Launch a rocket using only steam engines for power — no solar, no accumulators.', ua: 'Запусти ракету використовуючи лише парові двигуни — без сонячних панелей і акумуляторів.' }, hard: true },
        { name: 'Raining Bullets', desc: { en: 'Kill 10,000 enemies with gun turrets.', ua: 'Убий 10,000 ворогів з гарматних веж.' }, hard: false },
        { name: 'It Stinks and They are Blind', desc: { en: 'Kill a behemoth biter using poison capsules only.', ua: 'Убий бегемота-кусаку лише капсулами з отрутою.' }, hard: false },
        { name: 'Boldly Going', desc: { en: 'Travel to all Space Age planets: Vulcanus, Fulgora, Gleba, and Aquilo.', ua: 'Відвідай усі планети Space Age: Вулканус, Фулгора, Глеба і Акіло.' }, hard: true },
        { name: 'The Pinnacle of Science', desc: { en: 'Research all technologies in the game. Requires building across all planets.', ua: 'Дослідж усі технології в грі. Вимагає будівництва на всіх планетах.' }, hard: true },
    ];

    public mechanics = [
        { icon: '🏭', en: 'Factory Building', ua: 'Будівництво Фабрики', desc_en: 'Place machines, connect them with belts and inserters, automate everything from raw ore to finished products.', desc_ua: 'Ставиш машини, з\'єднуєш їх стрічками і маніпуляторами, автоматизуєш все від руди до готових виробів.' },
        { icon: '🚂', en: 'Train Logistics', ua: 'Залізнична Логістика', desc_en: 'Build rail networks to transport resources across vast distances with automated scheduling.', desc_ua: 'Будуєш залізничні мережі для перевезення ресурсів на великі відстані з автоматичним розкладом.' },
        { icon: '🤖', en: 'Robot Networks', ua: 'Мережі Роботів', desc_en: 'Deploy logistics and construction robots to manage items and build blueprints automatically.', desc_ua: 'Розгортаєш логістичних і будівельних роботів для управління предметами і будівництва за кресленнями.' },
        { icon: '⚡', en: 'Circuit Networks', ua: 'Схемні Мережі', desc_en: 'Wire up machines with combinators to create complex programmable logic systems — essentially a computer inside the game.', desc_ua: 'З\'єднуєш машини комбінаторами для створення складних програмованих систем — фактично комп\'ютер всередині гри.' },
        { icon: '🛸', en: 'Space Platforms', ua: 'Космічні Платформи', desc_en: 'Build factories in space, mine asteroids, and travel between planets carrying resources and science packs.', desc_ua: 'Будуєш фабрики в космосі, видобуваєш астероїди і подорожуєш між планетами перевозячи ресурси.' },
        { icon: '🔬', en: 'Research Trees', ua: 'Дерева Досліджень', desc_en: 'Research hundreds of technologies across all planets to unlock new machines, items, and planetary abilities.', desc_ua: 'Досліджуєш сотні технологій на всіх планетах для розблокування нових машин, предметів і планетарних здібностей.' },
    ];
}