import {Injectable} from "@angular/core";

@Injectable()
export class PopupService {
  private _header: string = '';
  private _body: string = '';
  private _show: boolean = false;

  public get header(): string { return this._header; }
  public get body(): string { return this._body; }
  public get isShow(): boolean { return this._show; }
  public show(body: string, header: string): void {
    this._header = header;
    this._body = body;
    this._show = true;
  }
  public close(): void {
    this._show = false;
  }
}
