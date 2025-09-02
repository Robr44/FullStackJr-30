import { RegisterComponent } from "./components/RegisterComponent"
import { LoginComponent } from "./components/LoginComponent"

//rafc
export const SessionView = () => {
  return (
    <div>
    Session
    <RegisterComponent />
    <LoginComponent/>
    </div>
  )
}