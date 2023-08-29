import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {RestService} from "./services/rest.service";

export const countriesResolver: ResolveFn<string[]> = () => {
  return inject(RestService).getCountries();
};

export const namesResovler: ResolveFn<string[]> = () => {
  return inject(RestService).getNames();
};
