import { t } from 'i18next';

import glass_users from '@/assets/images/glass/ic_glass_users.png';
import { useThemeToken } from '@/theme/hooks';

export const skillAssessmentData = [
  {
    key: '1',
    title: 'sys.skillCategories.selfAwareness',
    abbrevation: 'sys.skillCategoriesAbb.sa',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
    series: [{ name: '', data: [73.33, 20] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 75,
    children: [
      { key: '10', title: 'sys.selfAwareness.emotionalAwareness', status: 'exceeding' },
      { key: '11', title: 'sys.selfAwareness.selfPerception', status: 'exceeding' },
      { key: '12', title: 'sys.selfAwareness.optimisticOutlook', status: 'developing' },
    ],
  },
  {
    key: '2',
    title: 'sys.skillCategories.selfManagement',
    abbrevation: 'sys.skillCategoriesAbb.sm',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
    series: [{ name: '', data: [50] }],
    dataLable: ['25-06-2024'],
    percent: 50,
    children: [
      { key: '13', title: 'sys.selfManagement.internalRegulation', status: 'developing' },
      { key: '14', title: 'sys.selfManagement.behaviorControl', status: 'developing' },
      { key: '15', title: 'sys.selfManagement.goalPursuance', status: 'developing' },
    ],
    info: '<b>You are Beginning to Develop Self-Management.</b> There is room for improvement for these skills that are coming into view.<br/> To Improve: Self-management can help you manage stress, motivate yourself, and set and work towards personal, academic, and professional goals. Self-management is important because it can help you manage the stress that is associated with a new workplace, dealing with problems with your coworkers, and coming up with solutions to different problems that you may face.<br/> <b>Sub-competencies of Self-Management</b>: Internal Regulation, Behavior Control, and Goal Pursuance',
  },
  {
    key: '3',
    title: 'sys.skillCategories.socialAwareness',
    abbrevation: 'sys.skillCategoriesAbb.so',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
    series: [{ name: '', data: [51.67, 90] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 50,
    children: [
      { key: '16', title: 'sys.socialAwareness.appreciatingSocial', status: 'meeting' },
      { key: '17', title: 'sys.socialAwareness.adaptiveBehavior', status: 'developing' },
      { key: '18', title: 'sys.socialAwareness.resourceSupportRecognition', status: 'developing' },
    ],
  },
  {
    key: '4',
    title: 'sys.skillCategories.relationshipSkills',
    abbrevation: 'sys.skillCategoriesAbb.rs',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
    series: [{ name: '', data: [58.33, 67] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 50,
    children: [
      { key: '19', title: 'sys.relationshipSkills.communication', status: 'exceeding' },
      { key: '20', title: 'sys.relationshipSkills.socialEngagement', status: 'developing' },
      { key: '21', title: 'sys.relationshipSkills.interdependence', status: 'developing' },
    ],
  },
  {
    key: '5',
    title: 'sys.skillCategories.responsibleDecisionMaking',
    abbrevation: 'sys.skillCategoriesAbb.rd',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
    series: [{ name: '', data: [76.67, 25.9] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 75,
    children: [
      { key: '22', title: 'sys.responsibleDecisionMaking.constructiveThinking', status: 'meeting' },
      {
        key: '23',
        title: 'sys.responsibleDecisionMaking.consequenceEvaluation',
        status: 'exceeding',
      },
      { key: '24', title: 'sys.responsibleDecisionMaking.respectForSelf', status: 'meeting' },
    ],
    info: '<b>You are Beginning to Meet Responsible Decision-Making.</b> This means that you have a knack for understanding yourself on a deeper level.<br/> Responsible decision making is important because you need to learn how to identify a problem, think of a solution, and understand the consequences for yourself and for others. Our words, actions, and decisions have an impact, so we need to be able to make responsible decisions. Otherwise, we could potentially hurt ourselves or others.<br/> <b>Sub-competencies of Responsible Decision-Making</b> : Constructive Thinking, Consequence Evaluation, and Respect for Self & Others',
  },
  {
    key: '6',
    title: 'sys.skillCategories.motivation',
    abbrevation: 'sys.skillCategoriesAbb.mo',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
    series: [{ name: '', data: [63.33, 102.9] }],
    dataLable: ['25-06-2024 13:26:10', '09-07-2024 13:26:10'],
    percent: 75,
    children: [
      { key: '25', title: 'sys.motivation.enthusiasm', status: 'developing' },
      { key: '26', title: 'sys.motivation.initiative', status: 'meeting' },
      { key: '27', title: 'sys.motivation.resilience', status: 'meeting' },
    ],
  },
];

export const skillLevels = [
  t('sys.skillLevels.meeting'),
  t('sys.skillLevels.developing'),
  t('sys.skillLevels.exceeding'),
  t('sys.skillLevels.emerging'),
];
export const skills = [
  {
    key: 1,
    title: t('sys.skillLevels.emerging'),
    abbrevation: t('sys.skillAbbrevation.em'),
    info: t('sys.skillInfo.emerging'),
  },
  {
    key: 2,
    title: t('sys.skillLevels.developing'),
    abbrevation: t('sys.skillAbbrevation.d'),
    info: t('sys.skillInfo.developing'),
  },
  {
    key: 3,
    title: t('sys.skillLevels.meeting'),
    abbrevation: t('sys.skillAbbrevation.m'),
    info: t('sys.skillInfo.meeting'),
  },
  {
    key: 4,
    title: t('sys.skillLevels.exceeding'),
    abbrevation: t('sys.skillAbbrevation.ex'),
    info: t('sys.skillInfo.exceeding'),
  },
];
export const IndividualDashboardStatsCard = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      cover: glass_users,
      title: 'Understanding Emotions',
      des: ' Gain insight into emotions for better self-awareness and decision-making.',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: '#3B4970',
    },
    {
      id: 2,
      cover: glass_users,
      title: 'Personal Growth',
      des: ' Develop resilience and adaptability to thrive in various life situations.',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: '#3B4970',
    },
    {
      id: 3,
      cover: glass_users,
      title: 'Effective Communication',
      des: ' Enhance interpersonal skills for clearer and more meaningful interactions.',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorInfoTextActive,
    },
    {
      id: 4,
      cover: glass_users,
      title: 'Positive Relationships',
      des: ' Promote supportive environments and teamwork for greater success.',
      bg: theme.colorErrorTextActive,
      bg_toString_color: theme.colorErrorActive,
      color: theme.colorInfoTextActive,
    },
  ];
};

export const individualDashboardFaqData: any[] = [
  {
    id: 1,
    Q: 'q1',
    Ans: 'a1',
  },
  {
    id: 2,
    Q: 'q2',
    Ans: 'a2',
  },
  {
    id: 3,
    Q: 'q3',
    Ans: 'a3',
  },
  {
    id: 4,
    Q: 'q4',
    Ans: 'a4',
  },
  {
    id: 5,
    Q: 'q5',
    Ans: 'a5',
  },
];

export const buinessPackageLicense: any[] = [
  // Business Packages
  {
    id: 1,
    type: 'packages',
    discount: '30% Off',
    backgroundColor: '#F9CA3D',
    packageName: 'Gold Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '10',
    staffLicenses: '100',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 2,
    type: 'packages',
    discount: '25% Off',
    backgroundColor: '#EDEDED',
    packageName: 'Silver Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 3,
    type: 'packages',
    discount: '15% Off',
    backgroundColor: '#EBA52A',
    packageName: 'Bronze Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '5',
    staffLicenses: '80',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 4,
    type: 'packages',
    discount: '20% Off',
    backgroundColor: '#E1E2E3',
    packageName: 'Platinum Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },

  // Licenses
  {
    id: 101,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 102,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 103,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 104,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 105,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 106,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
] as any;
export const businessPackages = buinessPackageLicense.filter((item) => item.type === 'packages');
export const businessLicenses = buinessPackageLicense.filter((item) => item.type === 'license');

export const coachPackageLicense: any[] = [
  // Business Packages
  {
    id: 1,
    type: 'coachpackages',
    discount: '30% Off',
    backgroundColor: '#E4E5EB',
    packageName: 'Diamond Coaching Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Diamond Coaching Package. In which you could able to get 30% off on these products if you buy in bulk',
    executiveLicenses: '1',
    managerLicenses: '10',
    staffLicenses: '100',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 2,
    type: 'coachpackages',
    discount: '25% Off',
    backgroundColor: '#F0CD95',
    packageName: 'Gold Coaching Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Diamond Coaching Package. In which you could able to get 30% off on these products if you buy in bulk',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 3,
    type: 'coachpackages',
    discount: '15% Off',
    backgroundColor: '#D6D8E2',
    packageName: 'Silver Coaching Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Diamond Coaching Package. In which you could able to get 30% off on these products if you buy in bulk',
    executiveLicenses: '1',
    managerLicenses: '5',
    staffLicenses: '80',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 4,
    type: 'coachpackages',
    discount: '20% Off',
    backgroundColor: '#FEDDA3',
    packageName: 'Bronze Coaching Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Diamond Coaching Package. In which you could able to get 30% off on these products if you buy in bulk',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },

  // Licenses
  {
    id: 101,
    type: 'coachlicense',
    category: 'Client',
    licenseTitle: 'EQ360 Professional CLIENT License with Team Code',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 102,
    type: 'coachlicense',
    category: 'Client',
    licenseTitle: 'EQ360 Professional CLIENT License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 103,
    type: 'coachlicense',
    category: 'Coach',
    licenseTitle: 'EQ360 Professional COACH License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
] as any;
export const coachPackages = coachPackageLicense.filter((item) => item.type === 'coachpackages');
export const coachLicenses = coachPackageLicense.filter((item) => item.type === 'coachlicense');

export const tabsButtonData = {
  '1': [
    {
      id: '1',
      type: 'packages',
      titleButton: 'Business Packages',
      buttonDesc: 'Leaders can create and assess teams, including their own evaluation',
    },
    {
      id: '2',
      type: 'license',
      titleButton: 'Business Professionals & Teams',
      buttonDesc: ' Team members can self-assess or assess their colleagues.',
    },
  ],
  '2': [
    {
      id: '3',
      type: 'packages',
      titleButton: 'Coach Packges',
      buttonDesc: ' Coaches can create and assess groups or individuals.',
    },
    {
      id: '4',
      type: 'license',
      titleButton: 'Coach License',
      buttonDesc: ' Clients can self-assess and can also receive reviews from a third party.',
    },
  ],
  '3': [
    {
      id: '5',
      type: 'educator',
      titleButton: 'Educator',
      buttonDesc: 'Assess and review all students in your class/classes',
    },
    {
      id: '6',
      type: 'principal',
      titleButton: 'Principal',
      buttonDesc:
        'Review results of all students within your school (cannot take assessment on students)',
    },
    {
      id: '7',
      type: 'district',
      titleButton: 'District Staff',
      buttonDesc:
        'Review results and assess students or classes created by educator in multiple schools (cannot create classes)',
    },
    {
      id: '8',
      type: 'school',
      titleButton: 'School Package',
      buttonDesc: 'Create in bulk Principal, District Staff, Educator and Student',
    },
  ],
} as any;

export const EqTestInstructions = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      desc: 'sys.assessmentInstructions.understandEmotions',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 2,
      desc: 'sys.assessmentInstructions.setGoals',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
    {
      id: 3,
      desc: 'sys.assessmentInstructions.feelEmpathy',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 4,
      desc: 'sys.assessmentInstructions.maintainRelationship',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 5,
      desc: 'sys.assessmentInstructions.makeDescision',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 6,
      desc: 'sys.assessmentInstructions.stayMotivated',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
  ];
};

export const EqTestPreAssessment = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      desc: 'Which language is primarily spoken in your home?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'sys.selectLanguage.english', label: 'English (US)' },
        { value: 'sys.selectLanguage.arabic', label: 'Arabic' },
        { value: 'sys.selectLanguage.chinese', label: 'Chinese' },
        { value: 'sys.selectLanguage.french', label: 'French(/Creole)' },
        { value: 'sys.selectLanguage.hindi', label: 'Hindi' },
        { value: 'sys.selectLanguage.italian', label: 'Italian' },
        { value: 'sys.selectLanguage.japanese', label: 'Japanese' },
        { value: 'sys.selectLanguage.korean', label: 'Korean' },
        { value: 'sys.selectLanguage.polish', label: 'Polish' },
        { value: 'sys.selectLanguage.portuguese', label: 'Portuguese' },
        { value: 'sys.selectLanguage.russian', label: 'Russian' },
        { value: 'sys.selectLanguage.spanish', label: 'Spanish' },
        { value: 'sys.selectLanguage.tagalog', label: 'Tagalog' },
        { value: 'sys.selectLanguage.vietnamese', label: 'Vietnamese' },
        { value: 'sys.selectLanguage.other', label: 'Other' },
        { value: 'sys.selectLanguage.prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
    {
      id: 2,
      desc: 'What is your marital status?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'sys.selectMaritalStatus.single', label: 'Single or never married' },
        { value: 'sys.selectMaritalStatus.married', label: 'Married or domestic partnership' },
        { value: 'sys.selectMaritalStatus.divorced', label: 'Divorced' },
        { value: 'sys.selectMaritalStatus.widowed', label: 'Widowed' },
        { value: 'sys.selectMaritalStatus.separated', label: 'Separated' },
        { value: 'sys.selectMaritalStatus.prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
  ];
};

export const eqTestPreAssessmentSelect = {
  '1': [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
  ],
  '2': [
    { value: 'high_school', label: 'High School' },
    { value: 'professional_certificate', label: 'Professional Certificate' },
    { value: 'associate_degree', label: 'Associate Degree' },
    { value: 'bachelor_degree', label: "Bachelor's Degree" },
    { value: 'master_degree', label: "Master's Degree" },
    { value: 'doctoral_degree', label: 'Doctoral Degree' },
    { value: 'postdoctoral', label: 'Postdoctoral' },
    { value: 'trade_school', label: 'Trade School' },
    { value: 'some_college', label: 'Some College' },
    { value: 'none', label: 'None' },
  ],
  '3': [
    { value: 'united_states', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'united_kingdom', label: 'United Kingdom' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'italy', label: 'Italy' },
    { value: 'spain', label: 'Spain' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Japan' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'south_africa', label: 'South Africa' },
    { value: 'nigeria', label: 'Nigeria' },
  ],
} as any;

export const eqQuestionRadioButton = [
  {
    value: '1',
    key: 'never',
    greenWidth: '30px',
    greenHeight: '30px',
    whiteWidth: '10px',
    whiteHeight: '10px',
    label: ' Never',
  },
  {
    value: '2',
    key: 'rarely',
    greenWidth: '25px',
    greenHeight: '25px',
    whiteWidth: '9px',
    whiteHeight: '9px',
    label: 'Rarely',
  },
  {
    value: '3',
    key: 'sometimes',
    greenWidth: '20px',
    greenHeight: '20px',
    whiteWidth: '8px',
    whiteHeight: '8px',
    label: 'Sometimes',
  },
  {
    value: '4',
    key: 'often',
    greenWidth: '25px',
    greenHeight: '25px',
    whiteWidth: '9px',
    whiteHeight: '9px',
    label: 'Ofter',
  },
  {
    value: '5',
    key: 'always',
    greenWidth: '30px',
    greenHeight: '30px',
    whiteWidth: '10px',
    whiteHeight: '10px',
    label: ' Always',
  },
];

export const eqRangeBasedQuestions = [
  {
    id: 1,
    question: 'I can identify what emotions I am feeling at any given time.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 2,
    question: 'I communicate my thoughts clearly without misinterpretation.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 3,
    question: 'When dilemmas arise, I identify the source of the issue.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 4,
    question: 'I pursue things with passion.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 5,
    question: 'I disagree with what others say about what my personality is like.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 6,
    question:
      'I have acted out of emotion or assumptions before thinking about the consequences of my behavior.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 7,
    question: 'I understand what behaviors are appropriate based on the environment I am in.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 8,
    question: 'I evaluate the potential consequences of the actions I consider taking.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 9,
    question: 'I do things without needing to be reminded by others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 10,
    question: 'I believe in myself, my abilities, and my value as a person.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 11,
    question:
      'I find myself working or putting effort into things that do not have a clear purpose.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 12,
    question: 'I do not find friendships or relationships in general beneficial for me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 13,
    question: 'I consider my well-being when I make decisions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 14,
    question: 'I persevere in the face of obstacles to long-term and meaningful goals.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 15,
    question: 'I can identify and describe my automatic thoughts.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 16,
    question: 'I find myself getting distracted or tuning out when a person is speaking to me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 17,
    question: 'When dilemmas arise, I hypothesize and analyze possible solutions to the issue.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 18,
    question: 'My work or personal life feel monotonous or uninspiring.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 19,
    question: 'I genuinely do well at what I believe I am good at.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 20,
    question: 'I feel too embarrassed or nervous to ask for help when I need it.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 21,
    question:
      'I accept responsibility and the potential consequences of my actions before and after taking action.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 22,
    question: 'I step forward from the group to guide us in the direction of a common goal.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 23,
    question: 'I am uncertain about what the future holds for me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 24,
    question: 'I appreciate the practice of pursuing goals, not just the outcomes of them.',
    always: 'Almost Always',
    never: 'Almost Never',
  },

  {
    id: 25,
    question: 'I work well with others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 26,
    question: `I consider others' well-being when I make decisions.`,
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 27,
    question: 'I try again when unsuccessful.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 28,
    question: 'I know what I value or think is important.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 29,
    question: 'I speak up for myself.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 30,
    question: 'When dilemmas arise, I solve them constructively.',
    always: 'Almost Always',
    never: 'Almost Never',
  },

  {
    id: 31,
    question: 'I feel apathetic or indifferent when I begin most tasks at home or work',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 32,
    question: 'I am aware of my limits and challenges in knowledge and ability.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 33,
    question: 'I help others when they are in need.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 34,
    question: 'I reflect on the consequences of my actions and how they affect myself and others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 35,
    question:
      'No matter how hard I work, I believe that I continue to be stuck and dissatisfied where I am.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 36,
    question: 'I have many unfinished projects or commitments.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 37,
    question: 'I find myself in situations where consensus or compromises are rarely reached.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 38,
    question: 'I consider ethical responsibilities when I make decisions',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 39,
    question: 'I put in more effort when pursuing my goals becomes challenging.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 40,
    question: 'I am aware of how my automatic thoughts and emotions influence my behavior.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 41,
    question:
      'I actively pursue learning new skills to help myself manage my thoughts and emotions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 42,
    question:
      'I encourage others to share their thoughts and feelings to contribute to discussions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 43,
    question: 'I make constructive choices based on ethics, safety, and social context.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 44,
    question: 'I am motivated to do or create to a degree of extraordinary quality.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 45,
    question: 'My attitudes and preferences are reflected in my behaviors.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 46,
    question:
      'I multi-task to a level that I get distracted and have difficulty finishing what I started.    ',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 47,
    question:
      'I avoid community involvement, professional gatherings, or other social activities even when they can benefit my personal and/ or career growth.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 48,
    question:
      'I use the consequences of my actions from the past to guide my future decision-making.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 49,
    question: 'I believe that there is little I can do to change my current situation.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 50,
    question: 'I organize, make arrangements, and plan in advance.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 51,
    question:
      'I feel disrespected often, and as a result, I have a difficult time showing respect for others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 52,
    question: 'I do not find teamwork useful in my career or personal development. ',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 53,
    question: 'I respect my immediate environment, nature, and the planet when I make decisions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 54,
    question: 'I adjust my goals and effort realistically when faced with insurmountable barriers.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
];

export const scenarioBasedQuestions = [
  {
    id: 1,
    scenario: `I am at a social gathering that is somewhat crowded. A guest seems to be intoxicated and has walked by my chair twice, shoving me each time. They say, "I'm sorry", each time but shove me more forcefully the next time and keep walking.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: 'Feel angry and push them back.',
      },
      {
        id: 2,
        option: 'Feel angry and yell at them.',
      },
      {
        id: 3,
        option: 'Feel angry but decide to help them since they are intoxicated.',
      },
      {
        id: 4,
        option: 'Feel angry and go to the host for assistance.',
      },
      {
        id: 5,
        option: 'Feel angry and say nothing.',
      },
    ],
  },
  {
    id: 2,
    scenario: `My new neighbor moved in next door, and I noticed that they use a wheelchair. However, I also noticed that their home does not have a ramp by the front door. One day as I am taking the groceries out of my car, I notice them struggling to get in the doorway.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Surprise them by building a ramp the next day.',
      },
      {
        id: 2,
        option: ' Introduce myself, ask them if I can help them enter and help them make a ramp.',
      },
      {
        id: 3,
        option: ' Ignore them and enter my home.',
      },
      {
        id: 4,
        option: ' Help them enter their house.',
      },
      {
        id: 5,
        option: 'Go home and research how I can support someone in a wheelchair.',
      },
    ],
  },
  {
    id: 3,
    scenario: `One afternoon, one of my coworkers has an idea to play a prank on one of the new interns. All of the coworkers agree with the plan, and I am asked to do something that I know will embarrass the intern.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Go along with the prank even though I am uncomfortable with it.',
      },
      {
        id: 2,
        option: ' Tell them no and ignore what they are going to do.',
      },
      {
        id: 3,
        option: '  Go and quietly tell the office manager.',
      },
      {
        id: 4,
        option: '  Do what my coworkers ask of me and ignore the feelings of the intern.',
      },
      {
        id: 5,
        option: `Tell them no and also try to convince them that it's wrong to pick on the intern.`,
      },
    ],
  },
  {
    id: 4,
    scenario: `I was laid off and am having a difficult time paying my rent. I am in danger of being evicted. My family gives me a call, not knowing the situation.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Pretend like everything is okay and converse with them normally.',
      },
      {
        id: 2,
        option: ' Lie to them about how great work is and how I will receive a promotion soon.',
      },
      {
        id: 3,
        option:
          ' Talk to a family member and explain my situation, hoping they volunteer any help or advice.',
      },
      {
        id: 4,
        option: ` Tell them I was laid off but don't tell them that I will be evicted soon. I'd hate to worry them.`,
      },
      {
        id: 5,
        option: ` Talk to a close family friend, and ask them to keep my situation a secret from my family so that they will not worry.`,
      },
    ],
  },
  {
    id: 5,
    scenario: `I am in a team project at work in the midst of the workday. A few of my coworkers who are not on my team but in the same workspace keep showing each other pictures on their phones of their weekend. My team has a deadline coming up.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option:
          ' Try my best to focus on my task but look over a few times to see what they are looking at.',
      },
      {
        id: 2,
        option: '  Go over to my coworkers and ask them if I can see the pictures as well.',
      },
      {
        id: 3,
        option: '  Tell my manager that the coworkers are distracting my team from our task.',
      },
      {
        id: 4,
        option: ` Try my best to focus on the task but eventually decide to move my team to a different location.`,
      },
      {
        id: 5,
        option: `  Ignore them and ask my team to stay focused so that we can finish our task.`,
      },
    ],
  },
  {
    id: 6,
    scenario: `There is a new coworker at my workplace. Each morning they have been walking into the office looking upset and sitting by themself in the company cafeteria.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Ignore them.',
      },
      {
        id: 2,
        option: ' Make fun of them with my coworkers since they are always alone.',
      },
      {
        id: 3,
        option: '   Ask them to join us at our next happy hour.',
      },
      {
        id: 4,
        option: ` Introduce myself and start a private conversation about how they are adjusting to the new company.`,
      },
      {
        id: 5,
        option: ` Speak with our manager about my observations of the new coworker.`,
      },
    ],
  },
  {
    id: 7,
    scenario: `I am feeling anxious about a work deadline.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Decide to not think about it until the last minute because I will get it done.',
      },
      {
        id: 2,
        option: `Find ways to delegate my work to my coworkers so I don't have to do as much work.`,
      },
      {
        id: 3,
        option: ` Have trouble sleeping at night because I can't stop thinking about the tasks I need to complete.`,
      },
      {
        id: 4,
        option: ` Reach out to my manager or supervisor and share all of my worries about finishing the project.`,
      },
      {
        id: 5,
        option: ` Remain calm and find a strategy to keep me on track.`,
      },
    ],
  },
  {
    id: 8,
    scenario: `I have heard from my co-workers that it is possible to exaggerate on our overtime to receive greater compensation since our supervisors do not check our timesheets.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Decide that it is okay to add a few hours of overtime each pay period.',
      },
      {
        id: 2,
        option: ` Don't say anything and pretend like I didn't hear anything from my coworkers.`,
      },
      {
        id: 3,
        option: ` I would tell them they should reconsider, and that it's important to be honest with our work.`,
      },
      {
        id: 4,
        option: ` Consider adding a few more hours, but in the end, recognize it is not ethical.`,
      },
      {
        id: 5,
        option: `  Without implicating anyone, communicate with coworkers and higher-up the importance of accountability for our work and timesheets`,
      },
    ],
  },
  {
    id: 9,
    scenario: `I am moving to a new apartment, but I cannot afford to hire movers. I have some large furniture and several boxes, but I know I cannot move everything on my own. My friends have offered to help.
What would you most likely do in this situation?`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Refuse their offer because I do not want to burden them.',
      },
      {
        id: 2,
        option:
          ' Tell them I really appreciate the offer and am happy to help them with anything they may need in the future.',
      },
      {
        id: 3,
        option:
          ' Accept their offer to help me move all of my things and have them over for dinner once settled in.',
      },
      {
        id: 4,
        option: `  Accept their offer but feel guilty for taking up their time.`,
      },
      {
        id: 5,
        option: `  Tell them I have hired movers. I wouldn't want them to know about my financial situation.`,
      },
    ],
  },
  {
    id: 10,
    scenario: `The company I work for has laid off several people in my division. As a consequence, I am expected to complete tasks I am not familiar with and I am not paid to do. I am feeling stressed and demoralized.`,
    question: 'What would you most likely do during this time?',
    options: [
      {
        id: 1,
        option: ' Find activities I enjoy and talk with a friend about how I have been feeling.',
      },
      {
        id: 2,
        option: ` Work as hard as I can knowing that I can't change the situation.`,
      },
      {
        id: 3,
        option: ' Call my friends to vent.',
      },
      {
        id: 4,
        option: ' Go to the gym everyday.',
      },
      {
        id: 5,
        option:
          ' Drink every night so that I do not have to think about my job until the next morning.',
      },
    ],
  },
  {
    id: 11,
    scenario: `I am invited to my co-worker's home for a potluck. I am especially picky with my food, but I noticed there are a lot of foods I cannot recognize, especially the dishes that were brought by my coworker.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Show my disgust for different smells and only eat the foods I am familiar with.',
      },
      {
        id: 2,
        option: ` Tell them that I am allergic to certain foods so I only have to eat the food I brought.`,
      },
      {
        id: 3,
        option: `Try a little bit of everyone's dishes even though I normally don't like new foods.`,
      },
      {
        id: 4,
        option: ` Try a little bit of everyone's dishes, ask questions about the dishes, and ask for recipes.`,
      },
      {
        id: 5,
        option: ' Try 1 or 2 new dishes that look appetizing and the dish I brought.',
      },
    ],
  },
  {
    id: 12,
    scenario: `While seated at a restaurant, a server spills a glass of wine onto my lap. The server is shocked and immediately apologizes profusely. I am shocked and angry.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option:
          ' Immediately get up and demand the server to pay for my dry cleaning and get the manager so that I can complain.',
      },
      {
        id: 2,
        option: ` Yell and throw my napkin at the server.`,
      },
      {
        id: 3,
        option: ` Remain calm and accept the apology. Although I am upset, I know that it was an accident.`,
      },
      {
        id: 4,
        option: ' Get up and walk out of the restaurant.',
      },
      {
        id: 5,
        option: ` Say it's okay, but give them horrible reviews online.`,
      },
    ],
  },
  {
    id: 13,
    scenario: `A group of friends and I decide to go on a hike. We decide to pick a path that has the best view. After a long hike up, we realize that the entrance to the viewpoint is closed, and there is a sign warning of unsafe conditions due to inclimate weather the week before. All of my friends want to continue going down the path, despite the warning. They say that those signs are always present but nothing to worry about.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Tell them I will wait for them to come back.',
      },
      {
        id: 2,
        option: ` Be worried about my safety but I would keep going with my friends.`,
      },
      {
        id: 3,
        option: ` Search for another route that would also have a nice view and share that it's not worth risking our safety.`,
      },
      {
        id: 4,
        option: ' Feel excited for the challenge and go for it.',
      },
      {
        id: 5,
        option: `  Start going down the path with them, and then if I see that it is too dangerous to continue, I would turn back.`,
      },
    ],
  },
  {
    id: 14,
    scenario: `My manager has given me a bad evaluation even though I feel like I have put in extra hours and worked really hard this year. I also helped the company improve their sales. My poor evaluation will prevent me from getting a bonus I feel I deserve.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Go home and cry.',
      },
      {
        id: 2,
        option: ` Ignore the evaluation and decide to work harder so that the manager cannot ignore my hard work when it comes time for the next evaluation.`,
      },
      {
        id: 3,
        option: ` Ask my co-worker to speak with the manager and ask them why I was evaluated poorly.`,
      },
      {
        id: 4,
        option: '  Speak with my manager and ask why I was marked down on my evaluation.',
      },
      {
        id: 5,
        option: `Go to the CEO of the company and complain about my manager and the unfair evaluation.`,
      },
    ],
  },
  {
    id: 15,
    scenario: `I notice a person at the park that appears to be exhibiting extreme emotional and mental distress.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Call the Crisis Hotline for my area and ask what should be done.',
      },
      {
        id: 2,
        option: ` Walk over to the distressed person and handle the situation on my own.`,
      },
      {
        id: 3,
        option: ` Call the police and stick around to ensure it is handled properly.`,
      },
      {
        id: 4,
        option: ' Call my friend who is a social worker and ask her what I should do.',
      },
      {
        id: 5,
        option: ` Call the police and leave the park, knowing that they will handle the situation.`,
      },
    ],
  },
  {
    id: 16,
    scenario: `I am on a crowded train after work. Some people are sleeping, and some people are working next to me. I get a call from a friend who I haven't talked to in a while and have had trouble setting up a time to chat with.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Talk to them since it will be difficult to find another time to chat.',
      },
      {
        id: 2,
        option: ` Let them know I will call back as soon as I get home since I am on the train with other people.`,
      },
      {
        id: 3,
        option: ` Talk to them really quietly while glancing at the other passengers to make sure I am not bothering them.`,
      },
      {
        id: 4,
        option: ' Try to find another section of the train that is not as crowded.',
      },
      {
        id: 5,
        option: `  Talk loudly while laughing at my friend's stories.`,
      },
    ],
  },
  {
    id: 17,
    scenario: `On my commute back home from work on the train, I see a group of adults harassing another person on the train. There are many bystanders but everyone ignores what is happening to the victim. I am feeling uncomfortable with the situation.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: 'Step in and start to fight the group of adults.',
      },
      {
        id: 2,
        option: ` Ignore it and continue to look at my phone.`,
      },
      {
        id: 3,
        option: ` Move to another train car. `,
      },
      {
        id: 4,
        option: ' Ask the group to stop and ask others to help.',
      },
      {
        id: 5,
        option: ` Call the police or security on the train.`,
      },
    ],
  },
  {
    id: 18,
    scenario: `I witnessed a coworker being verbally harassed by others because of the color of their skin. The coworker complains to the manager about what is happening to them. The manager does not do anything about it.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ` Stay quiet since I don't want to put myself in trouble and lose my job.`,
      },
      {
        id: 2,
        option: ` Talk to my manager and express my disappointment in them for not helping.`,
      },
      {
        id: 3,
        option: ` Ask the co-worker to consider leaving the company so that they don't experience bullying by the other co-workers. `,
      },
      {
        id: 4,
        option:
          '  Speak to those who are verbally harassing the co-worker about how inappropriate their actions are.',
      },
      {
        id: 5,
        option: `  Advise the bullied employee to speak to HR and offer to be a witness to the bullying.`,
      },
    ],
  },
];

export const EqTestPostAssessment = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      type: 'checkbox',
      desc: 'What is your race?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'asian', label: 'Asian' },
        { value: 'black-or-of-African-descent', label: 'Black or of African descent' },
        { value: 'indigenous-Peoples', label: 'Indigenous Peoples' },
        { value: 'latinx-or-Hispanic-American', label: 'Latinx or Hispanic American' },
        {
          value: 'native-Hawaiian-or-Other-Pacific-Islander',
          label: 'Native Hawaiian or Other Pacific Islander',
        },
        { value: 'white', label: 'White' },
        { value: 'other', label: 'Other' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
    {
      id: 2,
      type: 'radio',
      desc: 'What is your sex?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
  ];
};

export const assessmentSurvey = [
  {
    id: 1,
    areas: 'Areas of ',
    areasfrequency: 'Strength',
    emotions: ' Optimistic Outlook',
  },
  {
    id: 2,
    emotions: ' Social Engagement',
  },
  {
    id: 3,
    emotions: ' Enthusiasm',
  },
  {
    id: 4,
    areas: 'Area that needs ',
    areasfrequency: 'IMPROVEMENT',
    emotions: ' Internal Regulation',
  },
];

export const eqAssessmentSurveyItems = {
  '1': [
    { value: 'do-you-agree', label: 'Do you agree' },
    { value: 'disagree', label: 'Disagree' },
    { value: 'somewhat-disagree', label: 'Somewhat Disagree' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'somewhat-agree', label: 'Somewhat Agree' },
    { value: 'agree', label: 'Agree' },
  ],
};

export const reportButtonsItems = {
  '1': [
    {
      id: 1,
      title: 'ONE PAGER REPORT',
    },
    {
      id: 2,
      title: 'FULL REPORT',
    },
  ],
  '2': [
    {
      id: 3,
      title: 'Help',
    },
    {
      id: 4,
      title: 'Refer a Friend',
    },
    {
      id: 5,
      title: 'Dashboard',
    },
  ],
};
