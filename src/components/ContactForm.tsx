import React, { useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('感谢您的留言，我们会尽快与您联系！');
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('提交失败，请稍后再试');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">联系我们</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            如果您对我们的产品或服务有任何疑问，欢迎随时与我们联系
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">联系方式</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <i className="fa-solid fa-map-marker-alt text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">公司地址</h4>
                  <p className="text-gray-600 dark:text-gray-300">天津市南开区科技园创新大厦A座15层</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <i className="fa-solid fa-phone text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">联系电话</h4>
                  <p className="text-gray-600 dark:text-gray-300">022-12345678</p>
                  <p className="text-gray-600 dark:text-gray-300">138-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <i className="fa-solid fa-envelope text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">电子邮箱</h4>
                  <p className="text-gray-600 dark:text-gray-300">info@jingqitech.com</p>
                  <p className="text-gray-600 dark:text-gray-300">sales@jingqitech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <i className="fa-solid fa-clock text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">工作时间</h4>
                  <p className="text-gray-600 dark:text-gray-300">周一至周五: 9:00 - 18:00</p>
                  <p className="text-gray-600 dark:text-gray-300">周六: 9:00 - 12:00</p>
                </div>
              </div>
            </div>
            
            {/* 地图占位 */}
            <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">地图加载中...</p>
              </div>
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Office%20building%20map%20Tianjin%20science%20park&sign=d6329f44cf9c856041decd37e4759f54" 
                alt="公司位置地图" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
          
          {/* 联系表单 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">发送留言</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",
                    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
                    "hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  电子邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",
                    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
                    "hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                  placeholder="请输入您的电子邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",
                    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
                    "hover:border-gray-400 dark:hover:border-gray-500"
                  )}
                  placeholder="请输入您的联系电话（选填）"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all",
                    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
                    "hover:border-gray-400 dark:hover:border-gray-500 resize-none"
                  )}
                  placeholder="请输入您的留言内容"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center",
                  isSubmitting 
                    ? "bg-blue-400 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                )}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    发送中...
                  </>
                ) : (
                  <>
                    <i className="fa-paper-plane mr-2"></i>
                    发送留言
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;