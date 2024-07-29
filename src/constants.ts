import glass_bag from '@/assets/images/glass/ic_glass_bag.png';
import glass_buy from '@/assets/images/glass/ic_glass_buy.png';
import glass_message from '@/assets/images/glass/ic_glass_message.png';
import glass_users from '@/assets/images/glass/ic_glass_users.png';
import { useThemeToken } from '@/theme/hooks';

export const IndStats = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      cover: glass_bag,
      title: 'Understanding Emotions',
      des: ' Gain insight into emotions for better self-awareness and decision-making.',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 2,
      cover: glass_users,
      title: 'Personal Growth',
      des: ' Develop resilience and adaptability to thrive in various life situations.',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
    {
      id: 3,
      cover: glass_buy,
      title: 'Effective Communication',
      des: ' Enhance interpersonal skills for clearer and more meaningful interactions.',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 4,
      cover: glass_message,
      title: 'Positive Relationships',
      des: ' Promote supportive environments and teamwork for greater success.',
      bg: theme.colorErrorTextActive,
      bg_toString_color: theme.colorErrorActive,
      color: theme.colorError,
    },
  ];
};

export const IndFaqData: any[] = [
  {
    id: 1,
    Q: 'q1',
    Ans: 'a1',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 2,
    Q: 'q2',
    Ans: 'a2',
    bg: '#CCF0F7',
    color: '#08979C',
  },
  {
    id: 3,
    Q: 'q3',
    Ans: 'a3',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 4,
    Q: 'q4',
    Ans: 'a4',
    bg: '#CCF0F7',
    color: '#08979C',
  },
  {
    id: 5,
    Q: 'q5',
    Ans: 'a5',
    bg: '#CCEBE1',
    color: '#008059',
  },
];

export const buinessPackageLicense: any[] = [
  // Business Packages
  {
    id: 1,
    type: 'packages',
    discount: '30% Off',
    backgroundColor: '#A2D6E3',
    packageName: 'Diamond Business Package',
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
    backgroundColor: '#BDC1E2',
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
  {
    id: 3,
    type: 'packages',
    discount: '15% Off',
    backgroundColor: '#FFB4AB',
    packageName: 'Premium Business Package',
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
    backgroundColor: '#F9D44C',
    packageName: 'Gold Business Package',
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
// export const combinedResults = [...businessPackages, ...businessLicenses];

export const TabsButtonData = {
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
      titleButton: 'Coach Packges',
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
      desc: 'Understand and manage emotions',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 2,
      desc: 'Set and achieve positive goals',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
    {
      id: 3,
      desc: ' Feel and show empathy for others',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 4,
      desc: 'Establish and maintain positive relationships',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 5,
      desc: 'Make responsible decisions',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 6,
      desc: 'Are motivated and stay motivated',
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
        { value: 'english', label: 'English' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'chinese', label: 'Chinese' },
        { value: 'french', label: 'French(/Creole)' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'italian', label: 'Italian' },
        { value: 'japanese', label: 'Japanese' },
        { value: 'korean', label: 'Korean' },
        { value: 'polish', label: 'Polish' },
        { value: 'portugese', label: 'Portugese' },
        { value: 'russian', label: 'Russian' },
        { value: 'spanish', label: 'Spanish' },
        { value: 'korean', label: 'Korean' },
        { value: 'tagalog', label: 'Tagalog' },
        { value: 'vietnamese', label: 'Vietnamese' },
        { value: 'other', label: 'Other' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
    {
      id: 2,
      desc: 'What is your marital status?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'single', label: 'Single or never married' },
        { value: 'married', label: 'Married or domestic partnership' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widowed', label: 'Widowed' },
        { value: 'separated', label: 'Separated' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
  ];
};

export const EqTestPreAssessmentSelect = {
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
