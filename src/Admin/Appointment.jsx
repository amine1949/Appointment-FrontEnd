import Header from "./Header";
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

const appointments = [
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632435409",
        cin: "T335789",
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632435409",
        cin: "T335789",
    },
    {
        firstname: "Imran",
        lastname: "Zekhnoon",
        phone: "0632435409",
        cin: "T335789",
    },


]


const Appointment = () => {
    return (
        <>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

                <Header />

                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="flex flex-col items-center px-10">
                        <h1 className="font-semibold text-3xl my-10">Appointments List</h1>
                        <Table className="bg-white rounded">
                            <TableCaption>Appointments List</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>CIN</TableHead>
                                    <TableHead className=""></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {appointments.map((appointment) => (
                                    <TableRow key={appointment.firstname}>
                                        <TableCell className="font-medium">{appointment.firstname}</TableCell>
                                        <TableCell>{appointment.lastname}</TableCell>
                                        <TableCell>{appointment.phone}</TableCell>
                                        <TableCell>{appointment.cin}</TableCell>
                                        <TableCell className="text-right">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline">More Info</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[600px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Appointment Details</DialogTitle>
                                                        <DialogDescription>

                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 py-4 w-full">
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="name" className="text-left">
                                                                First Name :
                                                            </Label>
                                                            <p>
                                                                Imran
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Last Name :
                                                            </Label>
                                                            <p>
                                                                Zekhnoon
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                CIN :
                                                            </Label>
                                                            <p>
                                                                T538703
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Date of Birth :
                                                            </Label>
                                                            <p>
                                                                1990-01-01
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Address :
                                                            </Label>
                                                            <p>
                                                                Salam, rue 12, Appt 29
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Phone :
                                                            </Label>
                                                            <p>
                                                                0643934323
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Maladie :
                                                            </Label>
                                                            <p>
                                                                Some Disease
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Gender :
                                                            </Label>
                                                            <p>
                                                                M
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Blood Type :
                                                            </Label>
                                                            <p>
                                                                O+
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Status :
                                                            </Label>
                                                            <p>
                                                                Some Status
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Appointment Date :
                                                            </Label>
                                                            <p>
                                                                2024-06-10
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="username" className="text-left">
                                                                Some Allergies :
                                                            </Label>
                                                            <p>
                                                                2024-06-10
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <DialogFooter>

                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>

                            </TableFooter>
                        </Table>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Appointment;