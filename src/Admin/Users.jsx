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

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../components/ui/button";

const users = [
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        email: "imran.Zekhnoon@gmail.com",
        category: "User",
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        email: "imran.Zekhnoon@gmail.com",
        category: "Secreteur",
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        email: "imran.Zekhnoon@gmail.com",
        category: "Doctor",
    },
]




const categories = [
    {
        value: "pation",
        label: "Pation",
    },
    {
        value: "doctor",
        label: "Doctor",
    },
    {
        value: "secretary",
        label: "Secretary",
    }
]



const Users = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

                <Header />

                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="flex flex-col items-left px-10">
                        <h1 className="font-semibold text-3xl my-10">Users List</h1>
                        <div className="text-right w-full my-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-[#50b3fa] hover:bg-[#6FC3FF]">Add User</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add New User</DialogTitle>
                                        <DialogDescription>

                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
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
                                            <Label htmlFor="username" className="text-left">
                                                Username
                                            </Label>
                                            <Input
                                                id="username"
                                                defaultValue=""
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="email" className="text-left">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                defaultValue=""
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="password" className="text-left">
                                                Password
                                            </Label>
                                            <Input
                                                id="password"
                                                defaultValue=""
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="password" className="text-left">
                                                Role
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
                                                            ? categories.find((categorie) => categorie.value === value)?.label
                                                            : "Select Role..."}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                    <Command>
                                                        <CommandList>
                                                            <CommandEmpty></CommandEmpty>
                                                            <CommandGroup>
                                                                {categories.map((categorie) => (
                                                                    <CommandItem
                                                                        key={categorie.value}
                                                                        value={categorie.value}
                                                                        onSelect={(currentValue) => {
                                                                            setValue(currentValue === value ? "" : currentValue)
                                                                            setOpen(false)
                                                                        }}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                value === categorie.value ? "opacity-100" : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {categorie.label}
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Add User</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <Table className="bg-white rounded">

                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.user}>
                                        <TableCell className="font-medium">{user.firstname}</TableCell>
                                        <TableCell>{user.lastname}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.category}</TableCell>
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
                                                            <Label htmlFor="email" className="text-left">
                                                                Email
                                                            </Label>
                                                            <Input
                                                                id="email"
                                                                defaultValue={user.email}
                                                                className="col-span-3"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="email" className="text-left">
                                                                Role
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
                                                                            ? categories.find((categorie) => categorie.value === value)?.label
                                                                            : user.category}
                                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-[200px] p-0">
                                                                    <Command>
                                                                        <CommandList>
                                                                            <CommandEmpty></CommandEmpty>
                                                                            <CommandGroup>
                                                                                {categories.map((categorie) => (
                                                                                    <CommandItem
                                                                                        key={categorie.value}
                                                                                        value={categorie.value}
                                                                                        onSelect={(currentValue) => {
                                                                                            setValue(currentValue === value ? "" : currentValue)
                                                                                            setOpen(false)
                                                                                        }}
                                                                                    >
                                                                                        <Check
                                                                                            className={cn(
                                                                                                "mr-2 h-4 w-4",
                                                                                                value === categorie.value ? "opacity-100" : "opacity-0"
                                                                                            )}
                                                                                        />
                                                                                        {categorie.label}
                                                                                    </CommandItem>
                                                                                ))}
                                                                            </CommandGroup>
                                                                        </CommandList>
                                                                    </Command>
                                                                </PopoverContent>
                                                            </Popover>
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

export default Users
