
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:8000',       //Web API
  apiUrl: 'YOUR_API_URL',    //Production API
  //apiUrl: 'http://10.0.2.2:8000',        //Emulator API
  amityKey: "YOUR_AMITY_KEY",
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_FIREBASE_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID",
    vapidKey: "YOUR_VAPID_KEY"
  },
  tiktok: {
    clientKey: 'YOUR_TIKTOK_CLIENT_KEY'
  },
  gradients: {
  /*  'Rose Gold' : 'radial-gradient(circle, #FAE0DE 60%, #EED73F 100%)',
    'Orchid' : 'linear-gradient(180deg, #FAE0DE 60%, #BD8DAA 100%)',
    'Royal' : 'linear-gradient(to top, #BD8DAA 30%, #EED73F)',
    'Cherry' : 'linear-gradient(to bottom right, #BD8DAA 25%, #F11F2B)',
    'Sunburst' : 'radial-gradient(circle, #EED73F 60%, #F11F2B 100%)',*/
    'Salmon-White': 'linear-gradient(to right bottom, rgb(255 255 255), #fae0de)',
    'Neutral': 'linear-gradient(to right bottom, rgb(255 255 255), #d8d8d8)',
    'Purple-White': 'linear-gradient(to right bottom, rgb(255 255 255), #bd8daa)',
    'Mango-White' : 'linear-gradient(to right bottom, rgb(255 255 255), #b29998)',
    'Yellow-White': 'linear-gradient(to right bottom, rgb(255 255 255), #eed73f)',
    'Orange-White': 'linear-gradient(to right bottom, rgb(255 255 255), #fd5722)',
    'Red-White' : 'linear-gradient(to right bottom, rgb(255 255 255), rgb(241, 31, 43))',
   /* 'Blue-White': 'linear-gradient(to right bottom, rgb(255, 255, 255), rgba(63, 81, 181));',*/
    'Matcha-White': 'linear-gradient(to right bottom, rgb(255 255 255), #77b41b)',
    'Dark Gray-White': 'linear-gradient(to right bottom, #fff, rgb(255, 255, 255))',
  },
  gold: [{
    id: 'refresh',
    mainHeader: 'Get Tinder Gold',
    icon: 'heart',
    header: 'See who Likes you',
    subHeader: 'Match with them instantly',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price until you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tapping continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo',
      head: 'most popular'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }],
  refresh: [{
    id: 'refresh',
    mainHeader: 'Get Tinder Plus',
    icon: 'refresh',
    header: 'Unlimited Rewinds',
    subHeader: 'Go back and swipe again!',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price until you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tapping continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }],
  star: [{
    id: 'star',
    mainHeader: 'Get Tinder Plus',
    header: 'Unlimited Likes',
    subHeader: '11:52:45',
    image: '../../assets/chat/chat4.jpg',
    subheader1: 'Swipe right as much as you want',
    button: 'continue',
    descriptionHead: 'Recurring billing, cancel anytime.',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price until you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tapping continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '12',
      text: 'months',
      amount: '$166.6/mo'
    }, {
      month: '6',
      text: 'months',
      amount: '$225.6/mo',
      head: 'most popular'
    }, {
      month: '1',
      text: 'months',
      amount: '$330.6/mo'
    }],
  }],
  flash: [{
    id: 'flash',
    boost: '0.1x',
    view: 'VIEWS',
    header: 'Out of Boosts!',
    subHeader: 'Be the top profile in  your area for 30 minutes to get more matches.',
    button: 'boost me',
    button1: 'get tinder plus',
    button2: '(2 free Boost every month)',
    description: 'By tapping continue, your payment will be charged to your Google play account, and your subscription will automatically renew for the same package length at the same same price until you cancel in settings in the play store at least 24 hours prior to the end of the current period. By tapping continue, you agree to our Privacy Policy and Terms.',
    column: [{
      month: '10',
      text: 'Boosts',
      amount: '$165.6/ea'
    }, {
      month: '6',
      text: 'Boosts',
      amount: '$225.6/ea',
      head: 'save 25%'

    }, {
      month: '1',
      text: 'Boosts',
      amount: '$330.6/ea'
    }],
    column2: [{
      icon: 'flash',
      view: 'VIEWS',
      header: 'get 2 free Boost every month',
      subHeader: 'skip the line & get more matches!',
      button: 'continue',
      column: [{
        month: '12',
        text: 'months',
        amount: '$166.6/mo'
      }, {
        month: '6',
        text: 'months',
        amount: '$225.6/mo',
        head: 'MOST POPULAR'

      }, {
        month: '1',
        text: 'months',
        amount: '$330.6/mo'
      }],
    }]
  }],
  tinderPlus: [{
    image: '../../assets/chat/puzzle.png',
    head: 'Unlimited right swipes',
    subHead: 'Swipes as much as you like.',
    head1: 'unlimited likes',
    subHead1: 'Give me the ability to like as many people as i want',
    toggle: true
  }, {
    image: '../../assets/chat/flash1.png',
    head: 'skip the line',
    subHead: 'Be the top profile in your area for 30 minutes to get more matches.',
    head1: 'tinder boost',
    subHead1: 'Give me one free boost every month',
    toggle: true
  }, {
    image: '../../assets/chat/flash2.png',
    head: 'control who you see',
    subHead: 'it\'s simple now to choose the type of people you want to see on Tinder.',
    head1: 'balanced recommendations',
    subHead1: 'See the most relevant people to you(default setting)',
    head2: 'recently active',
    subHead2: 'See the most recently active people first',
    toggle: false
  }, {
    image: '../../assets/chat/flash3.png',
    head: 'control who see you',
    subHead: 'Only be shown to certain types of people on tinder.',
    head1: 'Standard',
    subHead1: 'Only be shown to certain types of people for individual recommendations.',
    head2: 'only people i\'ve liked',
    subHead2: 'only people i\'ve right swiped will see me.',
    toggle: false
  }, {
    image: '../../assets/chat/protection.png',
    head: 'control your profile',
    subHead: 'make parts of your profile information invisible to other people.',
    head1: 'don\'t show my age',
    head2: 'Make my distance invisible',
    toggle: true
  }, {
    image: '../../assets/chat/route.png',
    head: 'passport to any location',
    subHead: 'Match with people all around the world.Paris,Los Angles, Sydney. Go!',
    head1: 'Location',
    head1right: 'My current location',
  }, {
    image: '../../assets/chat/rewind.png',
    head: 'rewind your last swipe',
    subHead: 'Accidentally swiped on someone? rewind and swipe again.',
    head1: 'Rewind last swipe',
    subHead1: 'Give me the ability to rewind my last swipe',
    toggle: true
  }, {
    image: '../../assets/chat/hide.png',
    head: 'hide ads',
    subHead: 'Enjoy a completely ad free experience.',
    head1: 'hide advertisement',
    toggle: true
  }],
  editInfo: [
    {
      headItem: 'Smart photos',
      toggleHeader: true,
      headItemSubhead: 'Smart photos continuously tests all your profile photos to find the best one.'
    },
    {
      head: 'About User',
      toggle: false,
      input: 'Mechanical Engineer',
      editable: true
    }, {
      head: 'Job title',
      toggle: false,
      input: 'Mechanical Engineer',
      editable: true
    }, {
      head: 'company',
      toggle: false,
      input: 'SpaceX ',
      editable: true
    }, {
      head: 'School',
      toggle: false,
      input: 'Stanford School of Engineering',
      editable: true
    }, {
      head: 'snapchat',
      toggle: false,
      subhead: 'Bitmoji not connected yet'
    }, {
      head: 'Show my instagram photos',
      toggle: false,
      subhead: 'Connect Instagram',
      subhead1: 'Control how you share your Tinder Anthem on feed in Settings.',
      subhead2: 'Control how you share your top Tinder Artists on feed in Settings.'
    }, {
      head: 'I Am',
      toggle: false,
      input: 'Man',
      editable: true
    }, {
      head: 'control your Profile',
      toggle: true,
      subhead1: 'don\'t show my age',
      subhead2: 'Make my distance invisible',

    },
  ],
  shareFeed: [{
    head: 'Share My Feed',
    toggle: 'true',
    para: 'Sharing your social content will greatly increase your chances of receiving messages',
    para2: 'Shared content'
  }, {
    head: 'Photos',
    toggle: 'true'
  }, {
    head: 'Tinder Anthem',
    toggle: 'true'
  }, {
    head: 'top Tinder Artist',
    toggle: 'true'
  }, {
    head: 'Bio',
    toggle: 'true'
  }, {
    head: 'School',
    toggle: 'true'
  }, {
    head: 'work',
    toggle: 'true'
  }],
  messageFeedData: [
    {
      person_1_name: 'Jessica Galba',
      person_1_image: 'assets/chat/chat3.jpg',
      person_2_name: 'Angela',
      person_2_image: 'assets/chat/ang_2.jpg',
      distance: '4 Km away',
      date: '12 Dec 2020'
    },
    {
      person_1_name: 'Anna Sethway',
      person_1_image: 'assets/chat/anna_1.jpg',
      person_2_name: 'Joseph',
      person_2_image: 'assets/chat/boy_1.jpg',
      distance: '14 Km away',
      date: '15 Dec 2020'
    },
    {
      person_1_name: 'Joseph',
      person_1_image: 'assets/chat/boy_2.jpg',
      person_2_name: 'Tina',
      person_2_image: 'assets/chat/tina_2.jpg',
      distance: '2 Km away',
      date: '16 Dec 2020'
    }
  ],
  videoAutoplay: {
    intro: 'Playing videos use more data than displaying photos, so choose when videos autoplay here.',
    listHeader: 'autoplay videos',
    listItems: [
      {
        head: 'On WiFi and mobile data.',
      }, {
        head: 'On WiFi only',
      }, {
        head: 'Never autoplay videos',
      }]
  },
  emailVerification: [{
    para: 'Control the emails you want to get - all of them, just the important stuff or the bare minimum.you can always unsubscribe from the bottom of email.',
  },
  {
    email: 'Enappd@Enappd.com.',
    toggle: false,
    emailDesc: 'Email not verified.Tap below to request a verification email.'
  }, {
    head: 'New Matches',
    toggle: true

  }, {
    head: 'New Messages',
    toggle: true

  }, {
    head: 'Promotions',
    toggle: true,
    des: 'I want to receive news, updates and offers from Dating.'
  }],
  pushNotifications: [{
    head: 'New Matches',
    para: 'You just got a new match',
    toggle: true
  }, {
    head: 'Messages',
    para: 'Someone sent you a new message',
    toggle: true
  }, {
    head: 'Messages Likes',
    para: 'someone liked your message',
    toggle: true
  }, {
    head: 'super Likes',
    para: 'You have been super liked! swipe to found out by whom.',
    toggle: true
  }, {
    head: 'Top Picks',
    para: 'Your daily top Picks are ready!',
    toggle: true
  }],
  deleteAccount: [{
    color: '#f11f2b',
    icon: 'hammer-outline',
    iconColor: 'autum-red',
    head: 'Too many  ',
    head1: 'Bugs'
  }, {
    color: '#bd8daa',
    icon: 'thumbs-down-outline',
    iconColor: 'autum-red',
    head: 'Quality', head1: 'of likes'
  }, {
     color: '#FAE0DE',
     icon: 'people-outline',
     iconColor: 'autum-red',
     head: 'Not enough', head1: 'people'
  }, {
    color: '#fd5722',
    icon: 'heart-outline',
    iconColor: 'autum-red',
    head: 'i met  ', head1: 'someone on autum'
  }, {
     color: '#D8D8D8',
     icon: 'cafe-outline',
     iconColor: 'autum-red',
     head: 'i met someone ', head1: 'outside of the app'
  }, {
     color: '#37393e',
     icon: 'globe-outline',
     iconColor: 'autum-red',
     head: 'Not available', head1: 'in my area'
  }, {
     color: '#37393e',
     icon: 'person-remove-outline',
     iconColor: 'autum-red',
     head: 'other'
  }],
  report: [{
    image: '../../assets/chat/warning.png',
    head: 'Report User',
    desc: 'Is this person bothering you?Tell us what they did.',
    items: [{
      icon: 'camera',
      detail: 'Inappropriate Photos',
      color: '#5E35B1'
    }, {
      icon: 'american-football',
      detail: 'Feels like Spam',
      color: 'orange'
    }, {
      icon: 'paw',
      detail: 'Other',
      color: '#43A047'
    }]
  }],
  images: [{ image: '../../assets/chat/boy_1.jpg' },
  { image: '../../assets/chat/boy_2.jpg' },
  { image: '../../assets/chat/boy_3.jpg' },
  { image: '../../assets/chat/boy_4.jpg' },
  { icon: 'add' }, { icon: 'add' }, { icon: 'add' }, { icon: 'add' }, { icon: 'add' }],
  newMatchImages: [{ image: '../../assets/chat/ang_1.jpg' },
  { image: '../../assets/chat/tina_1.jpg' },
  { image: '../../assets/chat/mona_1.jpg' },
  { image: '../../assets/chat/anna_1.jpg' },
  { icon: 'add-outline' }],
  details: [{
    name: 'Joseph Tals',
    age: '24',
    userDetails: 'A passionate and energetic guy with travel bug and music enthusiasm',
    image: '../../assets/chat/boy_1.jpg',
    ovalContents: [{
      icon: 'settings',
      text: 'SETTINGS',
    },
    {
      // icon: 'camera',
      cameraText: 'ADD MEDIA',
      camera: 'camera'
    },
    {
      icon: 'create',
      text: 'EDIT INFO',
    }],
    slides: [{
      icon: 'flame',
      head: 'get tinder gold',
      subhead: 'See who Likes You and more!',
      color: 'warning'
    }, {
      icon: 'flash',
      head: 'get matches faster',
      subhead: 'Boost your profile once a month!',
      color: 'tertiary'
    }, {
      icon: 'star',
      head: 'stand out with super likes',
      subhead: 'you\'re 3x more likely to get a match!',
      color: 'success'
    }, {
      icon: 'pin',
      head: 'swipe around the world',
      subhead: 'Passport to anywhere with tinder plus!',
      color: 'primary'
    }, {
      icon: 'key',
      head: 'control your profile',
      subhead: 'limit what others see with tinder plus',
      color: 'warning'
    }, {
      icon: 'heart',
      head: 'increase your chances',
      subhead: 'Get unlimited Likes with tinder Plus!',
      color: 'secondary'
    }
    ]
  }
  ],
  menuDropdown: [{
    name: 'Default'
  }, {
    name: 'Nearby'
  }, {
    name: 'Unopened'
  }],
  footer_icons: [
    { title: 'refresh', color: 'medium', mode: 'md' },
    { title: 'close', color: 'danger', mode: 'md' },
    { title: 'star', color: 'primary', mode: 'md' },
    { title: 'heart', color: 'secondary', mode: 'md' },
    { title: 'flash', color: 'warning', mode: 'ios' }],
  card: [
    {
      name: 'Angela',
      location: 'San Francisco',
      image: '../../assets/chat/ang_1.jpg',
      age: '24',
      distance: 'less than a mile away',
      quote: 'Life is unfair',
      occupation: 'artist',

      slides: [
        { slideImage: '../../assets/chat/ang_1.jpg' },
        { slideImage: '../../assets/chat/ang_2.jpg' },
        { slideImage: '../../assets/chat/ang_3.jpg' }
      ]
    },
    {
      name: 'Tina Howard',
      location: 'Havard Russia',
      image: '../../assets/chat/tina_1.jpg',
      age: '26',
      distance: 'less than half a mile away',
      quote: 'Life is unfair',
      occupation: 'Singer',

      slides: [
        { slideImage: '../../assets/chat/tina_1.jpg' },
        { slideImage: '../../assets/chat/tina_2.jpg' },
        { slideImage: '../../assets/chat/tina_3.jpg' }
      ]
    },
    {
      name: 'Mona Baniston',
      location: 'Cambridge calcutta',
      image: '../../assets/chat/mona_1.jpg',
      age: '21',
      distance: 'less than one mile away',
      quote: 'Every thing is possible',
      occupation: 'Painter',

      slides: [
        { slideImage: '../../assets/chat/mona_1.jpg' }
        , { slideImage: '../../assets/chat/mona_2.jpg' },
        { slideImage: '../../assets/chat/mona_3.jpg' }
      ]
    },
    {
      name: 'Nate Kinslet ',
      location: 'Kawana Meghalya',
      image: '../../assets/chat/kate_1.jpg',
      age: '19',
      distance: '3 mile away',
      quote: 'Life is unfair',
      occupation: 'Carpenter',

      slides: [
        { slideImage: '../../assets/chat/kate_1.jpg' },
        { slideImage: '../../assets/chat/kate_2.jpg' },
        { slideImage: '../../assets/chat/kate_3.jpg' }
      ]
    },
    {
      name: 'Kiara Long',
      location: 'St. Paul',
      image: '../../assets/chat/kiara_1.jpg',
      age: '24',
      distance: 'less than a mile away',
      quote: 'Life is unfair',
      occupation: 'Actor',

      slides: [
        { slideImage: '../../assets/chat/kiara_1.jpg' },
        { slideImage: '../../assets/chat/kiara_2.jpg' },
        { slideImage: '../../assets/chat/kiara_3.jpg' }
      ]
    },
    {
      name: 'Anna Langley',
      location: 'IIIME',
      image: '../../assets/chat/anna_1.jpg',
      age: '26',
      distance: 'less than 3 mile away',
      quote: 'Life is unfair',
      occupation: 'Software Engineer',

      slides: [
        { slideImage: '../../assets/chat/anna_1.jpg' },
        { slideImage: '../../assets/chat/anna_2.jpg' },
        { slideImage: '../../assets/chat/anna_3.jpg' }
      ]
    }
  ],
  tabs: [
    { title: 'person' },
    { title: 'flame' },
    { title: 'chatbubbles' },
  ],
  chatData: [{
    'name': 'Shekhar',
    'image': '../../assets/chat/boy_2.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'count': '2',
    'time': '11:32 PM',

    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png'

  }, {
    'name': 'Jovenica Alba',
    'image': '../../assets/chat/kate_1.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'count': '2',
    'time': '12:17',
    'distance': '6km',
    'type': 'PRO',
    'crown': '../../assets/chat/crown.png',


  }, {
    'name': 'Olina',
    'image': ' ../../assets/chat/chat2.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': '12:17',
    'distance': '6km',
    'type': 'Basic',
    'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Georgina',
    'image': ' ../../assets/chat/chat3.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'count': '2',
    'time': 'Yesterday',
    'distance': '6km',
    'type': 'Basic',
    'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Hariette',
    'image': ' ../../assets/chat/ang_1.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': 'Sunday',
    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png',

  }, {
    'name': 'Julie',
    'image': ' ../../assets/chat/tina_2.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    'time': '11:15',
    'distance': '6km',
    'type': 'Basic',
    'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Jacey',
    'image': ' ../../assets/chat/kate_2.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'count': '1',
    'time': 'Yesterday',
    'distance': '6km',
    'type': 'Basic',
    'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Nilah',
    'image': ' ../../assets/chat/mona_2.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': 'Monday',
    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png',

  }, {
    'name': 'Charlie',
    'image': ' ../../assets/chat/chat8.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'count': '6',
    'time': '07:00',
    'distance': '6km',
    'type': 'Basic',
    'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Katie',
    'image': ' ../../assets/chat/kate_1.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': 'Yesterday',
    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png',

  }, {
    'name': 'Angel',
    'image': ' ../../assets/chat/ang_3.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    'time': 'Yesterday',
    'distance': '6km',
    'type': 'Basic', 'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Seba',
    'image': ' ../../assets/chat/tina_3.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

    'time': 'Yesterday',
    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png'
  }, {
    'name': 'Zachary',
    'image': ' ../../assets/chat/mona_3.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': 'Today',
    'distance': '6km',
    'type': 'Basic', 'crown': '../../assets/chat/crown1.png',

  }, {
    'name': 'Elijah',
    'image': ' ../../assets/chat/chat5.jpg',
    'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
    'time': '18:25',
    'distance': '6km',
    'type': 'PRO', 'crown': '../../assets/chat/crown.png',

  }
  ],
  conversation: [
    { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Right, it totally blew my mind', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'And it is free ?', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Yes, totally free', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
    { text: 'Wow, that\'s so cool', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Hats off to the developers', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: true, sent: true },
    { text: 'Oh yes, this is gooood stuff', sender: 0, image: 'assets/images/sg2.jpg' },
    { text: 'Check out their other designs ', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: false, sent: true }
  ],
  LOGIN_SLIDES_DATA: [{
    quote: 'Discover new and interesting people nearby',
    image: '../../assets/chat/kate_1.jpg'
  }, {
    quote: 'Swipe right to like some one and swipe left to pass',
    image: '../../assets/chat/like.jpeg'
  }, {
    quote: 'If they also swipe right, It\'s a match!',
    image: '../../assets/chat/match2.jpg'
  }, {
    quote: 'Only people you\'ve matched can message you',
    image: '../../assets/chat/rose.png'
  }],
  COUNTRY_DATA: [
    /*
    {
      'name': 'Afghanistan',
      'dial_code': '+93',
      'code': 'AF',
    },
    {
      'name': 'Aland Islands',
      'dial_code': '+358',
      'code': 'AX',
    },
    {
      'name': 'Albania',
      'dial_code': '+355',
      'code': 'AL',
    },
    {
      'name': 'Algeria',
      'dial_code': '+213',
      'code': 'DZ',

    },
    {
      'name': 'AmericanSamoa',
      'dial_code': '+1 684',
      'code': 'AS',
    },
    {
      'name': 'Andorra',
      'dial_code': '+376',
      'code': 'AD',
    },
    {
      'name': 'Angola',
      'dial_code': '+244',
      'code': 'AO',
    },
    {
      'name': 'Anguilla',
      'dial_code': '+1 264',
      'code': 'AI',
    },
    {
      'name': 'Antarctica',
      'dial_code': '+672',
      'code': 'AQ',
    },
    {
      'name': 'Antigua and Barbuda',
      'dial_code': '+1268',
      'code': 'AG',
    },
    {
      'name': 'Argentina',
      'dial_code': '+54',
      'code': 'AR'
    },
    {
      'name': 'Armenia',
      'dial_code': '+374',
      'code': 'AM'
    },
    {
      'name': 'Aruba',
      'dial_code': '+297',
      'code': 'AW'
    },
    {
      'name': 'Australia',
      'dial_code': '+61',
      'code': 'AU'
    },
    {
      'name': 'Austria',
      'dial_code': '+43',
      'code': 'AT'
    },
    {
      'name': 'Azerbaijan',
      'dial_code': '+994',
      'code': 'AZ'
    },
    {
      'name': 'Bahamas',
      'dial_code': '+1 242',
      'code': 'BS'
    },
    {
      'name': 'Bahrain',
      'dial_code': '+973',
      'code': 'BH'
    },
    {
      'name': 'Bangladesh',
      'dial_code': '+880',
      'code': 'BD'
    },
    {
      'name': 'Barbados',
      'dial_code': '+1 246',
      'code': 'BB'
    },
    {
      'name': 'Belarus',
      'dial_code': '+375',
      'code': 'BY'
    },
    {
      'name': 'Belgium',
      'dial_code': '+32',
      'code': 'BE'
    },
    {
      'name': 'Belize',
      'dial_code': '+501',
      'code': 'BZ'
    },
    {
      'name': 'Benin',
      'dial_code': '+229',
      'code': 'BJ'
    },
    {
      'name': 'Bermuda',
      'dial_code': '+1 441',
      'code': 'BM'
    },
    {
      'name': 'Bhutan',
      'dial_code': '+975',
      'code': 'BT'
    },
    {
      'name': 'Bolivia, Plurinational State of',
      'dial_code': '+591',
      'code': 'BO'
    },
    {
      'name': 'Bosnia and Herzegovina',
      'dial_code': '+387',
      'code': 'BA'
    },
    {
      'name': 'Botswana',
      'dial_code': '+267',
      'code': 'BW'
    },
    {
      'name': 'Brazil',
      'dial_code': '+55',
      'code': 'BR'
    },
    {
      'name': 'British Indian Ocean Territory',
      'dial_code': '+246',
      'code': 'IO'
    },
    {
      'name': 'Brunei Darussalam',
      'dial_code': '+673',
      'code': 'BN'
    },
    {
      'name': 'Bulgaria',
      'dial_code': '+359',
      'code': 'BG'
    },
    {
      'name': 'Burkina Faso',
      'dial_code': '+226',
      'code': 'BF'
    },
    {
      'name': 'Burundi',
      'dial_code': '+257',
      'code': 'BI'
    },
    {
      'name': 'Cambodia',
      'dial_code': '+855',
      'code': 'KH'
    },
    {
      'name': 'Cameroon',
      'dial_code': '+237',
      'code': 'CM'
    },
    */
    {
      'name': 'Canada',
      'dial_code': '+1',
      'code': 'CA'
    },
    /*
    {
      'name': 'Cape Verde',
      'dial_code': '+238',
      'code': 'CV'
    },
    {
      'name': 'Cayman Islands',
      'dial_code': '+ 345',
      'code': 'KY'
    },
    {
      'name': 'Central African Republic',
      'dial_code': '+236',
      'code': 'CF'
    },
    {
      'name': 'Chad',
      'dial_code': '+235',
      'code': 'TD'
    },
    {
      'name': 'Chile',
      'dial_code': '+56',
      'code': 'CL'
    },
    {
      'name': 'China',
      'dial_code': '+86',
      'code': 'CN'
    },
    {
      'name': 'Christmas Island',
      'dial_code': '+61',
      'code': 'CX'
    },
    {
      'name': 'Cocos (Keeling) Islands',
      'dial_code': '+61',
      'code': 'CC'
    },
    {
      'name': 'Colombia',
      'dial_code': '+57',
      'code': 'CO'
    },
    {
      'name': 'Comoros',
      'dial_code': '+269',
      'code': 'KM'
    },
    {
      'name': 'Congo',
      'dial_code': '+242',
      'code': 'CG'
    },
    {
      'name': 'Congo, The Democratic Republic of the Congo',
      'dial_code': '+243',
      'code': 'CD'
    },
    {
      'name': 'Cook Islands',
      'dial_code': '+682',
      'code': 'CK'
    },
    {
      'name': 'Costa Rica',
      'dial_code': '+506',
      'code': 'CR'
    },
    {
      'name': 'Cote d\'Ivoire',
      'dial_code': '+225',
      'code': 'CI'
    },
    {
      'name': 'Croatia',
      'dial_code': '+385',
      'code': 'HR'
    },
    {
      'name': 'Cuba',
      'dial_code': '+53',
      'code': 'CU'
    },
    {
      'name': 'Cyprus',
      'dial_code': '+357',
      'code': 'CY'
    },
    {
      'name': 'Czech Republic',
      'dial_code': '+420',
      'code': 'CZ'
    },
    {
      'name': 'Denmark',
      'dial_code': '+45',
      'code': 'DK'
    },
    {
      'name': 'Djibouti',
      'dial_code': '+253',
      'code': 'DJ'
    },
    {
      'name': 'Dominica',
      'dial_code': '+1 767',
      'code': 'DM'
    },
    {
      'name': 'Dominican Republic',
      'dial_code': '+1 849',
      'code': 'DO'
    },
    {
      'name': 'Ecuador',
      'dial_code': '+593',
      'code': 'EC'
    },
    {
      'name': 'Egypt',
      'dial_code': '+20',
      'code': 'EG'
    },
    {
      'name': 'El Salvador',
      'dial_code': '+503',
      'code': 'SV'
    },
    {
      'name': 'Equatorial Guinea',
      'dial_code': '+240',
      'code': 'GQ'
    },
    {
      'name': 'Eritrea',
      'dial_code': '+291',
      'code': 'ER'
    },
    {
      'name': 'Estonia',
      'dial_code': '+372',
      'code': 'EE'
    },
    {
      'name': 'Ethiopia',
      'dial_code': '+251',
      'code': 'ET'
    },
    {
      'name': 'Falkland Islands (Malvinas)',
      'dial_code': '+500',
      'code': 'FK'
    },
    {
      'name': 'Faroe Islands',
      'dial_code': '+298',
      'code': 'FO'
    },
    {
      'name': 'Fiji',
      'dial_code': '+679',
      'code': 'FJ'
    },
    {
      'name': 'Finland',
      'dial_code': '+358',
      'code': 'FI'
    },
    {
      'name': 'France',
      'dial_code': '+33',
      'code': 'FR'
    },
    {
      'name': 'French Guiana',
      'dial_code': '+594',
      'code': 'GF'
    },
    {
      'name': 'French Polynesia',
      'dial_code': '+689',
      'code': 'PF'
    },
    {
      'name': 'Gabon',
      'dial_code': '+241',
      'code': 'GA'
    },
    {
      'name': 'Gambia',
      'dial_code': '+220',
      'code': 'GM'
    },
    {
      'name': 'Georgia',
      'dial_code': '+995',
      'code': 'GE'
    },
    {
      'name': 'Germany',
      'dial_code': '+49',
      'code': 'DE'
    },
    {
      'name': 'Ghana',
      'dial_code': '+233',
      'code': 'GH'
    },
    {
      'name': 'Gibraltar',
      'dial_code': '+350',
      'code': 'GI'
    },
    {
      'name': 'Greece',
      'dial_code': '+30',
      'code': 'GR'
    },
    {
      'name': 'Greenland',
      'dial_code': '+299',
      'code': 'GL'
    },
    {
      'name': 'Grenada',
      'dial_code': '+1 473',
      'code': 'GD'
    },
    {
      'name': 'Guadeloupe',
      'dial_code': '+590',
      'code': 'GP'
    },
    {
      'name': 'Guam',
      'dial_code': '+1 671',
      'code': 'GU'
    },
    {
      'name': 'Guatemala',
      'dial_code': '+502',
      'code': 'GT'
    },
    {
      'name': 'Guernsey',
      'dial_code': '+44',
      'code': 'GG'
    },
    {
      'name': 'Guinea',
      'dial_code': '+224',
      'code': 'GN'
    },
    {
      'name': 'Guinea-Bissau',
      'dial_code': '+245',
      'code': 'GW'
    },
    {
      'name': 'Guyana',
      'dial_code': '+595',
      'code': 'GY'
    },
    {
      'name': 'Haiti',
      'dial_code': '+509',
      'code': 'HT'
    },
    {
      'name': 'Holy See (Vatican City State)',
      'dial_code': '+379',
      'code': 'VA'
    },
    {
      'name': 'Honduras',
      'dial_code': '+504',
      'code': 'HN'
    },
    {
      'name': 'Hong Kong',
      'dial_code': '+852',
      'code': 'HK'
    },
    {
      'name': 'Hungary',
      'dial_code': '+36',
      'code': 'HU'
    },
    {
      'name': 'Iceland',
      'dial_code': '+354',
      'code': 'IS'
    },
    {
      'name': 'India',
      'dial_code': '+91',
      'code': 'IN'
    },
    {
      'name': 'Indonesia',
      'dial_code': '+62',
      'code': 'ID'
    },
    {
      'name': 'Iran, Islamic Republic of Persian Gulf',
      'dial_code': '+98',
      'code': 'IR'
    },
    {
      'name': 'Iraq',
      'dial_code': '+964',
      'code': 'IQ'
    },
    {
      'name': 'Ireland',
      'dial_code': '+353',
      'code': 'IE'
    },
    {
      'name': 'Isle of Man',
      'dial_code': '+44',
      'code': 'IM'
    },
    {
      'name': 'Israel',
      'dial_code': '+972',
      'code': 'IL'
    },
    {
      'name': 'Italy',
      'dial_code': '+39',
      'code': 'IT'
    },
    {
      'name': 'Jamaica',
      'dial_code': '+1 876',
      'code': 'JM'
    },
    {
      'name': 'Japan',
      'dial_code': '+81',
      'code': 'JP'
    },
    {
      'name': 'Jersey',
      'dial_code': '+44',
      'code': 'JE'
    },
    {
      'name': 'Jordan',
      'dial_code': '+962',
      'code': 'JO'
    },
    {
      'name': 'Kazakhstan',
      'dial_code': '+7 7',
      'code': 'KZ'
    },
    {
      'name': 'Kenya',
      'dial_code': '+254',
      'code': 'KE'
    },
    {
      'name': 'Kiribati',
      'dial_code': '+686',
      'code': 'KI'
    },
    {
      'name': 'Korea, Democratic People\'s Republic of Korea',
      'dial_code': '+850',
      'code': 'KP'
    },
    {
      'name': 'Korea, Republic of South Korea',
      'dial_code': '+82',
      'code': 'KR'
    },
    {
      'name': 'Kuwait',
      'dial_code': '+965',
      'code': 'KW'
    },
    {
      'name': 'Kyrgyzstan',
      'dial_code': '+996',
      'code': 'KG'
    },
    {
      'name': 'Laos',
      'dial_code': '+856',
      'code': 'LA'
    },
    {
      'name': 'Latvia',
      'dial_code': '+371',
      'code': 'LV'
    },
    {
      'name': 'Lebanon',
      'dial_code': '+961',
      'code': 'LB'
    },
    {
      'name': 'Lesotho',
      'dial_code': '+266',
      'code': 'LS'
    },
    {
      'name': 'Liberia',
      'dial_code': '+231',
      'code': 'LR'
    },
    {
      'name': 'Libyan Arab Jamahiriya',
      'dial_code': '+218',
      'code': 'LY'
    },
    {
      'name': 'Liechtenstein',
      'dial_code': '+423',
      'code': 'LI'
    },
    {
      'name': 'Lithuania',
      'dial_code': '+370',
      'code': 'LT'
    },
    {
      'name': 'Luxembourg',
      'dial_code': '+352',
      'code': 'LU'
    },
    {
      'name': 'Macao',
      'dial_code': '+853',
      'code': 'MO'
    },
    {
      'name': 'Macedonia',
      'dial_code': '+389',
      'code': 'MK'
    },
    {
      'name': 'Madagascar',
      'dial_code': '+261',
      'code': 'MG'
    },
    {
      'name': 'Malawi',
      'dial_code': '+265',
      'code': 'MW'
    },
    {
      'name': 'Malaysia',
      'dial_code': '+60',
      'code': 'MY'
    },
    {
      'name': 'Maldives',
      'dial_code': '+960',
      'code': 'MV'
    },
    {
      'name': 'Mali',
      'dial_code': '+223',
      'code': 'ML'
    },
    {
      'name': 'Malta',
      'dial_code': '+356',
      'code': 'MT'
    },
    {
      'name': 'Marshall Islands',
      'dial_code': '+692',
      'code': 'MH'
    },
    {
      'name': 'Martinique',
      'dial_code': '+596',
      'code': 'MQ'
    },
    {
      'name': 'Mauritania',
      'dial_code': '+222',
      'code': 'MR'
    },
    {
      'name': 'Mauritius',
      'dial_code': '+230',
      'code': 'MU'
    },
    {
      'name': 'Mayotte',
      'dial_code': '+262',
      'code': 'YT'
    },
    {
      'name': 'Mexico',
      'dial_code': '+52',
      'code': 'MX'
    },
    {
      'name': 'Micronesia, Federated States of Micronesia',
      'dial_code': '+691',
      'code': 'FM'
    },
    {
      'name': 'Moldova',
      'dial_code': '+373',
      'code': 'MD'
    },
    {
      'name': 'Monaco',
      'dial_code': '+377',
      'code': 'MC'
    },
    {
      'name': 'Mongolia',
      'dial_code': '+976',
      'code': 'MN'
    },
    {
      'name': 'Montenegro',
      'dial_code': '+382',
      'code': 'ME'
    },
    {
      'name': 'Montserrat',
      'dial_code': '+1664',
      'code': 'MS'
    },
    {
      'name': 'Morocco',
      'dial_code': '+212',
      'code': 'MA'
    },
    {
      'name': 'Mozambique',
      'dial_code': '+258',
      'code': 'MZ'
    },
    {
      'name': 'Myanmar',
      'dial_code': '+95',
      'code': 'MM'
    },
    {
      'name': 'Namibia',
      'dial_code': '+264',
      'code': 'NA'
    },
    {
      'name': 'Nauru',
      'dial_code': '+674',
      'code': 'NR'
    },
    {
      'name': 'Nepal',
      'dial_code': '+977',
      'code': 'NP'
    },
    {
      'name': 'Netherlands',
      'dial_code': '+31',
      'code': 'NL'
    },
    {
      'name': 'Netherlands Antilles',
      'dial_code': '+599',
      'code': 'AN'
    },
    {
      'name': 'New Caledonia',
      'dial_code': '+687',
      'code': 'NC'
    },
    {
      'name': 'New Zealand',
      'dial_code': '+64',
      'code': 'NZ'
    },
    {
      'name': 'Nicaragua',
      'dial_code': '+505',
      'code': 'NI'
    },
    {
      'name': 'Niger',
      'dial_code': '+227',
      'code': 'NE'
    },
    {
      'name': 'Nigeria',
      'dial_code': '+234',
      'code': 'NG'
    },
    {
      'name': 'Niue',
      'dial_code': '+683',
      'code': 'NU'
    },
    {
      'name': 'Norfolk Island',
      'dial_code': '+672',
      'code': 'NF'
    },
    {
      'name': 'Northern Mariana Islands',
      'dial_code': '+1 670',
      'code': 'MP'
    },
    {
      'name': 'Norway',
      'dial_code': '+47',
      'code': 'NO'
    },
    {
      'name': 'Oman',
      'dial_code': '+968',
      'code': 'OM'
    },
    {
      'name': 'Pakistan',
      'dial_code': '+92',
      'code': 'PK'
    },
    {
      'name': 'Palau',
      'dial_code': '+680',
      'code': 'PW'
    },
    {
      'name': 'Palestinian Territory, Occupied',
      'dial_code': '+970',
      'code': 'PS'
    },
    {
      'name': 'Panama',
      'dial_code': '+507',
      'code': 'PA'
    },
    {
      'name': 'Papua New Guinea',
      'dial_code': '+675',
      'code': 'PG'
    },
    {
      'name': 'Paraguay',
      'dial_code': '+595',
      'code': 'PY'
    },
    {
      'name': 'Peru',
      'dial_code': '+51',
      'code': 'PE'
    },
    {
      'name': 'Philippines',
      'dial_code': '+63',
      'code': 'PH'
    },
    {
      'name': 'Pitcairn',
      'dial_code': '+872',
      'code': 'PN'
    },
    {
      'name': 'Poland',
      'dial_code': '+48',
      'code': 'PL'
    },
    {
      'name': 'Portugal',
      'dial_code': '+351',
      'code': 'PT'
    },
    {
      'name': 'Puerto Rico',
      'dial_code': '+1 939',
      'code': 'PR'
    },
    {
      'name': 'Qatar',
      'dial_code': '+974',
      'code': 'QA'
    },
    {
      'name': 'Romania',
      'dial_code': '+40',
      'code': 'RO'
    },
    {
      'name': 'Russia',
      'dial_code': '+7',
      'code': 'RU'
    },
    {
      'name': 'Rwanda',
      'dial_code': '+250',
      'code': 'RW'
    },
    {
      'name': 'Reunion',
      'dial_code': '+262',
      'code': 'RE'
    },
    {
      'name': 'Saint Barthelemy',
      'dial_code': '+590',
      'code': 'BL'
    },
    {
      'name': 'Saint Helena, Ascension and Tristan Da Cunha',
      'dial_code': '+290',
      'code': 'SH'
    },
    {
      'name': 'Saint Kitts and Nevis',
      'dial_code': '+1 869',
      'code': 'KN'
    },
    {
      'name': 'Saint Lucia',
      'dial_code': '+1 758',
      'code': 'LC'
    },
    {
      'name': 'Saint Martin',
      'dial_code': '+590',
      'code': 'MF'
    },
    {
      'name': 'Saint Pierre and Miquelon',
      'dial_code': '+508',
      'code': 'PM'
    },
    {
      'name': 'Saint Vincent and the Grenadines',
      'dial_code': '+1 784',
      'code': 'VC'
    },
    {
      'name': 'Samoa',
      'dial_code': '+685',
      'code': 'WS'
    },
    {
      'name': 'San Marino',
      'dial_code': '+378',
      'code': 'SM'
    },
    {
      'name': 'Sao Tome and Principe',
      'dial_code': '+239',
      'code': 'ST'
    },
    {
      'name': 'Saudi Arabia',
      'dial_code': '+966',
      'code': 'SA'
    },
    {
      'name': 'Senegal',
      'dial_code': '+221',
      'code': 'SN'
    },
    {
      'name': 'Serbia',
      'dial_code': '+381',
      'code': 'RS'
    },
    {
      'name': 'Seychelles',
      'dial_code': '+248',
      'code': 'SC'
    },
    {
      'name': 'Sierra Leone',
      'dial_code': '+232',
      'code': 'SL'
    },
    {
      'name': 'Singapore',
      'dial_code': '+65',
      'code': 'SG'
    },
    {
      'name': 'Slovakia',
      'dial_code': '+421',
      'code': 'SK'
    },
    {
      'name': 'Slovenia',
      'dial_code': '+386',
      'code': 'SI'
    },
    {
      'name': 'Solomon Islands',
      'dial_code': '+677',
      'code': 'SB'
    },
    {
      'name': 'Somalia',
      'dial_code': '+252',
      'code': 'SO'
    },
    {
      'name': 'South Africa',
      'dial_code': '+27',
      'code': 'ZA'
    },
    {
      'name': 'South Georgia and the South Sandwich Islands',
      'dial_code': '+500',
      'code': 'GS'
    },
    {
      'name': 'Spain',
      'dial_code': '+34',
      'code': 'ES'
    },
    {
      'name': 'Sri Lanka',
      'dial_code': '+94',
      'code': 'LK'
    },
    {
      'name': 'Sudan',
      'dial_code': '+249',
      'code': 'SD'
    },
    {
      'name': 'Suriname',
      'dial_code': '+597',
      'code': 'SR'
    },
    {
      'name': 'Svalbard and Jan Mayen',
      'dial_code': '+47',
      'code': 'SJ'
    },
    {
      'name': 'Swaziland',
      'dial_code': '+268',
      'code': 'SZ'
    },
    {
      'name': 'Sweden',
      'dial_code': '+46',
      'code': 'SE'
    },
    {
      'name': 'Switzerland',
      'dial_code': '+41',
      'code': 'CH'
    },
    {
      'name': 'Syrian Arab Republic',
      'dial_code': '+963',
      'code': 'SY'
    },
    {
      'name': 'Taiwan',
      'dial_code': '+886',
      'code': 'TW'
    },
    {
      'name': 'Tajikistan',
      'dial_code': '+992',
      'code': 'TJ'
    },
    {
      'name': 'Tanzania, United Republic of Tanzania',
      'dial_code': '+255',
      'code': 'TZ'
    },
    {
      'name': 'Thailand',
      'dial_code': '+66',
      'code': 'TH'
    },
    {
      'name': 'Timor-Leste',
      'dial_code': '+670',
      'code': 'TL'
    },
    {
      'name': 'Togo',
      'dial_code': '+228',
      'code': 'TG'
    },
    {
      'name': 'Tokelau',
      'dial_code': '+690',
      'code': 'TK'
    },
    {
      'name': 'Tonga',
      'dial_code': '+676',
      'code': 'TO'
    },
    {
      'name': 'Trinidad and Tobago',
      'dial_code': '+1 868',
      'code': 'TT'
    },
    {
      'name': 'Tunisia',
      'dial_code': '+216',
      'code': 'TN'
    },
    {
      'name': 'Turkey',
      'dial_code': '+90',
      'code': 'TR'
    },
    {
      'name': 'Turkmenistan',
      'dial_code': '+993',
      'code': 'TM'
    },
    {
      'name': 'Turks and Caicos Islands',
      'dial_code': '+1 649',
      'code': 'TC'
    },
    {
      'name': 'Tuvalu',
      'dial_code': '+688',
      'code': 'TV'
    },
    {
      'name': 'Uganda',
      'dial_code': '+256',
      'code': 'UG'
    },
    {
      'name': 'Ukraine',
      'dial_code': '+380',
      'code': 'UA'
    },
    {
      'name': 'United Arab Emirates',
      'dial_code': '+971',
      'code': 'AE'
    },
    {
      'name': 'United Kingdom',
      'dial_code': '+44',
      'code': 'GB'
    },
    */
   /* {
      'name': 'United States',
      'dial_code': '+1',
      'code': 'US'
    }*/
    /*
    {
      'name': 'Uruguay',
      'dial_code': '+598',
      'code': 'UY'
    },
    {
      'name': 'Uzbekistan',
      'dial_code': '+998',
      'code': 'UZ'
    },
    {
      'name': 'Vanuatu',
      'dial_code': '+678',
      'code': 'VU'
    },
    {
      'name': 'Venezuela, Bolivarian Republic of Venezuela',
      'dial_code': '+58',
      'code': 'VE'
    },
    {
      'name': 'Vietnam',
      'dial_code': '+84',
      'code': 'VN'
    },
    {
      'name': 'Virgin Islands, British',
      'dial_code': '+1 284',
      'code': 'VG'
    },
    {
      'name': 'Virgin Islands, U.S.',
      'dial_code': '+1 340',
      'code': 'VI'
    },
    {
      'name': 'Wallis and Futuna',
      'dial_code': '+681',
      'code': 'WF'
    },
    {
      'name': 'Yemen',
      'dial_code': '+967',
      'code': 'YE'
    },
    {
      'name': 'Zambia',
      'dial_code': '+260',
      'code': 'ZM'
    },
    {
      'name': 'Zimbabwe',
      'dial_code': '+263',
      'code': 'ZW'
    }
    */
  ]

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
