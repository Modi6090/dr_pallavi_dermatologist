"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Calendar, 
  Image as ImageIcon, 
  FileText, 
  MessageSquare, 
  Settings,
  LogOut
} from "lucide-react";

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Blogs', href: '/admin/blogs', icon: FileText },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50/50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="flex h-16 items-center px-6 border-b border-gray-100">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="text-white font-bold text-sm">DP</span>
            </div>
            <span className="font-bold text-gray-900">Admin Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? "text-primary" : "text-gray-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
