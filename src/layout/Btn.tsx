import { useState } from 'react';
import { Home, BookOpen, MessageSquare, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NAVER_FORM_URL = 'https://naver.me/FPUpoxRk';

export const Btn = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsExpanded(false);
  };

  const handleExternalLink = () => {
    window.open(NAVER_FORM_URL, '_blank');
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative flex flex-col-reverse items-end gap-4">
        {isExpanded && (
          <>
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 animate-fade-in"
              aria-label="홈으로 이동"
            >
              <Home className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleNavigation('/desc')}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 hover:bg-purple-600  text-white shadow-lg transition-all duration-300 animate-fade-in"
              aria-label="설명 페이지로 이동"
            >
              <BookOpen className="w-6 h-6" />
            </button>

            <button
              onClick={handleExternalLink}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600  text-white shadow-lg transition-all duration-300 animate-fade-in"
              aria-label="피드백 작성"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
          </>
        )}

        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-xl transition-all duration-300"
          aria-label={isExpanded ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isExpanded ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
};
