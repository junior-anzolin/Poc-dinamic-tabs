import { Subject } from 'rxjs';

export interface ITabCore {
  label: string;
  component: any;
  data?: any;
}

export class TabSubject extends Subject<ITabCore> {
  _value!: ITabCore;

  constructor(value: ITabCore) {
    super();

    this.subscribe((value) => (this._value = value));
    this.next(value);
  }

  get component() {
    return this._value.component;
  }

  get data() {
    return this._value.data ?? {};
  }

  get label() {
    return this._value.label;
  }
}
