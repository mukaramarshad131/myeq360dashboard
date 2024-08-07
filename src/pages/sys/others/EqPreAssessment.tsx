import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row, Select } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/card';
import { EqTestPreAssessment, EqTestPreAssessmentSelect } from '@/constants';

const notificationContent = (
  <div>
    <p
      style={{
        backgroundColor: '#00A76F',
        color: 'white',
        padding: '7px',
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      Pre-Assessment Completed!
    </p>
    <p className="p-3">
      You are about to be presented with a series of statements; you’ll just need to select the
      response corresponding to how frequently you believe that applies to you{' '}
      <span className="text-base font-semibold">
        (“Almost Never”, “Rarely”, “Sometimes”, “Often”, or “Almost Always”)
      </span>
      . There’s no time limit to complete the assessment but give yourself about 20 minutes to
      finish. If you need to take a break, you can resume at a later time but we suggest completing
      the assessment in one sitting.
    </p>
    <p className="p-3 text-base text-[crimson]">
      Upon finishing, you’ll receive a snapshot of your current SEL abilities
    </p>
  </div>
);

interface EqTestPreAssessmentItem {
  id: number;
  desc: string;
  bg: any;
  color: string;
  bg_toString_color: string;
  options: any;
}

const selectAge = <Select defaultValue="Select Age" options={EqTestPreAssessmentSelect['1']} />;
const selectEducation = (
  <Select
    defaultValue="Professional Certificate / License"
    options={EqTestPreAssessmentSelect['2']}
  />
);

const selectCountry = (
  <Select defaultValue="select Counrty" options={EqTestPreAssessmentSelect['3']} />
);

function EqPreAssessment() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
    setModalOpen(false);
    navigate('/eqAssessment');
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <div className="p-10">
      {' '}
      <Input size="large" addonAfter={selectAge} defaultValue="What is your age?" readOnly />
      <Input
        size="large"
        className="mb-5 mt-4 "
        addonAfter={selectEducation}
        defaultValue="What is the highest degree or level of education you have completed?"
        readOnly
      />
      <Row gutter={[16, 16]} justify="center" className="">
        {EqTestPreAssessment().map((data: EqTestPreAssessmentItem) => (
          <Col lg={24} md={24} span={24} key={data.id}>
            <Card
              style={{
                height: '100%',
                padding: 20,
                borderRadius: '10px',
                color: '#595757',
                background: '#ECF5FE',
              }}
            >
              <fieldset>
                <legend>{data.desc}</legend>
                <Row gutter={[16, 16]}>
                  {data.options.map((option: any) => (
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} span={24} key={data.id}>
                      <div className=" flex flex-row items-center" key={option.value}>
                        <input
                          className="mr-4"
                          type="radio"
                          id={option.value}
                          name={`question-${data.id}`}
                          value={option.value}
                        />
                        <label htmlFor={option.value}>{option.label}</label>
                      </div>
                    </Col>
                  ))}
                </Row>
              </fieldset>
            </Card>
          </Col>
        ))}
      </Row>
      <Input
        size="large"
        className="mt-3 "
        addonAfter={selectCountry}
        defaultValue="What country is your ZIP code in?"
        readOnly
      />
      <div className="mt-10 flex flex-row items-center justify-between">
        <p className=" text-xl">Demographic data is for research purposes only</p>

        <div
          onClick={() => setModalOpen(true)}
          className="relative h-12 w-12 rounded-full bg-green"
        >
          <ArrowRightOutlined
            style={{
              fontSize: '23px',
              color: '#fff',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
        <Modal
          width={720}
          title="Pre-Assessment"
          centered
          open={modalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button key="ok" type="primary" onClick={handleOk}>
              Lets Start EQ Assessment
            </Button>
          }
        >
          {notificationContent}
        </Modal>
      </div>
    </div>
  );
}

export default EqPreAssessment;
