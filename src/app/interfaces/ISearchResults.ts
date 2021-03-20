import { IMovie } from "./IMovie";

export interface ISearchResults {
    page: number;
    results: IMovie[];
    total_results: number;
    total_pages: number;    
}