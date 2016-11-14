/**
 * Created by goran.pavlovski on 11/10/2016.
 */

import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/service/data.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IUsers} from "../shared/interfaces";

@Component({
    selector: 'user-details',
    template: require('./user-details.component.html'),
    styles: [require('./user-details.component.scss')]
})

export class UserDetailsComponent implements OnInit{

    user: IUsers;

    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(){

        this.route.params.subscribe((params: Params) => {
            //let id = +params['id'];
            this.dataService.getUser(params['id'])
                .subscribe((user: IUsers) => this.user = user);
        });


    }

    removeUser(){
        this.dataService.DeleteUser(this.user);
        this.router.navigate(['/users']);
    }





}

