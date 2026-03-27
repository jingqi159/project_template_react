import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      {/* 导航栏 */}
      <header className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">鲸鳍科技</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">首页</Link>
              <Link to="/industry-university-research" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">产学研融合</Link>
              <Link to="/products" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">产品中心</Link>
              <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">关于我们</Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">联系我们</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </button>
              
              {/* 移动端菜单按钮 */}
              <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* 主要内容区域 */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 页脚 */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">鲸鳍科技</h3>
              <p className="text-gray-600 dark:text-gray-300">
                科技为核以人为本，织就智能养老新图景
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">首页</Link></li>
                <li><Link to="/industry-university-research" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">产学研融合</Link></li>
                <li><Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">产品中心</Link></li>
                <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">关于我们</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fa-solid fa-map-marker-alt mr-2 text-blue-600 dark:text-blue-400"></i>
                  <span>天津市南开区</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone mr-2 text-blue-600 dark:text-blue-400"></i>
                  <span>022-12345678</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope mr-2 text-blue-600 dark:text-blue-400"></i>
                  <span>info@jingqitech.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <i className="fa-brands fa-weixin text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <i className="fa-brands fa-weibo text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <i className="fa-brands fa-youtube text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} 天津鲸鳍科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;