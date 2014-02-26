/// <reference path="../definitions/jquery.d.ts" />

module showv {
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
        $el:       JQuery;

        constructor(options: IViewCreateOptions = {}) {
            this.ensureOptions(options);
            this.ensureElemens();
            this.delegateEvents();
        }

        private ensureOptions(options: IViewCreateOptions): View {
            this.tagName   = options.tagName || 'div';
            this.className = options.className || '';
            this.id        = options.id || '';
            this.delegate  = (options.delegate == null) ? true : options.delegate;
            return this;
        }
        private ensureElemens(): View {
            this.$el = $('<' + this.tagName + '>');   
            return this;
        }

        delegateEvents(events?: Object): View {
            this.events = events || {};
            $.map(this.events, (eventFunction, eventNameAndSelector) => {
                console.log(this);
            });
            return this;
        }
        /*
        private splitEventAndSelector(eventNameAndSelector: string): IEventSelectorPair {

        }
        */

        render(): View {
            return this;
        }
    }
}
