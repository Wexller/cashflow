import EventEmitter from 'events';
import TypedEmitter from 'typed-emitter';

export default new EventEmitter() as TypedEmitter<any>;
