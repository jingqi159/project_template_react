import React from 'react';

// 合作伙伴数据
const partners = [
  { id: 1, name: '天津工业大学', image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=University%20logo%20Tianjin%20Polytechnic%20University&sign=d11991d05ebddde351dc4a2c9b0ca743" },
  { id: 2, name: '中科院纳米研究所', image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Research%20institute%20logo%20Chinese%20Academy%20of%20Sciences%20Nano&sign=340eeff7b936f012af65ee367a14a42d" },
  { id: 3, name: '天津养老院协会', image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Elderly%20care%20association%20logo%20Tianjin&sign=8184def0e74547b96abf9d6ac22d14a9" },
  { id: 4, name: '医疗健康联盟', image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Healthcare%20alliance%20logo%20medical%20association&sign=290a3475cd81e214e307889d85d09421" },
];

const PartnerSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">合作伙伴</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            我们与众多知名机构和企业建立了紧密的合作关系，共同推动智能养老事业的发展
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-32 w-32 mb-4 overflow-hidden rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;