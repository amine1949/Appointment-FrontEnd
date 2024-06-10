import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"



const LayoutAdmin = () => {
    function HomeIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )
    }

    function Appointment(props) {
        return (
            <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="none" />
                <g filter="url(#filter0_d_15_268)">
                    <path d="M3 8.26667V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V8.26667M3 8.26667V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V8.26667M3 8.26667H21" stroke="white" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter1_d_15_268)">
                    <path d="M7 2V5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter2_d_15_268)">
                    <path d="M17 2V5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter3_d_15_268)">
                    <path d="M18 11H16" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter4_d_15_268)">
                    <path d="M18 17H16" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter5_d_15_268)">
                    <path d="M13 11H11" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter6_d_15_268)">
                    <path d="M13 17H11" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter7_d_15_268)">
                    <path d="M8 11H6" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter8_d_15_268)">
                    <path d="M8 17H6" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter9_d_15_268)">
                    <path d="M18 14H16" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter10_d_15_268)">
                    <path d="M13 14H11" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <g filter="url(#filter11_d_15_268)">
                    <path d="M8 14H6" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" />
                </g>

            </svg>
        )
    }

    function User(props) {
        return (
            <svg {...props} width="203px" height="203px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g>
                <g id="SVGRepo_iconCarrier">
                    <circle cx="12" cy="6" r="4" stroke="#ffffff" stroke-width="1.536"></circle>
                    <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#ffffff" stroke-width="1.536" stroke-linecap="round"></path>
                </g>
            </svg>
        )
    }

    function Pation(props) {
        return (
            <svg {...props} viewBox="0 0 15 15" version="1.1" id="doctor" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.18">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M5.5,7C4.1193,7,3,5.8807,3,4.5l0,0v-2C3,2.2239,3.2239,2,3.5,2H4c0.2761,0,0.5-0.2239,0.5-0.5S4.2761,1,4,1H3.5
                        C2.6716,1,2,1.6716,2,2.5v2c0.0013,1.1466,0.5658,2.2195,1.51,2.87l0,0C4.4131,8.1662,4.9514,9.297,5,10.5C5,12.433,6.567,14,8.5,14
                        s3.5-1.567,3.5-3.5V9.93c1.0695-0.2761,1.7126-1.367,1.4365-2.4365C13.1603,6.424,12.0695,5.7809,11,6.057
                        C9.9305,6.3332,9.2874,7.424,9.5635,8.4935C9.7454,9.198,10.2955,9.7481,11,9.93v0.57c0,1.3807-1.1193,2.5-2.5,2.5S6,11.8807,6,10.5
                        c0.0511-1.2045,0.5932-2.3356,1.5-3.13l0,0C8.4404,6.7172,9.001,5.6448,9,4.5v-2C9,1.6716,8.3284,1,7.5,1H7
                        C6.7239,1,6.5,1.2239,6.5,1.5S6.7239,2,7,2h0.5C7.7761,2,8,2.2239,8,2.5v2l0,0C8,5.8807,6.8807,7,5.5,7 M11.5,9
                        c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.0523,9,11.5,9z">
                    </path>
                </g>
            </svg>
        )
    }

    function LogOut(props) {
        return (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#ffffff" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#ffffff" stroke-width="1.56" stroke-linecap="round"></path>
                </g>
            </svg>
        )
    }

    function PanelLeftIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 3v18" />
            </svg>
        )
    }

    function SearchIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        )
    }



    return (
        <>

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-background sm:flex bg-[#0471A6]">
                <nav className="flex flex-col items-center gap-8 px-2 sm:py-5 lg:mt-10">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={"/admin"}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <HomeIcon className="h-7 w-7 text-white" />
                                    <span className="sr-only">Dashboard</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={"/admin/appointment"}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <Appointment className="h-8 w-8" />
                                    <span className="sr-only">Appointment</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Appointment</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={"/admin/users"}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <User className="h-8 w-8" />
                                    <span className="sr-only">User</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">User</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={"/admin/pation"}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <Pation className="h-8 w-8" />
                                    <span className="sr-only">Pation</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Pation</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    prefetch={false}
                                >
                                    <LogOut className="h-8 w-8" />
                                    <span className="sr-only">LogOut</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">LogOut</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
        </>
    );
};

export default LayoutAdmin;