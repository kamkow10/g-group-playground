import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {RestService} from "../../core/services/rest.service";

export const countriesResolver: ResolveFn<string[]> = () => {
  return inject(RestService).getCountries();
};

export const namesResolver: ResolveFn<string[]> = () => {
  return inject(RestService).getNames();
};
