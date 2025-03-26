import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu, User, LogOut } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b shadow-sm">
      {/* 좌측 - 로고 & 햄버거 버튼 */}
      <div className="flex items-center gap-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="p-4 space-y-4">
              <a href="#" className="block text-lg font-bold">Home</a>
              <a href="#" className="block text-lg font-bold">Products</a>
              <a href="#" className="block text-lg font-bold">Contact</a>
            </div>
          </SheetContent>
        </Sheet>

        <a href="/" className="text-xl font-bold hidden md:block no-underline text-inherit">My Brand</a>
      </div>

      {/* 중앙 - 네비게이션 메뉴 (Navigation Menu) */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:text-primary">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent  alignoffset={18} align="end" className="absolute left-0 p-2 bg-white shadow-md rounded-md origin-top">
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-md">New Arrivals</a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-md">Best Sellers</a>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-md">Categories</a>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:text-primary ">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* 우측 - 유저 프로필 (DropdownMenu) */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
