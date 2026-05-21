"use client"

import as React from "react"

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
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
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
          <MenubarGroup>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
        
      <MenubarMenu>  
        <MenubarTrigger>Accesories</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarItem>About</MenubarItem>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger>(Search)</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Shop Card</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
