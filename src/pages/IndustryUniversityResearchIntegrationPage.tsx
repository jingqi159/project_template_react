import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

// 图片URL常量
const HEADER_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=University%20industry%20research%20collaboration%20innovation&sign=ecddce3b070c73928dfcbdf9ca3552b3";
const UNIVERSITY_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=University%20research%20laboratory%20advanced%20technology&sign=f0e1052d871fd395b19238dff0086321";
const COMPANY_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Company%20technology%20research%20and%20development%20team&sign=a670f4c145ff50b7a46c237e5ddf1288";
const CLINICAL_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Clinical%20research%20and%20elderly%20care%20facility&sign=ff5e915741517fad17a95a32dbffacd7";
const COLLABORATION_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Technology%20collaboration%20between%20university%20and%20industry&sign=aad002b65550928e1b1ca19307ed8ee2";
const INNOVATION_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Innovation%20process%20technology%20transfer%20commercialization&sign=2ac73d4d68c039e45e9154de52fc0701";
const SUCCESS_STORY_IMAGE = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Success%20story%20of%20university-industry%20collaboration&sign=5a56d1413be72ebe08ed2dd280097fc5";

// 合作案例数据
const successStories = [
  {
    id: 1,
    title: "智能防摔护颈马甲的研发与转化",
    description: "通过与天津工业大学纺织学院的深度合作，成功将类华夫格结构针织复合材料应用于智能防摔护颈马甲，大幅提升了产品的防护性能和舒适性。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Smart%20anti-fall%20vest%20technology%20development&sign=3b4656aad08fbf3a16043ecd55a3754e"
  },
  {
    id: 2,
    title: "碳纤维立体编织技术的产业化应用",
    description: "依托企业自研技术转化中心，将实验室的碳纤维立体编织技术成功转化为工业化生产工艺，降低了生产成本，提高了生产效率。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Carbon%20fiber%203D%20weaving%20technology%20industrialization&sign=2fc58bfd75bfefd3098d23fe9dfb9f3a"
  },
  {
    id: 3,
    title: "材料适老化仿真系统的开发",
    description: "联合多学科团队开发的材料适老化仿真系统，能够模拟老年人使用场景下材料的老化过程，为产品设计提供科学依据。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Material%20aging%20simulation%20system%20technology&sign=ce1d7564be50e1f0a8c258046ec17446"
  }
];

const IndustryUniversityResearchIntegrationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // 添加平滑滚动效果
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <Layout>
      {/* 顶部标题和图片 */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={HEADER_IMAGE} 
          alt="产学研融合创新" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white text-center p-6"
          >
            产学研融合体系
          </motion.h1>
        </div>
      </div>
      
      {/* 导航标签 */}<div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar space-x-8 py-4">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap font-medium text-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              融合概览
            </button>
            <button 
              onClick={() => setActiveTab('process')}
              className={`whitespace-nowrap font-medium text-lg transition-colors ${
                activeTab === 'process' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              运作流程
            </button>
            <button 
              onClick={() => setActiveTab('stories')}
              className={`whitespace-nowrap font-medium text-lg transition-colors ${
                activeTab === 'stories' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              成功案例
            </button>
            <button 
              onClick={() => setActiveTab('advantages')}
              className={`whitespace-nowrap font-medium text-lg transition-colors ${
                activeTab === 'advantages' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              融合优势
            </button>
          </div>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 融合概览 */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">产学研深度融合模式</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                构建"高校科研-企业转化-临床验证"三维立体创新体系，实现从基础研究到产品应用的全链条创新
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* 高校科研 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={UNIVERSITY_IMAGE} 
                    alt="高校科研" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <i className="fa-solid fa-university text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">高校科研</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    与天津工业大学纺织科学与工程学院合作，依托国家"双一流"纺织学科团队，专注于新型材料在养老场景的应用研究。
                  </p>
                </div>
              </motion.div>
              
              {/* 企业转化 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={COMPANY_IMAGE} 
                    alt="企业转化" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <i className="fa-solid fa-industry text-green-600 dark:text-green-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">企业转化</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    企业自研技术转化中心负责将实验室成果转化为可量产的产品，突破技术瓶颈，实现产业化应用。
                  </p>
                </div>
              </motion.div>
              
              {/* 临床验证 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={CLINICAL_IMAGE} 
                    alt="临床验证" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                    <i className="fa-solid fa-hospital text-orange-600 dark:text-orange-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">临床验证</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    与本地养老院建立合作关系，通过临床验证确保产品能够真正满足老年人的实际需求，持续优化产品体验。
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">融合模式解析</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    天津鲸鳍科技有限公司通过建立"高校科研-企业转化-临床验证"的三维立体产学研融合体系，实现了从基础研究到产品应用的全链条创新。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    这种创新模式打破了传统产学研合作的壁垒，形成了科研、产业、应用的良性循环，使科技成果能够快速转化为实际产品，满足市场需求。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    通过持续的产学研合作，鲸鳍科技不仅提升了自身的技术创新能力，也为智能养老行业的发展注入了新的活力。
                  </p>
                </div>
                <div className="md:w-1/2 h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={COLLABORATION_IMAGE} 
                    alt="产学研合作" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* 运作流程 */}
        {activeTab === 'process' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">产学研融合运作流程</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                从基础研究到产品应用的完整创新链条
              </p>
            </div>
            
            {/* 流程图部分 */}
            <div className="mb-16 overflow-x-auto">
              <div 
                className="relative bg-yellow-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl overflow-visible min-w-[900px]"
                style={{ height: '600px' }}
              >
                {/* 天津工业大学纺织科学与工程学院技术研发 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-8 top-16 w-56 h-32 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-lg shadow-md flex flex-col items-center justify-center p-2 text-center"
                  style={{ fontSize: '16px' }}
                >
                  <div className="h-16 w-full mb-2 overflow-hidden rounded-md">
                    <img 
                      src={UNIVERSITY_IMAGE} 
                      alt="天津工业大学研究" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">天津工业大学<br />纺织科学与工程学院技术研发</span>
                </motion.div>

                {/* 防摔系统结构增强 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-[40%] top-16 w-48 h-16 bg-purple-100 dark:bg-purple-900 border-2 border-purple-300 dark:border-purple-700 rounded-lg shadow-md flex items-center justify-center text-center"
                  style={{ fontSize: '16px' }}
                >
                  <span className="font-medium">防摔系统结构增强</span>
                </motion.div>

                {/* 企业自研技术转化 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute left-8 top-[40%] w-48 h-32 bg-green-100 dark:bg-green-900 border-2 border-green-300 dark:border-green-700 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
                  style={{ fontSize: '16px' }}
                >
                  <div className="h-20 w-full mb-2 overflow-hidden rounded-md">
                    <img 
                      src={COMPANY_IMAGE} 
                      alt="企业研发" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">企业自研技术转化</span>
                </motion.div>

                {/* 材料适老化仿真 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute left-[40%] top-[40%] w-48 h-16 bg-purple-100 dark:bg-purple-900 border-2 border-purple-300 dark:border-purple-700 rounded-lg shadow-md flex items-center justify-center text-center"
                  style={{ fontSize: '16px' }}
                >
                  <span className="font-medium">材料适老化仿真</span>
                </motion.div>

                {/* 临床验证合作 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="absolute left-8 top-[68%] w-48 h-32 bg-orange-100 dark:bg-orange-900 border-2 border-orange-300 dark:border-orange-700 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
                  style={{ fontSize: '16px' }}
                >
                  <div className="h-20 w-full mb-2 overflow-hidden rounded-md">
                    <img 
                      src={CLINICAL_IMAGE} 
                      alt="临床验证" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">临床验证合作</span>
                </motion.div>

                {/* 医疗级精准监测 */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute left-[40%] top-[68%] w-48 h-16 bg-purple-100 dark:bg-purple-900 border-2 border-purple-300 dark:border-purple-700 rounded-lg shadow-md flex items-center justify-center text-center"
                  style={{ fontSize: '16px' }}
                >
                  <span className="font-medium">医疗级精准监测</span>
                </motion.div>

                {/* 智能养老产品 */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute right-8 top-[40%] w-52 h-24 bg-blue-200 dark:bg-blue-800 border-2 border-blue-400 dark:border-blue-600 rounded-lg shadow-md flex items-center justify-center text-center"
                  style={{ fontSize: '18px' }}
                >
                  <span className="font-bold">智能养老产品</span>
                </motion.div>

                {/* 连接线和技术文本 */}
                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {/* 类华夫格结构针织复合材料 */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                    d="M 200 40 Q 350 40, 450 40" 
                    stroke="blue" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-blue)"
                  />
                  <text 
                    x="325" 
                    y="30" 
                    textAnchor="middle" 
                    fontSize="14" 
                    fill="blue"
                    className="font-medium"
                  >
                    类华夫格结构针织复合材料
                  </text>

                  {/* 碳纤维立体编织技术 */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    d="M 200 150 Q 350 150, 450 150" 
                    stroke="green" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-green)"
                  />
                  <text 
                    x="325" 
                    y="140" 
                    textAnchor="middle" 
                    fontSize="14" 
                    fill="green"
                    className="font-medium"
                  >
                    碳纤维立体编织技术
                  </text>

                  {/* 本地养老院合作 */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.0, duration: 1 }}
                    d="M 200 260 Q 350 260, 450 260" 
                    stroke="orange" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-orange)"
                  />
                  <text 
                    x="325" 
                    y="250" 
                    textAnchor="middle" 
                    fontSize="14" 
                    fill="orange"
                    className="font-medium"
                  >
                    本地养老院合作
                  </text>

                  {/* 防摔系统到智能养老产品的连接线 */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    d="M 600 40 Q 750 40, 800 150" 
                    stroke="purple" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-purple)"
                  />
                  
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1 }}
                    d="M 600 150 H 800" 
                    stroke="purple" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-purple)"
                  />
                  
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1 }}
                    d="M 600 260 Q 750 260, 800 150" 
                    stroke="purple" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead-purple)"
                  />
                  
                  {/* 箭头定义 */}
                  <defs>
                    <marker 
                      id="arrowhead-blue" 
                      markerWidth="10" 
                      markerHeight="7" 
                      refX="9" 
                      refY="3.5" 
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
                    </marker>
                    <marker 
                      id="arrowhead-green" 
                      markerWidth="10" 
                      markerHeight="7" 
                      refX="9" 
                      refY="3.5" 
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="green" />
                    </marker>
                    <marker 
                      id="arrowhead-orange" 
                      markerWidth="10" 
                      markerHeight="7" 
                      refX="9" 
                      refY="3.5" 
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="orange" />
                    </marker>
                    <marker 
                      id="arrowhead-purple" 
                      markerWidth="10" 
                      markerHeight="7" 
                      refX="9" 
                      refY="3.5" 
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="purple" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">创新流程解析</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    我们的产学研融合体系形成了一个完整的创新闭环，从高校的基础研究，到企业的技术转化，再到临床的实际验证，每一个环节都紧密相连，相互促进。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    通过类华夫格结构针织复合材料、碳纤维立体编织技术等核心技术的研发和应用，我们成功开发出了智能穿戴设备、智能防摔护颈马甲等一系列创新产品。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    这种全链条的创新模式，使我们能够快速响应市场需求，持续推出符合老年人实际需求的智能养老产品。
                  </p>
                </div>
                <div className="md:w-1/2 h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={INNOVATION_IMAGE} 
                    alt="创新流程" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* 成功案例 */}
        {activeTab === 'stories' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">产学研融合成功案例</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                探索我们通过产学研合作取得的创新成果
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {successStories.map((story, index) => (
                <motion.div 
                  key={story.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={story.imageUrl} 
                      alt={story.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{story.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">案例启示</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    这些成功案例充分证明了产学研融合模式的有效性和创新性。通过与高校和研究机构的紧密合作，我们能够快速获取前沿技术和专业知识，加速产品研发和创新。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    同时，企业的产业化能力和市场洞察力，确保了科研成果能够快速转化为实际产品，满足市场需求。而临床验证环节，则保证了产品的实用性和可靠性。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    未来，我们将继续深化产学研合作，拓展合作领域，探索更多前沿技术在养老场景的应用，为老年人提供更加智能、安全、舒适的养老产品和服务。
                  </p>
                </div>
                <div className="md:w-1/2 h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={SUCCESS_STORY_IMAGE} 
                    alt="成功案例" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* 融合优势 */}
        {activeTab === 'advantages' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">产学研融合优势</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                解析产学研深度融合带来的多方面价值和竞争优势
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 技术创新优势 */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-lightbulb text-blue-600 dark:text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">技术创新优势</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">依托高校科研资源，获取前沿技术和创新思路</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">多学科交叉融合，解决复杂技术问题</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">持续的技术迭代和创新能力</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">专利技术保护，构建技术壁垒</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* 产业化优势 */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-rocket text-green-600 dark:text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">产业化优势</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">高效的科技成果转化机制</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">成熟的生产工艺和质量控制体系</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">市场需求导向的产品开发策略</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">规模化生产降低成本，提高市场竞争力</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* 临床验证优势 */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-stethoscope text-orange-600 dark:text-orange-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">临床验证优势</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">真实场景下的产品测试和验证</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">专业医疗机构的指导和支持</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">基于用户反馈的产品持续优化</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">提高产品的实用性和可靠性</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* 社会价值优势 */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-users text-purple-600 dark:text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">社会价值优势</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">解决老龄化社会面临的实际问题</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">提高老年人的生活质量和安全保障</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">减轻家庭和社会的养老负担</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700 dark:text-gray-300">推动智能养老产业的发展和创新</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">未来展望</h3>
                <p className="text-xl opacity-90">深化产学研融合，共创智能养老美好未来</p>
              </div>
              <p className="text-center opacity-90 max-w-3xl mx-auto">
                天津鲸鳍科技有限公司将继续深化产学研融合，拓展合作领域，加强与高校、研究机构和医疗机构的合作，
                探索更多前沿技术在养老场景的应用，为老年人提供更加智能、安全、舒适的养老产品和服务，
                为构建智慧健康养老生态系统贡献力量。
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default IndustryUniversityResearchIntegrationPage;