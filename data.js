// all site content lives here, edit this file to update the page
// texts are { ru, en }, empty links are hidden
// projects: big cards (featured) first, then small ones; inside each group 'done' go first and the order below is kept
// add image: 'img/name.png' or video: 'img/name.mp4' to a project to replace its gradient cover

const SITE = {
  person: {
    name: { ru: 'Станислав Делюков', en: 'Stanislav Delyukov' },
    nick: 'PrizrakZamkov',
    role: { ru: 'Unity и Frontend разработчик', en: 'Unity and Frontend developer' },
    tagline: {
      ru: 'Разрабатываю игры на Unity и интерфейсы на React. Готов к полной занятости.',
      en: 'I make games in Unity and interfaces in React. Available full-time.'
    },
    location: { ru: 'Иннополис, Россия', en: 'Innopolis, Russia' },
    status: { ru: 'Ищу работу: Junior+ Unity или Frontend', en: 'Open to Junior+ Unity or Frontend roles' },
    contacts: [
      { label: 'Telegram', value: '@shines_light', href: 'https://t.me/shines_light', main: true },
      { label: { ru: 'Почта', en: 'Email' }, value: 's.delyukov@innopolis.university', href: 'mailto:s.delyukov@innopolis.university' },
      { label: 'GitHub', value: 'PrizrakZamkov', href: 'https://github.com/PrizrakZamkov' },
      { label: 'itch.io', value: 'prizrakzamkov', href: 'https://prizrakzamkov.itch.io/' }
    ],
    // two cv files for two kinds of vacancy, both next to index.html
    // one file instead of the list also works: cv: 'name.pdf'
    cv: [
      { label: { ru: 'Резюме: геймдев', en: 'CV: game dev' }, href: 'Delyukov-CV-gamedev.pdf' },
      { label: { ru: 'Резюме: фронтенд', en: 'CV: frontend' }, href: 'Delyukov-CV-frontend.pdf' }
    ]
  },

  about: {
    ru: [
      'Учусь на четвёртом курсе Университета Иннополис. В геймдеве мне интереснее всего механики и то, как игра ощущается в руках: отклик на действия игрока, анимации, эффекты. Отдельно люблю пиксельную графику.',
      'В командных проектах писал код, отвечал за графику и интерфейс, а когда было нужно, брал на себя координацию. Регулярно хожу на геймджемы и довожу игры до публикации. Во фронтенде делаю свои сайты и небольшие веб-инструменты: от интерфейса до сервера.'
    ],
    en: [
      'Fourth-year student at Innopolis University. In game development I care most about mechanics and game feel: how the game answers the player, animations, effects. Pixel graphics is a love of its own.',
      'In team projects I wrote code, owned the graphics and the interface, and took on coordination when it was needed. I go to game jams regularly and ship the games there. In frontend I build my own sites and small web tools, from the interface down to the server.'
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
          'Участвовал в разработке концепции игровой логики, готовил питч и презентацию',
          'Поддерживал в актуальном состоянии геймдизайн-документацию и концепт-документы',
          'Разработал основные механики в Unity в составе команды'
        ],
        en: [
          'Took part in working out the game logic concept, prepared the pitch and the presentation',
          'Kept the game design document and the concept docs current',
          'Programmed the core mechanics in Unity as part of the team'
        ]
      },
      stack: ['Unity', 'C#', 'Git', 'Google Sheets']
    },
    {
      place: { ru: 'Университет Иннополис', en: 'Innopolis University' },
      title: { ru: 'UX/UI-дизайнер и Unity-разработчик', en: 'UX/UI designer and Unity developer' },
      kind: { ru: 'Прикладной проект, команда из 7 человек', en: 'Applied project, team of 7' },
      period: { ru: 'июнь 2025 – июль 2025', en: 'Jun 2025 – Jul 2025' },
      points: {
        ru: [
          'Отвечал за всю графику, интерфейс и анимации игры',
          'Реализовал перемещение персонажа на C#, настроил деревья анимаций и визуальный отклик механик',
          'Взял на себя часть координации команды: разбивал работу на задачи и распределял их, чтобы довести проект до сдачи'
        ],
        en: [
          'Owned all the graphics, the interface and the animations of the game',
          'Wrote the character movement in C#, set up the animation trees and the visual feedback of the mechanics',
          'Took over part of the team coordination: broke the work into tasks and assigned them to get the project delivered'
        ]
      },
      stack: ['Unity', 'C#', 'Animator', 'Particle System', 'Figma', 'Krita', 'Trello']
    }
  ],

  projects: [
    {
      id: 'planner',
      featured: true,
      glyph: 'WK',
      title: { ru: 'Планировщик недели', en: 'Week planner' },
      short: {
        ru: 'Задачи сами раскладываются по свободным окнам недели',
        en: 'Tasks lay themselves out into the free slots of the week'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Планировщик, которым я пользуюсь сам. Задачи можно тянуть и растягивать по сетке недели, повторять по дням и растягивать на несколько дней. Задачи без времени по одной кнопке раскладываются по свободным окнам с учётом дедлайна и приоритета.', 'Работает в браузере без сервера, данные хранятся локально. Старые сохранения не ломаются при обновлениях.'],
        en: ['A planner I use myself. Tasks can be dragged and resized on the week grid, repeated on chosen days and stretched over several days. Tasks without a time are laid out into free slots with one button, by deadline and priority.', 'Runs in the browser with no server, data stays local. Old saves keep working after updates.']
      },
      did: {
        ru: ['Автопланирование: жадный алгоритм по дедлайну, приоритету и длительности', 'Перетаскивание, отмена действий, управление с клавиатуры', 'Миграции сохранений, импорт и экспорт файлом', 'Тесты на логику расписания, деплой через GitHub Actions'],
        en: ['Auto-planning: a greedy algorithm by deadline, priority and length', 'Drag and drop, undo, keyboard control', 'Save migrations, import and export to a file', 'Tests for the scheduling logic, deploy via GitHub Actions']
      },
      stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
      links: [
        { label: { ru: 'Открыть', en: 'Open' }, href: 'https://prizrakzamkov.github.io/schedule-planner/' },
        { label: 'GitHub', href: 'https://github.com/PrizrakZamkov/schedule-planner' }
      ]
    },
    {
      id: 'spells',
      featured: true,
      glyph: 'WS',
      title: 'Wizard Survivors',
      short: {
        ru: 'Survivor-like, где заклинания кастуются рисованием знаков пальцем',
        en: 'A survivor-like where spells are cast by drawing signs with a finger'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Игра в жанре survivor-like. Игрок рисует знак пальцем, игра распознаёт его и применяет заклинание.', 'Опубликована на itch.io: играется прямо в браузере, есть и сборка под Android.'],
        en: ['A survivor-like game. The player draws a sign with a finger, the game recognizes it and casts the spell.', 'Published on itch.io: playable right in the browser, with an Android build as well.']
      },
      did: {
        ru: ['Распознавание нарисованных знаков', 'Управление под тач', 'Сборка и публикация'],
        en: ['Recognition of drawn signs', 'Touch controls', 'Build and release']
      },
      stack: ['Unity', 'C#', 'WebGL', 'Android'],
      links: [
        { label: { ru: 'Играть', en: 'Play' }, href: 'https://prizrakzamkov.itch.io/wizard-survivors' },
        { label: 'GitHub', href: 'https://github.com/PrizrakZamkov/PocketSignWizards-public-repo' }
      ]
    },
    {
      id: 'gamefolk',
      featured: true,
      glyph: 'GF',
      title: 'Gamefolk',
      short: {
        ru: 'Дневник знакомств из игр и общих историй',
        en: 'A personal journal of people met in games and the stories with them'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Личный дневник людей, с которыми знакомишься в играх, и историй с ними. Записи и картинки шифруются прямо в браузере и никуда не уходят без спроса.', 'Работает и онлайн, и как один html-файл без интернета. Синхронизация через Google пока в тестовом режиме.'],
        en: ['A private journal of people you meet in games and the stories with them. Entries and images are encrypted right in the browser and go nowhere unless you ask.', 'Works online and as a single html file with no internet. Google sync is in test mode for now.']
      },
      did: {
        ru: ['Шифрование записей и хранение в IndexedDB', 'Вход по коду доступа, резервные копии файлом', 'Лента с поиском и фильтрами, шесть языков, две темы', 'Серверные функции на Netlify для синхронизации'],
        en: ['Encrypted entries stored in IndexedDB', 'Access code lock, file backups', 'Feed with search and filters, six languages, two themes', 'Netlify serverless functions for sync']
      },
      stack: ['React', 'JavaScript', 'IndexedDB', 'Netlify'],
      links: [
        { label: { ru: 'Открыть', en: 'Open' }, href: 'https://gamefolk.netlify.app/' },
        { label: 'GitHub', href: 'https://github.com/PrizrakZamkov/memory' }
      ]
    },
    {
      id: 'platformer',
      featured: true,
      glyph: 'PCG',
      title: { ru: 'Платформер с процедурными уровнями', en: 'Procedural platformer' },
      short: {
        ru: 'Игра в духе Hollow Knight, уровни собираются как в The Binding of Isaac',
        en: 'A Hollow Knight style game with levels built like in The Binding of Isaac'
      },
      status: 'done',
      role: { ru: 'UX/UI и разработка, команда из 7 человек', en: 'UX/UI and development, team of 7' },
      text: {
        ru: ['Sign Game, командный проект с прикладного курса. Волшебник сражается с врагами, собирая заклинания из нарисованных рун, а уровни собираются из комнат.', 'Официально я отвечал за UX/UI: всю графику, интерфейс и анимации. По ходу проекта взял на себя ещё часть кода в Unity и часть распределения задач.'],
        en: ['Sign Game, a team project from the applied course. A wizard fights enemies by combining drawn runes into spells, and levels are assembled from rooms.', 'Officially I owned UX/UI: all the graphics, the interface and the animations. Along the way I also took on part of the Unity code and part of the task planning.']
      },
      did: {
        ru: ['Графика, интерфейс и анимации', 'Перемещение персонажа и визуальный отклик', 'Распределение задач в команде'],
        en: ['Graphics, interface and animations', 'Character movement and visual feedback', 'Assigning tasks in the team']
      },
      stack: ['Unity', 'C#', 'Particle System'],
      links: [
        { label: { ru: 'Играть', en: 'Play' }, href: 'https://dorley174.itch.io/sign-game' },
        { label: 'GitHub', href: 'https://github.com/IU-Capstone-Project-2025/SignGame' }
      ]
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
        ru: ['Командный проект от идеи и геймдизайн-документа до демо и защиты. Сначала отвечал за геймплей, затем в основном за разработку.'],
        en: ['We went all the way from the idea and the design doc to a demo and a defense. I started on gameplay and later moved mostly to development.']
      },
      did: {
        ru: ['Концепция и питч', 'Геймдизайн-документ', 'Основные механики'],
        en: ['Concept and pitch', 'Game design document', 'Core mechanics']
      },
      stack: ['Unity', 'C#'],
      links: [
        { label: { ru: 'Скачать', en: 'Download' }, href: 'https://ray326sq.itch.io/pvz-game' },
        { label: 'GitHub', href: 'https://github.com/PrizrakZamkov/PVZ-game-public-save' }
      ]
    },
    {
      id: 'jams',
      glyph: 'JAM',
      title: { ru: 'Геймджемы', en: 'Game jams' },
      short: {
        ru: 'Две игры, сделанные в одиночку за время джема и выложенные на itch.io',
        en: 'Two games made solo within a jam and released on itch.io'
      },
      status: 'done',
      role: { ru: 'Один, геймджемы', en: 'Solo, game jams' },
      text: {
        ru: ['Unemployed Freedom, Pixel Forge Jam #3, тема «Свобода, но какой ценой». Игра в духе 60 Seconds!: работы нет, свободного времени много, а выжить всё равно надо.', 'Aim Training, GMTK Game Jam 2026. Десять секунд, шесть патронов и экран мишеней.', 'Обе игры прошли путь от идеи до опубликованной сборки за время джема.'],
        en: ['Unemployed Freedom, Pixel Forge Jam #3, theme "Freedom but at what cost". A 60 Seconds! style game: no job, plenty of free time, and you still have to survive.', 'Aim Training, GMTK Game Jam 2026. Ten seconds, six bullets and a screen full of targets.', 'Both went from an idea to a published build within the jam.']
      },
      did: {
        ru: ['Геймплей и баланс', 'Интерфейс', 'Сборки и публикация под жёсткий дедлайн'],
        en: ['Gameplay and balance', 'The interface', 'Builds and release against a hard deadline']
      },
      stack: ['Unity', 'C#'],
      links: [
        { label: 'Unemployed Freedom', href: 'https://prizrakzamkov.itch.io/unemployed-freedom' },
        { label: 'Aim Training', href: 'https://prizrakzamkov.itch.io/deadpool-training' }
      ]
    },
    {
      id: 'brush',
      glyph: 'BR',
      title: { ru: 'Чистка', en: 'Brush' },
      short: {
        ru: 'Android-приложение: напоминание почистить зубы и отметка в один тап из уведомления',
        en: 'An Android reminder to brush your teeth: check in with one tap from the notification'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Учебный проект: тренировка в создании мобильных приложений. Напоминание почистить зубы с мягкой мотивацией, как в Duolingo, но без давления на чувство вины.'],
        en: ['A practice project in building mobile apps. A tooth brushing reminder with gentle Duolingo style motivation and no guilt tripping.']
      },
      did: {
        ru: ['Уведомление с отметкой', 'Виджет на рабочий стол', 'Настройка времени'],
        en: ['Notification with a check-in', 'Home screen widget', 'Reminder time settings']
      },
      stack: ['Android', 'Kotlin', 'Jetpack Compose'],
      links: [{ label: 'GitHub', href: 'https://github.com/PrizrakZamkov/tooth-app' }]
    },
    {
      id: 'cvsite',
      glyph: 'CV',
      title: { ru: 'Этот сайт', en: 'This site' },
      short: {
        ru: 'Сайт-визитка с нуля: без фреймворков, весь текст в одном файле',
        en: 'This portfolio site from scratch: no frameworks, all the text in one file'
      },
      status: 'done',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Страница, которую вы сейчас читаете. Написана без фреймворков и шаблонов: чистый HTML, CSS и JavaScript.', 'Весь текст и проекты лежат в одном файле данных, поэтому страницу можно обновить за минуту.'],
        en: ['The page you are reading. Written without frameworks or templates: plain HTML, CSS and JavaScript.', 'All the text and the projects live in a single data file, so updating the page takes a minute.']
      },
      did: {
        ru: ['Вёрстка и анимации на чистом CSS', 'Переключение русского и английского', 'Пиксельный аватар рисуется кодом'],
        en: ['Layout and animations in plain CSS', 'Switching between Russian and English', 'The pixel avatar is drawn in code']
      },
      stack: ['HTML', 'CSS', 'JavaScript'],
      links: [{ label: 'GitHub', href: 'https://github.com/PrizrakZamkov/cv-website' }]
    },
    {
      id: 'hd2d',
      glyph: 'HD',
      title: 'HD2D Kit',
      short: {
        ru: 'Пиксельные спрайты в 3D-мире: свет, карты нормалей и глубина резкости на Unity 6',
        en: 'Pixel sprites in a 3D world: lighting, normal maps and depth of field in Unity 6'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Набор для Unity 6 URP в стиле HD-2D: двумерные персонажи в объёмном мире со светом и тенями.', 'В комплекте демо-сцена, всё работает сразу после установки.'],
        en: ['A Unity 6 URP kit for the HD-2D look: 2D characters live in a 3D world with light and shadows.', 'Ships with a ready demo scene so it works right after install.']
      },
      did: {
        ru: ['Шейдеры для спрайтов с картами нормалей', 'Настройка постобработки', 'Демо-сцена и короткий README на двух языках'],
        en: ['Sprite shaders with normal maps', 'Post-processing setup', 'Demo scene and a short README in two languages']
      },
      stack: ['Unity 6', 'URP', 'Shader Graph', 'C#'],
      links: [{ label: 'GitHub', href: 'https://github.com/PrizrakZamkov/hd2d-kit-replaced-style' }]
    },
    {
      id: 'pixel',
      glyph: 'px',
      title: { ru: 'Инструмент для пиксель-арта', en: 'Pixel art tool' },
      short: {
        ru: 'Дипломная работа. Ускоряет работу с пиксель-артом для моих игр',
        en: 'My thesis project. Speeds up pixel art work for my own games'
      },
      status: 'wip',
      role: { ru: 'Один', en: 'Solo' },
      text: {
        ru: ['Дипломная работа: инструмент, который берёт на себя рутину в пиксель-арте и собирается стать частью моего рабочего процесса в играх.', 'Проект в активной разработке, публичная версия появится после защиты.'],
        en: ['My thesis project: a tool that takes over the routine part of pixel art work and is meant to become a part of how I make games.', 'Under active development, a public version will follow the defence.']
      },
      did: {
        ru: ['Постановка задачи и исследование', 'Проектирование и разработка с нуля'],
        en: ['Framing the problem and the research', 'Designed and built from scratch']
      },
      stack: ['JavaScript'],
      links: []
    }
  ],

  // первые группы — то, что подтверждено проектами и о чём можно говорить на собеседовании
  // последняя группа — честная полка «трогал, но не углублялся», её не спросят всерьёз
  skills: [
    { group: { ru: 'Геймдев', en: 'Game dev' }, items: ['Unity 6', 'C#', 'URP', 'Shader Graph', '2D и 3D|2D and 3D', 'Input System', 'Animator', 'Particle System'] },
    { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite'] },
    { group: { ru: 'Мобильное', en: 'Mobile' }, items: ['Android', 'Kotlin'] },
    { group: { ru: 'Архитектура', en: 'Architecture' }, items: ['ООП|OOP', 'SOLID', 'Паттерны|Design patterns', 'Code review'] },
    { group: { ru: 'Инструменты', en: 'Tools' }, items: ['Git', 'GitHub Actions', 'Vitest', 'Docker', 'Blender', 'Krita'] },
    { group: { ru: 'Бэкенд', en: 'Backend' }, items: ['Python', 'Node.js', 'PostgreSQL'] },
    { group: { ru: 'Знаком', en: 'Familiar' }, items: ['Zenject', 'VContainer', 'UniTask', 'Addressables', 'DOTween', 'HLSL', 'FastAPI', 'C++', 'Java'] }
  ],

  education: {
    place: { ru: 'Университет Иннополис', en: 'Innopolis University' },
    degree: { ru: 'Бакалавриат, инженерия информационных систем', en: 'Bachelor, Information Systems Engineering' },
    period: { ru: 'с 2023', en: 'since 2023' }
  },

  languages: [
    { ru: 'Русский, родной', en: 'Russian, native' },
    { ru: 'Английский, B2', en: 'English, B2' }
  ],

  extras: [
    {
      ru: 'Геймджемы',
      en: 'Game jams',
      link: { label: 'itch.io', href: 'https://prizrakzamkov.itch.io/' }
    }
  ]
};

const UI = {
  about: { ru: 'Обо мне', en: 'About' },
  experience: { ru: 'Практические навыки', en: 'Hands-on experience' },
  projects: { ru: 'Проекты', en: 'Projects' },
  skills: { ru: 'Навыки', en: 'Skills' },
  education: { ru: 'Учёба и языки', en: 'Education and languages' },
  languages: { ru: 'Языки', en: 'Languages' },
  more: { ru: 'Ещё', en: 'More' },
  wip: { ru: 'В работе', en: 'In progress' },
  done: { ru: 'Готов', en: 'Done' },
  codeNote: { ru: 'Код проектов:', en: 'Project code:' },
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
