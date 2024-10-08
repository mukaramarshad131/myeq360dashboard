import { faker, tr } from '@faker-js/faker';

import { BasicStatus, PermissionType } from '#/enum';

/**
 * Organization data mock
 */
export const ORG_LIST = [
  {
    id: '1',
    name: 'East China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 1,
    children: [
      { id: '1-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '1-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '1-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
  {
    id: '2',
    name: 'South China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 2,
    children: [
      { id: '2-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '2-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '2-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  }
];

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
  id: '9100714781927703',
  parentId: '',
  label: 'sys.menu.dashboard',
  name: 'Dashboard',
  icon: 'ic-analysis',
  type: PermissionType.CATALOGUE,
  route: 'dashboard',
  order: 1,
  children: [
    {
      id: '8426999229400979',
      parentId: '9100714781927703',
      label: 'sys.menu.individual-dashboard',
      name: 'Individual Dashboard',
      type: PermissionType.MENU,
      route: 'individual-dashboard',
      component: '/dashboard/individual-dashboard/index.tsx',
    },
   
  ],
};
const MANAGEMENT_PERMISSION = {
  id: '0901673425580518',
  parentId: '',
  label: 'sys.menu.management',
  name: 'User',
  icon: 'ic-user',
  type: PermissionType.CATALOGUE,
  route: 'management',
  order: 2,
  children: [
    {
      id: '4754063958766648',
      parentId: '0901673425580518',
      label: 'sys.menu.profile',
      name: 'Profile',
      type: PermissionType.MENU,
      route: 'profile',
      component: '/management/user/profile/index.tsx',
    },
    {
      id: '2516598794787938',
      parentId: '0901673425580518',
      label: 'sys.menu.account',
      name: 'Account',
      type: PermissionType.MENU,
      route: 'account',
      component: '/management/user/account/index.tsx',
    },
   
  ],
};

const OTHERS_PERMISSION = [
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.menu.packages',
    name: 'Packages ',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'packages',
    component: '/packages/packages.tsx',
    hide:true
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.menu.eqAssessmentTest',
    name: 'EQ Assessment Test',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'eqAssessmentTest',
    component: '/assessment/EqAssessmentTest.tsx',
    hide:true
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.eqPreAssessment',
    name: 'EqPreAssessment',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'eqPreAssessment',
    component: '/assessment/EqPreAssessment.tsx',
    hide:true,
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.eqAssessment',
    name: 'eqAssessment',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'eqAssessment',
    component: '/assessment/EqAssessment.tsx',
    hide:true,
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.singlePageReport',
    name: 'singlePageReport',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'singlePageReport',
    component: '/sys/others/OnePageReport.tsx',
    hide:true
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.assessmentSurvey',
    name: 'assessment-survey',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'assessmentSurvey',
    component: '/assessment/AssessmentSurvey.tsx',
    hide:true
  },
  {
    id: '0941594969900756',
    parentId: '',
    label: 'sys.addToCart',
    name: 'add-to-cart',
    icon: 'ic_blank',
    type: PermissionType.MENU,
    route: 'addToCart',
    component: '/cart/AddToCart.tsx',
  },
];


export const PERMISSION_LIST = [
  DASHBOARD_PERMISSION,
  MANAGEMENT_PERMISSION,
  ...OTHERS_PERMISSION
];
/**
 * User role mock
 */
const ADMIN_ROLE = {
  id: '4281707933534332',
  name: 'Admin',
  label: 'admin',
  status: BasicStatus.ENABLE,
  order: 1,
  desc: 'Super Admin',
  permission: PERMISSION_LIST,
};
const TEST_ROLE = {
  id: '9931665660771476',
  name: 'Test',
  label: 'test',
  status: BasicStatus.ENABLE,
  order: 2,
  desc: 'test',
  permission: [DASHBOARD_PERMISSION],
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];
/**
 * User data mock
 */
export const DEFAULT_USER = {
  id: 'b34719e1-ce46-457e-9575-99505ecee828',
  username: 'admin',
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  password: 'demo1234',
  role: ADMIN_ROLE,
  permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
  id: 'efaa20ea-4dc5-47ee-a200-8a899be29494',
  username: 'test',
  password: 'demo1234',
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: TEST_ROLE,
  permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];
