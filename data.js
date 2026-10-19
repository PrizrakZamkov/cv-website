// all site content lives here, edit this file to update the page
// texts are { ru, en }, empty links are hidden
// add image: 'img/name.png' or video: 'img/name.mp4' to a project to replace its gradient cover

const SITE = {
  person: {
    name: { ru: 'Станислав Делюков', en: 'Stanislav Delyukov' },
    nick: 'PrizrakZamkov',
    role: { ru: 'Unity и Frontend разработчик', en: 'Unity and Frontend developer' },
    tagline: {
      ru: 'Делаю игры на Unity и интерфейсы на React. Пишу диплом про пиксель-арт, который оживает через 3D.',
      en: 'I make games in Unity and interfaces in React. Writing my thesis on pixel art brought to life through 3D.'
    },
    location: { ru: 'Иннополис, Россия', en: 'Innopolis, Russia' },
    status: { ru: 'Ищу работу: Junior+ Unity или Frontend', en: 'Open to Junior+ Unity or Frontend roles' },
    contacts: [
      { label: 'Telegram', value: '@shines_light', href: 'https://t.me/shines_light', main: true },
      { label: { ru: 'Почта', en: 'Email' }, value: 's.delyukov@innopolis.university', href: 'mailto:s.delyukov@innopolis.university' },
      { label: 'GitHub', value: 'PrizrakZamkov', href: 'https://github.com/PrizrakZamkov' },
      { label: 'itch.io', value: 'prizrakzamkov', href: 'https://prizrakzamkov.itch.io/' }
    ],
    // put a pdf next to index.html and write its name here
    cv: ''
  },

  about: {
    ru: [
      'Студент четвёртого курса Университета Иннополис. Больше всего люблю геймдев: механики, отклик на действия игрока и пиксельную графику.',
      'В учебных командах был разработчиком и тимлидом, участвую в геймджемах. Во Frontend-разработке делаю свои сайты и браузерные расширения.'
    ],
    en: [
      'Fourth-year student at Innopolis University. Game development is what I love most: mechanics, game feel and pixel graphics.',
      'In university teams I was a developer and a team lead, and I take part in game jams. In Frontend I build my own sites and browser extensions.'
    ]
  },

  experience: [
    {
      place: { ru: 'Центр разработки игр, Университет Иннополис', en: 'Game Development Center, Innopolis University' },
      title: { ru: 'Геймдизайнер и Unity разработчик', en: 'Game designer and Unity developer' },
      kind: { ru: 'Производственная практика', en: 'Industrial internship' },
      period: { ru: 'май 2026 – август 2026', en: 'May 2026 – Aug 2026' },
      points: {
        ru: [
          'Придумали концепцию игры, подготовили питч и презентацию',
          'Вёл геймдизайн-документ и концепт-документы',
          'Вместе с командой программировал основные механики в Unity'
        ],
        en: [
          'Came up with the game concept, prepared the pitch and the presentation',
          'Kept the game design document and concept docs up to date',
          'Programmed the core mechanics in Unity together with the team'
        ]
      },
      stack: ['Unity', 'C#', 'Git', 'Google Sheets']
    },
    {
      place: { ru: 'Университет Иннополис', en: 'Innopolis University' },
      title: { ru: 'Тимлид и разработчик', en: 'Team lead and developer' },
      kind: { ru: 'Проектная практика, учебный курс', en: 'Project practice, university course' },
      period: { ru: 'июнь 2025 – июль 2025', en: 'Jun 2025 – Jul 2025' },
      points: {
        ru: [
          'Разбивал работу на задачи и распределял их в команде',
          'Написал перемещение персонажа и подключил анимации',
          'Сделал визуальный отклик для ключевых механик: эффекты и частицы'
        ],
        en: [
          'Split the work into tasks and shared them across the team',
          'Wrote character movement and hooked up the animations',
          'Built visual feedback for the key mechanics: effects and particles'
        ]
      },
      stack: ['Unity', 'C#', 'Animator', 'Particle System', 'Krita', 'Trello']
    }
  ],

  projects: [
    {
      id: 'pixel',
      featured: true,
      glyph: 'px',
      title: 'pixel converter',
      short: {
        ru: 'Пиксельный спрайт превращается в воксельную 3D-модель и снова рисуется пиксель-артом с любого ракурса',
        en: 'A pixel sprite becomes a voxel 3D model and is drawn back as pixel art from any angle'
      },
      status: 'wip',
      role: { ru: 'Один, основа диплома', en: 'Solo, base of my thesis' },
      text: {
        ru: [
          'Инструмент для пиксель-арт анимации. На вход идут обычные спрайты, из них собирается воксельная модель с той же палитрой, а потом модель рендерится обратно в пиксельном стиле.',
          'Так из одной-двух картинок можно получить персонажа, которого видно с любой стороны, и анимировать его.'
        ],
        en: [
          'A tool for pixel art animation. It takes regular sprites, builds a voxel model with the same palette, then renders the model back in pixel style.',
          'This way one or two images give a character you can see from any side and animate.'
        ]
      },
      did: {
        ru: ['Реконструкция модели по спрайтам', 'Пиксельный рендер с ограниченной палитрой', 'Редактор с вкладками рисунка и глубины'],
        en: ['Model reconstruction from sprites', 'Pixel rendering with a limited palette', 'Editor with drawing and depth tabs']
      },
      stack: ['JavaScript', 'three.js'],
      links: []
    },
    {
      id: 'hd2d',
      featured: true,
      glyph: 'HD',
      title: 'HD2D Kit',
      short: {
        ru: 'Пиксельные спрайты в 3D-мире: свет, карты нормалей и глубина резкости на Unity 6',
        en: 'Pixel sprites in a 3D world: lighting, normal maps and depth of field in Unity 6'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Набор для Unity 6 URP, который даёт стиль HD-2D: двумерные персонажи живут в объёмном мире со светом и тенями.', 'В комплекте готовая демо-сцена, чтобы всё работало сразу после установки.'],
        en: ['A Unity 6 URP kit for the HD-2D look: 2D characters live in a 3D world with light and shadows.', 'Ships with a ready demo scene so it works right after install.']
      },
      did: {
        ru: ['Шейдеры для спрайтов с картами нормалей', 'Настройка постобработки', 'Демо-сцена и короткий README на двух языках'],
        en: ['Sprite shaders with normal maps', 'Post-processing setup', 'Demo scene and a short README in two languages']
      },
      stack: ['Unity 6', 'URP', 'Shader Graph', 'C#'],
      links: []
    },
    {
      id: 'platformer',
      glyph: 'PCG',
      title: { ru: 'Платформер с процедурными уровнями', en: 'Procedural platformer' },
      short: {
        ru: 'Игра в духе Hollow Knight, уровни собираются как в The Binding of Isaac',
        en: 'A Hollow Knight style game with levels built like in The Binding of Isaac'
      },
      status: 'done',
      role: { ru: 'Тимлид, команда', en: 'Team lead, team project' },
      text: {
        ru: ['Командный прототип на прикладном проекте. Я вёл команду и отвечал за то, как игра ощущается: движение, анимации и эффекты.'],
        en: ['A team prototype from the applied project. I led the team and owned how the game feels: movement, animations and effects.']
      },
      did: {
        ru: ['Перемещение персонажа', 'Анимации и визуальный отклик', 'Планирование задач'],
        en: ['Character movement', 'Animations and visual feedback', 'Task planning']
      },
      stack: ['Unity', 'C#', 'Particle System'],
      links: []
    },
    {
      id: 'spells',
      glyph: 'SPL',
      title: { ru: 'Survivor-like с рисованием знаков', en: 'Survivor-like with drawn spells' },
      short: {
        ru: 'Заклинания кастуются рисованием знаков прямо на экране телефона',
        en: 'Spells are cast by drawing signs right on the phone screen'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Игра для Android в жанре survivor-like. Главная механика: игрок рисует знак пальцем, игра распознаёт его и применяет заклинание.'],
        en: ['An Android survivor-like. The core mechanic: the player draws a sign with a finger, the game recognizes it and casts the spell.']
      },
      did: {
        ru: ['Распознавание нарисованных знаков', 'Управление под тач', 'Сборка под Android'],
        en: ['Recognition of drawn signs', 'Touch controls', 'Android build']
      },
      stack: ['Unity', 'C#', 'Android'],
      links: []
    },
    {
      id: 'pickup',
      glyph: 'PVZ',
      title: { ru: 'Пункт выдачи в апокалипсис', en: 'Pickup point at the apocalypse' },
      short: {
        ru: 'Менеджмент пункта выдачи заказов, пока мир рушится. Прототип и питч',
        en: 'Running a parcel pickup point while the world falls apart. Prototype and pitch'
      },
      status: 'done',
      role: { ru: 'Команда, геймплей и разработка', en: 'Team, gameplay and development' },
      text: {
        ru: ['Прошли полный путь от идеи и геймдизайн-документа до демо и защиты. Сначала я отвечал за геймплей, потом больше за разработку.'],
        en: ['We went all the way from the idea and the design doc to a demo and a defense. I started on gameplay and later moved mostly to development.']
      },
      did: {
        ru: ['Концепция и питч', 'Геймдизайн-документ', 'Основные механики'],
        en: ['Concept and pitch', 'Game design document', 'Core mechanics']
      },
      stack: ['Unity', 'C#'],
      links: []
    },
    {
      id: 'gamefolk',
      glyph: 'GF',
      title: 'Gamefolk',
      short: {
        ru: 'Личный дневник людей, с которыми познакомился в играх, и историй с ними',
        en: 'A personal journal of people met in games and the stories with them'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Сайт, где можно записывать друзей из игр и общие истории, чтобы ничего не забыть.'],
        en: ['A site for keeping track of friends from games and shared stories, so nothing gets forgotten.']
      },
      did: {
        ru: ['Интерфейс на React', 'Сервер на Node.js'],
        en: ['React interface', 'Node.js server']
      },
      stack: ['React', 'Node.js'],
      links: [{ label: 'GitHub', href: 'https://github.com/PrizrakZamkov/memory' }]
    },
    {
      id: 'blocker',
      glyph: 'CB',
      title: 'Content Blocker',
      short: {
        ru: 'Расширение для браузеров: прячет выбранные блоки на сайтах и блоки по ключевым словам',
        en: 'A browser extension that hides chosen blocks on sites and blocks by keywords'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Работает как скрытие элементов в uBlock, но ещё умеет прятать блоки по словам и своим правилам.'],
        en: ['Works like element hiding in uBlock, plus it can hide blocks by words and custom rules.']
      },
      did: {
        ru: ['Выбор блока на странице', 'Правила по ключевым словам'],
        en: ['Picking a block on the page', 'Keyword rules']
      },
      stack: ['JavaScript', 'WebExtensions'],
      links: []
    },
    {
      id: 'brush',
      glyph: 'BR',
      title: { ru: 'Чистка', en: 'Brush' },
      short: {
        ru: 'Android-напоминалка почистить зубы: отметка в один тап прямо из уведомления',
        en: 'An Android reminder to brush your teeth: check in with one tap from the notification'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Маленькое приложение, чтобы выработать привычку. Мягкие приёмы как в Duolingo, но без давления на чувство вины.'],
        en: ['A small app for building a habit. Gentle Duolingo style nudges without guilt tripping.']
      },
      did: {
        ru: ['Уведомление с отметкой', 'Виджет на рабочий стол', 'Настройка времени'],
        en: ['Notification with a check-in', 'Home screen widget', 'Reminder time settings']
      },
      stack: ['Android'],
      links: []
    }
  ],

  skills: [
    { group: { ru: 'Геймдев', en: 'Game dev' }, items: ['Unity 6', 'C#', 'URP', '2D и 3D|2D and 3D', 'Input System', 'Addressables', 'DOTween', 'Animator'] },
    { group: { ru: 'Архитектура', en: 'Architecture' }, items: ['ООП|OOP', 'SOLID', 'State machines', 'Zenject', 'VContainer', 'UniTask'] },
    { group: { ru: 'Графика', en: 'Graphics' }, items: ['Shader Graph', 'HLSL', 'Blender', 'Krita'] },
    { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Sass', 'Tailwind CSS'] },
    { group: { ru: 'Бэкенд', en: 'Backend' }, items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL'] },
    { group: { ru: 'Инструменты', en: 'Tools' }, items: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'Vitest'] }
  ],

  education: {
    place: { ru: 'Университет Иннополис', en: 'Innopolis University' },
    degree: { ru: 'Бакалавриат, инженерия информационных систем', en: 'Bachelor, Information Systems Engineering' },
    period: { ru: 'с 2023', en: 'since 2023' },
    thesis: {
      ru: 'Диплом на английском: Pixel Art Animation through 3D Reconstruction from Pixel Art Sprites and Pixel-Style Rendering',
      en: 'Thesis: Pixel Art Animation through 3D Reconstruction from Pixel Art Sprites and Pixel-Style Rendering'
    }
  },

  languages: [
    { ru: 'Русский, родной', en: 'Russian, native' },
    { ru: 'Английский, B2', en: 'English, B2' }
  ],

  extras: [
    {
      ru: 'Геймджемы: быстрые прототипы под жёсткий дедлайн',
      en: 'Game jams: fast prototypes under tight deadlines',
      link: { label: 'itch.io', href: 'https://prizrakzamkov.itch.io/' }
    }
  ]
};

const UI = {
  about: { ru: 'Обо мне', en: 'About' },
  experience: { ru: 'Практика', en: 'Practice' },
  projects: { ru: 'Проекты', en: 'Projects' },
  skills: { ru: 'Навыки', en: 'Skills' },
  education: { ru: 'Учёба и языки', en: 'Education and languages' },
  languages: { ru: 'Языки', en: 'Languages' },
  more: { ru: 'Ещё', en: 'More' },
  wip: { ru: 'В работе', en: 'In progress' },
  open: { ru: 'Подробнее', en: 'Details' },
  did: { ru: 'Что сделал', en: 'What I did' },
  close: { ru: 'Закрыть', en: 'Close' },
  cv: { ru: 'Скачать резюме', en: 'Download CV' },
  contact: { ru: 'Давайте поговорим', en: 'Let’s talk' },
  contactText: {
    ru: 'Быстрее всего отвечаю в Telegram.',
    en: 'Telegram is the fastest way to reach me.'
  }
};
