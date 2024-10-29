import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface AddUserDrawerProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AddUserDrawer({ isOpen, onOpenChange }: AddUserDrawerProps) {
  return (
    <Drawer 
      open={isOpen} 
      onOpenChange={onOpenChange}
      direction="right"
    >
      <DrawerTrigger asChild>
        <Button>Add User</Button>
      </DrawerTrigger>
      <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add New User</DrawerTitle>
            <DrawerDescription>
              Fill in the details to add a new user.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {/* Add form content here */}
          </div>
          <DrawerFooter>
            <Button>Save</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
