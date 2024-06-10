import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


const Header = () => {
    return (
        <>
            <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        to="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        to="/userLayout"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Home
                    </Link>
                    <Link
                        to="/userLayout/appointmentuser"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Appointment
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        AboutUs
                    </Link>
                    <Link
                        to="/userLayout/contact"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Contact
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <a
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </a>
                            <a href="#" className="hover:text-foreground">
                                Settings
                            </a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex sm:flex-initial">
                        <div className="mx-2">
                            <Button className="bg-[#0471A6] hover:bg-[#E7F0FF] hover:text-[#0471A6] hover:border-[#0471A6] hover:border-2 ">Login</Button>
                        </div>
                        <div className="">
                            <Button className="bg-[#E7F0FF] border-[#0471A6] border-2 text-[#0471A6] hover:bg-[#0471A6] hover:text-[#E7F0FF]">Register</Button>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    )
}

export default Header