import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import PartnerSection from '@/components/PartnerSection';
import HistoryTimeline from '@/components/HistoryTimeline';
import ContactForm from '@/components/ContactForm';

// 图片URL常量
const BANNER_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20elderly%20care%20technology%20innovative%20solutions&sign=b41aca00d79957d253941c8bd4848201";
const PRODUCT_IMAGE_1 = "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Smart%20wearable%20device%20for%20elderly%20people%20smart%20diapers&sign=622e53233f9e2a80dbc9f984398fabf5";
const PRODUCT_IMAGE_2 = "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Smart%20anti-fall%20neck%20protector%20vest%20carbon%20fiber&sign=c102bfc3c9db5694f7977cda5c27276b";
const PRODUCT_IMAGE_3 = "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Smart%20vital%20sign%20monitoring%20system%20sensors&sign=a11ca5d387840d6dd00deca3a7c8e7ab";
const COMPANY_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Technology%20company%20office%20environment%20team%20collaboration&sign=8c35eb33c34b84ce8bd5d64e55fb874a";
const VISION_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Elderly%20people%20happy%20life%20smart%20technology%20care&sign=57833eaa8b710ae3246a1263bdeb790f";

const Home: React.FC = () => {
  // 添加平滑滚动效果
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // 产品数据
  const products = [
    {
      id: 1,
      title: "智能穿戴设备（老人智能纸尿裤）",
      description: "已完成多次迭代，初步具备了对于失能失智老人，排尿监控功能的实现，且有APP进行实时查看可授权多人看护。",
      imageUrl: PRODUCT_IMAGE_1,
      features: [
        "实时排尿监控功能",
        "手机APP远程查看",
        "多人看护授权管理",
        "仅为竞品市场售价50%",
        "亲肤材质，舒适体验"
      ]
    },
    {
      id: 2,
      title: "智能防摔护颈马甲",
      description: "通过碳纤维立体编织技术，重量更轻穿戴舒适，内置人体运动定位传感、人机交互传感器，实时监测识别老人身体姿态。",
      imageUrl: PRODUCT_IMAGE_2,
      features: [
        "碳纤维立体编织技术",
        "人体运动定位传感器",
        "实时姿态监测",
        "毫秒级气囊弹出保护",
        "轻量化设计，舒适穿戴"
      ]
    },
    {
      id: 3,
      title: "智能体征防摔预警系统",
      description: "将传感器贴片贴在老人皮肤上，通过肢体动作电压变化预判摔倒风险，并能够通过汗液传感器贴片、心电传感器贴片传递运动生物化学信号。",
      imageUrl: PRODUCT_IMAGE_3,
      features: [
        "摔倒风险预判功能",
        "汗液成分监测",
        "心电信号实时监测",
        "无线数据传输",
        "医疗级精准度"
      ]
    }
  ];

  return (
    <Layout>
      {/* 顶部横幅图片 */}
      <div className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        <img 
          src={BANNER_IMAGE} 
          alt="智能养老科技解决方案" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">天津鲸鳍科技有限公司</h1>
            <p className="text-xl md:text-3xl mb-8">科技为核以人为本，织就智能养老新图景</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/industry-university-research" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
              >
                探索产学研融合
              </Link>
              <Link 
                to="/products" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
              >
                了解我们的产品
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 公司简介部分 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">关于鲸鳍科技</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">公司简介</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                天津鲸鳍科技有限公司成立于2018年11月，总部位于天津市南开区，整合本地高校科研资源，与天津工业大学国家"双一流"纺织学科团队合作，依托数项专利著作专注于将新材料在养老场景的精准转化。
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                除核心养老产品外，鲸鳍与天津工业大学纺织学院建立战略合作产学研深度融合，整合天津工业大学尖端实验设备，共同推进新型车用碳纤维避震器，锂电池碳纤维保护壳等项目研发，突破轻量化与高强度技术瓶颈。
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                鲸鳍科技科技为核以人为本打造智能养老生态，通过新型复合材料与人机交互等技术实现无感监护，让科技更有温度更加关怀老人心理需求提供其健康生活。
              </p>
            </div>
            <div className="md:w-1/2 h-80 md:h-96 overflow-hidden rounded-xl shadow-lg order-1 md:order-2">
              <img 
                src={COMPANY_IMAGE} 
                alt="公司环境" 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* 公司愿景与使命 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={VISION_IMAGE} 
            alt="愿景背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">愿景与使命</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-eye text-blue-600 dark:text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">企业愿景</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                成为智能养老领域的领航者，通过科技创新让每位老年人都能享受有尊严、有品质的晚年生活
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-bullseye text-green-600 dark:text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">企业使命</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                以科技为核，以人为本，通过持续创新为老年人提供安全、舒适、智能的养老产品和服务
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fa-solid fa-heart text-purple-600 dark:text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">核心价值观</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                诚信、创新、关爱、责任，用科技传递温度，让养老更有尊严
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 核心产品部分 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">核心产品</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              安全三重守护，为老年人提供全方位的智能呵护
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                features={product.features}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              查看全部产品
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 发展历程 */}
      <HistoryTimeline />
      
      {/* 合作伙伴 */}
      <PartnerSection />
      
      {/* 联系我们 */}
      <ContactForm />
    </Layout>
  );
};

export default Home;