import { CrownOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';

import goldExecutive from '@/assets/images/packages/gold-exe.png';
import Card from '@/components/card';
import { businessPackages } from '@/projectData';

function BusinessPackages() {
  return (
    <>
      <h1 className="p-5 text-center text-3xl font-semibold text-[#0092B3]">Business Packages</h1>
      <div className="mb-5 flex flex-wrap items-center justify-around gap-5">
        {businessPackages.map((data: any) => {
          return (
            <Card
              key={data.id}
              style={{ padding: '0px', height: 'auto', width: '330px' }}
              className="relative z-0 rounded bg-[#F3F4F5] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              <Badge.Ribbon
                text={data.discount}
                color="red"
                style={{ padding: 8 }}
                className="absolute top-[20px] z-10"
              />
              <div
                className="absolute left-[125px] top-[120px] z-10 flex h-[70px] w-[70px] items-center justify-center bg-[#D1D6DA]"
                style={{ borderRadius: '50%' }}
              >
                <CrownOutlined style={{ fontSize: 50, color: '#c9a112' }} />
              </div>
              <div
                style={{
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  paddingBottom: '80px',
                  background: data?.backgroundColor,
                  paddingTop: '25px',
                  clipPath: 'polygon(0 0,100% 0, 100% 71%, 0 100%)',
                }}
                className="flex w-full flex-col px-5 text-center"
              >
                <div className="mt-[37px] flex flex-col">
                  <span className="bold-1 text-xl"> {data.packageName}</span>
                  <span>
                    <del>{data.originalPrice}</del> -$75.00
                  </span>
                </div>
              </div>

              <div
                style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
                className=" bg-[#F3F4F5] p-3 py-5"
              >
                <p>
                  {data.description}
                  <ul className="mb-5 mt-5 text-[15px] font-semibold">
                    <li>{data.executiveLicenses}- Executive </li>
                    <li>{data.managerLicenses}- Manager</li>
                    <li>{data.staffLicenses}- Staff(Team Members )</li>
                  </ul>
                </p>

                <ul className="mt-3 font-semibold">
                  <li className="flex flex-col">
                    <div className="flex flex-row gap-1">
                      <img src={goldExecutive} alt="" width={30} height={30} />
                      <p>
                        {data.executiveLicenses} × EQ360 Business &nbsp;
                        <span className="font-bold">EXECUTIVE</span>&nbsp; License
                      </p>
                    </div>
                    <span className="text-right">
                      <del>({data.executiveLicensePrice}</del> -$75.00 )
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex flex-row gap-1">
                      <img src={goldExecutive} alt="" width={30} height={30} />
                      <p>
                        {' '}
                        {data.managerLicenses} × EQ360 Business &nbsp;
                        <span className="font-bold">MANAGER</span>&nbsp; License
                      </p>
                    </div>
                    <span className="text-right">
                      <del>({data.managerLicensePrice}</del> -$75.00 )
                    </span>
                  </li>

                  <li className="flex flex-col">
                    <div className="flex flex-row gap-1">
                      <img src={goldExecutive} alt="" width={30} height={30} />
                      <p>
                        {data.staffLicenses} × EQ360 Business &nbsp;
                        <span className="font-bold">Team Member</span>&nbsp; License
                      </p>
                    </div>
                    <span className="text-right">
                      <del>({data.staffLicensePrice}</del> -$75.00)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center p-5">
                {' '}
                <Button
                  style={{
                    background: data?.backgroundColor,
                    borderRadius: 10,
                    color: 'white',
                    fontSize: '18px',
                    padding: '20px 0px',
                  }}
                  className="w-3/4"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default BusinessPackages;
