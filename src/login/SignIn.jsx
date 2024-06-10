import '../App.css';
import '../index.css';
import Photo from '../Doctor.png';

import { Label } from "@radix-ui/react-label";
import { Button } from "../components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <>
            <div className="w-full bg-[#E7F0FF] lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[100vh]">
                <div className="bg-[#0471A6] lg:flex lg:flex-col lg:w-full lg:justify-between lg:items-center ">
                    <p className='text-center mt-12 text-3xl font-semibold leading-relaxed'>Book Your <span className='text-white'>Appointment</span><br />Online.</p>
                    <img src={Photo} className=' bg-cover h-[550px]' />
                </div>
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[400px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>

                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    required />
                            </div>
                            <Button type="submit" className="w-full bg-[#0471A6]">
                                Login
                            </Button>
                        </div>
                        <div className="text-center text-sm mt-[-20px]">
                            Don&apos;t have an account? <Link to={'/'} className="font-semibold text-[#0471A6]">SignUp</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;