import { CanActivate, Router,} from "@angular/router";
import { UserService} from "../../services/user.service";
import { inject } from "@angular/core";

// export class authGuard implements CanActivate {
//   constructor(private userService: UserService, private router: Router ) { }
//   canActivate() {
//     if(this.userService.isAuthenticated()){
//       return true;
//     }
//     this.router.navigate(['/login']);  // Redirect to login page if user is not authenticated.
//     return false;
//   }
// }



export function authGuard (){
  const userService = inject(UserService)
  const router = inject(Router)
  if (userService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
}
