import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"


function LogIn() {

    return (
      <>
        
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login using your email address and password</CardDescription>
          </CardHeader>

          <CardContent>
            
          </CardContent>

          <CardFooter>
            <Button variant="outline">Login</Button>
          </CardFooter>
        </Card>

      </>
    )
  }
  
  export default LogIn
  