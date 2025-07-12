
import { Home, Grid3X3, Activity, User } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Grid3X3 },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "account", label: "Account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "text-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : ""}`} />
              <span className={`text-xs font-medium ${isActive ? "text-green-600" : ""}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
