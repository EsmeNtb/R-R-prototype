import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  SearchIcon,
  ShoppingBagIcon,
} from "lucide-react"

export function Topbar_Item() {
  return (
    <Menubar className = "w-72">
      <MenubarMenu>  
        <MenubarTrigger>Collections</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Ex aequo</MenubarItem>
            <MenubarItem>Delirium</MenubarItem>
            <MenubarItem>Lapsus</MenubarItem>
            <MenubarItem>Dolus</MenubarItem>
            <MenubarItem>Spes</MenubarItem>
            <MenubarItem>Noncens</MenubarItem>
            <MenubarItem>Abdico</MenubarItem>
            <MenubarItem>Valere</MenubarItem>
            <MenubarItem>Absolvere</MenubarItem>
            <MenubarSeparator></MenubarSeparator>
            <MenubarItem>View all collections</MenubarItem>
          </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Jewelry</MenubarTrigger>
        <MenubarContent>
            <MenubarItem>Rings</MenubarItem>
            <MenubarItem>Earrings</MenubarItem>
            <MenubarItem>Necklaces</MenubarItem>
            <MenubarItem>Bracelets</MenubarItem>
            <MenubarItem>Bangles</MenubarItem>
            <MenubarItem>Pendants</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
        
      <MenubarMenu>  
        <MenubarTrigger>Accesories</MenubarTrigger>
        <MenubarContent>
            <MenubarItem>Hats</MenubarItem>
            <MenubarItem>Hair Accesories</MenubarItem>          
            <MenubarItem>Belts</MenubarItem>
        </MenubarContent>

      </MenubarMenu>

      <MenubarMenu>
        <MenubarItem>About</MenubarItem>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger className = "gap-3">
          <SearchIcon className = "h-4 w-4">Search</SearchIcon>
          </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className = "gap-3">
          <ShoppingBagIcon className = "h-4 w-4">Shopping</ShoppingBagIcon>
          </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
