import React from 'react';

// 公司发展历程数据
const timelineData = [
  {
    year: "2018年",
    event: "天津鲸鳍科技有限公司成立",
    description: "总部位于天津市南开区，专注于智能养老领域的技术研发与产品创新"
  },
  {
    year: "2019年",
    event: "与天津工业大学建立战略合作",
    description: "整合本地高校科研资源，依托数项专利著作专注于将新材料在养老场景的精准转化"
  },
  {
    year: "2020年",
    event: "推出第一代智能穿戴设备",
    description: "完成多次迭代，初步具备了对于失能失智老人，排尿监控功能的实现"
  },
  {
    year: "2022年",
    event: "智能防摔护颈马甲研发成功",
    description: "通过碳纤维立体编织技术，重量更轻穿戴舒适，内置多种传感器实时监测老人身体姿态"
  },
  {
    year: "2024年",
    event: "智能体征防摔预警系统投入市场",
    description: "解决失智老人长期监护痛点，实现无感监护，让科技更有温度更加关怀老人心理需求"
  }
];

const HistoryTimeline: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">发展历程</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            鲸鳍科技的成长与发展轨迹
          </p>
        </div>
        
        <div className="relative">
          {/* 中心线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* 时间线内容 */}
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* 左侧内容 */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.year}</h3>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.event}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
              
              {/* 中间圆点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
              
              {/* 右侧空白 */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;