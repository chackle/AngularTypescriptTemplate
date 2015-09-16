module app.home {
	
	export class HomeController {
		static $inject: Array<string> = ['$state', '$rootScope'];
		
		constructor(private $state: any, private $rootScope: any) {
			//Construct
		}
	}
}