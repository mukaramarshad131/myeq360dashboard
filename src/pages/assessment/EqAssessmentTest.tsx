import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/card';
import { EqTestInstructions } from '@/projectData';
import { useThemeToken } from '@/theme/hooks';

interface EqTestInstructionsItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
}

function EqAssessmentTest() {
  const { t } = useTranslation();
  const themeToken = useThemeToken();
  const navigate = useNavigate();
  const handleBegin = () => {
    navigate('/eqPreAssessment');
  };
  return (
    <div className="p-5">
      <h1 className="mb-10 text-center text-2xl">{t('sys.assessmentInstructions.welocmeText')}</h1>
      <p className="mb-4 text-base">{t('sys.assessmentInstructions.questionsAsked')}</p>
      <Row gutter={[16, 16]} justify="center">
        {EqTestInstructions().map((data: EqTestInstructionsItem) => (
          <Col lg={8} md={12} span={24} key={data.id}>
            <Card
              style={{
                height: '100%',
                padding: 20,
                borderRadius: '10px',
                color: '#595757',
                background: '#ECF5FE',
              }}
            >
              <p>{t(data.desc)}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="mt-4 text-base">{t('sys.assessmentInstructions.rightAnswer')}</p>
      <div className=" mt-16 flex items-center justify-center">
        <button
          className="font-mediumtext-black m-auto flex w-1/4 items-center justify-center rounded-lg px-4 py-2 shadow-none md:m-0"
          style={{ backgroundColor: themeToken.colorPrimary, color: '#fff' }}
          onClick={handleBegin}
        >
          <span className="ml-2  font-normal">{t('sys.assessmentInstructions.begin')}</span>
        </button>
      </div>
    </div>
  );
}

export default EqAssessmentTest;
