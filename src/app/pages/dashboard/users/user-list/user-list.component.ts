import {Component, Injectable, Input, OnInit} from '@angular/core';
import {User} from "../users.component";
import {debounceTime, Observable, ReplaySubject, Subject, takeUntil} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

export const Tag: any = {
    0: 'green',
    1: 'cyan',
    2: 'blue',
    3: 'geekblue',
    4: 'purple',
    5: 'orange'
}


@Injectable()
export class RandomUserService {
    randomUserUrl = 'http://localhost:3000/api/sms';

    getUsers(
        pageIndex: number = 1,
        pageSize: number = 10,
        sortField: string,
        sortOrder: string,
        genders: string[]
    ): Observable<{}> {
        let params = new HttpParams()
            .append('page', `${pageIndex}`)
            .append('results', `${pageSize}`)
            .append('tc', sortField)
            .append('sortOrder', sortOrder);
        genders.forEach(gender => {
            params = params.append('gender', gender);
        });
        return this.http.get(`${this.randomUserUrl}`, {
            params
        });
    }

    constructor(private http: HttpClient) {
    }
}


@Component({
    selector: 'app-user-list',
    providers: [RandomUserService],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    private _destroyer$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private searchInput: Subject<any> = new Subject<any>();
    usersData: User[] = [];
    pageIndex = 1;
    pageSize = 5;
    total = 1;
    loading = true;
    sortValue: string | null = null;
    sortKey: string | null = null;

    searchGenderList: string[] = [];

    tag = Tag

    inputValue?: string;

    constructor(private randomUserService: RandomUserService, private router: Router) {
        this.searchData();
    }

    ngOnInit(): void {
        this.searchInput
            .pipe(takeUntil(this._destroyer$), debounceTime(250))
            .subscribe((query: any) => {
            if (query){
                this.usersData=this.usersData.filter((x:User)=>{
                    return x.name.toLowerCase().includes(query.toLowerCase()) || x.surname.toLowerCase().includes(query.toLowerCase()) || String(x.tc).includes(query)
                })
                console.log( this.usersData)
            }else{
                this.searchData();
            }
            });
    }

    onEdit() {

    }


    searchData(reset: boolean = false): void {
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.randomUserService
            .getUsers(this.pageIndex, this.pageSize, this.sortKey!, this.sortValue!, this.searchGenderList)
            .subscribe((data: any) => {
                this.usersData = data;
                this.loading = false;
                this.total = this.usersData.length;
            });
    }

    onClick(): void {
        this.router.navigate(['/', 'add']);
    }

    onInput(event: Event): void {
        const {value} = event.target as HTMLInputElement;
        this.searchInput.next(value);
    }

}
