import { QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Row, Select } from 'antd';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import { assessmentSurvey, eqAssessmentSurveyItems } from '@/projectData';

const handleChange = (value: string) => {};
function AssessmentSurvey() {
  const navigate = useNavigate();

  const handleResult = () => {
    navigate('/singlePageReport');
  };
  return (
    <div
      className="flex flex-col gap-3"
      style={{
        textAlign: 'center',
        width: '80%',
        maxWidth: 1200,
        margin: '0 auto',
        color: '#595959',
        paddingBottom: '20px',
      }}
    >
      {' '}
      <p
        style={{
          backgroundColor: '#3D9176',
          color: 'white',
          padding: '7px',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        Pre-Assessment Completed!
      </p>
      <p className="text-center">{t('sys.survey.congratulationText')}</p>
      <p className="text-2xl text-[#595757]">{t('sys.survey.agreeWithResult')}</p>
      <Row gutter={16}>
        <Col
          span={24}
          lg={24}
          style={{ border: '1px solid gray', borderRadius: '8px', padding: 20 }}
        >
          {assessmentSurvey.map((data) => {
            return (
              <>
                <p className="mt-5 text-xl text-[#595959]">
                  {data?.areas}
                  <span className=" font-semibold text-[#3C4E6C]">{data?.areasfrequency}</span>
                </p>
                <p className="text-normal mb-1 ml-10 mt-5 text-left font-semibold text-[#302F2C]">
                  {t(`sys.survey.${data?.emotions}`)}
                </p>
                <div className="flex flex-row items-center gap-3">
                  <QuestionCircleOutlined style={{ fontSize: 30, color: '#AAAAAA' }} />
                  <Select
                    defaultValue="Do you Agree?"
                    style={{ width: '100%', textAlign: 'left', color: '#595757' }}
                    onChange={handleChange}
                    options={eqAssessmentSurveyItems['1']}
                  />
                </div>
              </>
            );
          })}
          <p className="mb-8 mt-8 text-left text-xs text-[#302F2C]">
            <span className="font-bold"> {t('sys.survey.recommendation')}:</span>
            {t('sys.survey.selfManagement')}
          </p>
          <p className=" text-left text-xs text-[#302F2C]">{t('sys.survey.selfRegulation')}</p>
          <p
            className="mb-10 mt-10 cursor-pointer text-xl text-[#3B4970]"
            onClick={() => window.open('https://myeq360.com/')}
          >
            {t('sys.survey.selActivities')}
          </p>
        </Col>
      </Row>
      <button
        className="font-mediumtext-black flex w-1/4 items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
        style={{ backgroundColor: '#3D9176', color: '#fff', padding: 7, margin: 'auto' }}
        onClick={handleResult}
      >
        <span className="ml-2 text-base font-normal">{t('sys.survey.detailResults')}</span>
      </button>
    </div>
  );
}

export default AssessmentSurvey;
