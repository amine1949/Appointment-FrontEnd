import '../App.css';
import '../index.css';
import Photo from '../Doctor.png';

import { Label } from "@radix-ui/react-label";
import { Button } from "../components/ui/button.jsx";
import { Input } from "@/components/ui/input";
import SignIn from './SignIn';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const goLogin = () => {
        navigate('/signin')
    }
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
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                        </div>
                        <div className="grid gap-6">
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
                                <Label htmlFor="username">UserName</Label>
                                <Input
                                    id="text"
                                    type="text"
                                    placeholder="Enter your Username"
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
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Confirmer Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Confirmer your Password"
                                    required />
                            </div>
                            <Button type="submit" className="w-full bg-[#0471A6] text-xl py-6">
                                Register
                            </Button>
                        </div>
                        <div className="text-center text-sm mt-[-20px]">
                            Don&apos;t have an account? <button onClick={goLogin} className="font-semibold text-[#0471A6]">Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;