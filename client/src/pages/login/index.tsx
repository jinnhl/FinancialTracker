import {SignedIn, SignedOut, SignInButton, SignOutButton, SignUp, SignUpButton, UserButton} from '@clerk/clerk-react'

export const Login = () => {
    return (
    <div className="sign-in-container">
        <SignedOut>
            <SignUpButton mode="modal"/>
            <SignInButton mode="modal"/>
        </SignedOut>

        <SignedIn>
            <UserButton />
            <SignOutButton />
        </SignedIn>
    </div>
    )
}
