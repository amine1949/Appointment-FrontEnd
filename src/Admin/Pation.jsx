import Header from "./Header";
import * as React from "react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"




import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"





const users = [
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632548304"
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632548304",
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632548304",
    },
]






const blodTypes = [
    {
        value: "o+",
        label: "O+",
    },
    {
        value: "o-",
        label: "O-",
    },
    {
        value: "a+",
        label: "A+",
    },
    {
        value: "a-",
        label: "A-",
    },
    {
        value: "b+",
        label: "B+",
    },
    {
        value: "b-",
        label: "B-",
    },
]


const Pation = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [date, setDate] = React.useState(Date)
    const [date1, setDate1] = React.useState(Date)
    return (
        <>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

                <Header />

                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="flex flex-col items-left px-10">
                        <h1 className="font-semibold text-3xl my-10">Pations List</h1>

                        <div className="text-right w-full my-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-[#50b3fa] hover:bg-[#6FC3FF]">Add Pation</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[1200px]">
                                    <DialogHeader>
                                        <DialogTitle>Add New Pation</DialogTitle>
                                        <DialogDescription>

                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="firstname" className="text-left">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id="firstname"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="lastname" className="text-left">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id="lasttname"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="cin" className="text-left">
                                                    CIN
                                                </Label>
                                                <Input
                                                    id="cin"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="dateOfBirth" className="text-left">
                                                    Date of Birth
                                                </Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[280px] justify-start text-left font-normal",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="address" className="text-left">
                                                    Address
                                                </Label>
                                                <Input
                                                    id="address"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="phone" className="text-left">
                                                    Phone
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="maladie" className="text-left">
                                                    Maladie
                                                </Label>
                                                <Input
                                                    id="maladie"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="Gender" className="text-left">
                                                    Gender
                                                </Label>
                                                <RadioGroup defaultValue="male" className="flex">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="male" id="r1" />
                                                        <Label htmlFor="r1">Male</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="famele" id="r2" />
                                                        <Label htmlFor="r2">Female</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="password" className="text-left">
                                                    Blod Type
                                                </Label>
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-[200px] justify-between"
                                                        >
                                                            {value
                                                                ? blodTypes.find((blodType) => blodType.value === value)?.label
                                                                : "Blod Type..."}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[200px] p-0">
                                                        <Command>
                                                            <CommandList>
                                                                <CommandEmpty></CommandEmpty>
                                                                <CommandGroup>
                                                                    {blodTypes.map((blodType) => (
                                                                        <CommandItem
                                                                            key={blodType.value}
                                                                            value={blodType.value}
                                                                            onSelect={(currentValue) => {
                                                                                setValue(currentValue === value ? "" : currentValue)
                                                                                setOpen(false)
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    value === blodType.value ? "opacity-100" : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {blodType.label}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="status" className="text-left">
                                                    Status
                                                </Label>
                                                <Input
                                                    id="status"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="dateOfBirth" className="text-left">
                                                    Appointment Date
                                                </Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[280px] justify-start text-left font-normal",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date1 ? format(date1, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date1}
                                                            onSelect={setDate1}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="allergies" className="text-left">
                                                    Some Allergies
                                                </Label>
                                                <Input
                                                    id="status"
                                                    defaultValue=""
                                                    className="col-span-3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 py-4">

                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Add Pation</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <Table className="bg-white rounded">

                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.user}>
                                        <TableCell className="font-medium">{user.firstname}</TableCell>
                                        <TableCell>{user.lastname}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell className="text-right">


                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="" className="mx-4">Edit</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Edit profile</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="firstname" className="text-left">
                                                                First Name
                                                            </Label>
                                                            <Input
                                                                id="firstname"
                                                                defaultValue={user.firstname}
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="lastname" className="text-left">
                                                                Last Name
                                                            </Label>
                                                            <Input
                                                                id="lastname"
                                                                defaultValue={user.lastname}
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="phone" className="text-left">
                                                                Phone
                                                            </Label>
                                                            <Input
                                                                id="phone"
                                                                defaultValue={user.phone}
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button type="submit">Edit User</Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>


                                            <Button variant="destructive" className="w-[100px]">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                            </TableFooter>
                        </Table>


                        <Pagination className="mt-4">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" >
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Pation;