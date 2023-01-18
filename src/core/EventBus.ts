import EventEmitter from 'events';
import TypedEmitter from 'typed-emitter';
import { EventTypes } from '@/types/event-bus.types';

export default new EventEmitter() as TypedEmitter<EventTypes>;
