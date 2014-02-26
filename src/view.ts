module Showv {
    export interface IViewCreateOptions {
        tagName?:   string;
        className?: string;
        id?:        string;
        delegate?:  boolean;
    }
    export interface IEventSelectorPair {
        eventName: string;
        selector?: string;
    }
    export class View {

        tagName:   string = 'div';
        className: string = '';
        id:        string = '';
        delegate: boolean = true;

        events:    Object = {};

        constructor(options: IViewCreateOptions = {}) {
            this.ensureOptions(options);
            this.delegateEvents();
            console.log(this);
        }

        private ensureOptions(options: IViewCreateOptions) {
            this.tagName   = options.tagName || 'div';
            this.className = options.className || '';
            this.id        = options.id || '';
            this.delegate  = (options.delegate == null) ? true : options.delegate;
        }

        delegateEvents(events?: Object): View {
            this.events = events || {};
            /*
            _.map(this.events, (eventFunction, eventNameAndSelector) => {
            });
            */
            return this;
        }
        /*
        private splitEventAndSelector(eventNameAndSelector: string): IEventSelectorPair {

        }
        */
    }
}
