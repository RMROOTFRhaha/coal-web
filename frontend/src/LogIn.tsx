import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Input } from "./components/ui/input"


function LogIn() {

    return (
      <>
        
        <Card>
          <CardHeader>
            <CardTitle>Coal Login</CardTitle>
            <CardDescription>Login using your email address and password</CardDescription>
          </CardHeader>

          <CardContent>
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </CardContent>

          <CardFooter>
            <Button variant="outline">Login</Button>
          </CardFooter>
        </Card>

      </>
    )
  }
  
  export default LogIn
  