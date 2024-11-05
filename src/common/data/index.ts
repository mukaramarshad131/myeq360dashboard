export const defaultRole =[{
    id: '9100714781927703',
    parentId: '',
    label: 'sys.menu.dashboard',
    name: 'Dashboard',
    icon: 'ic-analysis',
    type: 'CATALOGUE',
    route: 'dashboard',
    order: 1,
    children: [
      {
        id: '8426999229400979',
        parentId: '9100714781927703',
        label: 'sys.menu.individual-dashboard',
        name: 'Individual Dashboard',
        type: 'MENU',
        route: 'individual-dashboard',
        component: '/dashboard/individual-dashboard/index.tsx',
      },
     
    ],
  },
  {
    id: '0901673425580518',
    parentId: '',
    label: 'sys.menu.management',
    name: 'User',
    icon: 'ic-user',
    type: 'CATALOGUE',
    route: 'management',
    order: 2,
    children: [
      {
        id: '4754063958766648',
        parentId: '0901673425580518',
        label: 'sys.menu.profile',
        name: 'Profile',
        type: 'MENU',
        route: 'profile',
        component: '/profile-management/user/profile/index.tsx',
      },
      {
        id: '2516598794787938',
        parentId: '0901673425580518',
        label: 'sys.menu.account',
        name: 'Account',
        type: 'MENU',
        route: 'account',
        component: '/profile-management/user/account/index.tsx',
      },
     
    ],
  }]
export const defaultAdminRole =[{
    id: '9100714781927703',
    parentId: '',
    label: 'sys.menu.dashboard',
    name: 'Dashboard',
    icon: 'ic-analysis',
    type: 'CATALOGUE',
    route: 'dashboard',
    order: 1,
    children: [
      {
        id: '8426999229400979',
        parentId: '9100714781927703',
        label: 'sys.menu.individual-dashboard',
        name: 'Individual Dashboard',
        type: 'MENU',
        route: 'individual-dashboard',
        component: '/dashboard/individual-dashboard/index.tsx',
      },
     
    ],
  },
  {
    id: '0901673425580518',
    parentId: '',
    label: 'sys.menu.management',
    name: 'User',
    icon: 'ic-user',
    type: 'CATALOGUE',
    route: 'management',
    order: 2,
    children: [
      {
        id: '4754063958766648',
        parentId: '0901673425580518',
        label: 'sys.menu.profile',
        name: 'Profile',
        type: 'MENU',
        route: 'profile',
        component: '/profile-management/user/profile/index.tsx',
      },
      {
        id: '2516598794787938',
        parentId: '0901673425580518',
        label: 'sys.menu.account',
        name: 'Account',
        type: 'MENU',
        route: 'account',
        component: '/profile-management/user/account/index.tsx',
      },
      {
        id: '4754063958755648',
        parentId: '0901673425580518',
        label: 'sys.menu.package',
        name: 'Packages & License',
        type: 'MENU',
        route: 'package',
        component: '/management/packages-license/index.tsx',
      },
      {
        id: '2516598794587938',
        parentId: '0901673425580518',
        label: 'sys.menu.question',
        name: 'Questions',
        type: 'MENU',
        route: 'question',
        component: '/management/questions/index.tsx',
      },
      {
        id: "2516598794877938",
        parentId: "0901673425580518",
        label: "sys.menu.entity",
        name: "Entities",
        type: "MENU",
        route: "entities",
        component: "/management/entities/index.tsx"
      }
    ],
  }]
export   const competencies = [
  { title: 'Self-Awareness' },
  { title: 'Self-Management' },
  { title: 'Social Awareness' },
  { title: 'Relationship Skills' },
  { title: 'Responsible Decision-Making' },
  { title: 'Motivation' },
];