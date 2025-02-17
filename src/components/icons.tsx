import { 
  Search, 
  Home, 
  Building2, 
  Shirt, 
  BusFront as Iron, 
  FolderKanban, 
  SprayCan as Spray, 
  Star, 
  BookmarkPlus,
  Menu,
  Bell,
  Calendar,
  User,
  MessageSquare,
  Settings
} from 'lucide-react';

export const Icons = {
  // Navigation and Search
  Search,
  Menu,
  Bell,
  
  // Services
  Home,
  Office: Building2,
  Washing: Shirt,
  Iron,
  Organization: FolderKanban,
  Disinfect: Spray,
  
  // User Interface
  Star,
  Bookmark: BookmarkPlus,
  Calendar,
  Profile: User,
  Message: MessageSquare,
  Settings,
};

export type IconKeys = keyof typeof Icons;